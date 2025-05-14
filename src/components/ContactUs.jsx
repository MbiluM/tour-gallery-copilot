import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactUs() {
  // State variables for the contact form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false); // Track if the form has been submitted

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // EmailJS configuration
    const serviceID = 'service_5inlvnl'; // EmailJS service ID
    const templateID = 'template_i2mksbw'; // EmailJS template ID
    const userID = '7GhiNJhj21MED4oCd'; // EmailJS user Key

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSubmitted(true); // Set the form as submitted
          alert(`Thank you, ${name}! Your message has been sent.`);
          // Reset the form fields
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send the message. Please try again later.');
        }
      );
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you! Whether you have questions about our property, need assistance with your booking, or want to plan a special event, our team is here to help.
      </p>
      <p>
        <strong>Email:</strong> <a href="mailto:info@randburgresidence.com">info@randburgresidence.com</a>
      </p>
      <p>
        <strong>Phone:</strong> <a href="tel:+271234567890">+27 123 456 7890</a>
      </p>
      <p>
        <strong>Address:</strong> <a> 122 Sherwell Manor, Boskruin, Randburg, South Africa</a> 
      <br/>
      </p>
        The Randburg Boutique Hotel
      <p>

      </p>
       {/* Embedded Google Map */}
       <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3788.4673048105524!2d27.945285083315316!3d-26.09301291821595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDA1JzM0LjkiUyAyN8KwNTcnMDAuNiJF!5e1!3m2!1sen!2sza!4v1747133923964!5m2!1sen!2sza"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update name state
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)} // Update message state
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      {submitted && <p>Thank you for your message! We will get back to you soon.</p>}
    </div>
  );
}

export default ContactUs;