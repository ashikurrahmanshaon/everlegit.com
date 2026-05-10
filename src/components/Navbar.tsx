"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Logo } from "./Logo";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  {
    label: "Solutions",
    href: "#solutions",
    children: [
      { label: "Marketplace Infrastructure", href: "#marketplace" },
      { label: "Enterprise Ecommerce", href: "#ecommerce" },
      { label: "Supplier & B2B Commerce", href: "#supplier" },
      { label: "Commerce Technology", href: "#technology" },
    ],
  },
  { label: "About", href: "#about" },
  { label: "Operations", href: "#operations" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoMark}>
            <Logo />
          </div>
          <span className={styles.logoText}>EverLegit</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className={styles.dropdownWrapper}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className={styles.navLink}>
                  {link.label}
                  <ChevronDown size={14} className={dropdownOpen ? styles.chevronOpen : ""} />
                </button>
                {dropdownOpen && (
                  <div className={styles.dropdown}>
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className={styles.dropdownItem}
                        onClick={() => setDropdownOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.label} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <Link href="/dashboard" className={`${styles.portalBtn}`}>
            <Globe size={15} />
            Client Portal
          </Link>
          <Link href="#contact" className={styles.ctaBtn}>
            Request Consultation
          </Link>
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""}`}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={styles.mobileLink}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <div className={styles.mobileCtas}>
          <Link href="/dashboard" className={`btn btn-outline`} onClick={() => setMobileOpen(false)}>
            Client Portal
          </Link>
          <Link href="#contact" className={`btn btn-primary`} onClick={() => setMobileOpen(false)}>
            Request Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
