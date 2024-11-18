import { NextRequest, NextResponse } from "next/server";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
export async function POST(req: NextRequest) {
  try {
    const { organizationName, name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      requireTLS: true,
      secure: false,
      port: 587,
      tls: { ciphers: "SSLv3" },
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

      debug: true,
      logger: true,
    });

    // Define email options
    const mailOptions = {
      from: `LeterbuckTest <${process.env.EMAIL_USER}>`,
      to: "J.morrissette47@gmail.com", // Replace with the recipient's email address
      subject: "Contact Form Submission",
      html: `
      <h1>Contact Form Submission</h1>
      <p><strong>Name: ${name}</p>
      <p><strong>Organization Name: ${organizationName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
     
    `, // HTML version
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email", error: (error as Error).message },
      { status: 500 }
    );
  }
}
