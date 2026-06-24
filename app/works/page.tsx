'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function WorksPage() {
  useEffect(() => {
    const animationClasses = [
      'reveal-on-scroll', 'reveal-fade-in', 'reveal-from-left',
      'reveal-from-right', 'reveal-zoom', 'reveal-blur',
    ];
    const selector = animationClasses.map(c => `.${c}`).join(', ');
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          entry.target.classList.remove('is-hidden');
        } else {
          entry.target.classList.remove('is-visible');
          entry.target.classList.add('is-hidden');
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll(selector).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const featuredProjects = [
    { 
      title: "SugarStar", 
      cat: "Website & Social Marketing", 
      desc: "Premium confectionery brand scaling digitally.", 
      img: "/images/sugarstar_web.jpeg",
      points: ["Premium Shopify Store Development", "High-Converting UX/UI Design", "Social Media Growth Strategy", "Meta Performance Marketing Campaigns"]
    },
    { 
      title: "Team3 Associates", 
      cat: "Website & Digital Marketing", 
      desc: "Interior Design and Project Execution firm.", 
      img: "/images/team3_web.png",
      points: ["Corporate Website Architecture", "Local SEO Optimization", "Lead Generation Campaigns", "Brand Identity & Positioning"]
    },
    { 
      title: "JP Interiors", 
      cat: "Website Development", 
      desc: "Interior design portfolio and service showcase.", 
      img: "/images/JpWeb_works.png",
      points: ["Portfolio Website Development", "Fast & Responsive Interface", "Interactive Service Showcases", "Technical SEO Implementation"]
    },
    { 
      title: "JP Interiors", 
      cat: "Mobile App Development", 
      desc: "Custom business automation tool.", 
      img: "/images/JpApp_works.png",
      points: ["Custom Business Automation", "Internal Project Management", "Cross-Platform iOS & Android App", "Real-time Cloud Syncing"]
    }
  ];

  const otherProjects = [
    { title: "Teerex", cat: "Custom Development", img: "/images/graaps_web.png" },
    { title: "Mallika Garments", cat: "Custom Development", img: "/images/malika-garments_web.jpg" },
    { title: "Graaps", cat: "Clothing Brand", img: "/images/graaps_web.png" },
    { title: "Food delivery app", cat: "Custom Development", img: "/images/aharraa_web.png" },
    { title: "Kores Fabrics", cat: "Clothing Brand", img: "/images/kores_web.png" },
    { title: "Kido Care", cat: "Kids Clothing Brand", img: "/images/kido_care_web.jpg" },
    { title: "Sun Holidays", cat: "Tours and Travel", img: "/images/sun_holidays_web.png" },
    { title: "Livinza", cat: "Interior Business", img: "/images/livinza_web.png" }
  ];

  return (
    <>
      <Header />
      
      <main className="works-page" style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
        {/* HERO SECTION */}
        <section className="hero-center-section" style={{ minHeight: '40vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="absolute inset-0 w-full h-full z-0" style={{ background: "#050505" }}>
          </div>
          <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(20,35,100,0.15) 0%, rgba(0,0,0,0.85) 75%)" }} />

          <div className="hero-center-content" style={{ zIndex: 2, textAlign: 'center', paddingTop: '8rem' }}>
            <span className="hero-badge reveal-fade-in" style={{ letterSpacing: '0.15em', fontWeight: 600 }}>
              OUR PORTFOLIO
            </span>
            <h1 className="reveal-from-bottom reveal-delay-100" style={{ fontSize: '4rem', fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '2rem' }}>
              Real Stores. <br />
              <span style={{ color: '#888' }}>Real Results.</span>
            </h1>
          </div>
        </section>

        {/* FEATURED WORKS GRID */}
        <section style={{ padding: '4rem 5% 6rem 5%' }}>
          <style dangerouslySetInnerHTML={{__html: `
            .featured-works-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 4rem;
              max-width: 1300px;
              margin: 0 auto;
            }
            .feat-work-card {
              background: rgba(255,255,255,0.02);
              border: 1px solid rgba(255,255,255,0.05);
              border-radius: 24px;
              overflow: hidden;
              transition: all 0.4s ease;
            }
            .feat-work-card:hover {
              border-color: rgba(255,255,255,0.15);
              box-shadow: 0 20px 50px rgba(0,0,0,0.5);
              transform: translateY(-5px);
            }
            .feat-work-img {
              width: 100%;
              aspect-ratio: 16/10;
              overflow: hidden;
              position: relative;
            }
            .feat-work-img img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.6s ease;
            }
            .feat-work-card:hover .feat-work-img img {
              transform: scale(1.05);
            }
            .feat-work-info {
              padding: 3rem;
            }
            .feat-work-cat {
              display: inline-block;
              font-size: 0.8rem;
              letter-spacing: 0.1em;
              text-transform: uppercase;
              color: #a0a0a0;
              margin-bottom: 1.5rem;
              font-weight: 600;
              background: rgba(255,255,255,0.05);
              padding: 0.5rem 1rem;
              border-radius: 100px;
            }
            .feat-work-title {
              font-size: 2.2rem;
              font-weight: 500;
              margin-bottom: 2rem;
              color: #fff;
              letter-spacing: -0.02em;
            }
            .feat-work-points {
              list-style: none;
              padding: 0;
              margin: 0;
            }
            .feat-work-points li {
              color: #bbb;
              font-size: 1.1rem;
              line-height: 1.6;
              font-weight: 300;
              margin-bottom: 1rem;
              display: flex;
              align-items: flex-start;
            }
            .feat-work-points li::before {
              content: '•';
              color: #fff;
              font-weight: bold;
              display: inline-block;
              width: 1em;
              margin-left: -1em;
              margin-right: 1rem;
            }
            
            /* Marquee CSS */
            .works-marquee-container {
              overflow: hidden;
              width: 100%;
              padding: 3rem 0 0 0;
              background: rgba(255,255,255,0.01);
              border-top: 1px solid rgba(255,255,255,0.05);
              position: relative;
            }
            .works-marquee-track {
              display: flex;
              gap: 2rem;
              width: max-content;
              animation: scrollWorks 30s linear infinite;
            }
            .works-marquee-container:hover .works-marquee-track {
              animation-play-state: paused;
            }
            @keyframes scrollWorks {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-50% - 1rem)); }
            }
            .mini-work-card {
              width: 350px;
              border-radius: 16px;
              overflow: hidden;
              background: rgba(255,255,255,0.03);
              border: 1px solid rgba(255,255,255,0.05);
              flex-shrink: 0;
            }
            .mini-work-img {
              width: 100%;
              height: 200px;
            }
            .mini-work-img img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            .mini-work-info {
              padding: 1.5rem;
            }
            .mini-work-title {
              font-size: 1.3rem;
              color: #fff;
              margin-bottom: 0.5rem;
              font-weight: 500;
            }
            .mini-work-cat {
              font-size: 0.8rem;
              color: #888;
              text-transform: uppercase;
              letter-spacing: 0.05em;
            }

            @media (max-width: 900px) {
              .featured-works-grid {
                grid-template-columns: 1fr;
              }
            }
          `}} />
          
          <div className="featured-works-grid reveal-zoom">
            {featuredProjects.map((item, i) => (
              <div className="feat-work-card" key={i}>
                <div className="feat-work-img">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="feat-work-info">
                  <span className="feat-work-cat">{item.cat}</span>
                  <h3 className="feat-work-title">{item.title}</h3>
                  <ul className="feat-work-points">
                    {item.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AUTOSCROLL SECTION */}
        <section className="works-marquee-section">
          <div className="svc-section-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2>More Successful Projects</h2>
          </div>
          <div className="works-marquee-container">
            <div className="works-marquee-track">
              {/* Double array for seamless scroll */}
              {[...otherProjects, ...otherProjects].map((item, i) => (
                <div className="mini-work-card" key={i}>
                  <div className="mini-work-img">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="mini-work-info">
                    <h4 className="mini-work-title">{item.title}</h4>
                    <span className="mini-work-cat">{item.cat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section id="cta" className="cta-section reveal-zoom" style={{ margin: '6rem auto', padding: '0 5%', display: 'flex', justifyContent: 'center', width: '100%', maxWidth: '1200px' }}>
          <div className="cta-outer-card">
            <div className="cta-card">
              <h2>Ready to build something?</h2>
              <p className="cta-subtitle">Tell us what you need — we'll get back to you within 24 hours.</p>
              
              <div className="cta-buttons">
                <Link href="/contact" className="cta-btn primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  Start a Project
                </Link>
                <a href="https://wa.me/918870524355" target="_blank" rel="noopener noreferrer" className="cta-btn secondary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  WhatsApp Us
                </a>
              </div>

              <div className="cta-contact">
                <a href="mailto:thehynoxofficial@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                  thehynoxofficial@gmail.com
                </a>
                <span className="separator">·</span>
                <a href="tel:+918870524355" style={{ color: 'inherit', textDecoration: 'none' }}>
                  +91 88705 24355
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
