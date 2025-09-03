import React from 'react';
import Layout from '@theme/Layout';
import Button from '@site/src/components/ui/Button';
import { Card } from '@site/src/components/ui/Card';

export default function Blog(): JSX.Element {
  const featuredPost = {
    title: 'Building Modern Web Applications with React and TypeScript',
    excerpt: 'Learn how to create scalable and maintainable web applications using React, TypeScript, and modern development practices.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Development',
    image: '/img/blog/featured-post.jpg',
    slug: 'building-modern-web-applications',
  };

  const blogPosts = [
    {
      title: 'The Future of Frontend Development',
      excerpt: 'Exploring emerging trends and technologies that will shape the future of frontend development.',
      date: '2024-01-10',
      readTime: '5 min read',
      category: 'Technology',
      slug: 'future-of-frontend-development',
    },
    {
      title: 'Design Systems: Building Consistency at Scale',
      excerpt: 'How to create and maintain design systems that ensure consistency across large teams and products.',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Design',
      slug: 'design-systems-building-consistency',
    },
    {
      title: 'Performance Optimization Techniques',
      excerpt: 'Practical strategies for improving web application performance and user experience.',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Performance',
      slug: 'performance-optimization-techniques',
    },
    {
      title: 'Getting Started with Next.js 14',
      excerpt: 'A comprehensive guide to building modern web applications with the latest version of Next.js.',
      date: '2023-12-20',
      readTime: '10 min read',
      category: 'Tutorial',
      slug: 'getting-started-nextjs-14',
    },
    {
      title: 'CSS Grid vs Flexbox: When to Use What',
      excerpt: 'Understanding the differences between CSS Grid and Flexbox and when to use each layout method.',
      date: '2023-12-15',
      readTime: '4 min read',
      category: 'CSS',
      slug: 'css-grid-vs-flexbox',
    },
    {
      title: 'Building Accessible Web Applications',
      excerpt: 'Best practices for creating web applications that are accessible to all users.',
      date: '2023-12-10',
      readTime: '9 min read',
      category: 'Accessibility',
      slug: 'building-accessible-web-applications',
    },
  ];

  const categories = ['All', 'Development', 'Design', 'Technology', 'Performance', 'Tutorial', 'CSS', 'Accessibility'];

  return (
    <Layout title="Blog | ask-t" description="Thoughts on web development, design, and technology">
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="container py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Thoughts on web development, design, and technology.
              Sharing insights and experiences from building modern web applications.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="container py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Post</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 h-64 lg:h-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-gray-400 dark:text-gray-600">📝</span>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(featuredPost.date).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <Button variant="primary">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Category Filter */}
        <section className="container py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category === 'All'
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="container py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">All Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow group">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(post.date).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                    <Button variant="ghost" className="text-sm">
                      Read →
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="container py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Get the latest posts and insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
                />
                <Button variant="primary" className="px-6 py-3">
                  Subscribe
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </Layout>
  );
}