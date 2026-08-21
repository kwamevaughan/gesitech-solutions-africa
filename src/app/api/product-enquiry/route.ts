import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { ProductEnquiryPayload } from "@/shared/types/productEnquiry";

export async function POST(req: Request) {
  const body = (await req.json()) as ProductEnquiryPayload;
  const { name, email, phone, company, product, message, recaptchaToken } =
    body;

  // Verify reCAPTCHA using fetch
  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY || "",
          response: recaptchaToken || "",
        }),
      }
    );

    const recaptchaResponse = await response.json();

    if (
      !recaptchaResponse.success ||
      (typeof recaptchaResponse.score === "number" &&
        recaptchaResponse.score < 0.5)
    ) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("reCAPTCHA error:", error);
    return NextResponse.json(
      { error: "reCAPTCHA verification error" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const emailText = `
    Product: ${product || "General product enquiry"}
    Name: ${name}
    Email: ${email}
    Phone: ${phone || "Not provided"}
    Company: ${company || "Not provided"}
    Message: ${message || "Not provided"}
  `;

  const emailHtml = `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto;">
    <div style="text-align: center; margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #22c55e, #3b82f6); border-radius: 10px;">
      <h1 style="color: white; margin: 0; font-size: 24px;">New Product Enquiry</h1>
      <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Gesitech Solutions Africa</p>
    </div>

    <div style="background: #f0fdf4; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
      <h3 style="color: #16a34a; margin-top: 0;">Product</h3>
      <p style="color: #6b7280; margin: 0;">${product || "General product enquiry"}</p>
    </div>

    <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
      <h3 style="color: #1e40af; margin-top: 0;">Contact Information</h3>
      <table cellpadding="8" cellspacing="0" border="0" style="width: 100%;">
        <tr><td style="font-weight: bold; color: #374151; width: 150px;">Name:</td><td style="color: #6b7280;">${name}</td></tr>
        <tr><td style="font-weight: bold; color: #374151;">Email:</td><td style="color: #6b7280;">${email}</td></tr>
        <tr><td style="font-weight: bold; color: #374151;">Phone:</td><td style="color: #6b7280;">${phone || "Not provided"}</td></tr>
        <tr><td style="font-weight: bold; color: #374151;">Company:</td><td style="color: #6b7280;">${company || "Not provided"}</td></tr>
      </table>
    </div>

    ${
      message
        ? `
    <div style="background: #f1f5f9; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
      <h3 style="color: #475569; margin-top: 0;">Message</h3>
      <p style="color: #6b7280; margin: 0; line-height: 1.6;">${message}</p>
    </div>
    `
        : ""
    }

    <div style="text-align: center; margin-top: 30px; padding: 20px; background: #f8fafc; border-radius: 10px;">
      <p style="font-size: 14px; color: #9ca3af; margin: 0;">
        This message was generated from the Gesitech Solutions Africa product catalog.<br>
        Please respond promptly to provide the best customer service.
      </p>
    </div>
  </div>
`;

  const mailOptions = {
    from: `"Gesitech Solutions Africa" <${process.env.SMTP_EMAIL}>`,
    to: [process.env.SMTP_EMAIL, process.env.SECONDARY_EMAIL].filter(
      Boolean
    ) as string[],
    replyTo: email,
    subject: `New Product Enquiry from ${name}${product ? ` - ${product}` : ""}`,
    text: emailText,
    html: emailHtml,
  };

  const customerConfirmationHtml = `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto;">
    <div style="text-align: center; margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #22c55e, #3b82f6); border-radius: 10px;">
      <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Your Interest!</h1>
      <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Gesitech Solutions Africa</p>
    </div>

    <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
      <h3 style="color: #1e40af; margin-top: 0;">Dear ${name},</h3>
      <p style="color: #6b7280; line-height: 1.6; margin: 0;">
        Thank you for your interest in ${product || "our products"}. Our team has received your
        enquiry and will get back to you shortly with more details.
      </p>
    </div>

    <div style="background: #eff6ff; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
      <h3 style="color: #1d4ed8; margin-top: 0;">Contact Information</h3>
      <p style="color: #6b7280; margin: 0; line-height: 1.6;">
        <strong>Email:</strong> info@gesitech.africa<br>
        <strong>Office:</strong> 7th floor, Mitsumi Business Park, Muthithi Road, Westlands, Nairobi<br>
        <strong>Address:</strong> P.O. Box 856-00100, Kenya
      </p>
    </div>

    <div style="text-align: center; margin-top: 30px; padding: 20px; background: #f8fafc; border-radius: 10px;">
      <p style="font-size: 14px; color: #9ca3af; margin: 0;">
        This is an automated confirmation email from Gesitech Solutions Africa.<br>
        If you have any immediate questions, please don't hesitate to contact us.
      </p>
    </div>
  </div>
  `;

  const customerConfirmationText = `
Dear ${name},

Thank you for your interest in ${product || "our products"}. Our team has received your enquiry and will get back to you shortly with more details.

CONTACT INFORMATION:
Email: info@gesitech.africa
Office: 7th floor, Mitsumi Business Park, Muthithi Road, Westlands, Nairobi
Address: P.O. Box 856-00100, Kenya

Best regards,
Gesitech Solutions Africa Team
  `;

  const customerMailOptions = {
    from: `"Gesitech Solutions Africa" <${process.env.SMTP_EMAIL}>`,
    to: email,
    replyTo: process.env.EMAIL_REPLYTO || process.env.SMTP_EMAIL,
    subject: `Thank you for your enquiry - Gesitech Solutions Africa`,
    text: customerConfirmationText,
    html: customerConfirmationHtml,
  };

  try {
    await transporter.sendMail(mailOptions);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      await transporter.sendMail(customerMailOptions);
    } catch (customerEmailError) {
      console.error(
        "Failed to send customer confirmation email:",
        customerEmailError
      );
    }

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
