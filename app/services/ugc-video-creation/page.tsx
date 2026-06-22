'use client';

import { useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { Check, ArrowRight } from 'lucide-react';
import Header from '../../components/Header';
import CubesBackground from '../../components/CubesBackground';
import ServiceCTA from '../../components/ServiceCTA';
import Footer from '../../components/Footer';

export default function UGCVideoCreationPage() {
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
    { icon: '🪝',  title: 'High-Converting Ad Hooks', desc: 'First 3 seconds hooks designed to capture user scrolling attention on TikTok, Instagram, and YouTube.' },
    { icon: 'Package',  title: 'Product Unboxing & Demos', desc: 'Real-world unboxing experiences showing product texture, packaging details, and usage features.' },
    { icon: 'Film',  title: 'Aesthetic Reels & Shorts',  desc: 'Trending transitions, lifestyle fits, aesthetic styling videos perfect for apparel and retail brands.' },
    { icon: '📖',  title: 'Storytelling Brand Ads',   desc: 'Narrative-driven videos talking about brand origins, quality selection, or customer problem-solving.' },
    { icon: '💡',  title: 'How-to & Tutorial Guides',  desc: 'Educational videos showing how to style, use, assemble or care for your products.' },
    { icon: '🗣',  title: 'Review & Testimonial Clips', desc: 'Authentic reviews from real people sharing their customer experience, handling objections.' },
  ];

  const whatYouGet = [
    { icon: 'FileText', title: 'Ad Concept Ideation',      desc: 'Researching angles, visual triggers, and storylines.' },
    { icon: 'PenTool', title: 'Script Writing & Drafts',   desc: 'Conversational scripts featuring clear calls-to-action.' },
    { icon: 'Users', title: 'Creator Selection',        desc: 'Sourcing, vetting, and booking creators that match your brand.' },
    { icon: '✂', title: 'Professional Video Edits',  desc: 'Video editing featuring dynamic captions, effects, and audio tracks.' },
    { icon: 'Repeat', title: 'Multi-Hook Variations',    desc: 'Receiving 1 base video with 3 different hooks to test ad copy.' },
    { icon: 'Music', title: 'Commercial Audio Sync',    desc: 'Integrating royalty-free audio tracks that fit the video mood.' },
    { icon: '📁', title: 'Raw Footages Shared',      desc: 'Accessing clean raw clips to compile additional hooks later.' },
    { icon: '⚖', title: 'Full Paid Ads Rights',      desc: 'Complete digital rights to run the videos on Meta, Google, TikTok.' },
  ];

  const whyChoose = [
    { title: 'Conversion Focused Hooks',     desc: 'We do not make generic videos. We build UGC structured specifically to increase ad CTR (Click-Through Rate).' },
    { title: 'Diverse Creator Castings',     desc: 'Access creators of different age groups, genders, and styling preferences.' },
    { title: 'Fast Handover Cycles',         desc: 'Briefing, casting, filming, editing, and final delivery within 14–21 days.' },
    { title: 'Ad Agency Standard Editing',   desc: 'We edit for retention — utilizing dynamic zoom transitions, text overlays, and captions.' },
    { title: 'Coimbatore Local Touch',         desc: 'We handle shipments, samples, and styling locally for fast setups.' },
  ];

  const process = [
    { step: '01', title: 'Concept',   desc: 'We define the angles, hooks, and creators to feature.' },
    { step: '02', title: 'Script',    desc: 'We write conversational scripts highlighting product benefits.' },
    { step: '03', title: 'Casting',   desc: 'We ship samples to matching creators and oversee shoots.' },
    { step: '04', title: 'Edit',      desc: 'We cut clips, add captions, test hooks, and sync audios.' },
    { step: '05', title: 'Deliver',   desc: 'We hand over high-res MP4 files ready to upload to ad managers.' },
  ];

  const portfolio = [
    { title: "SugarStar", cat: "Shopify Development", desc: "Premium confectionery online store", img: "/images/sugarstar_web.jpeg" },
    { title: "JP Interiors App", cat: "App Development", desc: "Custom business automation and project management app", img: "/images/JpApp_works.png" },
    { title: "Team3 Associates", cat: "Custom Development", desc: "Interior Design and Project Execution", img: "/images/team3_web.png" },
    { title: "JP Interiors Web", cat: "Web Development", desc: "Interior design portfolio and service showcase", img: "/images/JpWeb_works.png" },
    { title: "Teerex", cat: "Custom Development", desc: "E-commerce platform with custom features", img: "/images/graaps_web.png" },
    { title: "Mallika Garments", cat: "Custom Development", desc: "Fashion retail business solution", img: "/images/malika-garments_web.jpg" },
    { title: "Graaps", cat: "Clothing Brand", desc: "Online clothing store", img: "/images/graaps_web.png" },
    { title: "Food delivery app", cat: "Custom Development", desc: "On-demand food delivery service", img: "/images/aharraa_web.png" },
    { title: "Kores Fabrics", cat: "Clothing Brand", desc: "Online clothing Wholesale Store", img: "/images/kores_web.png" },
    { title: "Kido Care", cat: "Kids Clothing Brand", desc: "Online clothing store", img: "/images/kido_care_web.jpg" },
    { title: "Sun Holidays", cat: "Tours and Travel Agency", desc: "Travel Agency Portfolio", img: "/images/sun_holidays_web.png" },
    { title: "Livinza", cat: "Interior Business", desc: "Interior Business Portfolio", img: "/images/livinza_web.png" }
  ];

  const faqs = [
    { q: 'What is UGC video content?', a: 'UGC (User Generated Content) is video content created to look authentic and relatable, helping brands build trust and increase conversions through social media and advertising.' },
    { q: 'What types of UGC videos does HYNOX create?', a: 'We create product demos, unboxing videos, customer testimonials, lifestyle videos, brand storytelling content, tutorial videos, and short-form ad creatives.' },
    { q: 'Why are UGC videos effective for advertising?', a: 'UGC videos feel more natural and trustworthy than traditional advertisements, often resulting in higher engagement, click-through rates, and conversions.' },
    { q: 'Do you provide creators for UGC videos?', a: 'Yes, we source and coordinate creators that match your brand, target audience, and marketing goals.' },
    { q: 'Can HYNOX create UGC videos for clothing and textile brands?', a: 'Yes, we create UGC content for clothing brands, textile businesses, fashion labels, ecommerce stores, and retail companies.' },
    { q: 'Do you write scripts for UGC videos?', a: 'Yes, we handle concept creation, script writing, content planning, and video production from start to finish.' },
    { q: 'Can UGC videos be used for Meta Ads and Google Ads?', a: 'Yes, all UGC videos are created for use across Meta Ads, Instagram Ads, Facebook Ads, YouTube Ads, Google Ads, and other marketing platforms.' },
    { q: 'How long does it take to create UGC videos?', a: 'Most UGC video projects are completed within 1 to 3 weeks, depending on the number of videos, creators, and revisions required.' },
    { q: 'Will I receive the raw video files?', a: 'Yes, we provide edited videos and can also share raw footage based on the project requirements.' },
    { q: 'Do you create product demonstration videos?', a: 'Yes, we create product demo videos that showcase features, benefits, usage instructions, and customer experiences.' },
    { q: 'Do I get full usage rights for the videos?', a: 'Yes, you receive full marketing usage rights for running the videos across advertising platforms and social media channels.' },
    { q: 'Why choose HYNOX for UGC video creation in Coimbatore?', a: 'HYNOX creates conversion-focused UGC videos designed for ecommerce brands, clothing businesses, startups, and companies looking to improve advertising performance and online sales.' },
  ];

  return (
    <>
      <Header />

      <main>
        {/* ─── 1. HERO ─── */}
        <section className="hero-center-section">
          {/* Animated Cubes Background */}
          <div className="absolute inset-0 w-full h-full z-0" style={{ background: "#050505" }}>
            <CubesBackground />
          </div>

          {/* Radial gradient overlay */}
          <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(20,35,100,0.25) 0%, rgba(5,5,5,0.65) 75%)" }} />

          <div className="hero-center-content">
            <span className="hero-badge reveal-fade-in">
              UGC VIDEO CREATION COMPANY IN COIMBATORE
            </span>

            <h1 className="hero-center-h1 reveal-fade-in reveal-delay-100">
              UGC Video Creation That<br />
              <span className="svc-hero-accent-bw">Converts Viewers to Buyers</span>
            </h1>

            <p className="hero-center-p reveal-fade-in reveal-delay-200">
              We conceptualize, script, cast, and edit high-converting User Generated Content (UGC) videos 
              and short-form ad creatives designed to drive clicks and boost ROAS.
            </p>

            <div className="hero-center-actions reveal-fade-in reveal-delay-300">
              <a href="/contact" className="btn btn-hero-solid">Get Free Consultation <ArrowRight size={16} style={{ marginLeft: "4px", display: "inline-block", verticalAlign: "middle" }} /></a>
              <a href="#portfolio" className="btn btn-hero-outline">View Our Work</a>
            </div>

            <div className="svc-hero-badges-bw reveal-fade-in reveal-delay-400" style={{ justifyContent: 'center', marginTop: '2.5rem' }}>
              <span>✓ Authentic Hook Videos</span>
              <span>✓ Product Demos</span>
              <span>✓ High-Converting Ads</span>
              <span>✓ Creator Sourcing</span>
            </div>
          </div>
        </section>

        {/* ─── 2. WHAT WE BUILD ─── */}
        <section className="svc-section" id="what-we-build">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">WHAT WE BUILD</span>
            <h2>UGC Formats That Perform</h2>
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
            <h2>Real Videos. Real Results.</h2>
          </div>
          <div className="svc-portfolio-grid reveal-zoom reveal-delay-200">
            {portfolio.map((item, i) => (
              <div className="svc-portfolio-card" key={i}>
                <div className="svc-portfolio-img">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="svc-portfolio-info">
                  <span className="badge-content">{item.cat}</span>
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
            <h2>UGC Video Questions Answered</h2>
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
          title="Ready to Create High-Converting UGC?"
          subtitle="Tell us about your product hooks goals — we'll get back to you within 24 hours."
        />
      </main>

      <Footer />
    </>
  );
}
