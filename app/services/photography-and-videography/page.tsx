'use client';

import { useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { Check, ArrowRight, Camera, Video, Clapperboard, Drone, Image as ImageIcon } from 'lucide-react';
import Header from '../../components/Header';
import CubesBackground from '../../components/CubesBackground';
import ServiceCTA from '../../components/ServiceCTA';
import Footer from '../../components/Footer';

export default function PhotographyVideographyPage() {
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
    { icon: 'Camera',  title: 'Product Photography', desc: 'High-end e-commerce product shoots, lifestyle photography, and editorial campaigns for your brand.' },
    { icon: 'Video',  title: 'UGC Video Creation', desc: 'Authentic User Generated Content (UGC) videos featuring creators to drive trust and conversions.' },
    { icon: 'Clapperboard',  title: 'Commercials & Ads',  desc: 'High-budget look commercials, Meta Ads, and YouTube pre-rolls designed to sell.' },
    { icon: 'Film',  title: 'Corporate Videography',   desc: 'Brand films, office tours, interviews, and company profile videos to build authority.' },
    { icon: 'ImageIcon',  title: 'Social Media Reels',  desc: 'Fast-paced, aesthetic, and trending reels/shorts for Instagram, TikTok, and YouTube.' },
    { icon: 'Plane',  title: 'Drone & Aerial Shoots', desc: 'Breathtaking 4K aerial videography for real estate, events, and large-scale manufacturing.' },
  ];

  const whatYouGet = [
    { icon: 'FileText', title: 'Creative Storyboarding',      desc: 'Detailed scene-by-scene planning before the shoot.' },
    { icon: 'PenTool', title: 'Script & Concept',   desc: 'Engaging scripts written for both UGC and commercial videos.' },
    { icon: 'Users', title: 'Talent & Creator Sourcing',        desc: 'We provide actors, models, and UGC creators for your videos.' },
    { icon: 'Scissors', title: 'Cinematic Editing',  desc: 'Professional post-production, transitions, and pacing.' },
    { icon: 'Aperture', title: 'Color Grading',    desc: 'Industry-standard color correction to make your footage pop.' },
    { icon: 'Music', title: 'Commercial Audio Sync',    desc: 'Sound design and royalty-free music licensing included.' },
    { icon: 'Folder', title: 'High-Res Delivery',      desc: 'Delivered in 4K or 1080p optimized for web, social, or TV.' },
    { icon: 'Shield', title: 'Full Usage Rights',      desc: 'Complete digital rights to run the content anywhere.' },
  ];

  const whyChoose = [
    { title: 'In-House Production Team',     desc: 'We do not outsource. Our in-house directors, DPs, and editors handle everything.' },
    { title: 'Specialized UGC Wing',     desc: 'We have a dedicated division just for sourcing creators and shooting high-converting UGC.' },
    { title: 'Cinema-Grade Equipment',         desc: 'Shot on top-tier cameras (Sony Cinema Line, RED) with professional lighting and audio.' },
    { title: 'Fast Turnaround Times',   desc: 'Get your edited photos and videos within days, not months.' },
    { title: 'End-to-End Execution',         desc: 'From location scouting to final color grade, we handle the entire process.' },
  ];

  const process = [
    { step: '01', title: 'Pre-Production',   desc: 'Storyboarding, scripting, location scouting, and talent casting.' },
    { step: '02', title: 'Production',    desc: 'Professional shooting with cinema cameras, lighting, and audio gear.' },
    { step: '03', title: 'Post-Production',   desc: 'Editing, VFX, color grading, and sound design.' },
    { step: '04', title: 'Review',      desc: 'Collaborative feedback rounds to ensure the content matches your vision.' },
    { step: '05', title: 'Delivery',   desc: 'Final high-resolution assets handed over in multiple formats.' },
  ];

  const portfolio = [
    { 
      title: 'JP Interiors', 
      username: '@jp_interiors',
      subtitle: 'Design & Build', 
      img: '/images/JpWeb_works.png',
      videoUrl: '/videos/1.mp4'
    },
    { 
      title: 'Graaps Brand', 
      username: '@graaps_clothing',
      subtitle: 'Summer Collection', 
      img: '/images/graaps_web.png',
      videoUrl: '/videos/3.mp4'
    },
    { 
      title: 'Sun Holidays', 
      username: '@_sun_holidays',
      subtitle: 'Tours & Travels', 
      img: '/images/sun_holidays_web.png',
      videoUrl: '/videos/4.mp4',
      titleColor: '#facc15'
    },
    { 
      title: 'Kido Care', 
      username: '@kidocare_store',
      subtitle: 'Kids Fashion Reels', 
      img: '/images/kido_care_web.jpg',
      videoUrl: '/videos/5.mp4'
    },
    {
      title: 'Team 3 Associates',
      username: '@team3_associates',
      subtitle: 'Photography & Videography',
      img: '/images/team3_web.png',
      videoUrl: '/videos/2.mp4'
    },
    {
      title: 'SugarStar',
      username: '@sugarstar_official',
      subtitle: 'Social Media Management',
      img: '/images/sugarstar_web.jpeg',
      videoUrl: '/videos/1.mp4'
    },
    { 
      title: 'Aura Lifestyle', 
      username: '@aura_lifestyle',
      subtitle: 'UGC Ad Creative', 
      img: '/images/team3_web.png',
      videoUrl: '/videos/3.mp4'
    },
    { 
      title: 'FitFuel', 
      username: '@fitfuel_nutrition',
      subtitle: 'Product Commercial', 
      img: '/images/graaps_web.png',
      videoUrl: '/videos/5.mp4'
    },
  ];

  const faqs = [
    { q: 'Do you offer both photography and videography?', a: 'Yes, we are a full-service production house offering commercial photography, product shoots, and high-end videography.' },
    { q: 'What is UGC Video Creation and do you do it?', a: 'Yes! We have a specialized team for User Generated Content (UGC). We source creators, write scripts, and shoot authentic-looking videos designed to perform well as ads.' },
    { q: 'Do you provide models and actors for the shoots?', a: 'Yes, we handle all talent casting, including professional models, voice actors, and UGC creators.' },
    { q: 'Can you shoot at our location?', a: 'Absolutely. We offer on-location shoots for corporate videos, real estate, manufacturing facilities, and events across Coimbatore and South India.' },
    { q: 'What kind of equipment do you use?', a: 'We use industry-standard cinema cameras, 4K drones, premium lenses, and professional lighting/audio setups to ensure cinematic quality.' },
    { q: 'How long does it take to get the final videos?', a: 'Depending on the project scale, initial drafts are typically ready within 7 to 14 days after the shoot.' },
    { q: 'Can you edit footage we already have?', a: 'Yes, we offer post-production services including editing, color grading, and sound design for your existing raw footage.' },
    { q: 'Do you create videos optimized for Instagram and TikTok?', a: 'Yes, we shoot and edit specifically in 9:16 vertical formats for Reels, TikToks, and YouTube Shorts, optimizing hooks for maximum retention.' },
  ];

  return (
    <>
      <Header />

      <main>
        {/* ─── 1. HERO ─── */}
        <section className="hero-center-section">
          <div className="absolute inset-0 w-full h-full z-0" style={{ background: "#050505" }}>
            <CubesBackground />
          </div>
          <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(20,35,100,0.25) 0%, rgba(5,5,5,0.65) 75%)" }} />

          <div className="hero-center-content">
            <span className="hero-badge reveal-fade-in">
              PHOTOGRAPHY & VIDEOGRAPHY IN COIMBATORE
            </span>

            <h1 className="hero-center-h1 reveal-fade-in reveal-delay-100">
              Visuals That Tell Your Story.<br />
              <span className="svc-hero-accent-bw">UGC That Drives Sales.</span>
            </h1>

            <p className="hero-center-p reveal-fade-in reveal-delay-200">
              From cinematic brand commercials and flawless product photography to high-converting UGC video creation, we handle end-to-end production.
            </p>

            <div className="hero-center-actions reveal-fade-in reveal-delay-300">
              <a href="/contact" className="btn btn-hero-solid">Book a Shoot <ArrowRight size={16} style={{ marginLeft: "4px", display: "inline-block", verticalAlign: "middle" }} /></a>
              <a href="/works" className="btn btn-hero-outline">View Portfolio</a>
            </div>

            <div className="svc-hero-badges-bw reveal-fade-in reveal-delay-400" style={{ justifyContent: 'center', marginTop: '2.5rem' }}>
              <span>✓ Product Photography</span>
              <span>✓ Corporate Films</span>
              <span>✓ High-Converting UGC</span>
              <span>✓ Cinema-Grade Gear</span>
            </div>
          </div>
        </section>

        {/* ─── TECHNOLOGY MARQUEE ─── */}
        <section className="tech-marquee-section">
          <div className="tech-marquee-container">
            <div className="tech-marquee-content">
              {["Premiere Pro","After Effects","DaVinci Resolve","Sony Cinema","RED Digital","Lightroom","Premiere Pro","After Effects","DaVinci Resolve","Sony Cinema","RED Digital","Lightroom","Premiere Pro","After Effects","DaVinci Resolve","Sony Cinema","RED Digital","Lightroom"].map((tech, i) => (
                <div key={i} className="tech-badge">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 6. PORTFOLIO ─── */}
        <section className="svc-section svc-section-alt" id="portfolio">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">PORTFOLIO</span>
            <h2>Recent Works & UGC Clips</h2>
          </div>
          <div className="social-portfolio-grid reveal-zoom reveal-delay-200">
            {portfolio.map((item: any, i) => (
              <div className="social-portfolio-card" key={i}>
                <div className="social-portfolio-img" style={{ width: '100%', height: '100%' }}>
                  <video 
                    src={item.videoUrl} 
                    poster={item.img} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
              </div>
            ))}
            <div className="social-portfolio-card social-portfolio-cta-card">
              <h4 style={{ margin: 0 }}>BOOK YOUR<br />SHOOT</h4>
              <a href="/contact" className="cta-btn">
                Start Now <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* ─── 2. WHAT WE BUILD ─── */}
        <section className="svc-section" id="what-we-build">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">OUR SERVICES</span>
            <h2>Production That Performs</h2>
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
            <h2>We Focus On Quality & Conversions</h2>
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
            <h2>From Concept to Final Cut</h2>
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

        {/* ─── 7. FAQ ─── */}
        <section className="svc-section" id="faq">
          <div className="svc-section-header reveal-flip-x">
            <span className="svc-label">FAQ</span>
            <h2>Photography & Videography Questions Answered</h2>
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
          title="Ready for Your Next Shoot?"
          subtitle="Whether it's UGC, product photography, or a brand film — let's bring your vision to life."
        />
      </main>

      <Footer />
    </>
  );
}
