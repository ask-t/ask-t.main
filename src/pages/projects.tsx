import React from 'react';
import Layout from '@theme/Layout';
import ProjectCard from '@site/src/components/ui/ProjectCard';

export default function Projects(): JSX.Element {
  const allProjects = [
    {
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution built with Next.js, TypeScript, and Tailwind CSS. Features include product catalog, shopping cart, payment integration, and admin dashboard.',
      tags: ['E-commerce', 'Full-stack'],
      role: 'Lead Developer',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Prisma'],
      image: '/static/images/gallery/image4.png',
      link: 'https://example-ecommerce.com',
      github: 'https://github.com/username/ecommerce-platform',
    },
    {
      title: 'Design System',
      description: 'Comprehensive design system with reusable components and documentation. Built for consistency across multiple products and teams.',
      tags: ['Design System', 'Documentation'],
      role: 'Design Engineer',
      stack: ['React', 'Storybook', 'Figma', 'TypeScript'],
      image: '/static/images/gallery/image5.png',
      link: 'https://design-system.example.com',
      github: 'https://github.com/username/design-system',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive charts and data visualization. Built for monitoring key business metrics and user behavior.',
      tags: ['Analytics', 'Data Visualization'],
      role: 'Frontend Developer',
      stack: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      image: '/static/images/gallery/image6.png',
      link: 'https://analytics.example.com',
      github: 'https://github.com/username/analytics-dashboard',
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management features.',
      tags: ['Mobile', 'Fintech', 'Security'],
      role: 'Frontend Developer',
      stack: ['React Native', 'TypeScript', 'Redux', 'Jest'],
      image: '/img/projects/banking-app-preview.jpg',
      link: 'https://banking-app.example.com',
      github: 'https://github.com/username/banking-app',
    },
    {
      title: 'Content Management System',
      description: 'Headless CMS with real-time collaboration, version control, and multi-channel publishing capabilities.',
      tags: ['CMS', 'Collaboration', 'API'],
      role: 'Full-stack Developer',
      stack: ['Next.js', 'Node.js', 'MongoDB', 'GraphQL'],
      image: '/img/projects/cms-preview.jpg',
      link: 'https://cms.example.com',
      github: 'https://github.com/username/cms',
    },
    {
      title: 'Learning Management Platform',
      description: 'Interactive learning platform with video streaming, progress tracking, and AI-powered recommendations.',
      tags: ['EdTech', 'Video Streaming', 'AI'],
      role: 'Frontend Developer',
      stack: ['React', 'Video.js', 'TensorFlow.js', 'WebRTC'],
      image: '/img/projects/lms-preview.jpg',
      link: 'https://lms.example.com',
      github: 'https://github.com/username/lms',
    },
  ];

  return (
    <Layout title="Projects | ask-t" description="A collection of web applications and digital experiences">
      <main>
        {/* Header */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--fg)] mb-6">
              Projects
            </h1>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              A collection of web applications and digital experiences that showcase modern development practices and design principles.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="container mx-auto px-4 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {allProjects.map((project, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-24 bg-[var(--card-bg)]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg)] mb-6">
              Interested in Working Together?
            </h2>
            <p className="text-xl text-[var(--muted)] mb-8">
              I'm always excited to take on new challenges and create amazing digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hello@example.com" className="btn-primary">
                Start a Project
              </a>
              <a href="/blog" className="btn-secondary">
                Read My Articles
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
