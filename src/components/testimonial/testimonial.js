"use client";

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { themeConfig } from '@/utils/theme';

export default function TestimonialSection() {

  const { theme } = useTheme();
  const currentTheme = themeConfig[theme] || themeConfig.light;

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

  const cardHoverVariants = {
    hover: { 
      y: -5,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
    }
  };

  const starVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    },
    hover: { scale: 1.2 }
  };

  return (
    <motion.section 
      className={`py-16 px-4 sm:px-6 lg:px-8 ${currentTheme.background} ${currentTheme.text}`}
      id="testimonials"
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
          What Clients Say
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className={`${currentTheme.card} p-6 rounded-lg shadow-sm`}
              variants={itemVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center mb-4"
                variants={containerVariants}
              >
                <motion.div 
                  className={`w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600 mr-4 overflow-hidden`}
                  whileHover={{ rotate: 10 }}
                >
                  <div className="w-full h-full bg-gray-400 dark:bg-gray-500 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-600 dark:text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <h4 className={`font-semibold ${currentTheme.text}`}>Client {item}</h4>
                  <p className={`${currentTheme.text} text-sm`}>CEO, Company {item}</p>
                </motion.div>
              </motion.div>
              
              <motion.p 
                className={`${currentTheme.text} italic mb-4`}
                variants={itemVariants}
              >
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              </motion.p>
              
              <motion.div 
                className="flex mt-4 text-yellow-400"
                variants={containerVariants}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.svg
                    key={star}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    variants={starVariants}
                    whileHover="hover"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}