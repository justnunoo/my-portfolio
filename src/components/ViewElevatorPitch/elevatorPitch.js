// components/DownloadCVButton.jsx
"use client";

import { motion } from 'framer-motion';

export default function ElevatorPitch() {

  const viewElevatorPitch = () => {
    window.open('https://drive.google.com/file/d/19oSk9v4HagRFRPpC_8jzG25jbPrw3IY8/view?usp=sharing', '_blank');
  };

  return (
    <motion.button
      onClick={viewElevatorPitch}
      className="px-4 py-2 border border-blue-500 text-blue-500 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      View Elevator Pitch
    </motion.button>
  );
}