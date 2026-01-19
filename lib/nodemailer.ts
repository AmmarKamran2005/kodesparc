import nodemailer from "nodemailer";

interface ContactEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail({
  name,
  email,
  subject,
  message,
}: ContactEmailProps) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Congratulations Talha and Ammar! 🎉 ✨Kodesparc Client Contact✨ " <${process.env.EMAIL_USER}>`,
    to: process.env.RECEIVER_EMAIL, // your business email
    replyTo: email,
    subject: `Contact Form: ${subject}`,
    html: `
      <h3>New Contact Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });
}
