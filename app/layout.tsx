import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adepoju Rokeebat | UI/UX Designer",
  description: "I design digital experiences that feel as good as they look: purposeful, precise, and deeply human.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <nav className="container">
          <div className="nav-header animate-fade-in" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '32px 0' }}>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', color: 'var(--accent)', margin: 0 }}>ARA</h2>
            <div className="nav-links" style={{ display: 'flex', gap: '48px', color: 'white', fontSize: '1rem', fontWeight: '500' }}>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#work">Work</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
            </div>
            <a href="#contact" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', backgroundColor: 'var(--accent)', color: 'var(--foreground-dark)', fontWeight: '600', fontSize: '1rem', transition: 'opacity 0.3s' }}>
              Let's Talk <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
