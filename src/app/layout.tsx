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
  metadataBase: new URL('https://siterra-studio.ru'),
  icons: {
    icon: {
      url: '/favicon.ico',
      type: 'image/x-icon',
      sizes: 'any',
    },
    shortcut: {
      url: '/favicon.ico',
      type: 'image/x-icon',
    },
    apple: {
      url: '/favicon.ico',
      type: 'image/x-icon',
    },
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
