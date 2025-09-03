import React from 'react';
import Layout from '@theme/Layout';
import ProjectCard from '@site/src/components/ui/ProjectCard';
import ArticleCard from '@site/src/components/ui/ArticleCard';

export default function Home(): JSX.Element {
  // 最新プロジェクト3件
  const featuredProjects = [
    {
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution built with Next.js, TypeScript, and Tailwind CSS. Features include product catalog, shopping cart, payment integration, and admin dashboard.',
      tags: ['E-commerce', 'Full-stack'],
      role: 'Lead Developer',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Prisma'],
      image: '/images/gallery/image1.png',
      link: 'https://example-ecommerce.com',
      github: 'https://github.com/username/ecommerce-platform',
    },
    {
      title: 'Design System',
      description: 'Comprehensive design system with reusable components and documentation. Built for consistency across multiple products and teams.',
      tags: ['Design System', 'Documentation'],
      role: 'Design Engineer',
      stack: ['React', 'Storybook', 'Figma', 'TypeScript'],
      image: '/images/gallery/image2.png',
      link: 'https://design-system.example.com',
      github: 'https://github.com/username/design-system',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive charts and data visualization. Built for monitoring key business metrics and user behavior.',
      tags: ['Analytics', 'Data Visualization'],
      role: 'Frontend Developer',
      stack: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      image: '/images/gallery/image3.png',
      link: 'https://analytics.example.com',
      github: 'https://github.com/username/analytics-dashboard',
    },
  ];

  // 最新記事3本
  const recentArticles = [
    {
      title: 'Building Scalable React Applications',
      excerpt: 'Learn how to structure and organize React applications for long-term maintainability and team collaboration.',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['React', 'Architecture', 'Best Practices'],
      slug: 'building-scalable-react-applications',
      image: '/img/blog/react-architecture.jpg',
    },
    {
      title: 'Design Systems in Practice',
      excerpt: 'A deep dive into creating and maintaining design systems that actually work for development teams.',
      date: '2024-01-10',
      readTime: '6 min read',
      tags: ['Design Systems', 'UI/UX', 'Development'],
      slug: 'design-systems-in-practice',
      image: '/img/blog/design-systems.jpg',
    },
    {
      title: 'Performance Optimization Techniques',
      excerpt: 'Essential techniques for optimizing web application performance, from bundle size to runtime optimization.',
      date: '2024-01-05',
      readTime: '10 min read',
      tags: ['Performance', 'Optimization', 'Web Development'],
      slug: 'performance-optimization-techniques',
      image: '/img/blog/performance-optimization.jpg',
    },
  ];

  return (
    <Layout title="ask-t | Frontend Developer & Designer" description="Creating exceptional user experiences through clean code and thoughtful design">
      <main>
        {/* Hero Section */}
        <section className="hero-section min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-[var(--fg)] mb-6">
                  Frontend Developer
                  <br />
                  <span className="text-[var(--accent)]">& Designer</span>
                </h1>
                <p className="text-xl md:text-2xl text-[var(--muted)] mb-8 max-w-3xl mx-auto leading-relaxed">
                  Creating exceptional user experiences through clean code and thoughtful design.
                  Passionate about building scalable web applications with modern technologies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/projects" className="btn-primary">
                    View Projects
                  </a>
                  <a href="/blog" className="btn-secondary">
                    Read Articles
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg)] mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                A selection of recent projects showcasing modern web development practices and design principles.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="/projects" className="btn-secondary">
                View All Projects
              </a>
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="container mx-auto px-4 py-24 bg-[var(--card-bg)]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg)] mb-4">
                Recent Writing
              </h2>
              <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                Thoughts on web development, design systems, and the latest in frontend technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentArticles.map((article, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ArticleCard {...article} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="/blog" className="btn-secondary">
                Read All Articles
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg)] mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-[var(--muted)] mb-8">
              I'm always interested in new opportunities and exciting projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hello@example.com" className="btn-primary">
                Get in Touch
              </a>
              <a href="/docs/intro" className="btn-secondary">
                View Documentation
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}