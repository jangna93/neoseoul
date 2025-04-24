import styles from "../styles/ContactSection.module.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // ✅ 메시지 상태 관리

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    console.log("📤 Sending request to API with:", formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("📩 API Response:", result);

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message: " + result.message);
      }
    } catch (error) {
      console.error("❌ Error sending message:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <section className={styles.contact}>
      <h2>Contact Us</h2>
      <p className={styles.description}>For any inquiries, please complete the form below.</p>

      {/* 문의 폼 */}
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
        <button type="submit" disabled={status === "Sending..."}>
          {status === "Sending..." ? "⏳ Sending..." : status === "Message sent successfully!" ? "✅ Sent!" : "Send Message"}
        </button>
      </form>

      {/* SNS 아이콘 */}
      <div className={styles.socialIcons}>
        <a href="https://instagram.com/neoseoul_official" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://facebook.com/neoseoul.official" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
      </div>

      <div className={styles.contactInfo}>
        <p><strong>Email:</strong> neoseoul2025@gmail.com</p>
        <p><strong>Phone:</strong> +82 10-8263-6111</p>
        <p><strong>Address:</strong> 170, Magokseo-ro, Gangseo-gu, Seoul, Republic of Korea</p>
      </div>
    </section>
  );
};

export default ContactSection;
