// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, phone, message } = await request.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // use App Password
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,      // must match auth.user
      replyTo: email,                    // user who filled the form
      to: process.env.EMAIL_USER,        // where you want to receive it
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nMessage: ${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(JSON.stringify({ message: "Error sending email" }), { status: 500 });
  }
}
