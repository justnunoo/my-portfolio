// components/ContactModal.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4 relative"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              aria-label="Close modal"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Contact Information
            </h2>

            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="text-blue-500 mr-3 text-xl" />
                <a
                  href="mailto:your.email@example.com"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
                >
                  justnunoo@gmail.com
                </a>
              </div>

              <div className="flex items-center">
                <FaPhone className="text-blue-500 mr-3 text-xl" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
                >
                  +233 50 159 6921
                </a>
              </div>

              <div className="flex items-center">
                <FaLinkedin className="text-blue-500 mr-3 text-xl" />
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
                >
                    https://www.linkedin.com/in/justice-samuel-nii-nunoo-38626214b
                </a>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400">
                Feel free to reach out for collaborations or opportunities!
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}