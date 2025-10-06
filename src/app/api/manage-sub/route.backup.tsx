import { NextRequest, NextResponse } from "next/server";
import dotenv from "dotenv";
import nodemailer from "nodemailer";


dotenv.config();
export async function POST(req: NextRequest) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      plateNum,
      locationSelect,
      sticker,
      subscriptionType,
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
      subject: "Manage Subscription",
      html: `
      <h1>Manage Subscription</h1>
      <p><strong>First Name: ${firstName}</p>
      <p><strong>Last Name: ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Email:</strong> ${phone}</p>
      <p><strong>License Plate Number:</strong> ${plateNum}</p>
       <p><strong>Windshield Sticker Number: ${sticker}</p>
      <p><strong>Let'er Buck Location:</strong> ${locationSelect}</p>
      <p><strong>Desired Pass: ${subscriptionType}</p>
      <p><strong>Additional comments:</strong> ${comments}</p>
     
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
