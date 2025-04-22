import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  console.log("✅ Received data:", { name, email, message });
  console.log("📌 EMAIL_USER:", process.env.EMAIL_USER);
  console.log("📌 EMAIL_PASS:", process.env.EMAIL_PASS);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, // ✅ SSL 포트
    secure: true, // ✅ SSL 사용
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `NeoSeoul <${process.env.EMAIL_USER}>`, // ✅ 내 이메일로 고정
      to: "neoseoul2025@gmail.com", // ✅ 내 이메일로 메일 받기
      subject: "New Contact Form Submission",
      replyTo: email, // 📌 답장하면 사용자 이메일로 회신됨
      html: `
        <h2>📩 새로운 문의가 도착했습니다!</h2>
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>메시지:</strong><br>${message}</p>
      `,
    });

    console.log("✅ Email sent successfully!");
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Email send error:", error);
    res.status(500).json({ message: "Failed to send message." });
  }
}
