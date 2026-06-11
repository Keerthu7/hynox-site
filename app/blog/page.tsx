'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { posts } from './blogData';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [emailInput, setEmailInput] = useState('');
  const [emailInputBottom, setEmailInputBottom] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubscribedBottom, setIsSubscribedBottom] = useState(false);

  const popularPosts = [
    {
      title: 'Website Development Cost in Tiruppur – Complete Guide',
      date: 'Apr 28, 2025',
      image: '/web-development-hero.png',
      slug: 'website-development-cost-in-tiruppur-2025-guide',
    },
    {
      title: 'Why Every Business in Tiruppur Needs a Professional Website',
      date: 'Apr 20, 2025',
      image: '/performance-marketing-hero.png',
      slug: 'why-every-textile-business-needs-a-professional-website',
    },
    {
      title: 'Top 10 Features Every Business Website Must Have',
      date: 'Apr 15, 2025',
      image: '/web-development-hero.png',
      slug: 'top-features-every-business-website-should-have',
    },
    {
      title: 'How We Helped Businesses Automate and Save 50% Time',
      date: 'Apr 10, 2025',
      image: '/erp-software-hero.png',
      slug: 'how-custom-software-saves-time-and-money',
    },
  ];

  const categories = [
    { name: 'Web Development', count: 10 },
    { name: 'eCommerce', count: 10 },
    { name: 'Automation', count: 10 },
    { name: 'App Development', count: 10 },
    { name: 'Digital Marketing', count: 10 },
  ];

  const topics = ['All', 'Web Development', 'eCommerce', 'Automation', 'App Development', 'Digital Marketing'];

  // Filter posts based on selected category & search input
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const POSTS_PER_PAGE = 6;
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  // Safely clamp currentPage if it exceeds totalPages
  const activePage = Math.min(currentPage, Math.max(1, totalPages));

  const indexOfLastPost = activePage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (activePage > 3) {
        pages.push('...');
      }
      
      const start = Math.max(2, activePage - 1);
      const end = Math.min(totalPages - 1, activePage + 1);
      
      for (let i = start; i <= end; i++) {
        // Avoid adding duplicate of page 1 or totalPages
        if (i > 1 && i < totalPages) {
          pages.push(i);
        }
      }
      
      if (activePage < totalPages - 2) {
        pages.push('...');
      }
      pages.push(totalPages);
    }
    return pages;
  };

  const handleSubscribe = (e: React.FormEvent, isBottom: boolean) => {
    e.preventDefault();
    if (isBottom) {
      if (emailInputBottom.trim()) {
        setIsSubscribedBottom(true);
        setTimeout(() => {
          setIsSubscribedBottom(false);
          setEmailInputBottom('');
        }, 4000);
      }
    } else {
      if (emailInput.trim()) {
        setIsSubscribed(true);
        setTimeout(() => {
          setIsSubscribed(false);
          setEmailInput('');
        }, 4000);
      }
    }
  };

  useEffect(() => {
    // Scroll animation support
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          entry.target.classList.remove('is-hidden');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, { 
      threshold: 0.05,
      rootMargin: '0px 0px -40px 0px'
    });

    const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-blur, .reveal-fade-in, .reveal-from-left, .reveal-from-right, .reveal-zoom, .reveal-flip-x, .reveal-rotate, .reveal-scale-up');
    elements.forEach((el) => {
      // Set initial state
      el.classList.add('is-hidden');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeCategory, searchQuery, activePage]);

  return (
    <div className="mono-blog-wrapper">
      <Header />

      <main style={{ background: '#000000', color: '#ffffff', minHeight: '100vh', paddingBottom: '6rem' }}>
        
        {/* HERO SECTION */}
        <section className="cs-hero-section reveal-blur">
          <div className="cs-hero-grid">
            {/* Left Content */}
            <div className="cs-hero-left" style={{ paddingLeft: '0' }}>
              <div className="badge reveal-fade-in" style={{ marginBottom: '1rem' }}>BLOG</div>
              <h1 className="reveal-from-left reveal-delay-100 cs-page-title">
                Insights That Drive<br/>
                <span style={{ color: '#ffffff' }}>Digital Growth.</span>
              </h1>
              <p className="reveal-from-left reveal-delay-200 cs-page-desc">
                Practical tips, industry insights and expert guides on web development, eCommerce, automation and digital marketing.
              </p>
              <div className="reveal-fade-in reveal-delay-300 cs-hero-btn-container">
                <a href="#topics" className="cs-contact-btn" onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(255,255,255,0.2)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  Explore Topics <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="cs-hero-right reveal-zoom reveal-delay-200">
              <div className="cs-hero-img-box">
                <img 
                  src="/blog-hero-bright.png" 
                  alt="HYNOX Blog Insights Mockup" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT SECTION WRAPPER (Dark Background) */}
        <div className="mono-blog-content-section" style={{ background: '#000000', color: '#ffffff' }}>
          <div className="mono-blog-container content-container" id="topics">
            
            {/* TOPICS FILTER BAR */}
            <section className="topics-section reveal-fade-in">
              <h2 className="topics-heading">Browse By Topic</h2>
              <div className="topics-pills-container">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => {
                      setActiveCategory(topic);
                      setCurrentPage(1);
                    }}
                    className={`topic-pill ${activeCategory === topic ? 'active' : ''}`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </section>

            {/* TWO-COLUMN GRID */}
            <section className="blog-main-grid">
              
              {/* Left Column: Post list */}
              <div className="blog-posts-column">
                {currentPosts.length > 0 ? (
                  <div className="posts-cards-grid">
                    {currentPosts.map((post) => (
                      <article key={post.id} className="blog-card reveal-on-scroll">
                        <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                           <div className="blog-card-image-box">
                            <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <span className="blog-card-tag">{post.category}</span>
                          </div>
                        </Link>
                        <div className="blog-card-meta">
                          <span className="meta-date">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                              <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            {post.date}
                          </span>
                          <span className="meta-read-time">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" />
                              <polyline points="12 6 12 12 16 14" />
                            </svg>
                            {post.readTime}
                          </span>
                        </div>
                        <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                          <h3 className="blog-card-title">{post.title}</h3>
                        </Link>
                        <p className="blog-card-description">{post.desc}</p>
                        <Link href={`/blog/${post.slug}`} className="blog-card-readmore">
                          Read More
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </Link>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="no-results">
                    <h3>No posts found</h3>
                    <p>Try searching for a different keyword or category.</p>
                    <button onClick={() => { setActiveCategory('All'); setSearchQuery(''); setCurrentPage(1); }} className="btn-reset">
                      Reset Filters
                    </button>
                  </div>
                )}

                {/* PAGINATION */}
                {totalPages > 1 && (
                  <div className="pagination-container reveal-fade-in">
                    <button 
                      onClick={() => {
                        setCurrentPage(prev => Math.max(prev - 1, 1));
                        window.scrollTo({ top: document.getElementById('topics')?.offsetTop || 300, behavior: 'smooth' });
                      }}
                      className="page-btn arrow-btn"
                      disabled={activePage === 1}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="19" y1="12" x2="5" y2="12" />
                        <polyline points="12 19 5 12 12 5" />
                      </svg>
                    </button>

                    {getPageNumbers().map((pageNum, idx) => {
                      if (pageNum === '...') {
                        return <span key={`dots-${idx}`} className="page-dots">...</span>;
                      }
                      return (
                        <button 
                          key={`page-${pageNum}`} 
                          className={`page-btn ${activePage === pageNum ? 'active' : ''}`} 
                          onClick={() => {
                            setCurrentPage(pageNum as number);
                            window.scrollTo({ top: document.getElementById('topics')?.offsetTop || 300, behavior: 'smooth' });
                          }}
                        >
                          {pageNum}
                        </button>
                      );
                    })}

                    <button 
                      onClick={() => {
                        setCurrentPage(prev => Math.min(prev + 1, totalPages));
                        window.scrollTo({ top: document.getElementById('topics')?.offsetTop || 300, behavior: 'smooth' });
                      }}
                      className="page-btn arrow-btn"
                      disabled={activePage === totalPages}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              {/* Right Column: Sidebar */}
              <aside className="blog-sidebar-column">
                
                {/* SEARCH */}
                <div className="sidebar-widget search-widget reveal-on-scroll">
                  <form onSubmit={(e) => e.preventDefault()} className="search-form">
                    <input
                      type="text"
                      placeholder="Search blogs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="sidebar-search-input"
                    />
                    <button type="submit" className="sidebar-search-btn" aria-label="Search">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    </button>
                  </form>
                </div>

                {/* CATEGORIES */}
                <div className="sidebar-widget categories-widget reveal-on-scroll">
                  <h3 className="widget-title">Categories</h3>
                  <ul className="categories-list">
                    {categories.map((cat) => (
                      <li key={cat.name} className="category-item-row">
                        <button
                          onClick={() => {
                            setActiveCategory(cat.name);
                            setCurrentPage(1);
                          }}
                          className={`category-item-btn ${activeCategory.toLowerCase() === cat.name.toLowerCase() ? 'active' : ''}`}
                        >
                          <svg className="category-arrow" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                          {cat.name}
                        </button>
                        <span className="category-count">{cat.count}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* POPULAR POSTS */}
                <div className="sidebar-widget popular-widget reveal-on-scroll">
                  <h3 className="widget-title">Popular Posts</h3>
                  <div className="popular-posts-list">
                    {popularPosts.map((pop, idx) => (
                      <div key={idx} className="popular-post-item">
                        <Link href={`/blog/${pop.slug}`} style={{ display: 'flex', gap: '1rem', alignItems: 'center', textDecoration: 'none' }}>
                          <div className="popular-post-thumb">
                            <img src={pop.image} alt={pop.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>
                          <div className="popular-post-details">
                            <h4 className="popular-post-title" style={{ color: '#ffffff' }}>
                              {pop.title}
                            </h4>
                            <span className="popular-post-date">{pop.date}</span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* STAY UPDATED NEWSLETTER */}
                <div className="sidebar-widget newsletter-widget reveal-on-scroll">
                  <h3 className="widget-title">Stay Updated</h3>
                  <p className="widget-desc">Get the latest insights and tips straight to your inbox.</p>
                  
                  {isSubscribed ? (
                    <div className="newsletter-success">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Subscribed Successfully!</span>
                    </div>
                  ) : (
                    <form onSubmit={(e) => handleSubscribe(e, false)} className="newsletter-form-sidebar">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        required
                        className="newsletter-input-sidebar"
                      />
                      <button type="submit" className="newsletter-btn-sidebar">
                        Subscribe
                      </button>
                    </form>
                  )}
                  <span className="newsletter-disclaimer">No spam. Unsubscribe anytime.</span>
                </div>

              </aside>

            </section>

            {/* BOTTOM NEWSLETTER PANEL */}
            <section className="bottom-newsletter-banner reveal-fade-in">
              <div className="banner-content">
                <div className="banner-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="banner-text-details">
                  <h3>Want More Business Growth Tips?</h3>
                  <p>Join 500+ business owners who get our latest insights.</p>
                </div>
              </div>

              <div className="banner-form-box">
                {isSubscribedBottom ? (
                  <div className="banner-success-alert">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Thank you for subscribing!</span>
                  </div>
                ) : (
                  <form onSubmit={(e) => handleSubscribe(e, true)} className="banner-subscription-form">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={emailInputBottom}
                      onChange={(e) => setEmailInputBottom(e.target.value)}
                      required
                      className="banner-email-input"
                    />
                    <button type="submit" className="banner-submit-btn">
                      Subscribe Now
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </form>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
