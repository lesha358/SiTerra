import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import Script from 'next/script';

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export const metadata: Metadata = {
  title: 'SiTerra Studio - Разработка сайтов и веб-приложений',
  description: 'Создаем современные веб-сайты и приложения, которые помогают бизнесу расти и развиваться',
  metadataBase: new URL('https://www.siterra-studio.ru'),
  alternates: {
    canonical: 'https://www.siterra-studio.ru',
    types: {
      'application/rss+xml': 'https://www.siterra-studio.ru/feed.xml',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' }
    ],
    apple: [
      { url: '/icon', type: 'image/png' }
    ],
    shortcut: [
      { url: '/favicon.ico' }
    ],
    other: [
      {
        rel: 'icon',
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        rel: 'icon',
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        rel: 'icon',
        url: '/favicon-48x48.png',
        sizes: '48x48',
        type: 'image/png'
      }
    ]
  },
  keywords: ["веб-разработка", "создание сайтов", "интернет-магазины", "веб-приложения", "SiTerra Studio", "разработка сайтов", "веб-дизайн"],
  authors: [{ name: "SiTerra Studio" }],
  creator: "SiTerra Studio",
  publisher: "SiTerra Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://siterra-studio.ru',
    title: 'SiTerra Studio - Современная веб-разработка',
    description: 'Профессиональная студия веб-разработки. Создаем современные, быстрые и эффективные веб-приложения.',
    siteName: 'SiTerra Studio',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@siterrastudio',
    title: 'SiTerra Studio - Современная веб-разработка',
    description: 'Профессиональная студия веб-разработки. Создаем современные, быстрые и эффективные веб-приложения.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ваш-google-verification-code',
    yandex: '11e3c3f1824633b9',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="overflow-x-hidden">
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(101169998, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/101169998" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
        <Background />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
