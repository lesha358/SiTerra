'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, MessageSquare, Mail } from 'lucide-react';
import { useState } from 'react';

export default function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  const buttons = [
    {
      icon: Phone,
      label: 'Позвонить',
      href: 'tel:+79859586621',
      color: 'from-green-600 to-green-500'
    },
    {
      icon: MessageSquare,
      label: 'Telegram',
      href: 'https://t.me/miya_b',
      color: 'from-blue-600 to-blue-500'
    },
    {
      icon: Mail,
      label: 'WhatsApp',
      href: 'https://wa.me/79859586621',
      color: 'from-emerald-600 to-emerald-500'
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-20 right-0 flex flex-col gap-3"
          >
            {buttons.map((button, index) => (
              <motion.a
                key={index}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex items-center gap-3 px-6 py-3 rounded-full overflow-hidden shadow-lg"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${button.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300" />
                <div className="relative flex items-center gap-3 text-white">
                  <button.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{button.label}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full shadow-lg"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 opacity-90 hover:opacity-100 transition-opacity duration-300 rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-full" />
        <div className="relative flex items-center justify-center w-full h-full">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="message"
                initial={{ rotate: 90 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>
    </div>
  );
} 