import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const { organizationName, name, email, message } = await req.json();

    const msg = {
      from: `LeterbuckTest <${process.env.EMAIL_USER}>`,
      to: "J.morrissette47@gmail.com", // Replace with the recipient's email address
      subject: "Contact Form Submission",
      html: `
        <h1>Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Organization Name:</strong> ${organizationName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `, // HTML version
    };

    await sgMail.send(msg);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
