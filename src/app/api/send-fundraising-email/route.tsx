import { NextRequest, NextResponse } from "next/server";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
export async function POST(req: NextRequest) {
  try {
    const {
      organizationName,
      name,
      email,
      phone,
      fundraiserType,
      location,
      timeline,
      participants,
      checkMessage,
      fundsMessage,
      addressMessage,
      comments,
    } = await req.json();

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
    });

    const mailOptions = {
      from: `Let er Buck Car Wash <${process.env.EMAIL_USER}>`,
      to: "J.morrissette47@gmail.com", // Replace with the recipient's email address
      subject: "Fundraising Request",
      html: `
      <h1>Contact Form Submission</h1>
      <p><strong>Organization Name: ${organizationName}</p>
      <p><strong>Name: ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Email:</strong> ${phone}}</p>
      <h3><strong>Event Details</strong></h3>
      <p><strong>Fundraiser Type:</strong> ${fundraiserType}</p>
      <p><strong>Let'er Buck Location:</strong> ${location}</p>
      <p><strong>Desired Timeline:${timeline}</p>
      <p><strong>Number of Participants${participants}</p>
      <p><strong>Address To send Check: </strong>${checkMessage}</p>
      <p><strong>Address To send Check: </strong>${addressMessage}</p>
      <p><strong>How will the funds be used?</strong>${fundsMessage}</p>
      <p><strong>Additional comments:</strong>${comments}</p>
     
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
