'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-gray-200/50" />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 relative">
          <Link href="/" className="group relative inline-flex items-center gap-2 py-2 px-3 sm:px-4 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300" />
            <span className="relative flex items-center gap-2 text-white font-medium text-sm sm:text-base">
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              На главную
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="/#services" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 text-sm lg:text-base">
              Услуги
            </Link>
            <Link href="/#portfolio" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 text-sm lg:text-base">
              Портфолио
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 text-sm lg:text-base">
              Контакты
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors duration-300 z-10"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMounted && (
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="md:hidden fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg z-40"
              >
                <div className="flex flex-col py-4 px-4 space-y-4">
                  <Link
                    href="/#services"
                    className="text-gray-700 hover:text-purple-600 transition-colors duration-300 py-2 text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Услуги
                  </Link>
                  <Link
                    href="/#portfolio"
                    className="text-gray-700 hover:text-purple-600 transition-colors duration-300 py-2 text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Портфолио
                  </Link>
                  <Link
                    href="/#contact"
                    className="text-gray-700 hover:text-purple-600 transition-colors duration-300 py-2 text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Контакты
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </nav>
  )
} 