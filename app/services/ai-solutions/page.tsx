'use client';

import { useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { Check, ArrowRight } from 'lucide-react';
import Header from '../../components/Header';
import ServiceCTA from '../../components/ServiceCTA';
import Footer from '../../components/Footer';

export default function AISolutionsPage() {
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

  const whatWeBuild = [
    { icon: 'Bot',  title: 'Custom AI Chatbots',      desc: 'Intelligent customer support agents integrated with WhatsApp, Website, and CRM to answer queries 24/7.' },
    { icon: 'FileText',  title: 'Smart Document OCR',      desc: 'Automate invoice scanning, transport bill entries, and data extraction using custom vision models.' },
    { icon: 'BarChart3',  title: 'Predictive Analytics',     desc: 'Demand forecasting, sales projections, and inventory estimation models based on historical trends.' },
    { icon: 'MessageSquare',  title: 'Natural Language Tools',  desc: 'Text summarization, lead sentiment analysis, customer feedback parsing, and classification.' },
    { icon: 'Repeat',  title: 'Automation Pipelines',    desc: 'Chain multiple AI models to clean raw data, compile reports, and trigger automated alerts.' },
    { icon: 'Search',  title: 'Semantic Smart Search',   desc: 'Advanced search tools that index your files and databases, retrieving records based on context.' },
  ];

  const whatYouGet = [
    { icon: 'Shield', title: 'Complete Data Security',   desc: 'Secure enterprise isolation ensuring your training datasets never leak.' },
    { icon: 'Plug', title: 'API & Chat Integrations',   desc: 'Deploy chatbots directly into WhatsApp, Telegram, or internal web portals.' },
    { icon: 'Settings', title: 'Custom Model Tuning',       desc: 'Fine-tune pre-trained models on your specific company knowledge bases.' },
    { icon: 'BarChart3', title: 'Analytics Dashboards',     desc: 'Track API usage, chatbot conversations, accuracy rates, and actions taken.' },
    { icon: 'Zap', title: 'Blazing Fast APIs',        desc: 'Optimized serverless microservices for low latency responses.' },
    { icon: 'Users', title: 'User Access Controls',     desc: 'Manage keys, limits, and authorization scopes for employees.' },
    { icon: 'TrendingUp', title: 'Regular Optimization',     desc: 'Ongoing evaluation of model drift, fine-tuning scripts, and updates.' },
    { icon: 'Headphones', title: 'Developer Support',         desc: 'Direct developer maintenance and updates to align models with new systems.' },
  ];

  const whyChoose = [
    { title: 'Focus on Practical ROI',       desc: 'We focus on practical business value — replacing manual data entry and speeding up support, not AI buzzwords.' },
    { title: 'Full Data Confidentiality',    desc: 'Your customer data and inventory numbers stay private. We set up private cloud instances.' },
    { title: 'Direct Engineering Contact',   desc: 'Collaborate directly with developers writing and tuning the algorithms.' },
    { title: 'Legacy Systems Friendly',      desc: 'We specialize in writing APIs to link custom models to your existing ERP or databases.' },
    { title: 'Tiruppur Local Touch',         desc: 'We understand local workflow challenges in textiles, distribution, and manufacturing.' },
  ];

  const process = [
    { step: '01', title: 'Consult',   desc: 'We evaluate your manual workflows and locate tasks that can be automated.' },
    { step: '02', title: 'Data Prep', desc: 'We clean and organize your historical datasets for training and testing.' },
    { step: '03', title: 'Train',     desc: 'We construct and fine-tune models to match your domain terminology.' },
    { step: '04', title: 'Dashboard', desc: 'We develop the admin dashboard and integrate API connections.' },
    { step: '05', title: 'Deploy',    desc: 'We deploy to production servers, conduct tests, and set up monitor logs.' },
  ];

  const portfolio = [
    { title: "SugarStar", cat: "Shopify Development", desc: "Premium confectionery online store", img: "/images/sugarstar_web.jpeg" },
    { title: "JP Interiors App", cat: "App Development", desc: "Custom business automation and project management app", img: "/images/JpApp_works.png" },
    { title: "Team3 Associates", cat: "Custom Development", desc: "Interior Design and Project Execution", img: "/images/team3_web.png" },
    { title: "JP Interiors Web", cat: "Web Development", desc: "Interior design portfolio and service showcase", img: "/images/JpWeb_works.png" },
    { title: "Teerex", cat: "Custom Development", desc: "E-commerce platform with custom features", img: "/images/graaps_web.png" },
    { title: "Mallika Garments", cat: "Custom Development", desc: "Fashion retail business solution", img: "/images/malika-garments_web.jpg" },
    { title: "Graaps", cat: "Clothing Brand", desc: "Online clothing store", img: "/images/graaps_web.png" },
    { title: "Zydenn", cat: "Clothing Brand", desc: "Online clothing store", img: "/images/kyto_web.jpeg" },
    { title: "Kores Fabrics", cat: "Clothing Brand", desc: "Online clothing Wholesale Store", img: "/images/kores_web.png" },
    { title: "Kido Care", cat: "Kids Clothing Brand", desc: "Online clothing store", img: "/images/kido_care_web.jpg" },
    { title: "Sun Holidays", cat: "Tours and Travel Agency", desc: "Travel Agency Portfolio", img: "/images/sun_holidays_web.png" },
    { title: "Twinstar", cat: "Clothing Brand", desc: "Online clothing store", img: "/images/kyto_web.jpeg" },
    { title: "Livinza", cat: "Interior Business", desc: "Interior Business Portfolio", img: "/images/livinza_web.png" }
  ];

  const faqs = [
    { q: 'What AI/ML solutions does HYNOX provide?', a: 'HYNOX develops AI chatbots, document processing tools, predictive analytics systems, workflow automation solutions, semantic search platforms, and custom machine learning applications.' },
    { q: 'How can AI help my business?', a: 'AI can automate repetitive tasks, reduce manual work, improve customer support, analyze large datasets, and increase operational efficiency.' },
    { q: 'Do you build custom AI chatbots?', a: 'Yes, we develop AI-powered chatbots for websites, WhatsApp, customer support, lead generation, and internal business operations.' },
    { q: 'Can AI automate data entry and document processing?', a: 'Yes, we build OCR and AI-powered document processing systems that extract information from invoices, forms, bills, and reports automatically.' },
    { q: 'What industries can benefit from AI automation?', a: 'Manufacturing, textile, ecommerce, retail, logistics, healthcare, education, travel, and service businesses can all benefit from AI-driven automation.' },
    { q: 'Do you provide AI solutions for textile businesses in Tiruppur?', a: 'Yes, we develop AI and automation solutions for textile manufacturers, garment exporters, inventory management, quality control, and production tracking.' },
    { q: 'Can AI integrate with my existing ERP or CRM software?', a: 'Yes, we can integrate AI models, chatbots, and automation workflows with your existing ERP, CRM, databases, and business software.' },
    { q: 'What is predictive analytics?', a: 'Predictive analytics uses historical data and machine learning models to forecast sales, demand, inventory requirements, and business trends.' },
    { q: 'Is my business data secure?', a: 'Yes, we implement secure infrastructure, encrypted storage, access controls, and private deployments to protect your business data.' },
    { q: 'Do you provide AI-powered customer support systems?', a: 'Yes, we build AI customer support solutions that can answer questions, create tickets, provide product information, and operate 24/7.' },
    { q: 'How long does it take to develop an AI solution?', a: 'The timeline depends on project complexity, available data, integrations, and business requirements. Most projects take between 4 and 12 weeks.' },
    { q: 'Why choose HYNOX for AI development in Tiruppur?', a: 'HYNOX focuses on practical AI solutions that deliver measurable business value through automation, analytics, machine learning, and workflow optimization.' },
  ];

  return (
    <>
      <Header />

      <main>
        {/* ─── 1. HERO ─── */}
        <section className="hero-2col-section">
          <div className="hero-aurora-glow"></div>
          <div className="hero-2col-container svc-hero-2col-container">
            <div className="hero-2col-content svc-hero-2col-content mobile-apps-hero-content">
              <div className="badge reveal-blur">
                AI/ML &amp; AUTOMATION SOLUTIONS IN TIRUPPUR
              </div>
              <h1 className="reveal-from-left reveal-delay-100 svc-subpage-h1">
                AI/ML Solutions That<br />
                <span className="svc-hero-accent-bw">Automate Your Workflow</span>
              </h1>
              <p className="reveal-from-left reveal-delay-200">
                We design and build custom artificial intelligence models, automated chatbots, data extraction tools, 
                and predictive dashboards to eliminate repetitive work in your operations.
              </p>
              <div className="hero-actions reveal-from-left reveal-delay-300" style={{ marginBottom: '2.5rem' }}>
                <a href="/contact" className="btn btn-hero-solid">Get Free Consultation <ArrowRight size={16} style={{ marginLeft: "4px", display: "inline-block", verticalAlign: "middle" }} /></a>
                <a href="#portfolio" className="btn btn-hero-outline">View Our Work</a>
              </div>
              <div className="svc-hero-badges-bw reveal-fade-in reveal-delay-400">
                <span>✓ Custom AI Models</span>
                <span>✓ Automated Chatbots</span>
                <span>✓ Data Analysis</span>
                <span>✓ Process Automation</span>
              </div>
            </div>
            <div className="hero-2col-image-wrapper svc-hero-image-wrapper reveal-from-right reveal-delay-200">
              <img
                src="/ai-solutions-hero.png"
                alt="AI and Machine Learning Solutions by HYNOX Tiruppur"
                style={{
                  width: '100%',
                  maxWidth: '450px',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        </section>

        {/* ─── 2. WHAT WE BUILD ─── */}
        <section className="svc-section" id="what-we-build">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">WHAT WE BUILD</span>
            <h2>AI/ML Tools Engineered for Efficiency</h2>
            <div className="svc-divider" />
          </div>
          <div className="svc-build-grid reveal-zoom reveal-delay-200">
            {whatWeBuild.map((item, i) => (
              <div className="svc-build-card" key={i}>
                {(() => {
                  const BuildIcon = (LucideIcons as any)[item.icon] || LucideIcons.HelpCircle;
                  return <div className="svc-build-icon"><BuildIcon size={36} /></div>;
                })()}
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 3. WHAT YOU GET ─── */}
        <section className="svc-section svc-section-alt" id="what-you-get">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">WHAT YOU GET</span>
            <h2>Everything You Need, Included</h2>
          </div>
          <div className="svc-get-grid reveal-from-left reveal-delay-200">
            {whatYouGet.map((item, i) => (
              <div className="svc-get-card" key={i}>
                {(() => {
                  const GetIcon = (LucideIcons as any)[item.icon] || LucideIcons.HelpCircle;
                  return <span className="svc-get-icon"><GetIcon size={20} /></span>;
                })()}
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 4. WHY CHOOSE HYNOX ─── */}
        <section className="svc-section" id="why-hynox">
          <div className="svc-section-header reveal-flip-x">
            <span className="svc-label">WHY CHOOSE HYNOX?</span>
            <h2>We Focus On What Matters</h2>
          </div>
          <div className="svc-why-grid reveal-zoom reveal-delay-200">
            {whyChoose.map((item, i) => (
              <div className="svc-why-card" key={i}>
                <div className="svc-why-check"><Check size={16} /></div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 5. PROCESS ─── */}
        <section className="svc-section svc-section-alt" id="process">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">OUR PROCESS</span>
            <h2>Simple Process, Successful Results</h2>
          </div>
          <div className="svc-process-row reveal-from-left reveal-delay-200">
            {process.map((item, i) => (
              <div className="svc-process-step" key={i}>
                <div className="svc-process-circle">{item.step}</div>
                {i < process.length - 1 && <div className="svc-process-line" />}
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 6. PORTFOLIO ─── */}
        <section className="svc-section" id="portfolio">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">PORTFOLIO</span>
            <h2>Real Projects. Real Results.</h2>
          </div>
          <div className="svc-portfolio-grid reveal-zoom reveal-delay-200">
            {portfolio.map((item, i) => (
              <div className="svc-portfolio-card" key={i}>
                <div className="svc-portfolio-img">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="svc-portfolio-info">
                  <span className="badge-dev">{item.cat}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 7. FAQ ─── */}
        <section className="svc-section svc-section-alt" id="faq">
          <div className="svc-section-header reveal-flip-x">
            <span className="svc-label">FAQ</span>
            <h2>AI/ML Solutions Questions Answered</h2>
          </div>
          <div className="svc-faq-list reveal-from-left reveal-delay-200">
            {faqs.map((item, i) => (
              <details className="svc-faq-item" key={i}>
                <summary className="svc-faq-q">{item.q}</summary>
                <p className="svc-faq-a">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ─── 8. CTA ─── */}
        <ServiceCTA
          title="Ready to Build Your AI/ML Solution?"
          subtitle="Tell us about your automation goals — we'll get back to you within 24 hours."
        />
      </main>

      <Footer />
    </>
  );
}
