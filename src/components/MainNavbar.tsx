'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 64 // Высота навигационной панели
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'portfolio', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      const navbarHeight = 64; // Высота навигационной панели
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-gray-200/50" />
      <div className="container mx-auto px-4 max-w-full">
        <div className="flex items-center justify-between h-16 relative">
          <Link href="/" className="group ml-8">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              SiTerra
            </span>
            <span className="text-sm font-medium text-gray-500 ml-1 group-hover:text-purple-600 transition-colors duration-300">
              Studio
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#services" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
              Услуги
            </Link>
            <Link href="/#portfolio" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
              Портфолио
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
              Контакты
            </Link>
            <Link href="/technologies" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
              Технологии
            </Link>
            <a href="tel:+79859586621" className="group relative inline-flex items-center gap-2 px-4 py-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="relative text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
                +7 (985) 958-66-21
              </span>
            </a>
            <a href="https://t.me/miya_b" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center p-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0088cc]/10 via-[#0088cc]/10 to-[#0088cc]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <svg className="w-5 h-5 text-[#0088cc]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.95 1.24-5.54 3.65-.52.36-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.38-.49 1.05-.75 4.12-1.79 6.87-2.97 8.26-3.54 3.93-1.6 4.75-1.88 5.28-1.88.11 0 .36.03.52.18.14.13.18.3.2.45-.01.06-.01.11-.02.17z"/>
              </svg>
            </a>
            <a href="https://wa.me/79859586621" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center p-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/10 via-[#25D366]/10 to-[#25D366]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <Link href="/#contact" className="group relative inline-flex items-center justify-center gap-2 py-2 px-4 overflow-hidden" onClick={scrollToContact}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300" />
              <span className="relative text-white font-medium">
                Обсудить проект
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors duration-300 relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div
              animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className="md:hidden fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 py-4 px-4 space-y-4 z-50 w-full overflow-x-hidden"
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-4 w-full"
                >
                  <Link 
                    href="/#services" 
                    className={`block text-gray-700 hover:text-purple-600 transition-colors duration-300 py-2 group ${
                      activeLink === 'services' ? 'text-purple-600' : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      scrollToSection('services');
                    }}
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="flex items-center gap-2"
                    >
                      <span className={`w-1 h-1 rounded-full bg-purple-600 ${
                        activeLink === 'services' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      } transition-opacity duration-300`} />
                      <span className="group-hover:text-purple-600 transition-colors duration-300">Услуги</span>
                    </motion.span>
                  </Link>
                  <Link 
                    href="/#portfolio" 
                    className={`block text-gray-700 hover:text-purple-600 transition-colors duration-300 py-2 group ${
                      activeLink === 'portfolio' ? 'text-purple-600' : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      scrollToSection('portfolio');
                    }}
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="flex items-center gap-2"
                    >
                      <span className={`w-1 h-1 rounded-full bg-purple-600 ${
                        activeLink === 'portfolio' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      } transition-opacity duration-300`} />
                      <span className="group-hover:text-purple-600 transition-colors duration-300">Портфолио</span>
                    </motion.span>
                  </Link>
                  <Link 
                    href="/#contact" 
                    className={`block text-gray-700 hover:text-purple-600 transition-colors duration-300 py-2 group ${
                      activeLink === 'contact' ? 'text-purple-600' : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      scrollToSection('contact');
                    }}
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="flex items-center gap-2"
                    >
                      <span className={`w-1 h-1 rounded-full bg-purple-600 ${
                        activeLink === 'contact' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      } transition-opacity duration-300`} />
                      <span className="group-hover:text-purple-600 transition-colors duration-300">Контакты</span>
                    </motion.span>
                  </Link>
                  <Link 
                    href="/technologies" 
                    className="block text-gray-700 hover:text-purple-600 transition-colors duration-300 py-2 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="group-hover:text-purple-600 transition-colors duration-300">Технологии</span>
                    </motion.span>
                  </Link>
                  <Link 
                    href="/#contact" 
                    className="block text-gray-700 hover:text-purple-600 transition-colors duration-300 py-2 group"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      scrollToContact();
                    }}
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="group-hover:text-purple-600 transition-colors duration-300">Обсудить проект</span>
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
} 