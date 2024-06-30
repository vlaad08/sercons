import React from "react";
import './styles/ContactForm.css'; // Styling for ContactForm

const ContactForm = () => {
    return (
        <div className="contactForm" id="contact">
            <h2>Contact</h2>
            <form>
                <input type="text" placeholder="Numele Dumneavostra" required />
                <input type="email" placeholder="Email-ul Dumneavoastra" required />
                <textarea placeholder="Mesajul Dumneavoastra" required></textarea>
                <button type="submit">Trimite mesaj</button>
            </form>
        </div>
    );
};

export default ContactForm;