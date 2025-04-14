// components/DownloadCVButton.jsx
"use client";

import { motion } from 'framer-motion';

export default function DownloadCVButton() {
    // Function to handle the download action
    // This function creates a temporary anchor element to trigger the download
//   const handleDownload = () => {
//     // Create a temporary anchor element
//     const link = document.createElement('a');
//     link.href = '/assets/Nunoo_Justice_Samuel_CV.pdf';
//     link.download = 'Nunoo_Justice_Samuel_CV.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   When CV is hosted on Google Drive, use the following code:
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1K1U0R_EVVJfkIhA0HWhLE7Psl-qMpmpd/view?usp=sharing', '_blank');
  };

  return (
    <motion.button
      onClick={handleDownload}
      className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Download CV
    </motion.button>
  );
}