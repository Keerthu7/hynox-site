'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const caseStudies = [
  {
    title: 'Zyden Clothing',
    subtitle: 'From Investment Idea to Global Brand with the HYNOX Subscription Model',
    desc: 'Zyden Clothing began as an investment inquiry and evolved into a global clothing brand under the HYNOX ecosystem. We guided the client through investment planning, brand creation, product selection, operational setup, and performance marketing—leading to profitable international sales.',
    category: 'Ecommerce',
    highlight: 'From zero to UK market in 90 days',
    image: '/case-studies/cs_zyden.png',
    slug: 'zyden-global-ecommerce-clothing-brand-development'
  },
  {
    title: 'NSK Tex',
    subtitle: 'Scaling an E-commerce Clothing Brand with Performance Marketing',
    desc: 'NSK Tex is an e-commerce clothing brand built for Gen Z. Despite having trendy, affordable fashion products, the brand faced inconsistent sales and major operational challenges like high return rates and fake COD orders. With a limited budget, they needed smart, results-driven marketing and operational solutions.',
    category: 'Marketing',
    highlight: 'COD fraud eliminated, sales scaled',
    image: '/case-studies/cs_nsk.png',
    slug: 'nsk-tex-ecommerce-performance-marketing-agency'
  },
  {
    title: 'JP Aluminium Interior',
    subtitle: 'Transforming Interior Business with Automation',
    desc: 'JP Aluminium Interior is a leading interior and aluminium works provider in Tamil Nadu. Their challenges revolved around managing leads, quotations, and site updates using manual methods and multiple platforms. They needed an integrated solution that simplified operations, improved customer satisfaction, and eliminated human errors.',
    category: 'ERP & Automation',
    highlight: 'Full automation — saves hours daily',
    image: '/case-studies/cs_jp.png',
    slug: 'jp-aluminium-erp-automation-software-tamil-nadu'
  },
  {
    title: 'graaps',
    subtitle: 'Taking a Clothing Brand Global',
    desc: 'graaps is a Finland-based startup looking to establish a global clothing brand with production in Tirupur, India, and target market in the UK. They needed comprehensive support to bridge geographical gaps and create a sustainable, globally-focused brand identity.',
    category: 'App Development',
    highlight: 'Global brand launched from Tiruppur',
    image: '/case-studies/cs_graaps.png',
    slug: 'graaps-clothing-brand-global-expansion-app-development'
  },
  {
    title: 'Kores',
    subtitle: 'Clothing Manufacturing Wholesale - Custom Development',
    desc: 'Kores needed a tailored software solution to manage their clothing manufacturing wholesale business, from order processing to inventory and client management.',
    category: 'ERP & Automation',
    highlight: 'Custom wholesale system built end to end',
    image: '/case-studies/cs_kores.png',
    slug: 'kores-wholesale-clothing-manufacturing-erp-software'
  },
  {
    title: 'Kido Care',
    subtitle: 'Kids Retail Store - Shopify E-commerce Solution',
    desc: 'Kido Care partnered with HYNOX to build a comprehensive Shopify e-commerce store, focusing on user experience, product presentation, and secure payment gateways.',
    category: 'Ecommerce',
    highlight: 'Live store in 2 weeks',
    image: '/case-studies/cs_kido.png',
    slug: 'kido-care-shopify-ecommerce-development-services'
  },
  {
    title: 'Sun Holidays',
    subtitle: 'Tours and Travels Agency - Custom Development',
    desc: 'HYNOX developed a bespoke web platform for Sun Holidays, integrating features for tour package management, customer bookings, and itinerary customization.',
    category: 'ERP & Automation',
    highlight: 'Complete tour management system',
    image: '/case-studies/cs_sun.png',
    slug: 'sun-holidays-travel-agency-custom-software-development'
  },
  {
    title: 'Livinza',
    subtitle: 'Interiors Business - Custom Development',
    desc: 'HYNOX developed a custom web platform for Livinza, focusing on an immersive portfolio display, project management tools, and client communication features.',
    category: 'App Development',
    highlight: 'Immersive portfolio & project management',
    image: '/case-studies/cs_livinza.png',
    slug: 'livinza-interior-design-project-management-app'
  }
];

const categories = ['All', 'Ecommerce', 'ERP & Automation', 'App Development', 'Marketing'];

