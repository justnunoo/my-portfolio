"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { themeConfig } from '@/utils/theme';

export default function ProjectHome() {

    const { theme } = useTheme();

    const currentTheme = themeConfig[theme] || themeConfig.light;

  const projects = [
    {
      id: 0,
      title: "Codebasics Sales Dashboard Project",
      description: "A dashboard to visualize sales data for a fictional company.",
      tags: ["SQL", "Tableau", "Excel"],
      image: "/images/codebasics_sales_dashboard.png",
      link: "https://public.tableau.com/views/codebasicssalesproject/Dashboard1?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
    },
    {
      id: 1,
      title: "Companies Sales Dashboard",
      description: "A dashboard for visualizing companies sales data.",
      tags: ["SQL", "Tableau", "Python"],
      image: "/images/companies_sales_dashboard2.png",
      link: "https://public.tableau.com/views/CFITableauFinalExercise/Dashboard2?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
    },
    {
      id: 2,
      title: "E-commerce Platform (In-Progress)",
      description: "A full-stack e-commerce solution with payment integration.",
      tags: ["Next.js", "Clerk", "Sanity.io"],
      image: "/images/sneakerhub.png",
      link: "https://sneakerhub-v2.vercel.app/"
    },
    {
      id: 3,
      title: "Dataco Sales Analysis Project",
      description: "A data analysis of the year to year sales of a fictional company.",
      tags: ["SQL", "Tableau"],
      image: "/images/dataco company dashboard.png",
      link: "https://public.tableau.com/views/datacosalesdashboard/Dashboard1?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
    },
    {
      id: 4,
      title: "Potato Disease Detection",
      description: "In this project, I trained a machine learning model, to detect potato plant diseases using an image of it's leave. ",
      tags: ["Python", "Tensorflow", "CNN", "OpenCV"],
      image: "/images/potato disease detection.png",
      link: "https://huggingface.co/spaces/justnunoo/potato-disease-detector"
    },
    {
      id: 5,
      title: "Football Stars Facial Recognition",
      description: "This a facial recognition and classification project. The model was trained on the images of certain very popular footballing stars like Lionel Messi, Neymar, Ronaldo, Mbappe, and Lamine Yamal.",
      tags: ["Python", "Tensorflow", "CNN", "OpenCV"],
      image: "/images/FPC.png",
      link: "https://huggingface.co/spaces/justnunoo/football-player-classifier"
    },
    {
      id: 6,
      title: "AI Generated Exams",
      description: "An AI-powered application that generates exam questions based on a given text which also accepts text files.",
      tags: ["NextJS", "NodeJS", "Groq AI", "Tailwind CSS"],
      image: "/images/AI generated exams.png",
      link: "https://jsn-quiz-app.vercel.app/"
    },
    {
        id: 7,
        title: "IntoWine Consult Website",
        description: "A website for a start-up financial consulting company.",
        tags: ["Next.js", "Tailwind CSS"],
        image: "/images/intowine.png",
        link: "https://felix-app.vercel.app"
    },
    {
      id: 8,
      title: "New York Housing Sales Dashboard",
      description: "A dashboard to visualize sales of homes in New York and other insights.",
      tags: ["SQL", "Tableau"],
      image: "/images/nyc_housing_sale_dashboard.png",
      link: "https://public.tableau.com/views/nyc-rolling-sales_17085235198880/Dashboard1?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
    },
    {
      id: 9,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with Next.js.",
      tags: ["Next.js", "Tailwind CSS"],
      image: "",
      link: "https://jsn-my-portfolio.vercel.app/projects"
    },
    {
      id: 10,
      title: "Global Cybersecurity Threats Dashboard",
      description: "A dashboard to visualize global cybersecurity threats.",
      tags: ["SQL", "Tableau", "Python"],
      image: "",
      link: "/projects/cybersecurity"
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverEffect = {
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  const tagHover = {
    hover: {
      scale: 1.05,
      backgroundColor: "#3b82f6",
      color: "white",
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${currentTheme.background} ${currentTheme.text}`} id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className={`text-3xl font-bold text-center mb-12 ${currentTheme.text}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md"
              variants={item}
              whileHover="hover"
            >
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <motion.div variants={hoverEffect} className="h-full flex flex-col">
                  <div className={`h-64 relative overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center`}>
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        quality={100}
                      />
                    ) : (
                      <svg
                        className={`w-16 h-16 ${currentTheme.text} animate-pulse`}
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
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                          variants={tagHover}
                          whileHover="hover"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}