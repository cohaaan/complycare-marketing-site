import { useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';
import { SiteShell } from '../components/SiteShell';
import { blogPosts } from '../data/blogPosts';
import {
  applyBlogArticleMeta,
  applyBlogNotFoundMeta,
  removeBlogArticleMetaArtifacts,
} from '../seo/blogArticleMeta';

export function BlogPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === Number(id));

  useEffect(() => {
    if (post) return;
    const numId = Number(id);
    if (id === undefined || Number.isNaN(numId)) return;
    applyBlogNotFoundMeta();
  }, [post, id]);

  useEffect(() => {
    if (!post) return;

    applyBlogArticleMeta(post);

    return () => {
      removeBlogArticleMetaArtifacts();
    };
  }, [post]);

  if (!post) {
    return (
      <SiteShell>
        <div className="section-pad flex min-h-[50vh] items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-2xl font-semibold text-[#2E4057]">Post not found</h1>
            <Link to="/blog" className="mt-4 inline-block text-sm font-semibold text-[#3DA882] hover:text-[#2E4057]">
              Return to blog
            </Link>
          </div>
        </div>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <div className="border-b border-[#E4EDF5] bg-white">
        <div className="cc-container py-4">
          <nav className="flex items-center text-sm text-[#8FA3B5]">
            <Link to="/" className="hover:text-[#3DA882]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-[#3DA882]">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="max-w-xs truncate text-[#2E4057]">{post.title}</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-[#E4EDF5] bg-gradient-to-br from-[#3DA882] to-[#2a8f6c] py-12 text-white">
        <div className="cc-container">
          <button
            type="button"
            onClick={() => navigate('/blog')}
            className="mb-6 inline-flex items-center text-sm text-white/80 transition hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all articles
          </button>

          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">{post.category}</span>
            {post.originalData ? (
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">Original research</span>
            ) : null}
            {post.caseStudy ? (
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">Case study</span>
            ) : null}
          </div>

          <h1 className="font-display text-3xl font-semibold md:text-4xl">{post.title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90">{post.subtitle}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/85">
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime} read
            </span>
          </div>
        </div>
      </div>

      <section className="section-pad border-b border-[#E4EDF5] bg-[#F2F6FA]">
        <div className="cc-container max-w-4xl">
          <article className="rounded-3xl border border-[#E4EDF5] bg-white p-8 shadow-[0_14px_40px_rgba(46,64,87,0.06)] md:p-12">
            <div className="cc-blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />

            <div className="mt-12 border-t border-[#E4EDF5] pt-8">
              <div className="flex flex-wrap items-center gap-2">
                <Tag className="h-4 w-4 text-[#8FA3B5]" />
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-[#F2F6FA] px-3 py-1 text-sm text-[#4E6478]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <div className="mt-12 rounded-3xl border border-[#C2E8D8] bg-gradient-to-br from-[#3DA882] to-[#2a8f6c] p-8 text-center text-white shadow-[0_14px_40px_rgba(46,64,87,0.1)]">
            <h2 className="font-display text-2xl font-semibold">See ComplyCare on your operations</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/90">
              Unified bed visibility, admissions workflow, and audit-ready documentation for post-acute teams.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#2E4057] shadow-sm transition hover:bg-[#F2F6FA]"
              >
                Book a demo
              </Link>
              <Link
                to="/platform"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Platform overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
