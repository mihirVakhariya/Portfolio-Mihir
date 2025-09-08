// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use host, port, auth for custom SMTP
      auth: {
        user: "divyachachane06@gmail.com", // your Gmail or SMTP username
        pass: "iwic blvm fjmp bjig", // your Gmail or SMTP password or App Password
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // where the message will be sent
      subject: `New contact form submission from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ message: "Error sending email" });
  }
}
