 "use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { themeConfig } from '@/utils/theme';
import Image from 'next/image';

export default function ProjectSection() {

  const { theme } = useTheme();
    const currentTheme = themeConfig[theme] || themeConfig.light;

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment integration.",
      tags: ["Next.js", "Clerk", "Sanity.io"],
      image: "/sneakerhub.png",
    },
    {
      id: 2,
      title: "Companies Sales Dashboard",
      description: "A dashboard for visualizing companies sales data.",
      tags: ["SQL", "Tableau", "Python"],
      image: "/companies_sales_dashboard.png",
    },
    // {
    //   id: 2,
    //   title: "Portfolio Website",
    //   description: "A responsive portfolio website built with Next.js.",
    //   tags: ["Next.js", "Tailwind CSS"],
    //   image: "",
    // },
    // {
    //   id: 3,
    //   title: "Global Cybersecurity Threats Dashboard",
    //   description: "A dashboard to visualize global cybersecurity threats.",
    //   // description: "A data analysis project in the field of cybersecurity to find insights.",
    //   tags: ["SQL", "Tableau", "Python"],
    //   image: "",
    // },
    {
      id: 4,
      title : "New York Housing Sales Dashboard",
      description: "A dashboard to visualize sales of homes New York and other insights.",
      tags: ["SQL", "Tableau"],
      image: "/nyc_housing_sale_dashboard.png"
    },
    
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

  const cardHoverVariants = {
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <motion.section 
      className={`py-16 px-4 sm:px-6 lg:px-8 ${currentTheme.background} ${currentTheme.text}`}
      id="projects"
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
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`${currentTheme.card} rounded-lg overflow-hidden shadow-md`}
              variants={itemVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="h-64 bg-gray-300 dark:bg-gray-700 flex items-center justify-center"
                variants={cardHoverVariants}
              >
                {project.image ? (

                <Image 
                src={project.image}
                alt={project.title}
                width={200}
                height={200}
                className="w-full h-full object-cover"
                priority
                />

                
                ) : (
                  <svg
                  className="w-16 h-16 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                
                </svg>
                )}
              </motion.div>
              
              <motion.div 
                className="p-6"
                variants={containerVariants}
              >
                <motion.h3 
                  className={`text-xl font-semibold mb-2 ${currentTheme.text}`}
                  variants={itemVariants}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className={`${currentTheme.text} mb-4`}
                  variants={itemVariants}
                >
                  {project.description}
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                >
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      variants={itemVariants}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
        >
          <Link href="/projects">
            <motion.div
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300 inline-block"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              View All Projects
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}