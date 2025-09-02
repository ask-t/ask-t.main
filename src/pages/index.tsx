import React from 'react';
import Layout from '@theme/Layout';
import Button from '@site/src/components/ui/Button';
import { Card } from '@site/src/components/ui/Card';

export default function Home(): JSX.Element {
  const works = [
    { title: 'InfoCanvas', desc: 'Data viz platform / Next.js', tag: 'Web App' },
    { title: 'Content Generator', desc: 'Strapi plugin', tag: 'Plugin' },
    { title: 'Club Management', desc: 'Mendix app', tag: 'Enterprise' },
  ];

  return (
    <Layout title="Asuku | Portfolio" description="Minimal monochrome portfolio & docs">
      <main>
        {/* Hero */}
        <section className="container py-24 md:py-32 animate-fadeUp">
          <p className="text-sm uppercase tracking-wider text-gray-500">Portfolio</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            Minimal. Focused. <span className="text-gray-500">Yours.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-500">
            白・黒・グレーに限定した、内容主役のデザインシステム。全プロジェクトを同じ文法で。
          </p>
          <div className="mt-8 flex gap-3">
            <a href="/profile"><Button variant="primary">View Profile</Button></a>
            <a href="/blog"><Button variant="secondary">Read Blog</Button></a>
          </div>
        </section>

        {/* Work Grid */}
        <section id="work" className="container py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Selected Work</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {works.map((w) => (
              <Card key={w.title} className="hover:shadow-lg transition-shadow">
                <div className="text-xs uppercase tracking-wide text-gray-500">{w.tag}</div>
                <div className="mt-2 text-xl font-semibold">{w.title}</div>
                <p className="mt-2 text-gray-500">{w.desc}</p>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
