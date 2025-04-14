'use client';

import { motion } from 'framer-motion';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Основной градиентный фон */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Плавные волны */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 100% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 100%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)
          `
        }}
        animate={{
          backgroundPosition: [
            '0% 0%, 100% 0%, 50% 100%',
            '100% 100%, 0% 100%, 50% 0%'
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Динамичные градиенты */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(45deg, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            linear-gradient(-45deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%)
          `
        }}
        animate={{
          backgroundPosition: ['0% 0%, 100% 100%', '100% 100%, 0% 0%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Световые эффекты */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.4) 0%, transparent 50%)
          `,
          mixBlendMode: 'overlay'
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Цветные акценты */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.2) 0%, transparent 30%),
            radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.2) 0%, transparent 30%)
          `
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
} 