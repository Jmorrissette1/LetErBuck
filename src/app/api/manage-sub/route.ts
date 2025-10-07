// src/app/api/manage-sub/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { sanitizeManageSub } from "@/lib/sanitize";
import { ZodError } from "zod";

// Escape user-provided strings for HTML emails
const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export async function POST(req: NextRequest) {
  try {
    // 1) Enforce JSON requests
    const ct = req.headers.get("content-type") ?? "";
    if (!ct.includes("application/json")) {
      return NextResponse.json({ message: "Invalid content-type" }, { status: 415 });
    }

    // 2) Validate + sanitize incoming payload
    const raw = await req.json();
    const data = sanitizeManageSub(raw); // throws ZodError on invalid input

    // 3) Build plain-text + sanitized HTML bodies
    const textBody = [
      "Manage Subscription",
      "--------------------",
      `First Name: ${data.firstName}`,
      `Last Name: ${data.lastName}`,
      `Email: ${data.email}`,
      data.phone ? `Phone: ${data.phone}` : undefined,
      data.plateNum ? `License Plate Number: ${data.plateNum}` : undefined,
      data.sticker ? `Windshield Sticker Number: ${data.sticker}` : undefined,
      `Let'er Buck Location: ${data.locationSelect}`,
      data.subscriptionType ? `Desired Pass: ${data.subscriptionType}` : undefined,
      data.comments ? `Additional comments:\n${data.comments}` : undefined,
    ]
      .filter(Boolean)
      .join("\n");

    const htmlBody = `
      <h1>Manage Subscription</h1>
      <p><strong>First Name:</strong> ${escapeHtml(data.firstName)}</p>
      <p><strong>Last Name:</strong> ${escapeHtml(data.lastName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      ${data.phone ? `<p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>` : ""}
      ${data.plateNum ? `<p><strong>License Plate Number:</strong> ${escapeHtml(data.plateNum)}</p>` : ""}
      ${data.sticker ? `<p><strong>Windshield Sticker Number:</strong> ${escapeHtml(data.sticker)}</p>` : ""}
      <p><strong>Let'er Buck Location:</strong> ${escapeHtml(data.locationSelect)}</p>
      ${data.subscriptionType ? `<p><strong>Desired Pass:</strong> ${escapeHtml(data.subscriptionType)}</p>` : ""}
      ${data.comments ? `<p><strong>Additional comments:</strong><br/>${escapeHtml(data.comments)}</p>` : ""}
    `;

   
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,      
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    
    await transporter.sendMail({
      from: `Let'er Buck Car Wash <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || "J.morrissette47@gmail.com",
      replyTo: data.email, 
      subject: `Manage Subscription – ${data.firstName} ${data.lastName}`,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (err: unknown) {
    // Zod validation error -> 400
    if (err instanceof ZodError) {
      return NextResponse.json({ message: "Invalid input", issues: err.issues }, { status: 400 });
    }
    console.error("Error sending email:", err);
    return NextResponse.json({ message: "Error sending email" }, { status: 500 });
  }
}