export default function CaseStudiesPage() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredStudies = activeTab === 'All' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === activeTab);

  useEffect(() => {
    const animationClasses = [
      'reveal-on-scroll', 'reveal-fade-in', 'reveal-from-left',
      'reveal-from-right', 'reveal-zoom', 'reveal-flip-x', 'reveal-blur',
    ];
    const selector = animationClasses.map(c => `.${c}`).join(', ');
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          entry.target.classList.remove('is-hidden');
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll(selector).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab]);

  return (
    <>
      <Header />
      <main style={{ background: '#000000', color: '#ffffff', minHeight: '100vh', paddingBottom: '6rem' }}>
        
        {/* HERO SECTION */}
        <section className="cs-hero-section reveal-blur">
          <div className="cs-hero-grid">
            {/* Left Content */}
            <div className="cs-hero-left">
              <div className="badge reveal-fade-in" style={{ marginBottom: '1rem' }}>CASE STUDIES</div>
              <h1 className="reveal-from-left reveal-delay-100 cs-page-title">
                Real Projects.<br/>
                <span style={{ color: '#ffffff' }}>Real Results.</span>
              </h1>
              <p className="reveal-from-left reveal-delay-200 cs-page-desc">
                We don't just build software — we solve business problems. Here's proof. Discover how we transform ideas into scalable solutions and drive measurable growth across industries.
              </p>
              <div className="reveal-fade-in reveal-delay-300 cs-hero-btn-container">
                <a href="/contact" className="cs-contact-btn" onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(255,255,255,0.2)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  Start a Project <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="cs-hero-right reveal-zoom reveal-delay-200">
              <div className="cs-hero-img-box">
                <img 
                  src="/case_studies_hero.png" 
                  alt="Case Studies Hero" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* FILTERS */}
        <section className="cs-filters-section reveal-blur">
          <div className="cs-filters-container">
            {categories.map((cat, i) => (
              <button 
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`category-btn-item reveal-fade-in reveal-delay-${(i % 5) * 100} ${activeTab === cat ? 'active' : ''}`}
              >
                {cat === 'All' ? <span style={{ marginRight: '8px' }}>⊞</span> : null}
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* GRID */}
        <section style={{ maxWidth: '1400px', marginTop: 0, marginBottom: '3rem', marginLeft: 'auto', marginRight: 'auto', padding: '0 2rem', minHeight: '400px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '2rem' 
          }}>
            {filteredStudies.map((cs, i) => (
              <div key={`${activeTab}-${i}`} className={`reveal-zoom reveal-delay-${(i % 3) * 100}`} style={{
                background: '#0a0a0a',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, borderColor 0.3s, boxShadow 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                {/* Image */}
                <div style={{ 
                  height: '160px', 
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  position: 'relative',
                  flexShrink: 0,
                  overflow: 'hidden'
                }}>
                  <img src={cs.image} alt={cs.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.25rem' }}>{cs.title}</h3>
                  <div style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 500, marginBottom: '0.75rem', lineHeight: 1.4 }}>{cs.subtitle}</div>
                  <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.85rem', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.6 }}>{cs.desc}</p>
                  
                  <span style={{ 
                    display: 'inline-block', 
                    fontSize: '0.75rem', 
                    color: '#ffffff', 
                    marginBottom: '1rem',
                    fontWeight: 500
                  }}>
                    {cs.category}
                  </span>

                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '0.5rem',
                    color: '#a3a3a3',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    marginBottom: '1.5rem'
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px' }}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                    <span>{cs.highlight}</span>
                  </div>
                  
                  {/* Know More Button */}
                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '1rem', marginTop: 'auto' }}>
                    <a href={`/case-studies/${cs.slug}`} style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'gap 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.gap = '0.75rem'} onMouseLeave={(e) => e.currentTarget.style.gap = '0.5rem'}>
                      Know More <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS THAT CREATE IMPACT BANNER */}
        <section style={{ maxWidth: '1400px', margin: '5rem auto 0', padding: '0 2rem' }} className="reveal-blur">
          <div style={{ 
            background: '#0a0a0a', 
            border: '1px solid rgba(255, 255, 255, 0.05)', 
            borderRadius: '16px', 
            padding: '3rem',
            display: 'flex',
            alignItems: 'center',
            gap: '3rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ flex: '1 1 300px' }}>
              <h2 style={{ fontSize: '1.8rem', color: '#ffffff', fontWeight: 500, marginBottom: '1rem' }}>Projects That Create Impact</h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.6, fontSize: '1rem' }}>
                Hynox has delivered software projects for businesses in Tiruppur, Tamil Nadu and internationally. Our case studies cover ecommerce brands, textile manufacturers, interior businesses, food delivery apps and travel agencies.
              </p>
            </div>
          </div>
        </section>
        
        {/* STATS SECTION */}
        <section style={{ maxWidth: '1400px', margin: '3rem auto 4rem', padding: '0 2rem' }} className="reveal-blur reveal-delay-200">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            <div className="reveal-zoom" style={{ background: '#0a0a0a', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', color: '#ffffff', padding: '1rem', borderRadius: '50%' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', color: '#ffffff', fontWeight: 600 }}>8+</div>
                <div style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Case Studies<br/><span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>Real projects delivered successfully</span></div>
              </div>
            </div>
            
            <div className="reveal-zoom reveal-delay-100" style={{ background: '#0a0a0a', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', color: '#ffffff', padding: '1rem', borderRadius: '50%' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', color: '#ffffff', fontWeight: 600 }}>5+</div>
                <div style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Industries Served<br/><span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>Across different business domains</span></div>
              </div>
            </div>

            <div className="reveal-zoom reveal-delay-200" style={{ background: '#0a0a0a', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', color: '#ffffff', padding: '1rem', borderRadius: '50%' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', color: '#ffffff', fontWeight: 600 }}>15+</div>
                <div style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Businesses Transformed<br/><span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>Through technology and digital solutions</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }} className="reveal-blur reveal-delay-300">
          <div style={{ 
            background: 'linear-gradient(145deg, #1a1a1a, #0a0a0a)', 
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '16px', 
            padding: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <div>
              <h2 style={{ fontSize: '2rem', color: '#ffffff', fontWeight: 600, marginBottom: '0.5rem' }}>Have a Project in Mind?</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>Let's build something amazing together.</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/contact" style={{ background: '#ffffff', color: '#000000', padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#f0f0f0'} onMouseLeave={(e) => e.currentTarget.style.background = '#ffffff'}>
                Get Free Consultation →
              </a>
              <a href="https://wa.me/918870524355" target="_blank" style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#ffffff', padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
