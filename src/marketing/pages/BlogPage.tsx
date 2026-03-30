import { useEffect, useState } from 'react';
import { Clock, Search, Calendar, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';
import { Reveal } from '../components/Reveal';
import { SiteShell } from '../components/SiteShell';
import { blogPosts } from '../data/blogPosts';
import { SITE_ORIGIN } from '../seo/constants';

const categories = [
  'All',
  'Research',
  'Case Study',
  'Framework',
  'Compliance',
  'Analytics',
  'Admissions',
  'Resident Experience',
];

export function BlogPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((post) => post.featured);

  useEffect(() => {
    const id = 'blog-index-schema';
    const existing = document.getElementById(id);
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'ComplyCare insights',
      description:
        'Research, case studies, and guides for SNF bed management, admissions, compliance, and resident experience.',
      url: `${SITE_ORIGIN}/blog`,
      publisher: {
        '@type': 'Organization',
        name: 'ComplyCare',
        url: SITE_ORIGIN,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_ORIGIN}/complycare-logo.svg`,
        },
      },
      blogPost: blogPosts.map((p) => ({
        '@type': 'BlogPosting',
        headline: p.title,
        description: p.excerpt,
        url: `${SITE_ORIGIN}/blog/${p.id}`,
        datePublished: p.date,
        author: { '@type': 'Person', name: p.author },
        image: `${SITE_ORIGIN}${p.image}`,
      })),
    });
    document.head.appendChild(script);
    return () => document.getElementById(id)?.remove();
  }, []);

  return (
    <>
      <PageMeta
        title="Blog"
        description="Original research, case studies, and frameworks for post-acute bed management, admissions, compliance, and resident experience."
        path="/blog"
      />
      <SiteShell includeFinalCta>
        <section className="border-b border-[#E4EDF5] bg-gradient-to-br from-[#3DA882] to-[#2a8f6c] py-16 text-white">
          <div className="cc-container text-center">
            <h1 className="font-display text-4xl font-semibold md:text-5xl">Insights &amp; research</h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-white/90">
              Original research, case studies, and practical guides for SNF operators—bed visibility, admissions
              workflow, survey readiness, and more.
            </p>
          </div>
        </section>

        <div className="sticky top-0 z-40 border-b border-[#E4EDF5] bg-white/95 py-4 shadow-sm backdrop-blur-sm">
          <div className="cc-container">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8FA3B5]" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-xl border border-[#E4EDF5] py-2 pl-10 pr-4 text-[#2E4057] placeholder:text-[#8FA3B5] focus:border-[#3DA882] focus:outline-none focus:ring-2 focus:ring-[#3DA882]/30"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                      selectedCategory === category
                        ? 'bg-[#3DA882] text-white'
                        : 'bg-[#F2F6FA] text-[#4E6478] hover:bg-[#E4EDF5]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="section-pad border-b border-[#E4EDF5] bg-[#F2F6FA]">
          <div className="cc-container">
            {featuredPost && selectedCategory === 'All' && !searchTerm ? (
              <Reveal>
                <div className="mb-12 rounded-3xl border border-[#C2E8D8] bg-white p-8 shadow-[0_14px_40px_rgba(46,64,87,0.08)]">
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#3DA882] px-3 py-1 text-xs font-semibold text-white">
                      Featured
                    </span>
                    {featuredPost.originalData ? (
                      <span className="rounded-full bg-[#EAF7F2] px-3 py-1 text-xs font-semibold text-[#2E4057]">
                        Original data
                      </span>
                    ) : null}
                  </div>
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h2 className="font-display text-3xl font-semibold text-[#2E4057]">{featuredPost.title}</h2>
                      <p className="mt-3 text-lg text-[#4E6478]">{featuredPost.subtitle}</p>
                      <p className="mt-4 text-[#4E6478]">{featuredPost.excerpt}</p>
                      <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-[#8FA3B5]">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                        <span className="mx-1">•</span>
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                        <span className="mx-1">•</span>
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime} read</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => navigate(`/blog/${featuredPost.id}`)}
                        className="mt-6 rounded-full bg-[#3DA882] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2f8f6a]"
                      >
                        Read full analysis
                      </button>
                    </div>
                    <div className="overflow-hidden rounded-2xl">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="h-64 w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            ) : null}

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredPosts.map((post) => (
                <Reveal key={post.id}>
                  <article
                    className="h-full cursor-pointer overflow-hidden rounded-2xl border border-[#E4EDF5] bg-white shadow-[0_8px_28px_rgba(46,64,87,0.06)] transition hover:shadow-[0_16px_40px_rgba(46,64,87,0.08)]"
                    onClick={() => navigate(`/blog/${post.id}`)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        navigate(`/blog/${post.id}`);
                      }
                    }}
                    role="link"
                    tabIndex={0}
                  >
                    <div className="relative">
                      <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
                      <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                        {post.originalData ? (
                          <span className="rounded-full bg-[#3DA882] px-2.5 py-0.5 text-xs font-medium text-white">
                            Original data
                          </span>
                        ) : null}
                        {post.caseStudy ? (
                          <span className="rounded-full bg-[#2a8f6c] px-2.5 py-0.5 text-xs font-medium text-white">
                            Case study
                          </span>
                        ) : null}
                        {post.proprietaryResearch ? (
                          <span className="rounded-full bg-[#6366f1] px-2.5 py-0.5 text-xs font-medium text-white">
                            Research
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex items-center text-sm text-[#8FA3B5]">
                        <span className="font-medium text-[#3DA882]">{post.category}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime} read</span>
                      </div>
                      <h3 className="font-display text-xl font-semibold text-[#2E4057]">{post.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm text-[#4E6478]">{post.excerpt}</p>
                      <div className="mt-4 flex items-center justify-between text-sm text-[#8FA3B5]">
                        <span className="inline-flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </span>
                        <span>{post.date}</span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="rounded-full bg-[#F2F6FA] px-2 py-1 text-xs text-[#4E6478]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {filteredPosts.length === 0 ? (
              <p className="py-12 text-center text-[#8FA3B5]">No articles found matching your criteria.</p>
            ) : null}

            <div className="mt-12 text-center">
              <Link to="/resources" className="text-sm font-semibold text-[#3DA882] hover:text-[#2E4057]">
                Resource center →
              </Link>
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
