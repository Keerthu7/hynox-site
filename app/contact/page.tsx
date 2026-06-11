'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const countries = [
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'United Arab Emirates', code: '+971', flag: '🇦🇪' },
  { name: 'Singapore', code: '+65', flag: '🇸🇬' },
];

const services = [
  { value: 'web-application', label: 'Web Application' },
  { value: 'mobile-app', label: 'Mobile App' },
  { value: 'shopify-store', label: 'Shopify Store' },
  { value: 'erp-software', label: 'ERP Software' },
  { value: 'digital-marketing', label: 'Digital Marketing' },
  { value: 'others', label: 'Others' },
];

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [interestService, setInterestService] = useState('web-application');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Intersection observer for animation triggers
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-blur, .reveal-zoom, .reveal-fade-in');
    revealElements.forEach((el) => observer.observe(el));

    // Instant trigger for hero-like elements on top
    setTimeout(() => {
      const topElements = document.querySelectorAll('.reveal-top');
      topElements.forEach((el) => el.classList.add('active'));
    }, 100);

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setFullName('');
      setEmail('');
      setPhoneNumber('');
      setInterestService('web-application');
      setMessage('');
      
      // Auto clear success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1200);
  };

  const selectedCountryObj = countries.find(c => c.code === country) || countries[0];

  return (
    <div className="contact-page-light-wrapper">
      <Header />
      
      <main className="contact-page-container">
        <div className="contact-content-grid">
          
          {/* Left Column: Dark Blue Info Card */}
          <div className="contact-info-panel reveal-top">
            <div className="quote-box why-choose-hynox-card">
              <h2 className="why-title">Why Choose HYNOX?</h2>
              
              <ul className="why-list">
                <li>
                  <div className="check-icon-wrapper">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Expert consultation and planning</span>
                </li>
                <li>
                  <div className="check-icon-wrapper">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Custom solutions for your needs</span>
                </li>
                <li>
                  <div className="check-icon-wrapper">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Transparent pricing and timeline</span>
                </li>
                <li>
                  <div className="check-icon-wrapper">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>24-hour response guarantee</span>
                </li>
              </ul>

              {/* Overlapping boxes with Response Time */}
              <div className="decor-boxes response-time-container">
                <div className="decor-box-outline"></div>
                <div className="decor-box-solid response-badge-card">
                  <span className="response-title">Response Time</span>
                  <span className="response-value">Within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Contact details list vertically below the box inside the panel */}
            <div className="contact-details-list">
              {/* Phone item */}
              <a href="tel:+918870524355" className="contact-detail-card">
                <div className="icon-wrapper">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="detail-card-text">
                  <span className="detail-card-title">Phone</span>
                  <span className="detail-value">+91 8870524355</span>
                </div>
              </a>

              {/* Email item */}
              <a href="mailto:thehynoxofficial@gmail.com" className="contact-detail-card">
                <div className="icon-wrapper">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="detail-card-text">
                  <span className="detail-card-title">Email</span>
                  <span className="detail-value">thehynoxofficial@gmail.com</span>
                </div>
              </a>

              {/* Location item */}
              <div className="contact-detail-card pointer-none">
                <div className="icon-wrapper">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="detail-card-text">
                  <span className="detail-card-title">Location</span>
                  <span className="detail-value">Tirupur, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="contact-form-panel reveal-top">
            <div className="form-container-clean">
              <div className="form-card-header">
                <h2>Send us a Message</h2>
                <p>Fill out the form and we'll get back to you within 24 hours.</p>
              </div>

              {submitSuccess ? (
                <div className="form-success-alert animate-fade-in">
                  <div className="success-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out to HYNOX. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="campus-contact-form">
                  {/* Full Name Field */}
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      required
                      placeholder="Enter your name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  {/* Email Field */}
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <div className="phone-input-wrapper">
                      <div className="country-selector">
                        <span className="country-flag">{selectedCountryObj.flag}</span>
                        <span className="country-code-display">{country}</span>
                        <svg className="dropdown-arrow" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        <select
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="country-select"
                        >
                          {countries.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.name} ({c.code})
                            </option>
                          ))}
                        </select>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        required
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Service of Interest */}
                  <div className="form-group">
                    <label htmlFor="service">Service of Interest (Optional)</label>
                    <div className="select-input-wrapper">
                      <select
                        id="service"
                        value={interestService}
                        onChange={(e) => setInterestService(e.target.value)}
                        className="service-select-element"
                      >
                        {services.map((s) => (
                          <option key={s.value} value={s.value}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className={`btn-send-message ${isSubmitting ? 'loading' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="spinner"></span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
