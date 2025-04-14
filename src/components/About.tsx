'use client';

import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Иван Иванов',
    position: 'Frontend разработчик',
    description: 'Специалист по созданию современных пользовательских интерфейсов',
    avatar: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    name: 'Петр Петров',
    position: 'Backend разработчик',
    description: 'Эксперт по серверной части и базам данных',
    avatar: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    name: 'Анна Сидорова',
    position: 'UI/UX дизайнер',
    description: 'Создает красивые и удобные интерфейсы',
    avatar: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            О <span className="text-gradient">нас</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы создаем современные и инновационные решения для вашего бизнеса
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/30">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center group-hover:text-purple-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 text-center mb-4">{member.position}</p>
                  <p className="text-gray-600 text-center">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 