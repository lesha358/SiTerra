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
  ArrowRight,
  Shield,
  Zap,
  Cpu,
  Globe,
  Smartphone,
  BarChart2,
  Clock,
  Users
} from 'lucide-react'
import MainNavbar from '@/components/MainNavbar'
import FloatingButton from '@/components/FloatingButton'

const techCategories = [
  {
    title: 'Frontend Разработка',
    description: 'Создаем современные, отзывчивые и интерактивные пользовательские интерфейсы',
    technologies: [
      {
        name: 'React',
        icon: Code2,
        description: 'Библиотека для создания пользовательских интерфейсов',
        features: ['Компонентный подход', 'Виртуальный DOM', 'Односторонний поток данных']
      },
      {
        name: 'Next.js',
        icon: Layout,
        description: 'Фреймворк для React с серверным рендерингом',
        features: ['SSR и SSG', 'Оптимизация изображений', 'Маршрутизация']
      },
      {
        name: 'TypeScript',
        icon: Type,
        description: 'Типизированный JavaScript',
        features: ['Статическая типизация', 'Улучшенная поддержка IDE', 'Безопасность кода']
      },
      {
        name: 'Tailwind CSS',
        icon: Palette,
        description: 'Утилитарный CSS фреймворк',
        features: ['Быстрая разработка', 'Адаптивный дизайн', 'Кастомизация']
      }
    ]
  },
  {
    title: 'Backend Разработка',
    description: 'Строим надежные и масштабируемые серверные приложения',
    technologies: [
      {
        name: 'Node.js',
        icon: Server,
        description: 'Среда выполнения JavaScript на сервере',
        features: ['Асинхронный ввод/вывод', 'Высокая производительность', 'Большая экосистема']
      },
      {
        name: 'Express',
        icon: Network,
        description: 'Веб-фреймворк для Node.js',
        features: ['Маршрутизация', 'Middleware', 'REST API']
      },
      {
        name: 'PostgreSQL',
        icon: Database,
        description: 'Реляционная база данных',
        features: ['ACID', 'JSON поддержка', 'Масштабируемость']
      },
      {
        name: 'MongoDB',
        icon: Database,
        description: 'NoSQL база данных',
        features: ['Гибкая схема', 'Горизонтальное масштабирование', 'Высокая производительность']
      }
    ]
  },
  {
    title: 'DevOps и Инфраструктура',
    description: 'Обеспечиваем надежность и масштабируемость приложений',
    technologies: [
      {
        name: 'Docker',
        icon: Box,
        description: 'Контейнеризация приложений',
        features: ['Изоляция', 'Переносимость', 'Масштабируемость']
      },
      {
        name: 'AWS',
        icon: Cloud,
        description: 'Облачная платформа',
        features: ['Масштабируемость', 'Надежность', 'Безопасность']
      },
      {
        name: 'Git',
        icon: GitBranch,
        description: 'Система контроля версий',
        features: ['Ветвление', 'Слияние', 'Отслеживание изменений']
      },
      {
        name: 'CI/CD',
        icon: Workflow,
        description: 'Непрерывная интеграция и доставка',
        features: ['Автоматизация', 'Качество кода', 'Быстрое развертывание']
      }
    ]
  }
]

const benefits = [
  {
    title: 'Безопасность',
    description: 'Используем современные методы защиты данных и приложений',
    icon: Shield
  },
  {
    title: 'Производительность',
    description: 'Оптимизируем код для максимальной скорости работы',
    icon: Zap
  },
  {
    title: 'Масштабируемость',
    description: 'Создаем архитектуру, готовую к росту',
    icon: Cpu
  },
  {
    title: 'Доступность',
    description: 'Обеспечиваем работу на всех устройствах',
    icon: Globe
  },
  {
    title: 'Мобильность',
    description: 'Адаптируем под мобильные устройства',
    icon: Smartphone
  },
  {
    title: 'Аналитика',
    description: 'Интегрируем системы аналитики',
    icon: BarChart2
  },
  {
    title: 'Оптимизация',
    description: 'Улучшаем скорость загрузки',
    icon: Clock
  },
  {
    title: 'UX/UI',
    description: 'Создаем удобные интерфейсы',
    icon: Users
  }
]

export default function Technologies() {
  return (
    <main className="min-h-screen">
      <MainNavbar />
      
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient">Технологии</span> и инструменты
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Мы используем современный стек технологий для создания надежных и масштабируемых решений
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-32 last:mb-0"
            >
              <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
                <motion.div 
                  className="md:w-1/3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                    {category.title}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {category.description}
                  </p>
                </motion.div>

                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.technologies.map((tech, techIndex) => {
                    const Icon = tech.icon
                    return (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="group relative overflow-hidden rounded-2xl backdrop-blur-sm bg-white/30 shadow-lg hover:shadow-xl transition-all duration-300 p-8"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="relative z-10">
                          <div className="w-14 h-14 bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-500 rounded-xl flex items-center justify-center text-white mb-6">
                            <Icon className="w-7 h-7" />
                          </div>
                          <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors duration-300">
                            {tech.name}
                          </h3>
                          <p className="text-gray-600 mb-6">
                            {tech.description}
                          </p>
                          <ul className="space-y-3">
                            {tech.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-base text-gray-600">
                                <ArrowRight className="w-5 h-5 text-purple-600 mr-3" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Преимущества нашего подхода
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы не просто используем технологии, мы создаем решения, которые приносят реальную пользу бизнесу
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl backdrop-blur-sm bg-white/30 shadow-lg hover:shadow-xl transition-all duration-300 p-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-500 rounded-xl flex items-center justify-center text-white mb-6">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Готовы начать проект?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Свяжитесь с нами, чтобы обсудить ваш проект и узнать, как мы можем помочь
            </p>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center gap-3 py-4 px-12 rounded-none overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300" />
              <span className="relative flex items-center gap-3 text-white text-lg font-medium">
                Обсудить проект
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      <FloatingButton />
    </main>
  )
} 