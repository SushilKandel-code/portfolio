import { useState } from "react";
import emailjs from "emailjs-com";
import '../styles/app.css'


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
        <section
            id="contact"
            className="section"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <div
                style={{
                    width: "60%",
                    maxWidth: "700px",
                    padding: "40px",
                    borderRadius: "8px",
                    border: '1px solid grey'
                }}
            >
                <h2 style={{ textAlign: "center", paddingBottom: "20px" }}>Contact Me</h2>
                <form
                    onSubmit={handleSubmit}
                    className="ui form"
                    style={{ padding: "20px", borderRadius: "5px" }}
                >
                    <div
                        className="field"
                        style={{
                            width: "50%",
                            margin: "0 auto 20px",
                        }}
                    >
                        <label style={{ color: "white" }}>Name</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div
                        className="field"
                        style={{
                            width: "50%",
                            margin: "0 auto 20px",
                        }}
                    >
                        <label style={{ color: "white" }}>Email</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div
                        className="field"
                        style={{
                            width: "50%",
                            margin: "0 auto 20px",
                        }}
                    >
                        <label style={{ color: "white" }}>Message</label>
                        <input
                            name="message"
                            type="text"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div
                        className="field"
                        style={{
                            width: "50%",
                            margin: "0 auto 30px",
                        }}
                    >
                        <div className="ui checkbox">
                            <input
                                type="checkbox"
                                name="agreed"
                                checked={formData.agreed}
                                onChange={handleChange}
                            />
                            <label style={{ color: "white" }}>
                                I agree to the terms and conditions
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="ui primary button"
                        style={{
                            display: "block",
                            margin: "0 auto", // center the button
                            padding: "10px 20px",
                        }}
                    >
                        Contact
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;