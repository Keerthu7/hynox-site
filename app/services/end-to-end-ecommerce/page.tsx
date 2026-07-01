'use client';

import { useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { Check, ArrowRight, BarChart3, ShoppingCart, Smartphone, Megaphone, Video, Layers, XCircle, CheckCircle2 } from 'lucide-react';
import Header from '../../components/Header';
import CubesBackground from '../../components/CubesBackground';
import ServiceCTA from '../../components/ServiceCTA';
import Footer from '../../components/Footer';

export default function EndToEndEcommercePage() {
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

  const theJourney = [
    { step: '01', title: 'Phase 1 — Foundation', desc: 'We start with your brand — positioning, naming, visual identity and tone of voice. Then we architect your store structure before writing a single line of code.', tags: ['Brand Identity', 'Sitemap', 'Competitor Research', 'Product Strategy'] },
    { step: '02', title: 'Phase 2 — Build', desc: 'Your store built pixel-perfect — custom theme or premium theme, mobile-first, blazing fast and conversion-optimised from the first scroll.', tags: ['Shopify / Custom', 'Mobile First', 'Speed Optimised', '99 PageSpeed'] },
    { step: '03', title: 'Phase 3 — Content', desc: 'Professional product photography and UGC-style video content that drives both organic engagement and paid ad performance.', tags: ['Product Photography', 'UGC Videos', 'Reels', 'Ad Creatives'] },
    { step: '04', title: 'Phase 4 — Traffic', desc: 'Full-funnel paid campaigns across Meta and Google — prospecting, retargeting, Shopping ads — all optimised daily for ROAS and CPA targets.', tags: ['Meta Ads', 'Google Shopping', 'Retargeting', 'AI Bidding'] },
    { step: '05', title: 'Phase 5 — Convert', desc: 'We don\'t just drive traffic — we convert it. Landing page CRO, cart abandonment flows, upsell sequences, and email automation.', tags: ['CRO', 'Cart Recovery', 'Upsells', 'A/B Testing'] },
    { step: '06', title: 'Phase 6 — Grow', desc: 'Organic social presence managed daily — content calendar, community engagement, influencer collaborations and reels strategy.', tags: ['Instagram & TikTok', 'Reels', 'Influencers', 'Community'] },
    { step: '07', title: 'Phase 7 — Monitor', desc: 'Full analytics setup — GA4, Meta Pixel, server-side tracking, UTMs and custom dashboards showing your real-time revenue and ROAS.', tags: ['GA4', 'Server-Side Tracking', 'Custom Dashboard', 'Monthly Reports'] },
  ];

  const services = [
    { icon: 'ShoppingCart', title: 'Store Setup & Optimisation', desc: 'Complete Shopify or custom store setup — product listings, collections, payment gateways, and integrations. Plus ongoing CRO.', tags: ['Shopify', 'Product Setup', 'Payment GW', 'CRO'] },
    { icon: 'TrendingUp', title: 'Performance Marketing', desc: 'Meta and Google ad campaigns built for revenue — shopping ads, dynamic product ads, managed daily with AI-powered bidding.', tags: ['Meta Ads', 'Google Shopping', 'ROAS Target', 'Daily Opt.'] },
    { icon: 'Filter', title: 'Sales Funnel & CRO', desc: 'Full funnel from first click to repeat purchase — landing pages, product page CRO, post-purchase upsells, abandoned cart flows.', tags: ['Landing Pages', 'Cart Recovery', 'Upsells', 'A/B Tests'] },
    { icon: 'Heart', title: 'Social Media Marketing', desc: 'Daily organic social management — content calendar, posts, reels, stories, community engagement, and brand-building campaigns.', tags: ['Daily Posts', 'Reels', 'Influencers', 'Community'] },
    { icon: 'Camera', title: 'Product Shoots & UGC Video', desc: 'Professional product photography and UGC-style short-form videos — scripted, shot and edited for ads, organic and website use.', tags: ['Product Photos', 'UGC Videos', 'Reels', 'Ad Creative'] },
    { icon: 'BarChart2', title: 'Analytics & Growth Monitoring', desc: 'Full tracking setup — GA4, Meta Pixel, server-side events, and a custom live dashboard showing revenue, ROAS, and CAC.', tags: ['GA4', 'Custom Dashboard', 'LTV Tracking', 'Reports'] },
  ];

  const salesFunnel = [
    { stage: 'Stage 01', title: 'Awareness', desc: 'Meta prospecting, Google Shopping, Reels and influencer seeding to reach cold audiences.' },
    { stage: 'Stage 02', title: 'Click & Land', desc: 'Landing page CRO — message match, speed, trust signals and clear CTA to convert the click.' },
    { stage: 'Stage 03', title: 'Add to Cart', desc: 'Product page optimisation, urgency triggers, social proof, size guides and upsell popups.' },
    { stage: 'Stage 04', title: 'Checkout', desc: 'Friction-free checkout, cart recovery emails + WhatsApp, payment options and trust badges.' },
    { stage: 'Stage 05', title: 'Retain & Repeat', desc: 'Post-purchase flows, loyalty rewards, cross-sell campaigns and win-back sequences for LTV.' },
  ];

  const tools = [
    'Shopify', 'Next.js', 'Meta Ads', 'Google Ads', 'GA4', 'Klaviyo', 'Razorpay', 'Hotjar', 'GTM', 'Triple Whale', 'Claude AI', 'Figma'
  ];

  const caseStudies = [
    { name: 'SugarStar', category: 'E-Commerce · Loungewear', text: 'Executed hyper-targeted message campaigns to drive direct inquiries. Achieved massive scale with optimized entry costs.', stats: [{ v: '₹9.9', l: 'Cost Per Click' }, { v: '₹4.2L', l: 'Total Sales' }, { v: '₹1L', l: 'Net Profit' }, { v: '4 Months', l: 'Duration' }] },
    { name: 'Teerex', category: 'Retail · Apparel', text: 'Scaled lead generation for high-volume retail. By optimizing lead quality, we delivered a consistent flow of prospects.', stats: [{ v: '₹220', l: 'Cost Per Lead' }, { v: '₹11.48L', l: 'Total Returns' }, { v: '3.02×', l: 'ROI' }, { v: '6 Months', l: 'Duration' }] }
  ];

  const faqs = [
    { q: 'What does "end-to-end e-commerce" mean?', a: 'It means we handle everything from store setup and website development to paid ads, content creation, social media management, and analytics tracking.' },
    { q: 'Do I need to be on Shopify?', a: 'While we highly recommend Shopify for its robust ecosystem and speed to market, we also build fully custom headless commerce solutions for advanced requirements.' },
    { q: 'How long does it take to launch?', a: 'A standard store setup takes about 7 to 14 days. If you need a fully custom coded platform, it could take 4 to 8 weeks.' },
    { q: 'Do you create the ad creatives and product photos?', a: 'Yes, our in-house content team scripts, shoots, and edits high-converting UGC videos, professional product photography, and ad creatives.' },
    { q: 'Will you manage my Meta and Google Ads?', a: 'Absolutely. We set up, manage, and optimize your full-funnel paid campaigns daily to hit your ROAS targets.' },
    { q: 'Can I switch from multiple agencies to HYNOX?', a: 'Yes! Our biggest advantage is consolidating your operations. We replace your web agency, ad agency, and content creators with one unified team to ensure zero gaps and full accountability.' },
    { q: 'How do you track performance and growth?', a: 'We implement full server-side tracking, GA4, and Meta Pixel setups. You get a live custom dashboard and monthly strategy calls to review your revenue, CAC, and LTV.' }
  ];

  return (
    <>
      <Header />

      <main>
        {/* ─── 1. HERO ─── */}
        <section className="hero-center-section" style={{ paddingBottom: '6rem' }}>
          <div className="absolute inset-0 w-full h-full z-0" style={{ background: "#050505" }}>
            <CubesBackground />
          </div>
          <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(20,35,100,0.25) 0%, rgba(5,5,5,0.65) 75%)" }} />

          <div className="hero-center-content" style={{ zIndex: 2 }}>
            <span className="hero-badge reveal-fade-in" style={{ letterSpacing: '0.1em' }}>
              END-TO-END E-COMMERCE
            </span>

            <h1 className="hero-center-h1 reveal-fade-in reveal-delay-100">
              From Idea to Revenue<br />
              <span className="svc-hero-accent-bw">We Handle Everything. You Sell.</span>
            </h1>

            <p className="hero-center-p reveal-fade-in reveal-delay-200">
              Website · Ads · Content · Growth · Analytics — All Under One Roof.<br/>
              HYNOX is your complete e-commerce partner. One team. Zero gaps. Full accountability.
            </p>

            <div className="hero-center-actions reveal-fade-in reveal-delay-300">
              <a href="/contact" className="btn btn-hero-solid">Free Strategy Call <ArrowRight size={16} style={{ marginLeft: "4px", display: "inline-block", verticalAlign: "middle" }} /></a>
              <a href="/works" className="btn btn-hero-outline">See Our Works</a>
            </div>

            <div className="svc-hero-badges-bw reveal-fade-in reveal-delay-400" style={{ justifyContent: 'center', marginTop: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
              <span style={{ fontSize: '1rem', fontWeight: 600 }}>4.9× <span style={{ opacity: 0.6, fontSize: '0.85rem' }}>Avg. ROAS</span></span>
              <span style={{ fontSize: '1rem', fontWeight: 600 }}>48h <span style={{ opacity: 0.6, fontSize: '0.85rem' }}>Store Go-Live</span></span>
              <span style={{ fontSize: '1rem', fontWeight: 600 }}>100% <span style={{ opacity: 0.6, fontSize: '0.85rem' }}>Done For You</span></span>
              <span style={{ fontSize: '1rem', fontWeight: 600 }}>6+ <span style={{ opacity: 0.6, fontSize: '0.85rem' }}>Services Bundled</span></span>
            </div>
          </div>
{/* ─── TECHNOLOGY MARQUEE ─── */}
        <section className="tech-marquee-section" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 20, background: 'transparent', borderBottom: 'none', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="tech-marquee-container">
            <div className="tech-marquee-content">
              {[...Array(4)].flatMap(() => [
                { name: "Shopify", icon: "shopify" },
                { name: "React", icon: "react" },
                { name: "Next.js", icon: "nextdotjs" },
                { name: "Node.js", icon: "nodedotjs" },
                { name: "Stripe", icon: "stripe" },
                { name: "AWS", icon: "amazonaws" },
                { name: "Vercel", icon: "vercel" }
              ]).map((tech, i) => (
                <div key={i} className="tech-badge" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img src={`https://cdn.simpleicons.org/${tech.icon}/ffffff`} alt={tech.name} style={{ width: '24px', height: '24px' }} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        </section>

        {/* ─── 01. THE JOURNEY ─── */}
        <section className="svc-section svc-section-alt" id="journey">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">01 — THE JOURNEY</span>
            <h2>From Idea to Revenue</h2>
            <p>We walk beside you from the moment your brand is just an idea — all the way to a scaling revenue machine. Every step is handled, documented and delivered. You never wonder what's happening next.</p>
            <div className="svc-divider" />
          </div>
          <div className="reveal-from-left reveal-delay-200" style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {theJourney.map((item, i) => (
              <div key={i} style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'flex-start' }} className="journey-card">
                <div style={{ flexShrink: 0, width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 700, color: '#ffffff' }}>
                  {item.step}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: '#ffffff' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '1.5rem' }}>{item.desc}</p>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    {item.tags.map((tag, j) => (
                      <span key={j} style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff', padding: '0.25rem 0.75rem', borderRadius: '40px', fontSize: '0.75rem', fontWeight: 500 }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 02. OUR SERVICES ─── */}
        <section className="svc-section" id="services">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">02 — OUR SERVICES</span>
            <h2>Everything Included</h2>
            <p>Six core service pillars — each one a specialist discipline, all working together as one coordinated growth system for your e-commerce brand. No gaps. No handoffs.</p>
          </div>
          <div className="svc-build-grid reveal-zoom reveal-delay-200">
            {services.map((item, i) => (
              <div className="svc-build-card" key={i} style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>0{i+1} {item.title}</h3>
                <p style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>{item.desc}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                  {item.tags.map((tag, j) => (
                    <span key={j} style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 03. WEBSITE DEVELOPMENT ─── */}
        <section className="svc-section svc-section-alt" id="website-dev">
          <div className="svc-section-header reveal-flip-x">
            <span className="svc-label">03 — WEBSITE DEVELOPMENT</span>
            <h2>Pick Your Store Platform</h2>
          </div>
          <div className="reveal-zoom reveal-delay-200" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ background: '#111', padding: '3rem 2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ color: '#4ade80', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Recommended for Most Brands</span>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1rem', color: '#fff' }}>Shopify Store</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500, marginBottom: '1.5rem' }}>Fastest path to revenue · Best ecosystem</p>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '2rem' }}>Shopify is the world's most powerful e-commerce platform — and we build on it better than anyone. Live in 7–14 days.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Custom theme design (not template)', 'Mobile-first, 90+ PageSpeed score', 'Razorpay / Stripe / COD setup', 'Inventory & order management', 'Email & WhatsApp integration', 'Review apps, upsell apps, loyalty apps', 'Full SEO setup — meta, schema, sitemap'].map((li, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} color="#4ade80" style={{ flexShrink: 0, marginTop: '2px' }} /> {li}
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{ background: '#111', padding: '3rem 2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ color: '#facc15', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>For Advanced Requirements</span>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1rem', color: '#fff' }}>Custom Store</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500, marginBottom: '1.5rem' }}>Unlimited control · Built from scratch</p>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '2rem' }}>When your requirements go beyond what Shopify can handle — complex B2B portals, multi-vendor marketplaces, or deep ERP integrations.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['100% custom frontend & backend', 'Next.js / React + Node.js architecture', 'Multi-vendor / marketplace capability', 'Custom subscription & pricing logic', 'Full ERP / CRM integration', 'Headless commerce architecture', 'AI-powered search & recommendations'].map((li, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} color="#facc15" style={{ flexShrink: 0, marginTop: '2px' }} /> {li}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─── 04. SALES FUNNEL ─── */}
        <section className="svc-section" id="funnel">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">04 — SALES FUNNEL</span>
            <h2>We Optimise Every Stage</h2>
            <p>Most e-commerce brands lose money at every stage of their funnel — they just don't know where. We audit, fix and continuously optimise the entire customer journey.</p>
          </div>
          <div className="svc-process-row reveal-from-left reveal-delay-200">
            {salesFunnel.map((item, i) => (
              <div className="svc-process-step" key={i}>
                <div className="svc-process-circle" style={{ fontSize: '1rem' }}>0{i+1}</div>
                {i < salesFunnel.length - 1 && <div className="svc-process-line" />}
                <h4 style={{ marginTop: '1rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.85rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 05. ANALYTICS & TRACKING ─── */}
        <section className="svc-section svc-section-alt" id="analytics">
          <div className="svc-section-header reveal-zoom">
            <span className="svc-label">05 — ANALYTICS & TRACKING</span>
            <h2>Track Every Rupee.<br/>Know Every Number.</h2>
          </div>
          <div className="reveal-from-right reveal-delay-200" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#fff' }}>Tracking Setup</h4>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Complete technical tracking infrastructure built correctly from day one — no data gaps, no attribution errors.</p>
              <ul style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', lineHeight: 1.8, paddingLeft: '1rem' }}>
                <li>Google Analytics 4 (GA4) setup</li>
                <li>Meta Pixel + Conversions API</li>
                <li>Server-side event tracking</li>
                <li>Google Tag Manager configuration</li>
                <li>UTM parameter architecture</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#fff' }}>Custom Dashboard</h4>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>A single live dashboard showing every metric that matters — no more switching between 5 tools.</p>
              <ul style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', lineHeight: 1.8, paddingLeft: '1rem' }}>
                <li>Real-time revenue & orders</li>
                <li>ROAS by channel & campaign</li>
                <li>Cost per acquisition (CAC)</li>
                <li>Customer lifetime value (LTV)</li>
                <li>Conversion rate by device</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#fff' }}>Monthly Growth Report</h4>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Detailed monthly performance review delivered in a 30-minute call — here's what happened, here's why, and here's the plan.</p>
              <ul style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', lineHeight: 1.8, paddingLeft: '1rem' }}>
                <li>Revenue vs. previous period</li>
                <li>Ad spend efficiency analysis</li>
                <li>Top performing products & pages</li>
                <li>Funnel drop-off identification</li>
                <li>Next-month growth strategy</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── 06. CONTENT PRODUCTION ─── */}
        <section className="svc-section" id="content">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">06 — CONTENT PRODUCTION</span>
            <h2>Content That Sells<br/>Before You Say a Word</h2>
            <p>The single biggest lever most e-commerce brands are missing is great content. Authentic UGC videos and professional photography build trust instantly.</p>
          </div>
          <div className="svc-get-grid reveal-from-left reveal-delay-200">
            <div className="svc-get-card">
              <span className="svc-get-icon"><LucideIcons.Camera size={20} /></span>
              <div>
                <h4>Product Photography</h4>
                <p>White-background, lifestyle and detail shots — every angle your customer needs to feel confident buying.</p>
              </div>
            </div>
            <div className="svc-get-card">
              <span className="svc-get-icon"><LucideIcons.Video size={20} /></span>
              <div>
                <h4>UGC Video Creation</h4>
                <p>Authentic user-generated style videos — unboxing, testimonials and in-use content that converts.</p>
              </div>
            </div>
            <div className="svc-get-card">
              <span className="svc-get-icon"><LucideIcons.Smartphone size={20} /></span>
              <div>
                <h4>Reels & Short-Form</h4>
                <p>Trending-format Reels scripted and edited for Instagram, TikTok and YouTube Shorts.</p>
              </div>
            </div>
            <div className="svc-get-card">
              <span className="svc-get-icon"><LucideIcons.MonitorPlay size={20} /></span>
              <div>
                <h4>Ad Creative Production</h4>
                <p>Static, carousel and video ad variants built for Meta and Google — multiple hooks and angles tested.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 08. CASE STUDIES ─── */}
        <section className="svc-section svc-section-alt" id="case-studies">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">08 — CASE STUDIES</span>
            <h2>Stores We've Built & Scaled</h2>
          </div>
          <div className="reveal-zoom reveal-delay-200" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            {caseStudies.map((cs, i) => (
              <div key={i} style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>{cs.category}</span>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginTop: '0.5rem', marginBottom: '1rem' }}>{cs.name}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>{cs.text}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  {cs.stats.map((st, j) => (
                    <div key={j}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>{st.v}</div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>{st.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ─── 10. WHY HYNOX ─── */}
        <section className="svc-section" id="why-hynox">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">10 — WHY HYNOX</span>
            <h2>One Partner. Total Accountability.</h2>
          </div>
          <div className="reveal-zoom reveal-delay-200" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ flex: '1 1 400px', background: 'rgba(255,50,50,0.05)', border: '1px solid rgba(255,50,50,0.2)', borderRadius: '16px', padding: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <XCircle color="#ef4444" size={32} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', margin: 0 }}>Multiple Vendors</h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', listStyle: 'none', padding: 0, margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                <li>Web agency blames the ad agency when sales are low</li>
                <li>No one owns the full funnel — gaps appear everywhere</li>
                <li>3–4 different retainers, 3–4 different reporting styles</li>
                <li>Creative team doesn't talk to the ad team — misalignment</li>
                <li>Months to get something changed across all vendors</li>
                <li>You spend half your time as the project manager</li>
              </ul>
            </div>
            <div style={{ flex: '1 1 400px', background: 'rgba(74,222,128,0.05)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '16px', padding: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <CheckCircle2 color="#4ade80" size={32} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', margin: 0 }}>HYNOX</h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', listStyle: 'none', padding: 0, margin: 0, color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', fontWeight: 500 }}>
                <li>One team owns the result — website, ads, content and analytics all aligned</li>
                <li>Full-funnel ownership — we know where every drop-off happens</li>
                <li>One invoice, one dashboard, one monthly strategy call</li>
                <li>Creative team builds assets specifically for your ad campaigns</li>
                <li>Changes happen in hours — not weeks across multiple vendors</li>
                <li>You focus on your product — we handle everything else</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── 11. FAQ ─── */}
        <section className="svc-section svc-section-alt" id="faq">
          <div className="svc-section-header reveal-flip-x">
            <span className="svc-label">FAQ</span>
            <h2>E-Commerce Questions Answered</h2>
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

        {/* ─── 12. CTA ─── */}
        <ServiceCTA
          title="Ready to Scale Your E-Commerce Brand?"
          subtitle="Tell us about your brand goals — we'll map out your growth plan on a free strategy call."
        />
      </main>

      <Footer />
    </>
  );
}
