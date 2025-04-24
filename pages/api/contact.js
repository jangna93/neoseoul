import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const result = await resend.emails.send({
      from: process.env.EMAIL_FROM, // 예: inquiry@neoseoul.kr
      to: process.env.EMAIL_TO,     // 예: neoseoul2025@gmail.com
      subject: "New Contact Form Submission",
      reply_to: email,
      html: `
        <h2>📩 새로운 문의가 도착했습니다!</h2>
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>메시지:</strong><br>${message}</p>
      `,
    });

    console.log("✅ Resend result:", result);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Resend error:", error);
    res.status(500).json({ message: "Failed to send message." });
  }
}

