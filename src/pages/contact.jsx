import { useState } from "react";
import emailjs from "emailjs-com";
import '../styles/app.css'
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        agreed: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.agreed) {
            alert("Please agree to the terms and conditions.");
            return;
        }

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            message: `New contact request from ${formData.name} (${formData.email}, with message: ${formData.message}).`,
        };

        emailjs
            .send(
                "service_6w6fnoq",
                "template_q07ni9a",
                templateParams,
                "dXPTx5SVj_0sK7BF1"
            )
            .then(
                (result) => {
                    alert("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "", agreed: false });
                },
                (error) => {
                    alert("Failed to send message. Please try again.");
                }
            );
    };

    return (
    <section id="contact" className="section contact-section">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="field">
            <label>Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field checkbox-field">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
            />
            <label>I agree to the terms and conditions</label>
          </div>
          <button type="submit" className="submit-btn">
            Contact
          </button>
        </form>

        <p className="or-text">OR</p>
        <div className="social-links">
          <a href="https://github.com/SushilKandel-code">
            <img src={github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/sushil-kandel-41288a1b9">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;