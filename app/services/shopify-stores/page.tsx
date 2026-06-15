'use client';

import { useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { Check, ArrowRight } from 'lucide-react';
import Header from '../../components/Header';
import ServiceCTA from '../../components/ServiceCTA';
import Footer from '../../components/Footer';

export default function ShopifyStoresPage() {
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
    { icon: 'ShoppingCart',  title: 'Custom Shopify Themes',   desc: 'Tailored designs that represent your brand, optimized for maximum conversion rate.' },
    { icon: 'Settings',  title: 'Store Setup & Launch',    desc: 'Domain connection, shipping configurations, checkout settings, and full storefront launch.' },
    { icon: 'Plug',  title: 'App Integration',         desc: 'Seamless setup of review apps, loyalty programs, upselling features, and marketing tools.' },
    { icon: 'Repeat',  title: 'Platform Migration',      desc: 'Migrate products, customers, and order history safely from WooCommerce, Wix, or custom tools.' },
    { icon: '🏢',  title: 'B2B Wholesale Setup',     desc: 'Specialized portals for wholesalers with tier pricing, custom ordering sheets, and billing.' },
    { icon: 'Zap',  title: 'Store Speed Audit',       desc: 'Speed optimization to reduce cart abandonment, fix layout shifts, and improve page scores.' },
  ];

  const whatYouGet = [
    { icon: 'Palette', title: 'Modern Theme Design',      desc: 'Sleek, minimalist interface matching your brand aesthetics.' },
    { icon: 'Smartphone', title: 'Mobile First Layout',       desc: 'Optimized shopping cart and checkout screens for mobile users.' },
    { icon: 'CreditCard', title: 'Local Payment Options',    desc: 'Razorpay, PhonePe, Paytm, and COD gateways completely integrated.' },
    { icon: '🚚', title: 'Shipping & Delivery APIs',  desc: 'Automated delivery rates and tracking links via Delhivery, Shiprocket, etc.' },
    { icon: 'MessageSquare', title: 'WhatsApp & SMS Alerts',     desc: 'Automatic order confirmation, dispatch alerts, and abandoned cart reminders.' },
    { icon: 'Search', title: 'SEO Optimized Setup',       desc: 'Proper product tags, site maps, speed boosts, and schema markup.' },
    { icon: 'BarChart3', title: 'Google Analytics & Pixel',  desc: 'Meta Pixel, Google Analytics 4, and conversion API setups for tracking ads.' },
    { icon: 'Headphones', title: 'Post-Launch Handover',     desc: 'Full video walkthroughs and guides on how to manage inventory and discounts.' },
  ];

  const whyChoose = [
    { title: 'Proven E-commerce Track Record', desc: 'We have launched highly successful Shopify brands (SugarStar, Graaps, Zyden).' },
    { title: 'Tiruppur Textile Savvy',       desc: 'We understand local apparel manufacturing, export procedures, and stock management.' },
    { title: 'Direct Developer Team',         desc: 'Fast iterations, custom code fixes, and zero middlemen delays.' },
    { title: 'Optimized for High ROAS',       desc: 'We build stores with high speed and conversion metrics, ideal for running paid ads.' },
    { title: 'Complete Store Handover',       desc: 'No hidden dependencies. We train your internal team to run the store independently.' },
  ];

  const process = [
    { step: '01', title: 'Discover',  desc: 'We analyze your catalog size, branding style, and target audience.' },
    { step: '02', title: 'Design',    desc: 'We map user flow, product pages layout, and global style guides.' },
    { step: '03', title: 'Develop',   desc: 'We customize your Shopify theme, add products, and configure apps.' },
    { step: '04', title: 'Integrate', desc: 'We configure payment gateways, shipping partners, and tracking tools.' },
    { step: '05', title: 'Launch',    desc: 'We conduct checkout tests, map your custom domain, and take the store live.' },
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
    { q: 'How much does Shopify store development cost in Tiruppur?', a: 'The cost depends on the store size, custom features, integrations, and design requirements. We provide custom pricing based on your business needs.' },
    { q: 'Why should I choose Shopify for my eCommerce business?', a: 'Shopify is a secure, scalable, and easy-to-manage eCommerce platform that helps businesses sell products online with minimal technical complexity.' },
    { q: 'Can HYNOX build a custom Shopify store?', a: 'Yes, we design and develop custom Shopify stores tailored to your brand, products, and customer experience goals.' },
    { q: 'Do you provide Shopify theme customization?', a: 'Yes, we customize Shopify themes to match your branding, improve user experience, and increase conversions.' },
    { q: 'Can you migrate my existing store to Shopify?', a: 'Yes, we can migrate products, customers, orders, and content from WooCommerce, Wix, Magento, or other platforms to Shopify.' },
    { q: 'Do you integrate payment gateways with Shopify?', a: 'Yes, we integrate Razorpay, PhonePe, Paytm, Stripe, PayPal, COD, and other payment solutions.' },
    { q: 'Can you set up shipping and delivery integrations?', a: 'Yes, we integrate shipping providers such as Shiprocket, Delhivery, Blue Dart, and other logistics platforms.' },
    { q: 'Is Shopify good for clothing and textile brands?', a: 'Yes, Shopify is one of the best eCommerce platforms for clothing brands, textile businesses, fashion labels, and D2C businesses looking to sell online.' },
    { q: 'Do you provide SEO for Shopify stores?', a: 'Yes, we optimize Shopify stores with SEO-friendly URLs, product schema, metadata, image optimization, and technical SEO best practices.' },
    { q: 'Can HYNOX build a Shopify wholesale or B2B store?', a: 'Yes, we develop Shopify B2B and wholesale stores with custom pricing, bulk ordering, dealer portals, and customer-specific catalogs.' },
    { q: 'Will my Shopify store work on mobile devices?', a: 'Yes, every Shopify store we build is fully responsive and optimized for mobile, tablet, and desktop users.' },
    { q: 'Why choose HYNOX for Shopify development in Tiruppur?', a: 'HYNOX specializes in Shopify store development, custom theme design, eCommerce automation, and conversion-focused online stores for textile, retail, and wholesale businesses.' },
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
                SHOPIFY STORES COMPANY IN TIRUPPUR
              </div>
              <h1 className="reveal-from-left reveal-delay-100 svc-subpage-h1">
                Shopify Stores That<br />
                <span className="svc-hero-accent-bw">Drive Online Sales</span>
              </h1>
              <p className="reveal-from-left reveal-delay-200">
                We design and build custom Shopify e-commerce stores, custom theme setups, and API integrations 
                tailored to scale your clothing, retail, or wholesale brand globally.
              </p>
              <div className="hero-actions reveal-from-left reveal-delay-300" style={{ marginBottom: '2.5rem' }}>
                <a href="/contact" className="btn btn-hero-solid">Get Free Consultation <ArrowRight size={16} style={{ marginLeft: "4px", display: "inline-block", verticalAlign: "middle" }} /></a>
                <a href="#portfolio" className="btn btn-hero-outline">View Our Work</a>
              </div>
              <div className="svc-hero-badges-bw reveal-fade-in reveal-delay-400">
                <span>✓ Shopify Setup</span>
                <span>✓ Theme Customization</span>
                <span>✓ Payment &amp; Shipping</span>
                <span>✓ Conversion Focused</span>
              </div>
            </div>
            <div className="hero-2col-image-wrapper svc-hero-image-wrapper reveal-from-right reveal-delay-200">
              <img
                src="/shopify-stores-hero.png"
                alt="Shopify E-commerce Development by HYNOX Tiruppur"
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
            <h2>Shopify Solutions Designed to Scale</h2>
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
            <h2>Real Stores. Real Results.</h2>
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
            <h2>Shopify Questions Answered</h2>
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
          title="Ready to Build Your Shopify Store?"
          subtitle="Tell us about your brand — we'll get back to you within 24 hours."
        />
      </main>

      <Footer />
    </>
  );
}
