import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export const metadata: Metadata = {
  title: {
    default: "SiTerra Studio - Современная веб-разработка",
    template: "%s | SiTerra Studio"
  },
  description: "Создаем современные и инновационные веб-решения для вашего бизнеса",
  metadataBase: new URL('https://si-terra.vercel.app'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
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
    url: 'https://si-terra.vercel.app',
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
    yandex: 'ваш-yandex-verification-code',
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
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
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
