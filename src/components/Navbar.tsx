"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun, Briefcase } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Briefcase className={styles.logoIcon} />
          <span>Ever Legit LLC</span>
        </Link>

        <nav className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileOpen : ""}`}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="#about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="#services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
          <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          
          {mounted && (
            <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Theme">
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
        </nav>

        <button className={styles.mobileToggle} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
