"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Wand2, Moon, Sun, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <div className={styles.navPill}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIconWrapper}>
              <Wand2 size={16} />
            </div>
            <span>Everlegit</span>
          </Link>

          {/* Desktop Links */}
          <nav className={styles.desktopNav}>
            <Link href="#templates">Templates</Link>
            <Link href="#features">Features</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#faq">FAQ</Link>
          </nav>

          {/* Actions */}
          <div className={styles.actions}>
            {mounted && (
              <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Theme">
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <Link href="/dashboard" className="btn btn-ghost" style={{ padding: '0.5rem 1rem' }}>Log in</Link>
            <Link href="/dashboard" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Sign up</Link>
            
            <button className={styles.mobileToggle} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuInner}>
            <Link href="#templates" onClick={() => setMobileMenuOpen(false)}>Templates</Link>
            <Link href="#features" onClick={() => setMobileMenuOpen(false)}>Features</Link>
            <Link href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <Link href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
          </div>
        </div>
      )}
    </header>
  );
}
