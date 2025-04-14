'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'Little Barista',
    category: 'Веб-разработка',
    image: '/portfolio/little-barista.jpg',
    description: 'Сайт выездной кофейни с калькулятором стоимости мероприятий и системой бронирования.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    link: 'https://www.littlebarista.ru',
    features: ['Калькулятор стоимости', 'Галерея работ', 'Форма заявок', 'Адаптивный дизайн']
  },
  {
    title: 'Свои Люди',
    category: 'Веб-разработка',
    image: '/portfolio/svoi-vse.jpg',
    description: 'Сайт компании по организации переездов. Включает калькулятор стоимости, описание услуг и онлайн-заявки.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    link: 'https://svoi-vse.ru',
    features: ['Калькулятор стоимости', 'Форма заявок', 'Адаптивный дизайн', 'Оптимизация конверсии']
  },
  {
    title: 'NeuroOracle',
    category: 'Веб-разработка',
    image: '/portfolio/neurooracle.jpg',
    description: 'Сервис онлайн-гаданий с использованием карт Таро и искусственного интеллекта. Современный интерфейс с анимациями и интерактивными элементами.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    link: 'https://neurooracle.ru',
    features: ['Адаптивный дизайн', 'Интерактивные гадания', 'Анимации', 'SEO-оптимизация']
  },
  {
    title: 'Game On',
    category: 'Веб-разработка',
    image: '/portfolio/game-on.jpg',
    description: 'Сайт для организации игротек и мероприятий с настольными играми. Включает каталог игр и систему бронирования.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    link: 'https://game-on-yj72.vercel.app',
    features: ['Каталог игр', 'Система бронирования', 'Адаптивный дизайн', 'Интерактивные элементы']
  }
];

const categories = ['Все', 'Веб-разработка'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'Все'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-12 sm:py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-2 sm:mb-4">
            Наши <span className="text-gradient">работы</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Посмотрите примеры наших проектов и технологий, которые мы используем
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`relative group px-4 sm:px-6 py-1.5 sm:py-2 overflow-hidden text-sm sm:text-base ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 text-white'
                  : 'bg-white/30 text-purple-600 hover:bg-white/50'
              }`}
            >
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-6xl mx-auto px-2 sm:px-4">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group h-full"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-lg bg-white shadow-lg h-full flex flex-col">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <span className="text-xs sm:text-sm text-purple-600">{project.category}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 flex-grow">{project.description}</p>
                  
                  <div className="mb-3 sm:mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Технологии:</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 sm:py-1 bg-purple-100 text-purple-600 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-3 sm:mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Особенности:</h4>
                    <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group inline-flex items-center justify-center gap-2 py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg overflow-hidden mt-auto text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300" />
                    <span className="relative flex items-center gap-2 text-white font-medium">
                      Посмотреть проект
                      <motion.svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </motion.svg>
                    </span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-8 sm:mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-6 sm:px-8 py-3 sm:py-4 overflow-hidden text-sm sm:text-base"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300" />
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-500 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300" />
            <span className="relative flex items-center gap-2 text-white font-medium">
              Смотреть все работы
              <motion.svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 