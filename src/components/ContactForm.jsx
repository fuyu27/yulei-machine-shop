import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Use FormSubmit with AJAX endpoint
      const response = await fetch('https://formsubmit.co/ajax/yuleifu@umich.edu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}`
        })
      });

      const data = await response.json();
      
      if (data.success) {
        alert('Thanks for reaching out! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        onClose();
      } else {
        alert('Something went wrong. Please email me directly at yuleifu@umich.edu');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please email me directly at yuleifu@umich.edu');
    }
  };

  return (
    <div className="contact-form-overlay" onClick={onClose}>
      <div className="contact-form-container" onClick={(e) => e.stopPropagation()}>
        <button className="contact-form-close" onClick={onClose}>
          ✕
        </button>
        
        <h2 className="contact-form-title">Get in Touch</h2>
        <p className="contact-form-subtitle">I'd love to hear from you!</p>

        <form className="colorful-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-input"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="form-button">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <p><strong>Email:</strong> yuleifu@umich.edu</p>
          <p><strong>Phone:</strong> 734-239-4771</p>
          <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yulei-fu" target="_blank" rel="noopener noreferrer">linkedin.com/in/yulei-fu</a></p>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
