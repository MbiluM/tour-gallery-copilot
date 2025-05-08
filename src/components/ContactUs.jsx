import React, { useState } from 'react';

function ContactUs() {
  // State variables for the contact form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false); // Track if the form has been submitted

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setSubmitted(true); // Set the form as submitted
    alert(`Thank you, ${name}! Your message has been sent.`);
    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you! Whether you have questions about our property, need assistance with your booking, or want to plan a special event, our team is here to help.
      </p>
      <p>
        <strong>Email:</strong> info@randburgresidence.com
      </p>
      <p>
        <strong>Phone:</strong> +27 123 456 7890
      </p>
      <p>
        <strong>Address:</strong> Randburg Residence, Hilltop Road, Randburg, South Africa
      </p>
      <p>
        Feel free to reach out to us anytime, and we’ll get back to you as soon as possible. We look forward to welcoming you to The Randburg Residence!
      </p>

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