import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";

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
      { url: '/icon', type: 'image/png' },
      { url: '/favicon.ico' }
    ],
    apple: [
      { url: '/icon', type: 'image/png' }
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
    title: 'SiTerra Studio - Современная веб-разработка',
    description: 'Профессиональная студия веб-разработки. Создаем современные, быстрые и эффективные веб-приложения.',
    creator: '@siterrastudio',
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
      <head>
        {/* Метатег удален, так как он уже указан в metadata */}
      </head>
      <body className="overflow-x-hidden">
        <Background />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
