'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper to build links. On the home page, standard anchor hashes work nicely.
  // On other pages, they are prefixed with '/' to navigate back to the home page sections.
  const getHref = (hash: string) => {
    return isHome ? hash : `/${hash}`;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isHome ? 'reveal-fade-in' : 'svc-header'} ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
      <Link href="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeMobileMenu}>
        <div className="logo-mark">
          HX
          <div className="logo-dots">
            <span className="logo-dot" />
            <span className="logo-dot" />
            <span className="logo-dot" />
            <span className="logo-dot" />
          </div>
        </div>
        <span>HYNOX</span>
      </Link>
      
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isMobileMenuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      <nav className={`nav-container ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="nav">
          <li><Link href={getHref('#home')} onClick={closeMobileMenu}>HOME</Link></li>
          <li><Link href={getHref('#services')} onClick={closeMobileMenu}>SERVICES</Link></li>
          <li><Link href={getHref('#work')} onClick={closeMobileMenu}>WORK</Link></li>
          <li><Link href="/case-studies" onClick={closeMobileMenu}>CASE STUDIES</Link></li>
          <li><Link href="/blog" className={pathname === '/blog' ? 'active' : ''} onClick={closeMobileMenu}>BLOG</Link></li>
          <li><Link href="/careers" onClick={closeMobileMenu}>CAREERS</Link></li>
          <li><Link href={getHref('#faq')} onClick={closeMobileMenu}>FAQ</Link></li>
        </ul>
        <div className="mobile-menu-actions">
          <a href="#" className="btn btn-voice-ai" onClick={closeMobileMenu}>
            <svg className="btn-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="12" y1="2" x2="12" y2="9" />
            </svg>
            Voice.ai
          </a>
          <Link href="/contact" className="btn btn-outline" onClick={closeMobileMenu}>
            Contact
          </Link>
        </div>
      </nav>
      
      <div className="header-actions">
        <a href="#" className="btn btn-voice-ai">
          <svg className="btn-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="12" y1="2" x2="12" y2="9" />
          </svg>
          Voice.ai
        </a>
        <Link href="/contact" className="btn btn-outline">
          Contact
        </Link>
      </div>
    </header>
  );
}
