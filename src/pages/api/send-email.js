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
    secure: false,
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


  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: [process.env.SMTP_EMAIL, process.env.SECONDARY_EMAIL],
    replyTo: email,
    subject: `🔥 New LPG Solutions Quote Request from ${name} (${company})`,
    text: emailText,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
