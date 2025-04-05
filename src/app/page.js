import React from 'react'
import Link from 'next/link'
import HeroSection from '@/components/heroSection/heroSection';
import AboutSection from '@/components/aboutSection/aboutSection';
import ProjectSection from '@/components/projectsSection/projectsSection';
import TestimonialSection from '@/components/testimonial/testimonial';

export default function Home() {

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment integration.",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with Next.js.",
      tags: ["Next.js", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity app for managing daily tasks and projects.",
      tags: ["React", "Firebase"],
    },
  ];

  const skills = [
    { name: "Frontend Development", level: 90 },
    { name: "Data Analytics", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Backend Development", level: 75 },
  ];

  return (
    <div>
            {/* Hero Section */}
            <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectSection />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Contact CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-500 dark:bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm available for freelance work. Get in touch and let's discuss how I can help bring your ideas to life.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-white text-blue-600 dark:text-blue-800 font-medium rounded-lg hover:bg-gray-100 transition duration-300 inline-block"
          >
            Contact Me
          </Link>
        </div>
      </section>

    </div>
  )
}
