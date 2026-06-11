'use client';

interface ServiceCTAProps {
  title?: string;
  subtitle?: string;
}

export default function ServiceCTA({
  title = 'Ready to Start Your Project?',
  subtitle = "Tell us what you need — we'll get back to you within 24 hours.",
}: ServiceCTAProps) {
  return (
    <section className="svc-section svc-cta-section reveal-zoom" id="cta">
      <div className="svc-cta-outer">
        <div className="svc-cta-inner">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div className="svc-cta-buttons">
            <a href="mailto:thehynoxofficial@gmail.com" className="btn svc-btn-white">
              Start a Project
            </a>
            <a href="https://wa.me/918870524355" className="btn svc-btn-ghost">
              WhatsApp Us
            </a>
          </div>
          <div className="svc-cta-contact">
            <span>thehynoxofficial@gmail.com</span>
            <span className="separator">·</span>
            <span>+91 88705 24355</span>
          </div>
        </div>
      </div>
    </section>
  );
}
