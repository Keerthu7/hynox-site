'use client';

import { useEffect } from 'react';
import Header from '../../components/Header';
import ServiceCTA from '../../components/ServiceCTA';
import Footer from '../../components/Footer';

export default function PerformanceMarketingPage() {
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
    { icon: '📱',  title: 'Meta (Facebook & IG) Ads', desc: 'Create, launch and manage high-converting image and video ads targeting relevant buyers.' },
    { icon: '🔍',  title: 'Google Search & PMax',    desc: 'Capture active search intent and shopping queries using Google Search, Performance Max, and Shopping ads.' },
    { icon: '🔄',  title: 'Retargeting Funnels',     desc: 'Re-engage cart abandoners and store visitors with custom dynamic catalog ads to secure lost sales.' },
    { icon: '📈',  title: 'CRO Store Audit',         desc: 'A/B testing, layout edits, and speed audits to convert a higher percentage of visitors into buyers.' },
    { icon: '📄',  title: 'Custom Landing Pages',    desc: 'Design distraction-free, lightning-fast landing pages crafted specifically for single-product campaigns.' },
    { icon: '📊',  title: 'Analytics & GA4 Setup',   desc: 'Configure Meta Conversions API (CAPI), Google Analytics 4, and UTM tags for accurate data tracking.' },
  ];

  const whatYouGet = [
    { icon: '⚙', title: 'Complete Pixel Setup',     desc: 'Error-free implementation of tracking codes and pixel triggers.' },
    { icon: '🎯', title: 'Audience Segments',        desc: 'Custom, lookalike, and interest-based buyer audience definitions.' },
    { icon: '✍', title: 'Ad Copy & Angles',         desc: 'Persuasive sales copywriting tailored to address buyer pain points.' },
    { icon: '📊', title: 'Weekly Performance Logs',  desc: 'Detailed updates highlighting cost per purchase, ROAS, and clicks.' },
    { icon: '🛡', title: 'Daily Budget Safety',      desc: 'Close monitoring to prevent overspending and budget waste.' },
    { icon: '🔄', title: 'Creative Testing Grid',    desc: 'Systematic testing of hooks, layouts, and copy variations.' },
    { icon: '💬', title: 'Slack / WhatsApp Sync',    desc: 'Direct channels to message the marketers handling your budget.' },
    { icon: '📈', title: 'Scaling Strategy',        desc: 'Vertical and horizontal scaling frameworks for winning assets.' },
  ];

  const whyChoose = [
    { title: 'ROAS over Vanity Metrics',     desc: 'We focus entirely on metrics that matter — cost per purchase and total return on ad spend (ROAS).' },
    { title: 'Tech & Marketing Integration',  desc: 'Since we code websites and run ads, we can resolve tracking and page speed errors instantly.' },
    { title: 'Proven E-commerce Results',    desc: 'Experienced in scaling textile and apparel brands in local and international markets.' },
    { title: '100% Transparent Tracking',    desc: 'You hold full ownership of ad accounts and billing profiles — complete visibility.' },
    { title: 'Local Tiruppur Context',       desc: 'We know the exact buyer demographics and target markets for manufacturing and retail.' },
  ];

  const process = [
    { step: '01', title: 'Audit',     desc: 'We evaluate your store conversion rate, speed scores, and past campaigns.' },
    { step: '02', title: 'Tracking',  desc: 'We configure GA4, Meta Pixel, and Conversions API (CAPI) for clean data.' },
    { step: '03', title: 'Creatives', desc: 'We outline high-performing ad formats, layout concepts, and copywriting hooks.' },
    { step: '04', title: 'Test',      desc: 'We launch testing campaigns to locate winning audiences and creatives.' },
    { step: '05', title: 'Scale',     desc: 'We redirect budget into winning assets to scale your e-commerce revenues.' },
  ];

  const portfolio = [
    { title: 'Graaps Scaling',        cat: 'Meta & Google Ads', desc: 'Scaling direct-to-consumer sales for a clothing brand in the UK', img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop' },
    { title: 'Zydenn Marketing',      cat: 'ROAS Optimization', desc: 'Sustained 4.2x ROAS on Meta Ads for streetwear apparel store', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop' },
    { title: 'Kores Fabrics Leads',   cat: 'Lead Generation',   desc: 'B2B WhatsApp lead generation campaign for a wholesale fabric manufacturer', img: 'https://images.unsplash.com/photo-1558769132-cb1fac0840f2?q=80&w=800&auto=format&fit=crop' },
  ];

  const faqs = [
    { q: 'What is performance marketing?', a: 'Performance marketing is a results-driven advertising strategy where campaigns are optimized to generate leads, sales, website traffic, and measurable business growth.' },
    { q: 'Does HYNOX manage Meta Ads and Google Ads?', a: 'Yes, we create, manage, and optimize Meta Ads (Facebook & Instagram) and Google Ads campaigns for businesses across various industries.' },
    { q: 'How much does performance marketing cost?', a: 'The cost depends on your advertising budget, campaign goals, target audience, and competition. We provide customized plans based on your business objectives.' },
    { q: 'How long does it take to see results from paid ads?', a: 'Most campaigns start generating data within a few days, while meaningful optimization and consistent results typically take a few weeks.' },
    { q: 'Do you run ads for eCommerce businesses?', a: 'Yes, we specialize in performance marketing for eCommerce brands, including Shopify stores, clothing brands, textile businesses, and retail companies.' },
    { q: 'What is ROAS in performance marketing?', a: 'ROAS (Return on Ad Spend) measures how much revenue is generated for every rupee spent on advertising.' },
    { q: 'Do you provide Meta Pixel and Google Analytics setup?', a: 'Yes, we configure Meta Pixel, Google Analytics 4 (GA4), Conversion Tracking, and Conversions API (CAPI) for accurate reporting.' },
    { q: 'Can HYNOX create landing pages for ad campaigns?', a: 'Yes, we design high-converting landing pages optimized for lead generation, product sales, and advertising performance.' },
    { q: 'Do you offer remarketing and retargeting campaigns?', a: 'Yes, we run retargeting campaigns that reconnect with website visitors, cart abandoners, and previous customers to increase conversions.' },
    { q: 'Will I have access to my ad accounts?', a: 'Yes, you maintain full ownership and access to your advertising accounts, analytics, and billing profiles at all times.' },
    { q: 'Do you provide performance marketing for businesses in Tiruppur?', a: 'Yes, HYNOX helps businesses in Tiruppur and across India grow through Meta Ads, Google Ads, lead generation campaigns, and eCommerce marketing.' },
    { q: 'Why choose HYNOX as a performance marketing agency in Tiruppur?', a: 'HYNOX combines marketing expertise with technical development skills, allowing us to optimize ads, websites, landing pages, and tracking systems for maximum ROI.' },
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
                PERFORMANCE MARKETING AGENCY IN TIRUPPUR
              </div>
              <h1 className="reveal-from-left reveal-delay-100 svc-subpage-h1 perf-hero-h1">
                Performance Marketing That<br />
                <span className="svc-hero-accent-bw">Scales Your Revenues</span>
              </h1>
              <p className="reveal-from-left reveal-delay-200">
                We plan, launch and manage high-converting Meta Ads, Google Ads, and shopping campaigns 
                designed to scale your online orders and boost your bottom line.
              </p>
              <div className="hero-actions reveal-from-left reveal-delay-300" style={{ marginBottom: '2.5rem' }}>
                <a href="mailto:thehynoxofficial@gmail.com" className="btn btn-hero-solid">Get Free Consultation →</a>
                <a href="#portfolio" className="btn btn-hero-outline">View Our Work</a>
              </div>
              <div className="svc-hero-badges-bw reveal-fade-in reveal-delay-400">
                <span>✓ Meta (FB/IG) Ads</span>
                <span>✓ Google Search &amp; PMax</span>
                <span>✓ ROAS Optimization</span>
                <span>✓ Creative Strategy</span>
              </div>
            </div>
            <div className="hero-2col-image-wrapper svc-hero-image-wrapper reveal-from-right reveal-delay-200">
              <img
                src="/performance-marketing-hero.png"
                alt="Performance Marketing by HYNOX Tiruppur"
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
            <h2>Advertising Channels We Master</h2>
            <div className="svc-divider" />
          </div>
          <div className="svc-build-grid reveal-zoom reveal-delay-200">
            {whatWeBuild.map((item, i) => (
              <div className="svc-build-card" key={i}>
                <div className="svc-build-icon">{item.icon}</div>
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
                <span className="svc-get-icon">{item.icon}</span>
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
                <div className="svc-why-check">✓</div>
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
            <h2>Real Campaigns. Real Results.</h2>
          </div>
          <div className="svc-portfolio-grid reveal-zoom reveal-delay-200">
            {portfolio.map((item, i) => (
              <div className="svc-portfolio-card" key={i}>
                <div className="svc-portfolio-img">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="svc-portfolio-info">
                  <span className="badge-marketing">{item.cat}</span>
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
            <h2>Performance Marketing Questions Answered</h2>
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
          title="Ready to Scale Your Ads?"
          subtitle="Tell us about your conversion goals — we'll get back to you within 24 hours."
        />
      </main>

      <Footer />
    </>
  );
}
