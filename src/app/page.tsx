'use client';

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import TechStack from '@/components/TechStack';
import MainNavbar from '@/components/MainNavbar';
import FloatingButton from '@/components/FloatingButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainNavbar />
      <Hero />
      <Services />
      <Features />
      <Portfolio />
      <TechStack />
      <Contact />
      <FloatingButton />
    </main>
  );
}
