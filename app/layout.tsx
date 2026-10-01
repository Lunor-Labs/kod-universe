import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { FloatingActions } from "@/components/ui/FloatingActions";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "creative studio",
    "branding",
    "social media",
    "package design",
    "digital experiences",
    "3D motion graphics",
    "architectural design",
    "spatial design",
    "interior design",
    "KOD Universe",
  ],
  authors: [{ name: "KOD Universe", url: siteConfig.url }],
  creator: "KOD Universe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    creator: "@koduniverse",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
const SPLASH_STYLE = `
  html,body{background:#f7f3f1;}
  #kod-splash{
    position:fixed;inset:0;z-index:99999;
    background:#f7f3f1;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    transition:opacity 0.7s cubic-bezier(0.4,0,0.2,1);
  }
  #kod-splash.hiding{opacity:0;pointer-events:none;}
  #kod-splash-eye{
    width:96px;height:auto;display:block;
    animation:kodEyePulse 1.6s cubic-bezier(0.4,0,0.2,1) infinite;
    transform-origin:center center;
    backface-visibility:hidden;-webkit-backface-visibility:hidden;
    will-change:opacity,transform;
    margin-bottom: 24px;
  }
  #kod-splash-text{
    font-family: system-ui, -apple-system, sans-serif;
    font-size: 14px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(0,0,0,0.4);
    animation:kodEyePulse 1.6s cubic-bezier(0.4,0,0.2,1) infinite;
  }
  @keyframes kodEyePulse{
    0%,100%{opacity:0.22;transform:scale(0.97) translateZ(0);}
    50%    {opacity:1;   transform:scale(1)    translateZ(0);}
  }
`;

const SPLASH_SCRIPT = `
(function(){
  var s=document.getElementById('kod-splash');
  if(!s)return;
  function dismiss(){
    if(s._done)return;s._done=true;
    s.classList.add('hiding');
    setTimeout(function(){
      if(s){ s.style.display = 'none'; }
    },750);
  }
  var isHome=(window.location.pathname==='/'||window.location.pathname==='');
  if(isHome){
    window.addEventListener('kod-hero-ready',function(){setTimeout(dismiss,420);},{once:true});
    setTimeout(dismiss,3000);
  } else {
    if(document.readyState==='complete'||document.readyState==='interactive'){
      setTimeout(dismiss,400);
    } else {
      document.addEventListener('DOMContentLoaded',function(){setTimeout(dismiss,400);},{once:true});
      setTimeout(dismiss,1500);
    }
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.png`,
    description: siteConfig.description,
    sameAs: siteConfig.socialLinks.map((link) => link.href),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phones[0]?.number,
      contactType: "customer service",
      areaServed: "LK",
      availableLanguage: "English",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/icons/KoD-Eye.webp"
          as="image"
          type="image/webp"
        />
        <style dangerouslySetInnerHTML={{ __html: SPLASH_STYLE }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${cormorant.variable} bg-canvas text-void-black antialiased`}
        suppressHydrationWarning
      >
        <div id="kod-splash" aria-hidden="true">
          <img
            id="kod-splash-eye"
            src="/icons/KoD-Eye.webp"
            alt=""
            width={90}
            height={106}
            decoding="sync"
          />
          <p id="kod-splash-text">Loading...</p>
        </div>
        <script dangerouslySetInnerHTML={{ __html: SPLASH_SCRIPT }} />

        <SmoothScrollProvider>
          <Header />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <FloatingActions />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
