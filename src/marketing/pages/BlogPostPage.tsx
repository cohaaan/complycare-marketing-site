import { useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { VIDEOS_PAGE_PATH } from '../data/externalLinks';
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';
import { CTAButton } from '../components/CTAButton';
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
      <div className="mt-8 border-b border-[#E4EDF5] bg-white">
        <div className="cc-container pt-6 pb-4">
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

      <section className="section-pad border-b border-[#E4EDF5]">
        <div className="cc-container max-w-4xl">
          <button
            type="button"
            onClick={() => navigate('/blog')}
            className="mb-6 inline-flex items-center text-sm font-semibold text-[#3DA882] transition hover:text-[#2E4057]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all articles
          </button>

          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-[#C2E8D8] bg-[#EAF7F2] px-3 py-1 text-xs font-semibold text-[#3DA882]">
              {post.category}
            </span>
            {post.originalData ? (
              <span className="rounded-full border border-[#C2E8D8] bg-[#EAF7F2] px-3 py-1 text-xs font-semibold text-[#2E4057]">
                Original research
              </span>
            ) : null}
            {post.caseStudy ? (
              <span className="rounded-full border border-[#C2E8D8] bg-[#EAF7F2] px-3 py-1 text-xs font-semibold text-[#2E4057]">
                Case study
              </span>
            ) : null}
          </div>

          <h1 className="font-display text-3xl font-semibold leading-tight text-[#2E4057] md:text-4xl">{post.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#4E6478]">{post.subtitle}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#8FA3B5]">
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4 text-[#8FA3B5]" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#8FA3B5]" />
              {post.date}
              {post.dateModified && post.dateModified !== post.date ? (
                <span className="text-[#4E6478]"> · Updated {new Date(post.dateModified + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
              ) : null}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#8FA3B5]" />
              {post.readTime} read
            </span>
          </div>
        </div>
      </section>

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

          <div className="mt-12 rounded-3xl border border-[#E4EDF5] bg-white p-8 text-center shadow-[0_14px_40px_rgba(46,64,87,0.08)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4E6478]">Next step</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-[#2E4057]">See ComplyCare on your operations</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#4E6478]">
              Unified bed visibility, admissions workflow, and audit-ready documentation for post-acute teams.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <CTAButton to="/contact">Book a demo</CTAButton>
              <CTAButton to="/platform" variant="secondary">
                Platform overview
              </CTAButton>
              <Link
                to={VIDEOS_PAGE_PATH}
                className="inline-flex items-center justify-center rounded-lg border border-[#E4EDF5] bg-white px-4 py-2 text-sm font-semibold text-[#2E4057] transition hover:border-[#3DA882]/50 hover:bg-[#F2F6FA]"
              >
                See ComplyCare in action
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
