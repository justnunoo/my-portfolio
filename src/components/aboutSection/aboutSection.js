"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { themeConfig } from '@/utils/theme';

export default function AboutSection() {

  const { theme } = useTheme();
  const currentTheme = themeConfig[theme] || themeConfig.light;

  const skills = [
    { name: "SQL", level: 90 },
    { name: "Python", level: 85 },
    { name: "Tableau", level: 88 },
    { name: "Power BI", level: 82 },
    { name: "Next.js", level: 87 },
    { name: "Data Analysis", level: 90 },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 2,
        ease: "easeInOut",
        delay: 0.7
      }
    })
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <motion.section 
      className={`py-16 px-4 sm:px-6 lg:px-8 ${currentTheme.background} ${currentTheme.text}`}
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className={`text-3xl font-bold text-center mb-12 ${currentTheme.text}`}
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={containerVariants}>
            <motion.h3 
              className={`text-2xl font-semibold mb-4 ${currentTheme.text}`}
              variants={itemVariants}
            >
              Who I Am
            </motion.h3>
            
            <motion.p 
              className={`${currentTheme.text} mb-6`}
              variants={itemVariants}
            >
              I'm a passionate Data Analyst with expertise in SQL, Python, Tableau, and Power BI, coupled with full-stack web development skills using Next.js. I transform complex data into actionable insights while building responsive, data-driven web applications.
            </motion.p>
            
            <motion.p 
              className={`${currentTheme.text} mb-6`}
              variants={itemVariants}
            >
              When I'm not analyzing data or coding, you can find me immersed in video games or books. I thrive on collaboration and constantly seek opportunities to learn from others in the tech community.
            </motion.p>
            
            <motion.div 
              className="flex space-x-4"
              variants={itemVariants}
            >
              <motion.a
                href="#"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Download CV
              </motion.a>
              
              <motion.a
                href="#"
                className="px-4 py-2 border border-blue-500 text-blue-500 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Let's Collaborate
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div variants={containerVariants}>
            <motion.h3 
              className={`text-2xl font-semibold mb-6 ${currentTheme.text}`}
              variants={itemVariants}
            >
              My Skills
            </motion.h3>
            
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
            >
              {skills.map((skill) => (
                <motion.div 
                  key={skill.name}
                  variants={itemVariants}
                >
                  <div className="flex justify-between mb-1">
                    <span className={`${currentTheme.text} font-medium`}>{skill.name}</span>
                    <span className={`${currentTheme.text}`}>{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-blue-500 h-2.5 rounded-full"
                      custom={skill.level}
                      variants={skillBarVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}