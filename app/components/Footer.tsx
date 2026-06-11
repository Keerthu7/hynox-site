import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Column 1: About */}
        <div className="footer-col about-col">
          <h4>ABOUT HYNOX</h4>
          <p>
            HYNOX is a software development company in Tiruppur, Tamil Nadu, helping businesses build websites, web applications, mobile apps, ERP systems, and AI-powered solutions.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.86 3.9 2.32 7.15 2.17 8.42 2.11 8.8 2.1 12 2.16zM12 0C8.74 0 8.33.01 7.05.07c-4.27.19-6.78 2.7-6.97 6.98C.01 8.33 0 8.74 0 12s.01 3.67.08 4.95c.19 4.28 2.7 6.79 6.97 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.08c4.28-.19 6.79-2.7 6.98-6.98C23.99 15.67 24 15.26 24 12s-.01-3.67-.08-4.95c-.19-4.28-2.7-6.79-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm6.4-11.44a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.46-2.14 2.96v5.69h-3.56V9h3.42v1.56h.05c.48-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"/></svg>
            </a>
            <a href="#" aria-label="WhatsApp">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12.03 0C5.39 0 0 5.39 0 12.03c0 2.12.55 4.13 1.54 5.92L0 24l6.23-1.63a11.9 11.9 0 005.8 1.5h.01c6.64 0 12.03-5.39 12.03-12.03S18.67 0 12.03 0zm0 21.84a9.92 9.92 0 01-5.06-1.38l-.36-.21-3.76.99.99-3.67-.23-.37A9.95 9.95 0 012.04 12c0-5.5 4.49-9.99 10-9.99s9.99 4.49 9.99 10-4.49 9.99-9.99 9.99zm5.48-7.48c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-1.02-.9-1.29-1.21-1.44-1.5-.15-.3-.02-.47.13-.62.14-.14.3-.3.45-.45.15-.15.2-.25.3-.43.1-.18.05-.33-.03-.48-.08-.15-.68-1.63-.93-2.23-.25-.58-.5-.5-.68-.51h-.58c-.2 0-.53.08-.8.38s-1.05 1.03-1.05 2.5 1.08 2.9 1.23 3.1c.15.2 2.1 3.21 5.1 4.5.71.3 1.27.48 1.7.62.71.22 1.36.19 1.87.11.57-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.12-.28-.2-.58-.35z"/></svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Column 2: Our Services */}
        <div className="footer-col">
          <h4>OUR SERVICES</h4>
          <ul>
            <li><Link href="/services/website-development">Website Development</Link></li>
            <li><Link href="/services/mobile-apps">Mobile Apps</Link></li>
            <li><Link href="/services/erp-software">Custom Software & ERP</Link></li>
            <li><Link href="/services/shopify-stores">Shopify Stores</Link></li>
            <li><Link href="/services/ai-solutions">AI/ML Solutions</Link></li>
            <li><Link href="/services/performance-marketing">Performance Marketing</Link></li>
            <li><Link href="/services/social-media-marketing">Social Media Marketing</Link></li>
            <li><Link href="/services/ugc-video-creation">UGC Video Creation</Link></li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><Link href="/#home">Home</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Column 4: Get In Touch */}
        <div className="footer-col get-in-touch">
          <h4>GET IN TOUCH</h4>
          <div className="contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            <span>+91 63796 16535</span>
          </div>
          <div className="contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
            <span>hello@hynox.in</span>
          </div>
          <div className="contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Tiruppur, Tamil Nadu, India</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} HYNOX. All rights reserved.</p>
      </div>
    </footer>
  );
}
