import React, { useState } from "react";
import emailjs from 'emailjs-com';
import '../Components/Contact.css';  

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Use EmailJS to send form data
        emailjs.send('service_sridharsenthil97', 'template_sridharsenthil', formData, '-VmUOZWDtOUYSvkZe')
            .then((response) => {
                console.log('Message sent successfully!', response.status, response.text);
                alert("Your message has been sent!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error('Message sending failed...', error);
                alert("Failed to send message. Please try again later.");
            });
    };

    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;