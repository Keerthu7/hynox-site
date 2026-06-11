import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AnimatedSection from '../../components/AnimatedSection';

// Dummy data for "More Case Studies" section
const moreCaseStudies = [
  { title: 'NSK Tex', subtitle: 'Scaling an E-commerce Clothing Brand', image: '/case-studies/cs_nsk.png', slug: 'nsk-tex-ecommerce-performance-marketing-agency', category: 'Marketing' },
  { title: 'JP Aluminium Interior', subtitle: 'Transforming Interior Business', image: '/case-studies/cs_jp.png', slug: 'jp-aluminium-erp-automation-software-tamil-nadu', category: 'ERP & Automation' },
  { title: 'Kido Care', subtitle: 'Kids Retail Store Shopify Solution', image: '/case-studies/cs_kido.png', slug: 'kido-care-shopify-ecommerce-development-services', category: 'Ecommerce' },
  { title: 'Sun Holidays', subtitle: 'Tours and Travels Custom Development', image: '/case-studies/cs_sun.png', slug: 'sun-holidays-travel-agency-custom-software-development', category: 'ERP & Automation' }
];

export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  if (slug === 'zyden-global-ecommerce-clothing-brand-development') {
    return (
      <>
        <Header />
        
        <main style={{ background: '#050505', color: '#ffffff', minHeight: '100vh', paddingTop: '2rem', paddingBottom: '4rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          
          <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '0 2rem' }}>
            

            {/* Breadcrumbs - above hero */}
            <AnimatedSection animation="fadeIn" delay={0}>
              <div style={{ fontSize: '0.85rem', color: '#666666', marginBottom: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                <a href="/" style={{ color: '#666666', textDecoration: 'none' }}>Home</a> &gt; 
                <a href="/case-studies" style={{ color: '#666666', textDecoration: 'none' }}>Case Studies</a> &gt; 
                <span style={{ color: '#ffffff' }}>Zyden Clothing</span>
              </div>
            </AnimatedSection>

            {/* Hero Section */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <AnimatedSection animation="fadeLeft" delay={100}>
                <div style={{ color: '#ffffff', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>Case Study</div>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                  From Investment Idea to Global Brand in 90 Days
                </h1>
                <p style={{ fontSize: '1.1rem', color: '#a3a3a3', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '90%' }}>
                  How we helped Zyden Clothing validate their idea, build their store, and launch in the UK market.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href="#" style={{ background: '#ffffff', color: '#000000', padding: '0.8rem 1.5rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    Visit Live Store <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                  </a>
                  <a href="#cta" style={{ background: 'transparent', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', padding: '0.8rem 1.5rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                    Get Similar Solution
                  </a>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeRight" delay={200}>
                <div style={{ width: '100%', paddingBottom: '75%', position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <img src="/case-studies/cs_zyden.png" alt="Zyden Dashboard" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </AnimatedSection>
            </div>

            {/* Stats Row - White Cards */}
            <AnimatedSection animation="fadeUp" delay={100}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '4rem', marginTop: '6rem' }}>
              {/* Card 1 */}
              <div style={{ background: '#ffffff', color: '#000000', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.5rem', flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: '#f0f0f0', padding: '0.8rem', borderRadius: '8px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>90 Days</div>
                  <div style={{ fontSize: '0.85rem', color: '#666666' }}>From idea to launch</div>
                </div>
              </div>

              {/* Card 2 */}
              <div style={{ background: '#ffffff', color: '#000000', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.5rem', flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: '#f0f0f0', padding: '0.8rem', borderRadius: '8px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>UK Market</div>
                  <div style={{ fontSize: '0.85rem', color: '#666666' }}>Successfully launched</div>
                </div>
              </div>

              {/* Card 3 */}
              <div style={{ background: '#ffffff', color: '#000000', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.5rem', flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: '#f0f0f0', padding: '0.8rem', borderRadius: '8px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>300%+</div>
                  <div style={{ fontSize: '0.85rem', color: '#666666' }}>Growth in first quarter</div>
                </div>
              </div>

              {/* Card 4 */}
              <div style={{ background: '#ffffff', color: '#000000', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.5rem', flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: '#f0f0f0', padding: '0.8rem', borderRadius: '8px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>2.5X</div>
                  <div style={{ fontSize: '0.85rem', color: '#666666' }}>ROAS on ad campaigns</div>
                </div>
              </div>
            </div>
            </AnimatedSection>

            {/* Main Layout (2 Columns) */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '0.5rem' }}>
              
              {/* Left Column (Content) */}
              <div>
              <AnimatedSection animation="fadeLeft" delay={0}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                
                {/* Challenge & Solution Block */}
                <div style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '3rem' }}>
                  
                  <div style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '6px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>The Challenge</h3>
                    </div>
                    <p style={{ color: '#a3a3a3', lineHeight: 1.7, fontSize: '1.05rem' }}>
                      Zyden Clothing started as an investment idea with no online presence. They needed a complete eCommerce solution — from branding and store development to marketing setup — and a fast launch in the competitive UK market.
                    </p>
                  </div>

                  <div style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '6px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>Our Solution</h3>
                    </div>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {[
                        'Built a modern, conversion-focused Shopify store',
                        'Integrated secure payments, shipping & returns',
                        'Designed a clean brand identity and product presentation',
                        'Set up analytics, tracking and email automation',
                        'Launched performance marketing campaigns for traffic & sales'
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.5 }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" style={{ marginTop: '3px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '6px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg></div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>The Results</h3>
                    </div>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {[
                        'Launched the store in just 90 days',
                        'Successfully entered the UK market',
                        'Achieved 300%+ growth in the first quarter',
                        '2.5X ROAS through paid advertising',
                        'Built a strong foundation for long-term brand growth'
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.5 }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" style={{ marginTop: '3px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginTop: '3rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ color: '#ffffff', opacity: 0.5 }}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"/></svg>
                    </div>
                    <div>
                      <p style={{ color: '#ffffff', fontSize: '1.1rem', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '1rem' }}>
                        "Hynox turned our investment idea into a global brand. The store, marketing, and support — everything was top-notch."
                      </p>
                      <p style={{ color: '#a3a3a3', fontSize: '0.9rem', fontWeight: 600 }}>— Team Zyden Clothing</p>
                    </div>
                  </div>

                </div>

                {/* Project Gallery */}
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '1.5rem' }}>Project Gallery</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} style={{ width: '100%', paddingBottom: '60%', position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #222', background: '#000000' }}>
                        <img src="/case-studies/cs_zyden.png" alt={`Gallery ${i}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
              </AnimatedSection>
              </div>

              {/* Right Column (Sidebar) */}
              <div>
              <div style={{ position: 'sticky', top: '6rem' }}>
                <AnimatedSection animation="fadeRight" delay={200}>
                
                {/* Meta Card */}
                <div style={{ background: '#ffffff', color: '#000000', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '2.5rem' }}>
                  
                  <div style={{ background: '#f5f5f5', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', marginBottom: '2.5rem' }}>
                    <div style={{ background: '#000000', color: '#ffffff', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '3px', padding: '0.5rem 1.25rem', borderRadius: '4px' }}>ZYDEN</div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                      <div style={{ color: '#666666', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Client</div>
                      <div style={{ color: '#000000', fontWeight: 500 }}>Zyden Clothing</div>
                    </div>
                    <div>
                      <div style={{ color: '#666666', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Industry</div>
                      <div style={{ color: '#000000', fontWeight: 500 }}>Fashion & eCommerce</div>
                    </div>
                    <div>
                      <div style={{ color: '#666666', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Services</div>
                      <div style={{ color: '#000000', fontWeight: 500, lineHeight: 1.5 }}>Shopify Development, Branding, Performance Marketing</div>
                    </div>
                    <div>
                      <div style={{ color: '#666666', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Technologies</div>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <div style={{ background: '#111', padding: '0.5rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"/></svg></div>
                        <div style={{ background: '#111', padding: '0.5rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
                      </div>
                    </div>
                    <div>
                      <div style={{ color: '#666666', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Timeline</div>
                      <div style={{ color: '#000000', fontWeight: 500 }}>90 Days</div>
                    </div>
                    <div>
                      <div style={{ color: '#666666', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Location</div>
                      <div style={{ color: '#000000', fontWeight: 500 }}>UK</div>
                    </div>
                  </div>

                  {/* Inner CTA Card */}
                  <div style={{ marginTop: '2.5rem', background: '#ffffff', color: '#000000', border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                    <h4 style={{ color: '#000000', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Want similar results for your business?</h4>
                    <p style={{ color: '#666666', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Let's build your success story together.</p>
                    <a href="/contact" style={{ display: 'block', background: '#ffffff', color: '#000000', padding: '0.8rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
                      Get Free Consultation &rarr;
                    </a>
                  </div>

                </div>
                </AnimatedSection>
              </div>
              </div>

            </div>

            {/* More Case Studies */}
            <AnimatedSection animation="fadeUp" delay={0}>
            <div style={{ marginTop: '6rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 600 }}>More Case Studies</h3>
                <a href="/case-studies" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  View All Case Studies <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                {moreCaseStudies.map((cs, i) => (
                  <a key={i} href={`/case-studies/${cs.slug}`} style={{ display: 'block', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', overflow: 'hidden', textDecoration: 'none' }}>
                    <div style={{ height: '140px', position: 'relative' }}>
                      <img src={cs.image} alt={cs.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '1.25rem' }}>
                      <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{cs.title}</h4>
                      <p style={{ color: '#a3a3a3', fontSize: '0.85rem', marginBottom: '1rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{cs.subtitle}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                        <span style={{ color: '#666666', fontSize: '0.75rem' }}>{cs.category}</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            </AnimatedSection>

            {/* Bottom Global CTA Bar */}
            <AnimatedSection animation="scaleIn" delay={100}>
            <div style={{ marginTop: '6rem', background: '#ffffff', borderRadius: '12px', padding: '3rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ background: '#000000', padding: '1rem', borderRadius: '12px' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </div>
                <div>
                  <h3 style={{ color: '#000000', fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>Ready to Build Your Success Story?</h3>
                  <p style={{ color: '#666666', fontSize: '1.1rem' }}>Get a free consultation and let's discuss your project.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="/contact" style={{ background: '#000000', color: '#ffffff', padding: '1rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Get Free Consultation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
                <a href="#" style={{ background: 'transparent', color: '#000000', border: '1px solid #000000', padding: '1rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Chat on WhatsApp <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                </a>
              </div>
            </div>
            </AnimatedSection>

          </div>
        </main>
        
        <Footer />
      </>
    );
  }

  // ── NSK TEX ──
  if (slug === 'nsk-tex-ecommerce-performance-marketing-agency') {
    return (
      <>
        <Header />
        <main style={{ background: '#050505', color: '#ffffff', minHeight: '100vh', paddingTop: '2rem', paddingBottom: '4rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '0 2rem' }}>

            {/* Breadcrumbs */}
            <div style={{ fontSize: '0.85rem', color: '#666666', marginBottom: '1.5rem', display: 'flex', gap: '0.5rem' }}>
              <a href="/" style={{ color: '#666666', textDecoration: 'none' }}>Home</a> &gt;
              <a href="/case-studies" style={{ color: '#666666', textDecoration: 'none' }}>Case Studies</a> &gt;
              <span style={{ color: '#ffffff' }}>NSK Tex</span>
            </div>

            {/* Hero */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <div style={{ color: '#ffffff', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>Case Study</div>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                  Scaling an E-commerce Clothing Brand with Performance Marketing
                </h1>
                <p style={{ fontSize: '1.1rem', color: '#a3a3a3', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '90%' }}>
                  How HYNOX helped NSK Tex eliminate fake COD orders, reduce returns, and drive 300+ confirmed orders through targeted performance marketing.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href="#" style={{ background: '#ffffff', color: '#000000', padding: '0.8rem 1.5rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    Visit Live Store <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                  </a>
                  <a href="#cta" style={{ background: 'transparent', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', padding: '0.8rem 1.5rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                    Get Similar Solution
                  </a>
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <div style={{ width: '100%', paddingBottom: '75%', position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <img src="/case-studies/cs_nsk.png" alt="NSK Tex Dashboard" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '4rem', marginTop: '6rem' }}>
              {[
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, value: '300+', label: 'Confirmed Orders' },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, value: '100%', label: 'Fake COD Eliminated' },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, value: '0%', label: 'COD Abuse Returns' },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, value: 'Lower', label: 'Logistics Costs' },
              ].map((stat, i) => (
                <div key={i} style={{ background: '#ffffff', color: '#000000', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.5rem', flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: '#f0f0f0', padding: '0.8rem', borderRadius: '8px' }}>{stat.icon}</div>
                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{stat.value}</div>
                    <div style={{ fontSize: '0.85rem', color: '#666666' }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Main 2-col layout */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '0.5rem' }}>

              {/* Left */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '3rem' }}>

                  {/* Challenge */}
                  <div style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '6px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>The Challenge</h3>
                    </div>
                    <p style={{ color: '#a3a3a3', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                      NSK Tex had successfully launched its online clothing store but struggled to scale profitably. Key challenges included:
                    </p>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {['Inconsistent online sales', 'Low return on advertising spend', 'High number of fake COD orders', 'Increasing product returns', 'Logistics costs affecting profit margins'].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#a3a3a3', fontSize: '1.05rem' }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" style={{ marginTop: '3px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '6px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>Our Solution</h3>
                    </div>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {['Performance marketing campaigns targeting Gen Z fashion shoppers', 'Audience research, segmentation & interest-based targeting', 'Creative testing and real-time campaign optimization', 'Partial advance COD system to filter fake orders', 'Order verification workflows', 'Customer trust-building strategies'].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.5 }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" style={{ marginTop: '3px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '6px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg></div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>The Results</h3>
                    </div>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {['300+ confirmed orders through targeted performance marketing', '100% elimination of fake COD orders via advance payment model', 'Zero returns from COD abuse', 'Reduced logistics costs from fewer fake shipments', 'Improved customer trust and repeat purchases'].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.5 }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" style={{ marginTop: '3px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <div style={{ marginTop: '3rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ color: '#ffffff', opacity: 0.4, flexShrink: 0 }}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"/></svg>
                    </div>
                    <div>
                      <p style={{ color: '#ffffff', fontSize: '1.1rem', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '1rem' }}>
                        "HYNOX completely solved our fake order problem and helped us finally scale profitably. The partial advance COD model alone changed the game for us."
                      </p>
                      <p style={{ color: '#a3a3a3', fontSize: '0.9rem', fontWeight: 600 }}>— Team NSK Tex</p>
                    </div>
                  </div>
                </div>

                {/* Gallery */}
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '1.5rem' }}>Project Gallery</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} style={{ width: '100%', paddingBottom: '60%', position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #222', background: '#000000' }}>
                        <img src="/case-studies/cs_nsk.png" alt={`NSK Gallery ${i}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div>
              <div style={{ position: 'sticky', top: '6rem' }}>
                <div style={{ background: '#ffffff', color: '#000000', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '2.5rem' }}>
                  <div style={{ background: '#f5f5f5', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', marginBottom: '2.5rem' }}>
                    <div style={{ background: '#000000', color: '#ffffff', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '3px', padding: '0.5rem 1.25rem', borderRadius: '4px' }}>NSK TEX</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {[['Client','NSK Tex'],['Industry','Fashion & eCommerce'],['Services','Performance Marketing, COD Optimization, eCommerce Growth'],['Timeline','3 Months'],['Location','Tamil Nadu, India']].map(([label, val]) => (
                      <div key={label}>
                        <div style={{ color: '#666666', fontSize: '0.85rem', marginBottom: '0.25rem' }}>{label}</div>
                        <div style={{ color: '#000000', fontWeight: 500, lineHeight: 1.5 }}>{val}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: '2.5rem', background: '#ffffff', color: '#000000', border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                    <h4 style={{ color: '#000000', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Want similar results for your business?</h4>
                    <p style={{ color: '#666666', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Let's build your success story together.</p>
                    <a href="/contact" style={{ display: 'block', background: '#000000', color: '#ffffff', padding: '0.8rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
                      Get Free Consultation &rarr;
                    </a>
                  </div>
                </div>
              </div>
              </div>
            </div>

            {/* More Case Studies */}
            <div style={{ marginTop: '6rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 600 }}>More Case Studies</h3>
                <a href="/case-studies" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  View All <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                {moreCaseStudies.filter(cs => cs.slug !== slug).map((cs, i) => (
                  <a key={i} href={`/case-studies/${cs.slug}`} style={{ display: 'block', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', overflow: 'hidden', textDecoration: 'none' }}>
                    <div style={{ height: '140px', position: 'relative' }}>
                      <img src={cs.image} alt={cs.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '1.25rem' }}>
                      <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{cs.title}</h4>
                      <p style={{ color: '#a3a3a3', fontSize: '0.85rem', marginBottom: '1rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cs.subtitle}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                        <span style={{ color: '#666666', fontSize: '0.75rem' }}>{cs.category}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div style={{ marginTop: '6rem', background: '#ffffff', borderRadius: '12px', padding: '3rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ background: '#000000', padding: '1rem', borderRadius: '12px' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </div>
                <div>
                  <h3 style={{ color: '#000000', fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>Ready to Build Your Success Story?</h3>
                  <p style={{ color: '#666666', fontSize: '1.1rem' }}>Get a free consultation and let's discuss your project.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="/contact" style={{ background: '#000000', color: '#ffffff', padding: '1rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Get Free Consultation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
                <a href="#" style={{ background: 'transparent', color: '#000000', border: '1px solid #000000', padding: '1rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Chat on WhatsApp <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                </a>
              </div>
            </div>

          </div>
        </main>
        <Footer />
      </>
    );
  }

  // ── JP ALUMINIUM INTERIOR ──
  if (slug === 'jp-aluminium-erp-automation-software-tamil-nadu') {
    return (
      <>
        <Header />
        <main style={{ background: '#050505', color: '#ffffff', minHeight: '100vh', paddingTop: '2rem', paddingBottom: '4rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '0 2rem' }}>

            <AnimatedSection animation="fadeIn" delay={0}>
              <div style={{ fontSize: '0.85rem', color: '#666666', marginBottom: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                <a href="/" style={{ color: '#666666', textDecoration: 'none' }}>Home</a> &gt;
                <a href="/case-studies" style={{ color: '#666666', textDecoration: 'none' }}>Case Studies</a> &gt;
                <span style={{ color: '#ffffff' }}>JP Aluminium Interior</span>
              </div>
            </AnimatedSection>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <AnimatedSection animation="fadeLeft" delay={100}>
                <div style={{ color: '#ffffff', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>Case Study</div>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                  Transforming an Interior Business with Custom Automation Software
                </h1>
                <p style={{ fontSize: '1.1rem', color: '#a3a3a3', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '90%' }}>
                  How HYNOX replaced manual operations at JP Aluminium Interior with a fully integrated platform for leads, quotations, invoices, workers, and customers.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href="#" style={{ background: '#ffffff', color: '#000000', padding: '0.8rem 1.5rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    View Live Demo <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                  </a>
                  <a href="#cta" style={{ background: 'transparent', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', padding: '0.8rem 1.5rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                    Get Similar Solution
                  </a>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeRight" delay={200}>
                <div style={{ width: '100%', paddingBottom: '75%', position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <img src="/case-studies/cs_jp.png" alt="JP Dashboard" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fadeUp" delay={100}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '4rem', marginTop: '6rem' }}>
              {[
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, value: '100%', label: 'Lead Capture Rate' },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, value: '70%', label: 'Faster Quotations' },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/></svg>, value: '50%', label: 'Fewer Support Calls' },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>, value: '1 App', label: 'Centralized Platform' },
              ].map((stat, i) => (
                <div key={i} style={{ background: '#ffffff', color: '#000000', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.5rem', flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: '#f0f0f0', padding: '0.8rem', borderRadius: '8px' }}>{stat.icon}</div>
                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{stat.value}</div>
                    <div style={{ fontSize: '0.85rem', color: '#666666' }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            </AnimatedSection>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '1.5rem' }}>
              <div>
              <AnimatedSection animation="fadeLeft" delay={0}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '3rem' }}>
                  <div style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '6px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>The Challenge</h3>
                    </div>
                    <p style={{ color: '#a3a3a3', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '1.5rem' }}>JP Aluminium Interior relied on manual processes that caused inefficiencies across leads, projects, and customer communication:</p>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {['Leads recorded in notebooks and spreadsheets', 'Missed customer follow-ups', 'Separate tools for quotations and invoicing', 'Limited visibility into site progress', 'Frequent customer calls requesting updates', 'Time lost managing multiple systems'].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#a3a3a3', fontSize: '1.05rem' }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginTop: '3px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '6px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>Our Solution</h3>
                    </div>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {['Smart lead capture system on HYNOX-powered subdomain', 'Integrated quotation & invoice generation inside the app', 'Worker login portal — daily progress, photos, measurements', 'Customer portal for real-time project visibility', 'Centralized business dashboard replacing all manual tools', 'Automated follow-up workflows and notifications'].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.5 }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginTop: '3px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '6px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg></div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>The Results</h3>
                    </div>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {['100% lead capture — no inquiries lost', '70% faster quotation & invoice creation', 'Real-time site visibility for management via worker portal', '50% reduction in customer support calls', 'Manual work significantly reduced — more time for delivery'].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.5 }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginTop: '3px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ marginTop: '3rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ color: '#ffffff', opacity: 0.4, flexShrink: 0 }}><svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"/></svg></div>
                    <div>
                      <p style={{ color: '#ffffff', fontSize: '1.1rem', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '1rem' }}>"The system HYNOX built changed everything. Our team now operates from one platform and our customers love the live progress portal. We've cut follow-up calls in half."</p>
                      <p style={{ color: '#a3a3a3', fontSize: '0.9rem', fontWeight: 600 }}>— JP Aluminium Interior Team</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '1.5rem' }}>Project Gallery</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {[1,2,3,4].map(i => (
                      <div key={i} style={{ width: '100%', paddingBottom: '60%', position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #222', background: '#000' }}>
                        <img src="/case-studies/cs_jp.png" alt={`JP Gallery ${i}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </AnimatedSection>
              </div>

              <div>
              <div style={{ position: 'sticky', top: '6rem' }}>
                <AnimatedSection animation="fadeRight" delay={200}>
                <div style={{ background: '#ffffff', color: '#000000', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '2.5rem' }}>
                  <div style={{ background: '#f5f5f5', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', marginBottom: '2.5rem' }}>
                    <div style={{ background: '#000000', color: '#ffffff', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '2px', padding: '0.5rem 1rem', borderRadius: '4px', textAlign: 'center', lineHeight: 1.5 }}>JP ALUMINIUM<br/>INTERIOR</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {[['Client','JP Aluminium Interior'],['Industry','Interior Design & Construction'],['Services','Custom ERP, Lead Management, Worker & Customer Portal'],['Timeline','2 Months'],['Location','Tamil Nadu, India']].map(([label, val]) => (
                      <div key={label}>
                        <div style={{ color: '#666666', fontSize: '0.85rem', marginBottom: '0.25rem' }}>{label}</div>
                        <div style={{ color: '#000000', fontWeight: 500, lineHeight: 1.5 }}>{val}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: '2.5rem', background: '#ffffff', border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                    <h4 style={{ color: '#000000', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Want similar results for your business?</h4>
                    <p style={{ color: '#666666', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Let's build your success story together.</p>
                    <a href="/contact" style={{ display: 'block', background: '#000000', color: '#ffffff', padding: '0.8rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>Get Free Consultation &rarr;</a>
                  </div>
                </div>
                </AnimatedSection>
              </div>
              </div>
            </div>

            <AnimatedSection animation="fadeUp" delay={0}>
            <div style={{ marginTop: '6rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 600 }}>More Case Studies</h3>
                <a href="/case-studies" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>View All <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                {moreCaseStudies.filter(cs => cs.slug !== slug).map((cs, i) => (
                  <a key={i} href={`/case-studies/${cs.slug}`} style={{ display: 'block', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', overflow: 'hidden', textDecoration: 'none' }}>
                    <div style={{ height: '140px', position: 'relative' }}><img src={cs.image} alt={cs.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                    <div style={{ padding: '1.25rem' }}>
                      <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{cs.title}</h4>
                      <p style={{ color: '#a3a3a3', fontSize: '0.85rem', marginBottom: '1rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cs.subtitle}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}><span style={{ color: '#666666', fontSize: '0.75rem' }}>{cs.category}</span></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            </AnimatedSection>

            <AnimatedSection animation="scaleIn" delay={100}>
            <div style={{ marginTop: '6rem', background: '#ffffff', borderRadius: '12px', padding: '3rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ background: '#000000', padding: '1rem', borderRadius: '12px' }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></div>
                <div>
                  <h3 style={{ color: '#000000', fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>Ready to Build Your Success Story?</h3>
                  <p style={{ color: '#666666', fontSize: '1.1rem' }}>Get a free consultation and let's discuss your project.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="/contact" style={{ background: '#000000', color: '#ffffff', padding: '1rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Get Free Consultation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
                <a href="#" style={{ background: 'transparent', color: '#000000', border: '1px solid #000000', padding: '1rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Chat on WhatsApp <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></a>
              </div>
            </div>
            </AnimatedSection>

          </div>
        </main>
        <Footer />
      </>
    );
  }

  // ── GRAAPS ──
  if (slug === 'graaps-clothing-brand-global-expansion-app-development') {
    return (
      <>
        <Header />
        <main style={{ background: '#050505', color: '#ffffff', minHeight: '100vh', paddingTop: '2rem', paddingBottom: '4rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '0 2rem' }}>

            {/* Breadcrumb */}
            <AnimatedSection animation="fadeIn" delay={0}>
              <div style={{ fontSize: '0.85rem', color: '#666666', marginBottom: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                <a href="/" style={{ color: '#666666', textDecoration: 'none' }}>Home</a> &gt;
                <a href="/case-studies" style={{ color: '#666666', textDecoration: 'none' }}>Case Studies</a> &gt;
                <span style={{ color: '#ffffff' }}>graaps</span>
              </div>
            </AnimatedSection>

            {/* Hero */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <AnimatedSection animation="fadeLeft" delay={100}>
                <div style={{ color: '#ffffff', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>Case Study</div>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                  Taking a Clothing Brand Global
                </h1>
                <p style={{ fontSize: '1.1rem', color: '#a3a3a3', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '90%' }}>
                  How HYNOX helped graaps — a Finland-based startup — build a clothing brand produced in Tirupur and launched in the UK market.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href="#" style={{ background: '#ffffff', color: '#000000', padding: '0.8rem 1.5rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    Visit Live Store <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                  </a>
                  <a href="#cta" style={{ background: 'transparent', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', padding: '0.8rem 1.5rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                    Get Similar Solution
                  </a>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeRight" delay={200}>
                <div style={{ width: '100%', paddingBottom: '75%', position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <img src="/case-studies/cs_graaps.png" alt="graaps Brand" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </AnimatedSection>
            </div>

            {/* Stats */}
            <AnimatedSection animation="fadeUp" delay={100}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '4rem', marginTop: '6rem' }}>
              {[
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, value: '3 Countries', label: 'Finland · India · UK' },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>, value: 'End-to-End', label: 'Supply Chain Built' },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, value: 'Global Brand', label: 'Identity Created' },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>, value: 'Tirupur → UK', label: 'Export Ready' },
              ].map((stat, i) => (
                <div key={i} style={{ background: '#ffffff', color: '#000000', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.5rem', flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: '#f0f0f0', padding: '0.8rem', borderRadius: '8px' }}>{stat.icon}</div>
                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{stat.value}</div>
                    <div style={{ fontSize: '0.85rem', color: '#666666' }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            </AnimatedSection>

            {/* Main 2-col */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '0.5rem' }}>

              <div>
              <AnimatedSection animation="fadeLeft" delay={0}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '3rem' }}>

                  {/* Client Conversations */}
                  <div style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '6px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>Client Conversations</h3>
                    </div>
                    {[
                      {
                        q: 'We want to start our own clothing brand. But our base is in Finland, and production will be in Tirupur, India. How can we manage this distance without losing control?',
                        a: 'We assured them of end-to-end support — from fabric sourcing, design, and sampling to production and export. With our local presence in Tirupur, we became their eyes and ears on the ground, ensuring smooth communication and real-time updates.'
                      },
                      {
                        q: 'Our target market is the UK. But we don\'t know the right product mix, sizing, and trends that will work there.',
                        a: 'We conducted market research for the UK, adapted to international size charts, and guided them with fashion-forward yet practical designs. This ensured graaps\'s collection would connect instantly with UK consumers.'
                      },
                      {
                        q: 'Logistics worry us. How do we move products from India to the UK efficiently while we manage things from Finland?',
                        a: 'We created a streamlined supply chain, working with trusted shipping partners to handle everything from customs clearance to last-mile delivery in the UK.'
                      },
                      {
                        q: 'We don\'t just want to sell clothes. We want to build a strong brand identity with a global story.',
                        a: 'We positioned graaps as Finland-born, India-powered, and globally focused. We designed a brand book covering logo, colors, and storytelling — highlighting sustainability, premium quality, and affordability.'
                      }
                    ].map((item, i) => (
                      <div key={i} style={{ marginBottom: '2rem', borderLeft: '2px solid rgba(255,255,255,0.08)', paddingLeft: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                          <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.75rem', fontWeight: 700 }}>C</div>
                          <p style={{ color: '#cccccc', fontSize: '1rem', lineHeight: 1.6, fontStyle: 'italic' }}>"{item.q}"</p>
                        </div>
                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                          <div style={{ background: '#ffffff', color: '#000000', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.7rem', fontWeight: 800 }}>HX</div>
                          <p style={{ color: '#a3a3a3', fontSize: '1rem', lineHeight: 1.6 }}>{item.a}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Solution */}
                  <div style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '6px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>What We Delivered</h3>
                    </div>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {[
                        'Fabric sourcing, design consultation & sampling in Tirupur',
                        'Production management with real-time progress updates',
                        'UK market research — sizing, trends, product mix',
                        'Export coordination & customs clearance to UK',
                        'Last-mile delivery partnerships in the UK',
                        'Brand identity: logo, colors, brand book & storytelling',
                        'Positioned as Finland-born, India-powered, globally focused',
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.5 }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginTop: '3px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '6px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg></div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>Outcomes</h3>
                    </div>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {[
                        'Production-ready supply chain from Tirupur to the UK',
                        'Global brand identity with sustainable positioning',
                        'Market-research-driven product development for UK consumers',
                        'Founders fully focused on sales & brand growth in Europe',
                        'Set to launch with a globally competitive brand presence',
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.5 }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginTop: '3px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Why It Matters */}
                  <div style={{ marginTop: '3rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px' }}>
                    <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>Why This Matters</h4>
                    <p style={{ color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.7 }}>
                      This collaboration shows how HYNOX helps international entrepreneurs turn an idea into a global clothing brand. Whether you're in Finland, the UK, or anywhere in the world, we bridge the gap between your vision and India's textile strength.
                    </p>
                  </div>
                </div>

                {/* Gallery */}
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '1.5rem' }}>Project Gallery</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {[1,2,3,4].map(i => (
                      <div key={i} style={{ width: '100%', paddingBottom: '60%', position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #222', background: '#000' }}>
                        <img src="/case-studies/cs_graaps.png" alt={`graaps Gallery ${i}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </AnimatedSection>
              </div>

              {/* Sidebar */}
              <div>
              <div style={{ position: 'sticky', top: '6rem' }}>
                <AnimatedSection animation="fadeRight" delay={200}>
                <div style={{ background: '#ffffff', color: '#000000', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '2.5rem' }}>
                  <div style={{ background: '#f5f5f5', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', marginBottom: '2.5rem' }}>
                    <div style={{ background: '#000000', color: '#ffffff', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '4px', padding: '0.5rem 1.5rem', borderRadius: '4px' }}>graaps</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {[
                      ['Client', 'graaps'],
                      ['Industry', 'Fashion & Global eCommerce'],
                      ['Services', 'Brand Identity, Supply Chain, UK Market Entry, Production Management'],
                      ['Location', 'Finland · Tirupur, India · UK'],
                    ].map(([label, val]) => (
                      <div key={label}>
                        <div style={{ color: '#666666', fontSize: '0.85rem', marginBottom: '0.25rem' }}>{label}</div>
                        <div style={{ color: '#000000', fontWeight: 500, lineHeight: 1.5 }}>{val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['🇫🇮 Finland', '🇮🇳 Tirupur', '🇬🇧 UK Market', 'Sustainable', 'Global Brand'].map(tag => (
                      <span key={tag} style={{ background: '#f0f0f0', color: '#333333', padding: '0.3rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 500 }}>{tag}</span>
                    ))}
                  </div>

                  <div style={{ marginTop: '2rem', background: '#ffffff', border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                    <h4 style={{ color: '#000000', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Want to go global with your brand?</h4>
                    <p style={{ color: '#666666', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Let's build your international success story.</p>
                    <a href="/contact" style={{ display: 'block', background: '#000000', color: '#ffffff', padding: '0.8rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>Get Free Consultation &rarr;</a>
                  </div>
                </div>
                </AnimatedSection>
              </div>
              </div>
            </div>

            {/* More Case Studies */}
            <AnimatedSection animation="fadeUp" delay={0}>
            <div style={{ marginTop: '6rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 600 }}>More Case Studies</h3>
                <a href="/case-studies" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>View All <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                {moreCaseStudies.map((cs, i) => (
                  <a key={i} href={`/case-studies/${cs.slug}`} style={{ display: 'block', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', overflow: 'hidden', textDecoration: 'none' }}>
                    <div style={{ height: '140px', position: 'relative' }}><img src={cs.image} alt={cs.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                    <div style={{ padding: '1.25rem' }}>
                      <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{cs.title}</h4>
                      <p style={{ color: '#a3a3a3', fontSize: '0.85rem', marginBottom: '1rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cs.subtitle}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}><span style={{ color: '#666666', fontSize: '0.75rem' }}>{cs.category}</span></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            </AnimatedSection>

            {/* Bottom CTA */}
            <AnimatedSection animation="scaleIn" delay={100}>
            <div style={{ marginTop: '6rem', background: '#ffffff', borderRadius: '12px', padding: '3rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ background: '#000000', padding: '1rem', borderRadius: '12px' }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></div>
                <div>
                  <h3 style={{ color: '#000000', fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>Ready to Build Your Success Story?</h3>
                  <p style={{ color: '#666666', fontSize: '1.1rem' }}>Get a free consultation and let's discuss your project.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="/contact" style={{ background: '#000000', color: '#ffffff', padding: '1rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Get Free Consultation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
                <a href="#" style={{ background: 'transparent', color: '#000000', border: '1px solid #000000', padding: '1rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Chat on WhatsApp <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></a>
              </div>
            </div>
            </AnimatedSection>

          </div>
        </main>
        <Footer />
      </>
    );
  }

  // ── KORES ──
  if (slug === 'kores-wholesale-clothing-manufacturing-erp-software') {
    return (
      <>
        <Header />
        <main style={{ background: '#050505', color: '#ffffff', minHeight: '100vh', paddingTop: '2rem', paddingBottom: '4rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '0 2rem' }}>

            <AnimatedSection animation="fadeIn" delay={0}>
              <div style={{ fontSize: '0.85rem', color: '#666666', marginBottom: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                <a href="/" style={{ color: '#666666', textDecoration: 'none' }}>Home</a> &gt;
                <a href="/case-studies" style={{ color: '#666666', textDecoration: 'none' }}>Case Studies</a> &gt;
                <span style={{ color: '#ffffff' }}>Kores</span>
              </div>
            </AnimatedSection>

            {/* Hero */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <AnimatedSection animation="fadeLeft" delay={100}>
                <div style={{ color: '#ffffff', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>Case Study</div>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                  Building a Custom Wholesale Management System for a Clothing Manufacturer
                </h1>
                <p style={{ fontSize: '1.1rem', color: '#a3a3a3', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '90%' }}>
                  How HYNOX replaced spreadsheets with a centralized wholesale platform for Kores — covering orders, inventory, clients, and production tracking.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href="#" style={{ background: '#ffffff', color: '#000000', padding: '0.8rem 1.5rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    View Live Demo <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                  </a>
                  <a href="#cta" style={{ background: 'transparent', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', padding: '0.8rem 1.5rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                    Get Similar Solution
                  </a>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeRight" delay={200}>
                <div style={{ width: '100%', paddingBottom: '75%', position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <img src="/case-studies/cs_kores.png" alt="Kores Dashboard" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </AnimatedSection>
            </div>

            {/* Stats */}
            <AnimatedSection animation="fadeUp" delay={100}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '4rem', marginTop: '6rem' }}>
              {[
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>, value: 'Faster', label: 'Order Processing' },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>, value: 'Real-Time', label: 'Inventory Visibility' },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>, value: 'Better', label: 'Client Management' },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>, value: '1 Platform', label: 'All Operations' },
              ].map((stat, i) => (
                <div key={i} style={{ background: '#ffffff', color: '#000000', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.5rem', flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: '#f0f0f0', padding: '0.8rem', borderRadius: '8px' }}>{stat.icon}</div>
                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{stat.value}</div>
                    <div style={{ fontSize: '0.85rem', color: '#666666' }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            </AnimatedSection>

            {/* Main 2-col */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '0.5rem' }}>

              <div>
              <AnimatedSection animation="fadeLeft" delay={0}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '3rem' }}>

                  {/* Challenge */}
                  <div style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '6px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>The Challenge</h3>
                    </div>
                    <p style={{ color: '#a3a3a3', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '1.5rem' }}>Kores was growing steadily, but its operational processes were not built to scale. Key challenges included:</p>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {[
                        'Manual order tracking through spreadsheets',
                        'Difficulty managing multiple wholesale clients',
                        'Inventory updates not synchronized with orders',
                        'Delays in production and dispatch coordination',
                        'Lack of visibility into order status',
                        'Time-consuming communication between teams',
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#a3a3a3', fontSize: '1.05rem' }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginTop: '3px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '6px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>Our Solution</h3>
                    </div>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {[
                        'Custom wholesale order management — quotation to final delivery',
                        'Real-time inventory tracking integrated with live orders',
                        'Dedicated client management module — history, pricing, contacts',
                        'Production workflow monitoring & dispatch coordination',
                        'Business reporting dashboard for operational insights',
                        'Automation of repetitive workflows to reduce manual tasks',
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.5 }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginTop: '3px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '6px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg></div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>The Results</h3>
                    </div>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {[
                        'Faster order processing — single dashboard for all wholesale orders',
                        'Improved inventory visibility — stock-related delays eliminated',
                        'Better client management — accessible order history & pricing',
                        'Reduced manual work — automation replaced spreadsheet processes',
                        'Scalable operations — software foundation ready for future growth',
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.5 }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginTop: '3px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Why It Matters */}
                  <div style={{ marginTop: '3rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px' }}>
                    <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>Why This Project Matters</h4>
                    <p style={{ color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.7 }}>
                      Many textile manufacturers and wholesale businesses still rely on spreadsheets and disconnected systems. By building software around the business instead of forcing the business around generic software, Kores achieved a more efficient, organized, and scalable wholesale operation.
                    </p>
                  </div>
                </div>

                {/* Gallery */}
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '1.5rem' }}>Project Gallery</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {[1,2,3,4].map(i => (
                      <div key={i} style={{ width: '100%', paddingBottom: '60%', position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #222', background: '#000' }}>
                        <img src="/case-studies/cs_kores.png" alt={`Kores Gallery ${i}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </AnimatedSection>
              </div>

              {/* Sidebar */}
              <div>
              <div style={{ position: 'sticky', top: '6rem' }}>
                <AnimatedSection animation="fadeRight" delay={200}>
                <div style={{ background: '#ffffff', color: '#000000', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '2.5rem' }}>
                  <div style={{ background: '#f5f5f5', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', marginBottom: '2.5rem' }}>
                    <div style={{ background: '#000000', color: '#ffffff', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '4px', padding: '0.5rem 1.5rem', borderRadius: '4px' }}>KORES</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {[
                      ['Client', 'Kores'],
                      ['Industry', 'Clothing Manufacturing & Wholesale'],
                      ['Services', 'Custom ERP, Wholesale Management, Inventory Tracking, Client Portal'],
                      ['Location', 'Tamil Nadu, India'],
                    ].map(([label, val]) => (
                      <div key={label}>
                        <div style={{ color: '#666666', fontSize: '0.85rem', marginBottom: '0.25rem' }}>{label}</div>
                        <div style={{ color: '#000000', fontWeight: 500, lineHeight: 1.5 }}>{val}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['Wholesale', 'Manufacturing', 'Inventory', 'ERP', 'Automation'].map(tag => (
                      <span key={tag} style={{ background: '#f0f0f0', color: '#333333', padding: '0.3rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 500 }}>{tag}</span>
                    ))}
                  </div>
                  <div style={{ marginTop: '2rem', background: '#ffffff', border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                    <h4 style={{ color: '#000000', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Want similar results for your business?</h4>
                    <p style={{ color: '#666666', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Let's build your success story together.</p>
                    <a href="/contact" style={{ display: 'block', background: '#000000', color: '#ffffff', padding: '0.8rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>Get Free Consultation &rarr;</a>
                  </div>
                </div>
                </AnimatedSection>
              </div>
              </div>
            </div>

            {/* More Case Studies */}
            <AnimatedSection animation="fadeUp" delay={0}>
            <div style={{ marginTop: '6rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 600 }}>More Case Studies</h3>
                <a href="/case-studies" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>View All <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                {moreCaseStudies.map((cs, i) => (
                  <a key={i} href={`/case-studies/${cs.slug}`} style={{ display: 'block', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', overflow: 'hidden', textDecoration: 'none' }}>
                    <div style={{ height: '140px', position: 'relative' }}><img src={cs.image} alt={cs.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                    <div style={{ padding: '1.25rem' }}>
                      <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{cs.title}</h4>
                      <p style={{ color: '#a3a3a3', fontSize: '0.85rem', marginBottom: '1rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cs.subtitle}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}><span style={{ color: '#666666', fontSize: '0.75rem' }}>{cs.category}</span></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            </AnimatedSection>

            {/* Bottom CTA */}
            <AnimatedSection animation="scaleIn" delay={100}>
            <div style={{ marginTop: '6rem', background: '#ffffff', borderRadius: '12px', padding: '3rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ background: '#000000', padding: '1rem', borderRadius: '12px' }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></div>
                <div>
                  <h3 style={{ color: '#000000', fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>Ready to Build Your Success Story?</h3>
                  <p style={{ color: '#666666', fontSize: '1.1rem' }}>Get a free consultation and let's discuss your project.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="/contact" style={{ background: '#000000', color: '#ffffff', padding: '1rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Get Free Consultation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
                <a href="#" style={{ background: 'transparent', color: '#000000', border: '1px solid #000000', padding: '1rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Chat on WhatsApp <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></a>
              </div>
            </div>
            </AnimatedSection>

          </div>
        </main>
        <Footer />
      </>
    );
  }

  // ── KIDO CARE ──
  if (slug === 'kido-care-shopify-ecommerce-development-services') {
    return (
      <>
        <Header />
        <main style={{ background: '#050505', color: '#ffffff', minHeight: '100vh', paddingTop: '2rem', paddingBottom: '4rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '0 2rem' }}>

            <AnimatedSection animation="fadeIn" delay={0}>
              <div style={{ fontSize: '0.85rem', color: '#666666', marginBottom: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                <a href="/" style={{ color: '#666666', textDecoration: 'none' }}>Home</a> &gt;
                <a href="/case-studies" style={{ color: '#666666', textDecoration: 'none' }}>Case Studies</a> &gt;
                <span style={{ color: '#ffffff' }}>Kido Care</span>
              </div>
            </AnimatedSection>

            {/* Hero */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <AnimatedSection animation="fadeLeft" delay={100}>
                <div style={{ color: '#ffffff', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>Case Study</div>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                  Launching a Kids Retail Brand with Shopify E-commerce Development
                </h1>
                <p style={{ fontSize: '1.1rem', color: '#a3a3a3', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '90%' }}>
                  How HYNOX designed and developed a professional, mobile-responsive Shopify store for Kido Care to generate online sales from day one.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href="#" style={{ background: '#ffffff', color: '#000000', padding: '0.8rem 1.5rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    View Live Store <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                  </a>
                  <a href="#cta" style={{ background: 'transparent', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', padding: '0.8rem 1.5rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                    Get Similar Solution
                  </a>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeRight" delay={200}>
                <div style={{ width: '100%', paddingBottom: '75%', position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <img src="/case-studies/cs_kido.png" alt="Kido Care Dashboard" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </AnimatedSection>
            </div>

            {/* Stats */}
            <AnimatedSection animation="fadeUp" delay={100}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '4rem', marginTop: '6rem' }}>
              {[
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, value: '2 Weeks', label: 'Live Store Launch' },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>, value: 'Custom', label: 'Shopify Storefront' },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>, value: 'Secure', label: 'Payment Integration' },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>, value: 'Mobile', label: 'Responsive Design' },
              ].map((stat, i) => (
                <div key={i} style={{ background: '#ffffff', color: '#000000', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.5rem', flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: '#f0f0f0', padding: '0.8rem', borderRadius: '8px' }}>{stat.icon}</div>
                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{stat.value}</div>
                    <div style={{ fontSize: '0.85rem', color: '#666666' }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            </AnimatedSection>

            {/* Main 2-col */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '0.5rem' }}>

              <div>
              <AnimatedSection animation="fadeLeft" delay={0}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '3rem' }}>

                  {/* Challenge */}
                  <div style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '6px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>The Challenge</h3>
                    </div>
                    <p style={{ color: '#a3a3a3', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '1.5rem' }}>As a new retail business, Kido Care needed a platform capable of generating online sales from day one. Their requirements included:</p>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {[
                        'A professional online store',
                        'Mobile-friendly shopping experience',
                        'Secure payment integration',
                        'Easy product management',
                        'Fast launch timeline',
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#a3a3a3', fontSize: '1.05rem' }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginTop: '3px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '6px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>Our Solution</h3>
                    </div>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {[
                        'Custom Shopify storefront',
                        'Mobile-responsive design',
                        'Product catalog management',
                        'Secure payment gateway integration',
                        'Conversion-focused product pages',
                        'Optimized checkout experience',
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.5 }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginTop: '3px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '6px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg></div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>The Results</h3>
                    </div>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {[
                        'Shopify store launched successfully',
                        'Live eCommerce platform delivered in 2 weeks',
                        'Improved online visibility for the brand',
                        'Simplified product and order management',
                        'Ready-to-scale online retail infrastructure',
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.5 }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginTop: '3px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Why It Matters */}
                  <div style={{ marginTop: '3rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px' }}>
                    <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>Why This Project Matters</h4>
                    <p style={{ color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.7 }}>
                      This project demonstrates how HYNOX helps retail businesses in Tiruppur, Tamil Nadu, and across India launch professional Shopify stores that are designed for growth, conversions, and long-term scalability.
                    </p>
                  </div>
                </div>

                {/* Gallery */}
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '1.5rem' }}>Project Gallery</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {[1,2,3,4].map(i => (
                      <div key={i} style={{ width: '100%', paddingBottom: '60%', position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #222', background: '#000' }}>
                        <img src="/case-studies/cs_kido.png" alt={`Kido Gallery ${i}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </AnimatedSection>
              </div>

              {/* Sidebar */}
              <div>
              <div style={{ position: 'sticky', top: '6rem' }}>
                <AnimatedSection animation="fadeRight" delay={200}>
                <div style={{ background: '#ffffff', color: '#000000', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '2.5rem' }}>
                  <div style={{ background: '#f5f5f5', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', marginBottom: '2.5rem' }}>
                    <div style={{ background: '#000000', color: '#ffffff', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '2px', padding: '0.5rem 1.5rem', borderRadius: '4px' }}>Kido Care</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {[
                      ['Client', 'Kido Care'],
                      ['Industry', 'Kids Retail & eCommerce'],
                      ['Services', 'Shopify Development, eCommerce Store, UI/UX Design'],
                      ['Location', 'Tamil Nadu, India'],
                    ].map(([label, val]) => (
                      <div key={label}>
                        <div style={{ color: '#666666', fontSize: '0.85rem', marginBottom: '0.25rem' }}>{label}</div>
                        <div style={{ color: '#000000', fontWeight: 500, lineHeight: 1.5 }}>{val}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['Shopify', 'eCommerce', 'Retail', 'Web Design'].map(tag => (
                      <span key={tag} style={{ background: '#f0f0f0', color: '#333333', padding: '0.3rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 500 }}>{tag}</span>
                    ))}
                  </div>
                  <div style={{ marginTop: '2rem', background: '#ffffff', border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                    <h4 style={{ color: '#000000', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Looking for Shopify Development?</h4>
                    <p style={{ color: '#666666', fontSize: '0.85rem', marginBottom: '1.5rem' }}>HYNOX provides Shopify development, eCommerce website development, and custom online store solutions.</p>
                    <a href="/contact" style={{ display: 'block', background: '#000000', color: '#ffffff', padding: '0.8rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>Get Free Consultation &rarr;</a>
                  </div>
                </div>
                </AnimatedSection>
              </div>
              </div>
            </div>

            {/* More Case Studies */}
            <AnimatedSection animation="fadeUp" delay={0}>
            <div style={{ marginTop: '6rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 600 }}>More Case Studies</h3>
                <a href="/case-studies" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>View All <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                {moreCaseStudies.map((cs, i) => (
                  <a key={i} href={`/case-studies/${cs.slug}`} style={{ display: 'block', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', overflow: 'hidden', textDecoration: 'none' }}>
                    <div style={{ height: '140px', position: 'relative' }}><img src={cs.image} alt={cs.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                    <div style={{ padding: '1.25rem' }}>
                      <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{cs.title}</h4>
                      <p style={{ color: '#a3a3a3', fontSize: '0.85rem', marginBottom: '1rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cs.subtitle}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}><span style={{ color: '#666666', fontSize: '0.75rem' }}>{cs.category}</span></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            </AnimatedSection>

            {/* Bottom CTA */}
            <AnimatedSection animation="scaleIn" delay={100}>
            <div style={{ marginTop: '6rem', background: '#ffffff', borderRadius: '12px', padding: '3rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ background: '#000000', padding: '1rem', borderRadius: '12px' }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></div>
                <div>
                  <h3 style={{ color: '#000000', fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>Ready to Build Your Success Story?</h3>
                  <p style={{ color: '#666666', fontSize: '1.1rem' }}>Get a free consultation and let's discuss your project.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="/contact" style={{ background: '#000000', color: '#ffffff', padding: '1rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Get Free Consultation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
                <a href="#" style={{ background: 'transparent', color: '#000000', border: '1px solid #000000', padding: '1rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Chat on WhatsApp <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></a>
              </div>
            </div>
            </AnimatedSection>

          </div>
        </main>
        <Footer />
      </>
    );
  }

  // ── SUN HOLIDAYS ──
  if (slug === 'sun-holidays-travel-agency-custom-software-development') {
    return (
      <>
        <Header />
        <main style={{ background: '#050505', color: '#ffffff', minHeight: '100vh', paddingTop: '2rem', paddingBottom: '4rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '0 2rem' }}>

            <AnimatedSection animation="fadeIn" delay={0}>
              <div style={{ fontSize: '0.85rem', color: '#666666', marginBottom: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                <a href="/" style={{ color: '#666666', textDecoration: 'none' }}>Home</a> &gt;
                <a href="/case-studies" style={{ color: '#666666', textDecoration: 'none' }}>Case Studies</a> &gt;
                <span style={{ color: '#ffffff' }}>Sun Holidays</span>
              </div>
            </AnimatedSection>

            {/* Hero */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <AnimatedSection animation="fadeLeft" delay={100}>
                <div style={{ color: '#ffffff', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>Case Study</div>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                  Building a Custom Tour Management Platform for a Travel Agency
                </h1>
                <p style={{ fontSize: '1.1rem', color: '#a3a3a3', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '90%' }}>
                  How HYNOX developed a custom web application that centralized tour management, online bookings, and customer interactions for Sun Holidays.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href="#" style={{ background: '#ffffff', color: '#000000', padding: '0.8rem 1.5rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    View Live Demo <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                  </a>
                  <a href="#cta" style={{ background: 'transparent', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', padding: '0.8rem 1.5rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                    Get Similar Solution
                  </a>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeRight" delay={200}>
                <div style={{ width: '100%', paddingBottom: '75%', position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <img src="/case-studies/cs_sun.png" alt="Sun Holidays Dashboard" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </AnimatedSection>
            </div>

            {/* Stats */}
            <AnimatedSection animation="fadeUp" delay={100}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '4rem', marginTop: '6rem' }}>
              {[
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, value: 'Centralized', label: 'Booking Management' },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, value: 'Faster', label: 'Package Updates' },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>, value: 'Dynamic', label: 'Itinerary Generation' },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, value: 'Automated', label: 'Business Operations' },
              ].map((stat, i) => (
                <div key={i} style={{ background: '#ffffff', color: '#000000', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.5rem', flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: '#f0f0f0', padding: '0.8rem', borderRadius: '8px' }}>{stat.icon}</div>
                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{stat.value}</div>
                    <div style={{ fontSize: '0.85rem', color: '#666666' }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            </AnimatedSection>

            {/* Main 2-col */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '0.5rem' }}>

              <div>
              <AnimatedSection animation="fadeLeft" delay={0}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '3rem' }}>

                  {/* Challenge */}
                  <div style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '6px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>The Challenge</h3>
                    </div>
                    <p style={{ color: '#a3a3a3', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '1.5rem' }}>The agency struggled with increasing demand, leading to several operational bottlenecks:</p>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {[
                        'Manual booking processes',
                        'Customer data management',
                        'Tour package updates',
                        'Itinerary coordination',
                        'Follow-up communication',
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#a3a3a3', fontSize: '1.05rem' }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginTop: '3px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '6px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>Our Solution</h3>
                    </div>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {[
                        'Tour package management',
                        'Online booking system',
                        'Customer management portal',
                        'Dynamic itinerary generation',
                        'Booking tracking dashboard',
                        'Administrative management tools',
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.5 }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginTop: '3px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '6px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg></div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>The Results</h3>
                    </div>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {[
                        'Centralized booking management',
                        'Faster tour package updates',
                        'Improved customer experience',
                        'Reduced manual administrative work',
                        'Better operational efficiency',
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.5 }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginTop: '3px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Why It Matters */}
                  <div style={{ marginTop: '3rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px' }}>
                    <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>Why This Project Matters</h4>
                    <p style={{ color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.7 }}>
                      This case study highlights how custom web application development can help travel agencies automate workflows, improve customer service, and scale operations efficiently.
                    </p>
                  </div>
                </div>

                {/* Gallery */}
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '1.5rem' }}>Project Gallery</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {[1,2,3,4].map(i => (
                      <div key={i} style={{ width: '100%', paddingBottom: '60%', position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #222', background: '#000' }}>
                        <img src="/case-studies/cs_sun.png" alt={`Sun Holidays Gallery ${i}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </AnimatedSection>
              </div>

              {/* Sidebar */}
              <div>
              <div style={{ position: 'sticky', top: '6rem' }}>
                <AnimatedSection animation="fadeRight" delay={200}>
                <div style={{ background: '#ffffff', color: '#000000', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '2.5rem' }}>
                  <div style={{ background: '#f5f5f5', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', marginBottom: '2.5rem' }}>
                    <div style={{ background: '#000000', color: '#ffffff', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '2px', padding: '0.5rem 1.5rem', borderRadius: '4px' }}>Sun Holidays</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {[
                      ['Client', 'Sun Holidays'],
                      ['Industry', 'Travel and Tourism'],
                      ['Services', 'Custom Web Application, Booking System, Itinerary Management'],
                      ['Location', 'Tamil Nadu, India'],
                    ].map(([label, val]) => (
                      <div key={label}>
                        <div style={{ color: '#666666', fontSize: '0.85rem', marginBottom: '0.25rem' }}>{label}</div>
                        <div style={{ color: '#000000', fontWeight: 500, lineHeight: 1.5 }}>{val}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['Travel', 'Booking System', 'Automation', 'Web App'].map(tag => (
                      <span key={tag} style={{ background: '#f0f0f0', color: '#333333', padding: '0.3rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 500 }}>{tag}</span>
                    ))}
                  </div>
                  <div style={{ marginTop: '2rem', background: '#ffffff', border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                    <h4 style={{ color: '#000000', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Looking for Custom Web Development?</h4>
                    <p style={{ color: '#666666', fontSize: '0.85rem', marginBottom: '1.5rem' }}>HYNOX develops custom web applications, booking systems, and business automation software.</p>
                    <a href="/contact" style={{ display: 'block', background: '#000000', color: '#ffffff', padding: '0.8rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>Get Free Consultation &rarr;</a>
                  </div>
                </div>
                </AnimatedSection>
              </div>
              </div>
            </div>

            {/* More Case Studies */}
            <AnimatedSection animation="fadeUp" delay={0}>
            <div style={{ marginTop: '6rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 600 }}>More Case Studies</h3>
                <a href="/case-studies" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>View All <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                {moreCaseStudies.map((cs, i) => (
                  <a key={i} href={`/case-studies/${cs.slug}`} style={{ display: 'block', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', overflow: 'hidden', textDecoration: 'none' }}>
                    <div style={{ height: '140px', position: 'relative' }}><img src={cs.image} alt={cs.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                    <div style={{ padding: '1.25rem' }}>
                      <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{cs.title}</h4>
                      <p style={{ color: '#a3a3a3', fontSize: '0.85rem', marginBottom: '1rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cs.subtitle}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}><span style={{ color: '#666666', fontSize: '0.75rem' }}>{cs.category}</span></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            </AnimatedSection>

            {/* Bottom CTA */}
            <AnimatedSection animation="scaleIn" delay={100}>
            <div style={{ marginTop: '6rem', background: '#ffffff', borderRadius: '12px', padding: '3rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ background: '#000000', padding: '1rem', borderRadius: '12px' }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></div>
                <div>
                  <h3 style={{ color: '#000000', fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>Ready to Build Your Success Story?</h3>
                  <p style={{ color: '#666666', fontSize: '1.1rem' }}>Get a free consultation and let's discuss your project.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="/contact" style={{ background: '#000000', color: '#ffffff', padding: '1rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Get Free Consultation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
                <a href="#" style={{ background: 'transparent', color: '#000000', border: '1px solid #000000', padding: '1rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Chat on WhatsApp <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></a>
              </div>
            </div>
            </AnimatedSection>

          </div>
        </main>
        <Footer />
      </>
    );
  }

  // ── LIVINZA ──
  if (slug === 'livinza-interior-design-project-management-app') {
    return (
      <>
        <Header />
        <main style={{ background: '#050505', color: '#ffffff', minHeight: '100vh', paddingTop: '2rem', paddingBottom: '4rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '0 2rem' }}>

            <AnimatedSection animation="fadeIn" delay={0}>
              <div style={{ fontSize: '0.85rem', color: '#666666', marginBottom: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                <a href="/" style={{ color: '#666666', textDecoration: 'none' }}>Home</a> &gt;
                <a href="/case-studies" style={{ color: '#666666', textDecoration: 'none' }}>Case Studies</a> &gt;
                <span style={{ color: '#ffffff' }}>Livinza</span>
              </div>
            </AnimatedSection>

            {/* Hero */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <AnimatedSection animation="fadeLeft" delay={100}>
                <div style={{ color: '#ffffff', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>Case Study</div>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                  Digital Transformation for an Interior Design Business
                </h1>
                <p style={{ fontSize: '1.1rem', color: '#a3a3a3', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '90%' }}>
                  How HYNOX developed a custom web platform for Livinza to showcase their portfolio, generate leads, and streamline project tracking.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href="#" style={{ background: '#ffffff', color: '#000000', padding: '0.8rem 1.5rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    View Live Demo <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                  </a>
                  <a href="#cta" style={{ background: 'transparent', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', padding: '0.8rem 1.5rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                    Get Similar Solution
                  </a>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeRight" delay={200}>
                <div style={{ width: '100%', paddingBottom: '75%', position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <img src="/case-studies/cs_livinza.png" alt="Livinza Dashboard" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </AnimatedSection>
            </div>

            {/* Stats */}
            <AnimatedSection animation="fadeUp" delay={100}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '4rem', marginTop: '6rem' }}>
              {[
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>, value: 'Premium', label: 'Online Portfolio' },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>, value: 'Centralized', label: 'Client Communication' },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, value: 'Increased', label: 'Lead Generation' },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, value: 'Interactive', label: 'Project Tracking' },
              ].map((stat, i) => (
                <div key={i} style={{ background: '#ffffff', color: '#000000', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.5rem', flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: '#f0f0f0', padding: '0.8rem', borderRadius: '8px' }}>{stat.icon}</div>
                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{stat.value}</div>
                    <div style={{ fontSize: '0.85rem', color: '#666666' }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            </AnimatedSection>

            {/* Main 2-col */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '0.5rem' }}>

              <div>
              <AnimatedSection animation="fadeLeft" delay={0}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '3rem' }}>

                  {/* Challenge */}
                  <div style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '6px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>The Challenge</h3>
                    </div>
                    <p style={{ color: '#a3a3a3', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '1.5rem' }}>Livinza required a digital presence that matched the quality of their interior design work while solving operational needs:</p>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {[
                        'A premium online portfolio',
                        'Better project presentation',
                        'Centralized customer communication',
                        'Project tracking capabilities',
                        'Improved lead generation',
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#a3a3a3', fontSize: '1.05rem' }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginTop: '3px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '6px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>Our Solution</h3>
                    </div>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {[
                        'Interactive project portfolio',
                        'Lead generation system',
                        'Customer inquiry management',
                        'Project tracking dashboard',
                        'Client communication portal',
                        'Mobile-responsive design',
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.5 }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginTop: '3px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '6px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg></div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>The Results</h3>
                    </div>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {[
                        'Stronger online brand presence',
                        'Improved portfolio presentation',
                        'Better customer engagement',
                        'Streamlined project communication',
                        'Increased lead generation opportunities',
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.5 }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginTop: '3px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Why It Matters */}
                  <div style={{ marginTop: '3rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px' }}>
                    <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>Why This Project Matters</h4>
                    <p style={{ color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.7 }}>
                      This project demonstrates how custom web development helps interior businesses modernize their operations, attract more clients, and manage projects more effectively.
                    </p>
                  </div>
                </div>

                {/* Gallery */}
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '1.5rem' }}>Project Gallery</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {[1,2,3,4].map(i => (
                      <div key={i} style={{ width: '100%', paddingBottom: '60%', position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #222', background: '#000' }}>
                        <img src="/case-studies/cs_livinza.png" alt={`Livinza Gallery ${i}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </AnimatedSection>
              </div>

              {/* Sidebar */}
              <div>
              <div style={{ position: 'sticky', top: '6rem' }}>
                <AnimatedSection animation="fadeRight" delay={200}>
                <div style={{ background: '#ffffff', color: '#000000', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '2.5rem' }}>
                  <div style={{ background: '#f5f5f5', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', marginBottom: '2.5rem' }}>
                    <div style={{ background: '#000000', color: '#ffffff', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '4px', padding: '0.5rem 1.5rem', borderRadius: '4px' }}>Livinza</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {[
                      ['Client', 'Livinza'],
                      ['Industry', 'Interior Design & Home Solutions'],
                      ['Services', 'Custom Web Platform, Project Management, Client Portal'],
                      ['Location', 'Tamil Nadu, India'],
                    ].map(([label, val]) => (
                      <div key={label}>
                        <div style={{ color: '#666666', fontSize: '0.85rem', marginBottom: '0.25rem' }}>{label}</div>
                        <div style={{ color: '#000000', fontWeight: 500, lineHeight: 1.5 }}>{val}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['Interior Design', 'Web Platform', 'Client Portal', 'Lead Gen'].map(tag => (
                      <span key={tag} style={{ background: '#f0f0f0', color: '#333333', padding: '0.3rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 500 }}>{tag}</span>
                    ))}
                  </div>
                  <div style={{ marginTop: '2rem', background: '#ffffff', border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                    <h4 style={{ color: '#000000', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Looking for Custom Software Development?</h4>
                    <p style={{ color: '#666666', fontSize: '0.85rem', marginBottom: '1.5rem' }}>HYNOX builds custom websites, business applications, and client portals.</p>
                    <a href="/contact" style={{ display: 'block', background: '#000000', color: '#ffffff', padding: '0.8rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>Get Free Consultation &rarr;</a>
                  </div>
                </div>
                </AnimatedSection>
              </div>
              </div>
            </div>

            {/* More Case Studies */}
            <AnimatedSection animation="fadeUp" delay={0}>
            <div style={{ marginTop: '6rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 600 }}>More Case Studies</h3>
                <a href="/case-studies" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>View All <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                {moreCaseStudies.map((cs, i) => (
                  <a key={i} href={`/case-studies/${cs.slug}`} style={{ display: 'block', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', overflow: 'hidden', textDecoration: 'none' }}>
                    <div style={{ height: '140px', position: 'relative' }}><img src={cs.image} alt={cs.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                    <div style={{ padding: '1.25rem' }}>
                      <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{cs.title}</h4>
                      <p style={{ color: '#a3a3a3', fontSize: '0.85rem', marginBottom: '1rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cs.subtitle}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}><span style={{ color: '#666666', fontSize: '0.75rem' }}>{cs.category}</span></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            </AnimatedSection>

            {/* Bottom CTA */}
            <AnimatedSection animation="scaleIn" delay={100}>
            <div style={{ marginTop: '6rem', background: '#ffffff', borderRadius: '12px', padding: '3rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ background: '#000000', padding: '1rem', borderRadius: '12px' }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></div>
                <div>
                  <h3 style={{ color: '#000000', fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>Ready to Build Your Success Story?</h3>
                  <p style={{ color: '#666666', fontSize: '1.1rem' }}>Get a free consultation and let's discuss your project.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="/contact" style={{ background: '#000000', color: '#ffffff', padding: '1rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Get Free Consultation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
                <a href="#" style={{ background: 'transparent', color: '#000000', border: '1px solid #000000', padding: '1rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Chat on WhatsApp <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></a>
              </div>
            </div>
            </AnimatedSection>

          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Fallback for other case studies



  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <>
      <Header />
      <main style={{ background: '#000000', color: '#ffffff', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '6rem' }}>
        <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <div className="badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>CASE STUDY DETAILS</div>
          <h1 style={{ fontSize: '3rem', fontWeight: 600, marginBottom: '2rem', lineHeight: 1.2 }}>
            {title}
          </h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1.2rem', marginBottom: '3rem' }}>
            We are currently documenting the complete journey of this project. Check back soon for the full case study including challenges, solutions, and measurable impact.
          </p>
          <div style={{ height: '400px', background: '#0a0a0a', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#a3a3a3', fontSize: '1.1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Coming Soon</span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
