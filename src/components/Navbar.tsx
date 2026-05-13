"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown, Globe, ArrowRight,
  Layers, Server, Users, Cpu, Building2, Network,
  Briefcase, Mail, BarChart3, Shield,
} from "lucide-react";
import { Logo } from "./Logo";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  {
    label: "Solutions",
    href: "/",
    children: [
      { label: "Marketplace Infrastructure", href: "/#marketplace", icon: Layers, desc: "Multi-vendor commerce ecosystems" },
      { label: "Enterprise Ecommerce", href: "/#ecommerce", icon: Server, desc: "Scalable ecommerce systems" },
      { label: "Supplier & B2B Commerce", href: "/#supplier", icon: Users, desc: "Supplier & B2B operations" },
      { label: "Commerce Technology", href: "/#technology", icon: Cpu, desc: "API & cloud infrastructure" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About EverLegit", href: "/about", icon: Building2, desc: "Our story & mission" },
      { label: "Careers", href: "/careers", icon: Briefcase, desc: "Join our team" },
      { label: "Partnerships", href: "/partnerships", icon: Network, desc: "Strategic collaborations" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const isActive = (href: string) => {
    if (href === "/" || href === "/#marketplace" || href === "/#ecommerce" || href === "/#supplier" || href === "/#technology") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="EverLegit Home">
            <div className={styles.logoMark}>
              <Logo />
            </div>
            <span className={styles.logoText}>EverLegit</span>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav} aria-label="Main navigation">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className={styles.dropdownWrapper}
                  onMouseEnter={() => handleDropdownEnter(link.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className={`${styles.navLink} ${isActive(link.href) ? styles.navLinkActive : ""}`}
                    aria-expanded={openDropdown === link.label}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      size={13}
                      className={`${styles.chevron} ${openDropdown === link.label ? styles.chevronOpen : ""}`}
                    />
                  </button>
                  <div
                    className={`${styles.dropdown} ${openDropdown === link.label ? styles.dropdownVisible : ""}`}
                    onMouseEnter={() => handleDropdownEnter(link.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className={styles.dropdownInner}>
                      {link.children.map((child, i) => {
                        const Icon = child.icon;
                        return (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={styles.dropdownItem}
                            style={{ animationDelay: `${i * 0.04}s` }}
                            onClick={() => setOpenDropdown(null)}
                          >
                            <div className={styles.dropdownIcon}>
                              <Icon size={15} />
                            </div>
                            <div>
                              <div className={styles.dropdownItemLabel}>{child.label}</div>
                              <div className={styles.dropdownItemDesc}>{child.desc}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`${styles.navLink} ${isActive(link.href) ? styles.navLinkActive : ""}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Actions */}
          <div className={styles.actions}>
            <Link href="/dashboard" className={styles.portalBtn}>
              <Globe size={14} />
              Client Portal
            </Link>
            <Link href="/contact" className={styles.ctaBtn}>
              Get Started
              <ArrowRight size={14} />
            </Link>
            <button
              className={styles.mobileToggle}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
            >
              <span className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`${styles.mobileOverlay} ${mobileOpen ? styles.mobileOverlayOpen : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ""}`}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
      >
        <div className={styles.drawerHeader}>
          <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
            <div className={styles.logoMark}><Logo /></div>
            <span className={styles.logoText}>EverLegit</span>
          </Link>
          <button
            className={styles.drawerClose}
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation"
          >
            <X size={20} />
          </button>
        </div>

        <nav className={styles.drawerNav}>
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label} className={styles.drawerGroup}>
                <button
                  className={`${styles.drawerGroupBtn} ${mobileExpanded === link.label ? styles.drawerGroupBtnOpen : ""}`}
                  onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`${styles.chevron} ${mobileExpanded === link.label ? styles.chevronOpen : ""}`}
                  />
                </button>
                <div className={`${styles.drawerSub} ${mobileExpanded === link.label ? styles.drawerSubOpen : ""}`}>
                  {link.children.map((child) => {
                    const Icon = child.icon;
                    return (
                      <Link
                        key={child.label}
                        href={child.href}
                        className={styles.drawerSubLink}
                        onClick={() => setMobileOpen(false)}
                      >
                        <div className={styles.drawerSubIcon}><Icon size={14} /></div>
                        <div>
                          <div className={styles.drawerSubLabel}>{child.label}</div>
                          <div className={styles.drawerSubDesc}>{child.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`${styles.drawerLink} ${isActive(link.href) ? styles.drawerLinkActive : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className={styles.drawerFooter}>
          <Link href="/dashboard" className="btn btn-outline" onClick={() => setMobileOpen(false)} style={{ width: "100%", justifyContent: "center" }}>
            <Globe size={15} /> Client Portal
          </Link>
          <Link href="/contact" className="btn btn-primary" onClick={() => setMobileOpen(false)} style={{ width: "100%", justifyContent: "center" }}>
            Request Consultation <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
