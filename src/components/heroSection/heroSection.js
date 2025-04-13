// "use client";

// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { useState } from 'react';
// import ContactModal from '../contactModal/contactModal';

// export default function HeroSection() {

//   const [isModalOpen, setIsModalOpen] = useState(false);


//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         when: "beforeChildren"
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const buttonVariants = {
//     hover: { scale: 1.05 },
//     tap: { scale: 0.95 }
//   };

//   return (
//     <>
//     <motion.section 
//       className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 text-white"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <div className="max-w-7xl mx-auto text-center">
//         <motion.div 
//           className="flex justify-center mb-6"
//           variants={itemVariants}
//         >
//           <div className="w-32 h-32 rounded-full bg-white dark:bg-gray-800 overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
//             {/* Placeholder for profile image */}
//             <motion.div 
//               className="w-full h-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 400, damping: 10 }}
//             >
//               <svg
//                 className="w-16 h-16 text-gray-500 dark:text-gray-400"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </motion.div>
//           </div>
//         </motion.div>

//         <motion.h1 
//           className="text-4xl md:text-5xl font-bold mb-4"
//           variants={itemVariants}
//         >
//           Nunoo Justice Samuel
//         </motion.h1>

//         <motion.h2 
//           className="text-2xl md:text-3xl font-semibold mb-6"
//           variants={itemVariants}
//         >
//           Data Analyst & Full Stack Developer
//         </motion.h2>

//         <motion.p 
//           className="text-xl max-w-3xl mx-auto mb-8"
//           variants={itemVariants}
//         >
//           I create beautiful, responsive websites and applications with modern technologies and user experience in mind.
//         </motion.p>

//         <motion.div 
//           className="flex justify-center space-x-4"
//           variants={itemVariants}
//         >
//           <Link href="/projects">
//             <motion.div
//               className="px-6 py-3 bg-white text-blue-600 dark:text-blue-800 font-medium rounded-lg hover:bg-gray-100 transition duration-300"
//               variants={buttonVariants}
//               whileHover="hover"
//               whileTap="tap"
//             >
//               View My Work
//             </motion.div>
//           </Link>
          
//           {/* <Link href="/contact">
//             <motion.div
//               onClick={() => setIsModalOpen(true)}
//               className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 dark:hover:text-blue-800 transition duration-300"
//               variants={buttonVariants}
//               whileHover="hover"
//               whileTap="tap"
//             >
//               Contact Me
//             </motion.div>
//           </Link> */}

//           <motion.button
//               onClick={() => setIsModalOpen(true)}
//               className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 dark:hover:text-blue-800 transition duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Contact Me
//             </motion.button>
//         </motion.div>
//       </div>
//     </motion.section>

//       {/* Modal for Contact Information */}
//         <ContactModal 
//           isOpen={isModalOpen} 
//           onClose={() => setIsModalOpen(false)} 
//         />
//     </>
//   );
// }

"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import ContactModal from '../contactModal/contactModal';
import Image from 'next/image';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <>
      <motion.section 
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          {/* Flex container for responsive layout */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Image container - takes half width on large screens */}
            <motion.div 
              className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0"
              variants={itemVariants}
            >
              <div className="w-52 h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-white dark:bg-gray-800 overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                {/* Placeholder for profile image */}
                <motion.div 
                  className="w-full h-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* <svg
                    className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg> */}
                  <Image
                  src="/images/profile.jpg"
                  alt="Profile Image"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  priority
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Text content - takes half width on large screens */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                variants={itemVariants}
              >
                Nunoo Justice Samuel
              </motion.h1>

              <motion.h2 
                className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6"
                variants={itemVariants}
              >
                Data Analyst & Full-Stack Developer
              </motion.h2>

              <motion.p 
                className="text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-8"
                variants={itemVariants}
              >
                Transforming data into actionable insights and building robust web applications. 
                I bridge the gap between data analysis and digital solutions with expertise in 
                SQL, Python, and modern web technologies.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
                variants={itemVariants}
              >
                <Link href="/projects">
                  <motion.div
                    className="px-6 py-3 bg-white text-blue-600 dark:text-blue-800 font-medium rounded-lg hover:bg-gray-100 transition duration-300"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    View My Projects
                  </motion.div>
                </Link>
                
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 dark:hover:text-blue-800 transition duration-300"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Contact Me
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Modal for Contact Information */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}