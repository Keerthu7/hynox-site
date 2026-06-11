"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import HeroIllustration from "./components/HeroIllustration";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  /* 
  const messages = [
    { text: "Welcome to Hynox.", bg: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" },
    { text: "We build Websites.", bg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" },
    { text: "Mobile Apps.", bg: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" },
    { text: "Custom Software.", bg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" },
    { text: "Shopify Stores.", bg: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop" },
    { text: "& ERP Systems.", bg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" }
  ];
  const [showIntro, setShowIntro] = useState(true);
  const [step, setStep] = useState(0);
  */

  useEffect(() => {
    // Bi-directional Scroll Animation Observer
    const animationClasses = [
      'reveal-on-scroll',
      'reveal-fade-in',
      'reveal-from-left',
      'reveal-from-right',
      'reveal-zoom',
      'reveal-flip-x',
      'reveal-blur',
      'reveal-rotate',
      'reveal-scale-up',
    ];

    const selector = animationClasses.map(c => `.${c}`).join(', ');

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          entry.target.classList.remove('is-hidden');
        } else {
          // Reverse animation when scrolling back up
          entry.target.classList.remove('is-visible');
          entry.target.classList.add('is-hidden');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 
      {showIntro && (
        <section className="intro-screen">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className="intro-bg-image" 
              style={{ 
                backgroundImage: `url(${msg.bg})`,
                opacity: step === index ? 1 : 0 
              }} 
            />
          ))}
          <div className="intro-bg-overlay"></div>
          <h1 
            key={step} 
            className="intro-sequence-text-white"
          >
            {messages[step]?.text || ""}
          </h1>
        </section>
      )} 
      */}

      <Header />

      <main id="home" className="hero-2col-section">
        <div className="hero-aurora-glow"></div>
        <div className="hero-2col-container">
          <div className="hero-2col-content">
            <div className="badge reveal-blur">
              Software &amp; E-commerce Company in Tiruppur
            </div>
            
            <h1 className="reveal-from-left reveal-delay-100">Custom Software, Web &amp; App Development in Tiruppur</h1>
            
            <p className="reveal-from-left reveal-delay-200">
              HYNOX is the leading software development company in Tiruppur, Tamil Nadu. We build fast websites, custom mobile apps, responsive ERP systems, and AI automation to scale your business globally.
            </p>
            
            <div className="hero-actions reveal-from-left reveal-delay-300">
              <a href="#" className="btn btn-hero-solid">Get Free Consultation</a>
              <a href="#" className="btn btn-hero-outline">See Our Work</a>
            </div>
          </div>
          
          <div className="hero-2col-image-wrapper reveal-from-right reveal-delay-200">
            <HeroIllustration />
          </div>
        </div>
      </main>

      <div className="marquee-container reveal-fade-in reveal-delay-400">
        <div className="marquee-content">
          <span className="marquee-text">Trusted by 15+ businesses across India, UK & Finland — from Tiruppur textile brands to global ecommerce stores</span>
          <span className="marquee-text">Trusted by 15+ businesses across India, UK & Finland — from Tiruppur textile brands to global ecommerce stores</span>
          <span className="marquee-text">Trusted by 15+ businesses across India, UK & Finland — from Tiruppur textile brands to global ecommerce stores</span>
          <span className="marquee-text">Trusted by 15+ businesses across India, UK & Finland — from Tiruppur textile brands to global ecommerce stores</span>
        </div>
      </div>

      <section className="global-reach">
        <span className="section-subtitle reveal-blur">GLOBAL REACH</span>
        <h2 className="reveal-on-scroll">Delivering from Tiruppur to the world</h2>
        
        <div className="cards-grid">
          <div className="reach-card reveal-from-left reveal-delay-100">
            <div className="card-header">
              <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className="card-flag" />
              <h3>IN</h3>
            </div>
            <h4>India</h4>
            <p>15+ clients across Tamil Nadu — textile brands, retail, travel & food businesses</p>
          </div>
          
          <div className="reach-card reveal-zoom reveal-delay-200">
            <div className="card-header">
              <img src="https://flagcdn.com/w40/gb.png" alt="UK Flag" className="card-flag" />
              <h3>GB</h3>
            </div>
            <h4>United Kingdom</h4>
            <p>Built Graaps clothing brand's online store targeting the UK market</p>
          </div>
          
          <div className="reach-card reveal-from-right reveal-delay-300">
            <div className="card-header">
              <img src="https://flagcdn.com/w40/fi.png" alt="Finland Flag" className="card-flag" />
              <h3>FI</h3>
            </div>
            <h4>Finland</h4>
            <p>Supported Graaps' global brand launch from their Finland base</p>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="services-header reveal-blur">  
          <span className="section-subtitle">OUR SERVICES</span>
          <h2>Software &amp; Digital Services in Tiruppur</h2>
          <p>Custom software development and digital marketing services. Design, development, and marketing — all under one roof.</p>
        </div>

        <div className="services-category reveal-from-left reveal-delay-100">
          <h3 className="category-title">BUILD</h3>
          <div className="services-grid">
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" alt="Website Development" className="service-card-image" />
              <div className="service-card-content">
                <span className="badge-dev">Development</span>
                <h4>Website Development</h4>
                <p>Fast, modern websites that convert visitors into customers</p>
                <Link href="/services/website-development" className="service-link">Learn More <span>→</span></Link>
              </div>
            </div>
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop" alt="Mobile Apps" className="service-card-image" />
              <div className="service-card-content">
                <span className="badge-dev">Development</span>
                <h4>Mobile Apps</h4>
                <p>iOS & Android apps built for your business workflow</p>
                <Link href="/services/mobile-apps" className="service-link">Learn More <span>→</span></Link>
              </div>
            </div>
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" alt="Custom Software & ERP" className="service-card-image" />
              <div className="service-card-content">
                <span className="badge-dev">Development</span>
                <h4>Custom Software & ERP</h4>
                <p>Automate operations — orders, inventory, billing, all in one system</p>
                <Link href="/services/erp-software" className="service-link">Learn More <span>→</span></Link>
              </div>
            </div>
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop" alt="Shopify Stores" className="service-card-image" />
              <div className="service-card-content">
                <span className="badge-dev">Development</span>
                <h4>Shopify Stores</h4>
                <p>Launch your ecommerce store — from setup to first sale</p>
                <Link href="/services/shopify-stores" className="service-link">Learn More <span>→</span></Link>
              </div>
            </div>
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop" alt="AI/ML Solutions" className="service-card-image" />
              <div className="service-card-content">
                <span className="badge-ai">AI/ML</span>
                <h4>AI/ML Solutions</h4>
                <p>Automate repetitive tasks, reduce costs, scale faster</p>
                <Link href="/services/ai-solutions" className="service-link">Learn More <span>→</span></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="services-category reveal-from-right reveal-delay-200">
          <h3 className="category-title">GROW</h3>
          <div className="services-grid">
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" alt="Performance Marketing" className="service-card-image" />
              <div className="service-card-content">
                <span className="badge-marketing">Marketing</span>
                <h4>Performance Marketing</h4>
                <p>Meta & Google Ads that bring real paying customers</p>
                <Link href="/services/performance-marketing" className="service-link">Learn More <span>→</span></Link>
              </div>
            </div>
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" alt="Social Media Marketing" className="service-card-image" />
              <div className="service-card-content">
                <span className="badge-marketing">Marketing</span>
                <h4>Social Media Marketing</h4>
                <p>Content + strategy to grow your brand online</p>
                <Link href="/services/social-media-marketing" className="service-link">Learn More <span>→</span></Link>
              </div>
            </div>
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=800&auto=format&fit=crop" alt="UGC Video Creation" className="service-card-image" />
              <div className="service-card-content">
                <span className="badge-content">Content</span>
                <h4>UGC Video Creation</h4>
                <p>Authentic product videos that drive sales</p>
                <Link href="/services/ugc-video-creation" className="service-link">Learn More <span>→</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="business-types-section">
        <div className="section-header reveal-on-scroll">
          <span className="section-subtitle">BUILT FOR BUSINESSES LIKE YOURS</span>
          <h2>What kind of business are you?</h2>
        </div>

        <div className="business-grid reveal-zoom reveal-delay-200">
          <div className="business-card">
            <div className="business-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </div>
            <h4>Ecommerce Brands</h4>
            <p>We help clothing, food & retail businesses go online — with stores that actually sell.</p>
            <a href="#" className="business-link">Scale your brand <span>→</span></a>
          </div>

          <div className="business-card">
            <div className="business-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>
            </div>
            <h4>Textile & Manufacturing</h4>
            <p>ERP & automation systems that replace spreadsheets — orders, inventory, tracking.</p>
            <a href="#" className="business-link">Automate your business <span>→</span></a>
          </div>

          <div className="business-card">
            <div className="business-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>
            <h4>Service Businesses</h4>
            <p>Interiors, travel, consultancies — website, app & digital presence from scratch.</p>
            <a href="#" className="business-link">Get started <span>→</span></a>
          </div>
        </div>
      </section>
      <section id="work" className="our-work-section">
        <div className="section-header reveal-flip-x">
          <span className="section-subtitle">OUR WORK</span>
          <h2>Real projects. Real results.</h2>
        </div>

        <div className="work-grid reveal-on-scroll reveal-delay-200">
          {[
            { title: "SugarStar", category: "Shopify Development", badgeClass: "badge-dev", desc: "Premium confectionery online store", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop" },
            { title: "JP Interiors App", category: "App Development", badgeClass: "badge-dev", desc: "Custom business automation and project management app", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop" },
            { title: "Team3 Associates", category: "Custom Development", badgeClass: "badge-dev", desc: "Interior Design and Project Execution", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
            { title: "JP Interiors Web", category: "Web Development", badgeClass: "badge-dev", desc: "Interior design portfolio and service showcase", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop" },
            { title: "Food delivery app", category: "Custom Development", badgeClass: "badge-dev", desc: "On-demand food delivery service", image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=800&auto=format&fit=crop" },
            { title: "Teerex", category: "Custom Development", badgeClass: "badge-dev", desc: "E-commerce platform with custom features", image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=800&auto=format&fit=crop" },
            { title: "Mallika Garments", category: "Custom Development", badgeClass: "badge-dev", desc: "Fashion retail business solution", image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop" },
            { title: "Graaps", category: "Clothing Brand", badgeClass: "badge-marketing", desc: "Online clothing store", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop" },
            { title: "Zydenn", category: "Clothing Brand", badgeClass: "badge-marketing", desc: "Online clothing store", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" },
            { title: "Kores Fabrics", category: "Clothing Brand", badgeClass: "badge-marketing", desc: "Online clothing Wholesale Store", image: "https://images.unsplash.com/photo-1558769132-cb1fac0840f2?q=80&w=800&auto=format&fit=crop" },
            { title: "Kido Care", category: "Kids Clothing Brand", badgeClass: "badge-ai", desc: "Online clothing store", image: "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?q=80&w=800&auto=format&fit=crop" },
            { title: "Sun Holidays", category: "Tours and Travel", badgeClass: "badge-content", desc: "Travel Agency Portfolio", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop" },
            { title: "Twinstar", category: "Clothing Brand", badgeClass: "badge-marketing", desc: "Online clothing store", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop" },
            { title: "Livinza", category: "Interior Business", badgeClass: "badge-content", desc: "Interior Business Portfolio", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop" }
          ].map((project, index) => (
            <div className="work-card" key={index}>
              <div className="work-card-image">
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="work-card-content">
                <span className={project.badgeClass}>{project.category}</span>
                <h4 className="work-title">{project.title}</h4>
                <p className="work-highlight">
                  <span className="check-icon">✓</span> {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="stats-row reveal-zoom reveal-delay-300">
          <div className="stat-card">
            <h3 className="stat-value">15+</h3>
            <span className="stat-label">Projects delivered</span>
          </div>
          <div className="stat-card">
            <h3 className="stat-value">3</h3>
            <span className="stat-label">Countries</span>
          </div>
          <div className="stat-card">
            <h3 className="stat-value">5+</h3>
            <span className="stat-label">Industries</span>
          </div>
          <div className="stat-card">
            <h3 className="stat-value">24h</h3>
            <span className="stat-label">Response time</span>
          </div>
        </div>
      </section>

      <section id="clients" className="clients-testimonials-section">
        <div className="section-header reveal-blur">
          <span className="section-subtitle">OUR CLIENTS</span>
          <h2>Businesses that trust us</h2>
        </div>

        <div className="client-logo-grid reveal-zoom reveal-delay-200">
          {[
            { name: "SugarStar", category: "Textile", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&auto=format&fit=crop" },
            { name: "JP Aluminium", category: "Interiors", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&auto=format&fit=crop" },
            { name: "Team3Associates", category: "Architectural", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&auto=format&fit=crop" },
            { name: "Aharraa", category: "Food", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&auto=format&fit=crop" },
            { name: "Teerex", category: "Textile", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&auto=format&fit=crop" },
            { name: "Twinstar", category: "Textile", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&auto=format&fit=crop" },
            { name: "Kyto", category: "Textile", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&auto=format&fit=crop" },
            { name: "NSK", category: "Textile", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&auto=format&fit=crop" },
            { name: "Mallika Garments", category: "Textile", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&auto=format&fit=crop" },
            { name: "NP Global Exports", category: "Textile", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&auto=format&fit=crop" },
            { name: "Zyden", category: "Textile", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&auto=format&fit=crop" },
            { name: "Graaps", category: "Textile", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&auto=format&fit=crop" },
            { name: "Kores Fabrics", category: "Textile", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&auto=format&fit=crop" },
            { name: "Kido Care", category: "Textile", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&auto=format&fit=crop" },
            { name: "Sun Holidays", category: "Travel", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&auto=format&fit=crop" },
            { name: "Livinza", category: "Textile", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&auto=format&fit=crop" }
          ].map((client, index) => (
            <div className="client-logo-item" key={index}>
              <div className="client-logo-box">
                <img src={client.logo} alt={client.name} />
              </div>
              <p className="client-logo-name">{client.name}</p>
              <p className="client-logo-category">{client.category}</p>
            </div>
          ))}
        </div>

        <div className="testimonials-marquee-wrapper reveal-from-left reveal-delay-300">
          <div className="testimonials-marquee-container">
            <div className="testimonials-marquee-content">
              {[
                { quote: "Hynox built our entire store and handled our ads. Sales started within the first week.", author: "Zyden Clothing" },
                { quote: "They replaced our entire manual process with one system. Saves us hours every day.", author: "JP Aluminium" },
                { quote: "Our Shopify store's conversion rate doubled after the redesign. The team is incredible!", author: "SugarStar" },
                { quote: "The business automation app they built for us completely transformed our workflow.", author: "JP Interiors" },
                { quote: "Professional, fast, and highly skilled. They delivered our platform ahead of schedule.", author: "Teerex" },
                { quote: "We scaled our UK operations seamlessly thanks to the robust Shopify store they developed.", author: "Graaps" },
                { quote: "The best tech partners we've ever worked with. The travel booking system is flawless.", author: "Sun Holidays" },
                { quote: "A completely stress-free experience. Our interior design portfolio website looks incredibly premium.", author: "Team3 Associates" },
                { quote: "From retail to a digital powerhouse. The mobile app they built is a game-changer.", author: "Mallika Garments" },
                { quote: "Our kids' clothing brand went live in just 2 weeks. Absolutely stellar execution and support.", author: "Kido Care" },
                // Duplicate for infinite scroll
                { quote: "Hynox built our entire store and handled our ads. Sales started within the first week.", author: "Zyden Clothing" },
                { quote: "They replaced our entire manual process with one system. Saves us hours every day.", author: "JP Aluminium" },
                { quote: "Our Shopify store's conversion rate doubled after the redesign. The team is incredible!", author: "SugarStar" },
                { quote: "The business automation app they built for us completely transformed our workflow.", author: "JP Interiors" },
                { quote: "Professional, fast, and highly skilled. They delivered our platform ahead of schedule.", author: "Teerex" },
                { quote: "We scaled our UK operations seamlessly thanks to the robust Shopify store they developed.", author: "Graaps" },
                { quote: "The best tech partners we've ever worked with. The travel booking system is flawless.", author: "Sun Holidays" },
                { quote: "A completely stress-free experience. Our interior design portfolio website looks incredibly premium.", author: "Team3 Associates" },
                { quote: "From retail to a digital powerhouse. The mobile app they built is a game-changer.", author: "Mallika Garments" },
                { quote: "Our kids' clothing brand went live in just 2 weeks. Absolutely stellar execution and support.", author: "Kido Care" }
              ].map((testimonial, index) => (
                <div className="testimonial-card" key={index}>
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <p className="testimonial-author">— {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="why-choose-us-section">
        <div className="section-header reveal-flip-x">
          <span className="section-subtitle">WHY HYNOX</span>
          <h2>Software Engineers &amp; Marketers in Tiruppur</h2>
        </div>
        
        <div className="features-bento-grid reveal-on-scroll reveal-delay-200">
          {[
            { title: "Full stack team", desc: "Design, development and marketing — one team, one place, no middlemen. We handle the entire lifecycle of your product." },
            { title: "Based in Tiruppur", desc: "As the top software company in Tiruppur, we understand Tamil Nadu's textile, garments manufacturing, and business landscape better than anyone." },
            { title: "Fast delivery", desc: "Most projects delivered in 2–6 weeks — not 6 months." },
            { title: "Direct communication", desc: "You talk to the developers actually building your product — not a sales rep." },
            { title: "Global experience", desc: "Delivered premium projects for clients across India, UK and Finland." },
            { title: "Post-launch support", desc: "We don't disappear after delivery — ongoing support, maintenance, and updates are part of our commitment to your growth." }
          ].map((feature, index) => (
            <div className="bento-card" key={index}>
              <div className="bento-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="bento-content">
                <h3 className="bento-title">{feature.title}</h3>
                <p className="bento-desc">{feature.desc}</p>
              </div>
              <div className="bento-glow"></div>
            </div>
          ))}
        </div>
      </section>

      <FAQ />

      <section id="cta" className="cta-section reveal-zoom">
        <div className="cta-outer-card">
          <div className="cta-card">
            <h2>Ready to build something?</h2>
            <p className="cta-subtitle">Tell us what you need — we'll get back to you within 24 hours.</p>
            
            <div className="cta-buttons">
              <button className="cta-btn primary">Start a Project</button>
              <button className="cta-btn secondary">WhatsApp Us</button>
            </div>

            <div className="cta-contact">
              <span>thehynoxofficial@gmail.com</span>
              <span className="separator">·</span>
              <span>+91 88705 24355</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
