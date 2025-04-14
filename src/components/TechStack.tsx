'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Layout, 
  Type, 
  Palette,
  Server,
  Database,
  Network,
  Cloud,
  Box,
  GitBranch,
  Workflow,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const techStack = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: Code2 },
      { name: 'Next.js', icon: Layout },
      { name: 'TypeScript', icon: Type },
      { name: 'Tailwind CSS', icon: Palette }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: Server },
      { name: 'Express', icon: Network },
      { name: 'PostgreSQL', icon: Database },
      { name: 'MongoDB', icon: Database }
    ]
  },
  {
    category: 'DevOps',
    items: [
      { name: 'Docker', icon: Box },
      { name: 'AWS', icon: Cloud },
      { name: 'Git', icon: GitBranch },
      { name: 'CI/CD', icon: Workflow }
    ]
  }
]

export default function TechStack() {
  return (
    <section id="tech" className="relative py-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-20 animate-float animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Технологии</span>{' '}
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              и инструменты
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы используем современный стек технологий для создания высококачественных цифровых продуктов
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-sm bg-white/30 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 group-hover:text-purple-600 transition-colors duration-300">{category.category}</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center p-4 rounded-xl bg-white/50 hover:bg-purple-600/5 transition-colors duration-300"
                      >
                        <div className="w-12 h-12 flex items-center justify-center mb-3 text-purple-600">
                          <Icon className="w-8 h-8" />
                        </div>
                        <span className="text-gray-800 text-sm font-medium">{item.name}</span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 text-lg mb-6">
            И это далеко не полный список технологий, которые мы используем в работе
          </p>
          <Link href="/technologies" className="group relative inline-flex items-center justify-center gap-2 py-3 px-8 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300" />
            <span className="relative flex items-center gap-2 text-white font-medium">
              Узнать больше о наших технологиях
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 