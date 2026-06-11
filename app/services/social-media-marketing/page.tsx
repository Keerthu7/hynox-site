'use client';

import { useEffect } from 'react';
import Header from '../../components/Header';
import ServiceCTA from '../../components/ServiceCTA';
import Footer from '../../components/Footer';

export default function SocialMediaMarketingPage() {
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
    { icon: '📅',  title: 'Content Strategy Calendar', desc: 'Pre-planned monthly calendar outlining educational, promotional, and trending content ideas.' },
    { icon: '🎨',  title: 'Custom Graphic Design',    desc: 'Bespoke feed banners, carousel infographics, and story templates reflecting your brand guidelines.' },
    { icon: '🎬',  title: 'Reels & Video Editing',   desc: 'Professional editing of raw product videos with trending audios, captions, and transitions.' },
    { icon: '💬',  title: 'Community Engagement',     desc: 'Daily monitoring of post comments and direct messages (DMs) to boost interaction score.' },
    { icon: '👥',  title: 'Influencer Collaboration',  desc: 'Sourcing, vetting, and coordinating with local creators for product features.' },
    { icon: '📈',  title: 'Profile Optimization',     desc: 'Revamp bio layouts, story highlights, link placements, and tags for better profile conversion.' },
  ];

  const whatYouGet = [
    { icon: '✍', title: 'Monthly Strategy File',    desc: 'Structured themes and goals defined for the upcoming month.' },
    { icon: '🎨', title: 'Premium Visual Designs',   desc: 'Clean, minimalist grid layouts matching premium aesthetics.' },
    { icon: '✂', title: 'Short-form Video Edits',    desc: 'Edited Reels, TikToks, and Shorts optimized for viewer retention.' },
    { icon: '💬', title: 'Daily Message Reviews',    desc: 'Ensuring customer questions are addressed instantly in comments.' },
    { icon: '🏷', title: 'Niche Hashtag Lists',      desc: 'Researched keyword groupings to improve explore-page reach.' },
    { icon: '📊', title: 'Monthly Growth Audits',    desc: 'Reports detailing reach improvements, follower gains, and link clicks.' },
    { icon: '🔥', title: 'Trend Sourcing Alerts',    desc: 'Weekly briefs on trending formats and sounds to hop on early.' },
    { icon: '🎧', title: 'Direct Team Access',       desc: 'Talk directly to the designer and editor managing your page.' },
  ];

  const whyChoose = [
    { title: 'Aesthetics First Curation',    desc: 'We prioritize premium visual layouts. Clean typography, cohesive grids, and elegant video edits.' },
    { title: 'Local demographic Savvy',      desc: 'We understand what content resonates with Tamil Nadu and global export audiences.' },
    { title: 'Direct Creative Collaboration', desc: 'No account managers filters. Share feedback directly with active editors.' },
    { title: 'Cross-channel Publishing',     desc: 'Synchronized publishing across Instagram, Facebook, LinkedIn, and YouTube.' },
    { title: 'Zero Long Retainer Locks',     desc: 'Flexible terms that guarantee quality results month after month.' },
  ];

  const process = [
    { step: '01', title: 'Analyze',  desc: 'We review your competitor pages, current branding, and style guide.' },
    { step: '02', title: 'Calendar', desc: 'We outline the monthly content buckets, copy drafts, and shoot requirements.' },
    { step: '03', title: 'Create',   desc: 'We design the graphics, draft captions, and edit product reels.' },
    { step: '04', title: 'Review',   desc: 'You inspect the planned drafts in a shared workspace before publishing.' },
    { step: '05', title: 'Manage',   desc: 'We schedule, reply to comments, audit insights, and optimize the calendar.' },
  ];

  const portfolio = [
    { title: 'SugarStar Instagram',  cat: 'Brand Curation',   desc: 'Curated premium feed grid and interactive stories increasing reach by 140%', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop' },
    { title: 'Livinza Visuals',      cat: 'Page Management',  desc: 'Showcasing luxury interior designs with cohesive grid layouts', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop' },
    { title: 'JP Interiors Social',  cat: 'Reels Production', desc: 'Short-form construction updates and before/after transition reels', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop' },
  ];

  const faqs = [
    { q: 'What is social media marketing?', a: 'Social media marketing helps businesses build brand awareness, engage customers, generate leads, and grow their online presence through platforms like Instagram, Facebook, LinkedIn, and YouTube.' },
    { q: 'What social media marketing services does HYNOX provide?', a: 'HYNOX offers content creation, social media management, graphic design, reel editing, content calendars, community engagement, and profile optimization services.' },
    { q: 'Do you manage Instagram and Facebook pages?', a: 'Yes, we manage Instagram, Facebook, LinkedIn, and other social media platforms with content planning, publishing, and audience engagement.' },
    { q: 'How often will you post content on my social media pages?', a: 'The posting frequency depends on your package and goals. Most businesses publish content multiple times per week along with stories and reels.' },
    { q: 'Do you create reels and short-form videos?', a: 'Yes, we create and edit Instagram Reels, Facebook Reels, YouTube Shorts, and other short-form videos designed to increase engagement and reach.' },
    { q: 'Can social media marketing help my business grow?', a: 'Yes, consistent social media marketing can improve brand visibility, customer trust, audience engagement, and lead generation.' },
    { q: 'Do you provide content strategy and content calendars?', a: 'Yes, we create monthly content strategies and calendars tailored to your industry, audience, and business objectives.' },
    { q: 'Do you design social media graphics and creatives?', a: 'Yes, we design professional social media posts, carousel graphics, banners, promotional creatives, and branded visual content.' },
    { q: 'Can HYNOX help increase followers and engagement?', a: 'Yes, we focus on organic growth strategies, engaging content, profile optimization, and audience interaction to improve engagement.' },
    { q: 'Do you offer social media marketing for businesses in Tiruppur?', a: 'Yes, HYNOX provides social media marketing services for businesses in Tiruppur and across India, including textile brands, retailers, manufacturers, and startups.' },
    { q: 'How long does it take to see results from social media marketing?', a: 'Social media growth is a long-term strategy. Most businesses begin seeing noticeable improvements in reach and engagement within a few months of consistent activity.' },
    { q: 'Why choose HYNOX as a social media marketing agency in Tiruppur?', a: 'HYNOX combines content strategy, creative design, video editing, and audience engagement to help businesses build a strong and professional online presence.' },
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
                SOCIAL MEDIA MARKETING AGENCY IN TIRUPPUR
              </div>
              <h1 className="reveal-from-left reveal-delay-100 svc-subpage-h1">
                Social Media Strategy That<br />
                <span className="svc-hero-accent-bw">Grows Your Brand Value</span>
              </h1>
              <p className="reveal-from-left reveal-delay-200">
                We plan content calendars, design custom feed graphics, edit high-retention reels, 
                and engage your community to establish a premium online presence.
              </p>
              <div className="hero-actions reveal-from-left reveal-delay-300" style={{ marginBottom: '2.5rem' }}>
                <a href="mailto:thehynoxofficial@gmail.com" className="btn btn-hero-solid">Get Free Consultation →</a>
                <a href="#portfolio" className="btn btn-hero-outline">View Our Work</a>
              </div>
              <div className="svc-hero-badges-bw reveal-fade-in reveal-delay-400">
                <span>✓ Content Creation</span>
                <span>✓ Page Management</span>
                <span>✓ Organic Growth</span>
                <span>✓ Brand Engagement</span>
              </div>
            </div>
            <div className="hero-2col-image-wrapper svc-hero-image-wrapper reveal-from-right reveal-delay-200">
              <img
                src="/social-media-marketing-hero.png"
                alt="Social Media Marketing by HYNOX Tiruppur"
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
            <h2>Our Social Media Services</h2>
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
            <h2>Real Pages. Real Results.</h2>
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
            <h2>Social Media Questions Answered</h2>
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
          title="Ready to Build Your Social Presence?"
          subtitle="Tell us about your brand goals — we'll get back to you within 24 hours."
        />
      </main>

      <Footer />
    </>
  );
}
