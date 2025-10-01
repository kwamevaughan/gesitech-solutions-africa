import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    name,
    email,
    company,
    phone,
    industry,
    teamSize,
    services,
    currentChallenges,
    timeline,
    budget,
    customBudget,
    additionalInfo,
    recaptchaToken,
  } = req.body;

  // Verify reCAPTCHA using fetch instead of axios
  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: recaptchaToken,
        }),
      }
    );

    const recaptchaResponse = await response.json();

    if (!recaptchaResponse.success) {
      return res.status(400).json({ error: "reCAPTCHA verification failed" });
    }
  } catch (error) {
    console.error("reCAPTCHA error:", error);
    return res.status(500).json({ error: "reCAPTCHA verification error" });
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Prepare email content
  const emailText = `
    Name: ${name}
    Email: ${email}
    Company: ${company}
    Phone: ${phone || "Not provided"}
    Industry: ${industry}
    Project Scale: ${teamSize}
    Services of Interest: ${services.join(", ") || "None selected"}
    Current Challenges: ${currentChallenges}
    Project Timeline: ${timeline}
    Estimated Budget: ${budget || customBudget || "Not provided"}
    Additional Information: ${additionalInfo || "Not provided"}
  `;

  const emailHtml = `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto;">
    <div style="text-align: center; margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #22c55e, #3b82f6); border-radius: 10px;">
      <h1 style="color: white; margin: 0; font-size: 24px;">New LPG Solutions Quote Request</h1>
      <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Gesitech Solutions Africa</p>
    </div>
    
    <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
      <h3 style="color: #1e40af; margin-top: 0;">Contact Information</h3>
      <table cellpadding="8" cellspacing="0" border="0" style="width: 100%;">
        <tr><td style="font-weight: bold; color: #374151; width: 150px;">Name:</td><td style="color: #6b7280;">${name}</td></tr>
        <tr><td style="font-weight: bold; color: #374151;">Email:</td><td style="color: #6b7280;">${email}</td></tr>
        <tr><td style="font-weight: bold; color: #374151;">Company:</td><td style="color: #6b7280;">${company}</td></tr>
        <tr><td style="font-weight: bold; color: #374151;">Phone:</td><td style="color: #6b7280;">${phone || "Not provided"}</td></tr>
      </table>
    </div>

    <div style="background: #f0fdf4; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
      <h3 style="color: #16a34a; margin-top: 0;">Project Details</h3>
      <table cellpadding="8" cellspacing="0" border="0" style="width: 100%;">
        <tr><td style="font-weight: bold; color: #374151; width: 150px;">Industry:</td><td style="color: #6b7280;">${industry}</td></tr>
        <tr><td style="font-weight: bold; color: #374151;">Project Scale:</td><td style="color: #6b7280;">${teamSize}</td></tr>
        <tr><td style="font-weight: bold; color: #374151;">Timeline:</td><td style="color: #6b7280;">${timeline}</td></tr>
        <tr><td style="font-weight: bold; color: #374151;">Budget:</td><td style="color: #6b7280;">${budget || customBudget || "Not provided"}</td></tr>
      </table>
    </div>

    <div style="background: #fef3c7; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
      <h3 style="color: #d97706; margin-top: 0;">Services Requested</h3>
      <p style="color: #6b7280; margin: 0;">${services.join(", ") || "None selected"}</p>
    </div>

    <div style="background: #f1f5f9; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
      <h3 style="color: #475569; margin-top: 0;">Current Challenges</h3>
      <p style="color: #6b7280; margin: 0; line-height: 1.6;">${currentChallenges}</p>
    </div>

    ${additionalInfo ? `
    <div style="background: #fdf2f8; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
      <h3 style="color: #be185d; margin-top: 0;">Additional Information</h3>
      <p style="color: #6b7280; margin: 0; line-height: 1.6;">${additionalInfo}</p>
    </div>
    ` : ''}

    <div style="text-align: center; margin-top: 30px; padding: 20px; background: #f8fafc; border-radius: 10px;">
      <p style="font-size: 14px; color: #9ca3af; margin: 0;">
        This message was generated from the Gesitech Solutions Africa website contact form.<br>
        Please respond promptly to provide the best customer service.
      </p>
    </div>
  </div>
`;


  // Email to Gesitech team
  const mailOptions = {
    from: `"Gesitech Solutions Africa" <${process.env.SMTP_EMAIL}>`,
    to: [process.env.SMTP_EMAIL, process.env.SECONDARY_EMAIL],
    replyTo: email,
    subject: `New LPG Solutions Quote Request from ${name} (${company})`,
    text: emailText,
    html: emailHtml,
  };

  // Customer confirmation email
  const customerConfirmationHtml = `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto;">
    <div style="text-align: center; margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #22c55e, #3b82f6); border-radius: 10px;">
      <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Your Interest!</h1>
      <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Gesitech Solutions Africa</p>
    </div>
    
    <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
      <h3 style="color: #1e40af; margin-top: 0;">Dear ${name},</h3>
      <p style="color: #6b7280; line-height: 1.6; margin: 0;">
        Thank you for reaching out to Gesitech Solutions Africa for your LPG solutions needs. 
        We have received your quote request and our team will review your requirements carefully.
      </p>
    </div>

    <div style="background: #f0fdf4; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
      <h3 style="color: #16a34a; margin-top: 0;">What Happens Next?</h3>
      <ul style="color: #6b7280; line-height: 1.8; margin: 0; padding-left: 20px;">
        <li>Our technical team will review your project requirements</li>
        <li>We'll prepare a customized quote based on your specific needs</li>
        <li>A member of our team will contact you within 24-48 hours</li>
        <li>We'll schedule a consultation to discuss your LPG solutions in detail</li>
      </ul>
    </div>

    <div style="background: #fef3c7; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
      <h3 style="color: #d97706; margin-top: 0;">Your Request Summary</h3>
      <table cellpadding="8" cellspacing="0" border="0" style="width: 100%;">
        <tr><td style="font-weight: bold; color: #374151; width: 150px;">Company:</td><td style="color: #6b7280;">${company}</td></tr>
        <tr><td style="font-weight: bold; color: #374151;">Industry:</td><td style="color: #6b7280;">${industry}</td></tr>
        <tr><td style="font-weight: bold; color: #374151;">Project Scale:</td><td style="color: #6b7280;">${teamSize}</td></tr>
        <tr><td style="font-weight: bold; color: #374151;">Timeline:</td><td style="color: #6b7280;">${timeline}</td></tr>
        <tr><td style="font-weight: bold; color: #374151;">Services:</td><td style="color: #6b7280;">${services.join(", ") || "None selected"}</td></tr>
      </table>
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

Thank you for reaching out to Gesitech Solutions Africa for your LPG solutions needs. We have received your quote request and our team will review your requirements carefully.

WHAT HAPPENS NEXT?
- Our technical team will review your project requirements
- We'll prepare a customized quote based on your specific needs  
- A member of our team will contact you within 24-48 hours
- We'll schedule a consultation to discuss your LPG solutions in detail

YOUR REQUEST SUMMARY:
Company: ${company}
Industry: ${industry}
Project Scale: ${teamSize}
Timeline: ${timeline}
Services: ${services.join(", ") || "None selected"}

CONTACT INFORMATION:
Email: info@gesitech.africa
Office: 7th floor, Mitsumi Business Park, Muthithi Road, Westlands, Nairobi
Address: P.O. Box 856-00100, Kenya

This is an automated confirmation email from Gesitech Solutions Africa.
If you have any immediate questions, please don't hesitate to contact us.

Best regards,
Gesitech Solutions Africa Team
  `;

  const customerMailOptions = {
    from: `"Gesitech Solutions Africa" <${process.env.SMTP_EMAIL}>`,
    to: email,
    replyTo: process.env.EMAIL_REPLYTO || process.env.SMTP_EMAIL,
    subject: `Thank you for your LPG Solutions inquiry - Gesitech Solutions Africa`,
    text: customerConfirmationText,
    html: customerConfirmationHtml,
  };

  try {
    // Send email to Gesitech team
    console.log("Sending email to Gesitech team...");
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent to Gesitech team successfully");
    
    // Add small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Send confirmation email to customer
    console.log(`Sending confirmation email to customer: ${email}`);
    try {
      await transporter.sendMail(customerMailOptions);
      console.log("✅ Confirmation email sent to customer successfully");
    } catch (customerEmailError) {
      console.error("❌ Failed to send customer confirmation email:", customerEmailError);
      console.error("Customer email details:", { to: email, from: customerMailOptions.from });
      // Don't fail the entire request if customer email fails
      // The main business email was sent successfully
    }
    
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("❌ Email error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
