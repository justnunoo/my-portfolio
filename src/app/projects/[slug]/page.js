import React from 'react'

export default async function ProjectPage({ params }) {
    const { slug } = await params;
  return (
    <div>
      this shows project named {slug}
    </div>
  )
}
