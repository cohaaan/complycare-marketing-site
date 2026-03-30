import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';
import { SectionIntro } from '../components/SectionIntro';
import { SiteShell } from '../components/SiteShell';
import { YOUTUBE_CHANNEL_VIDEOS_URL } from '../data/externalLinks';
import { FEATURED_YOUTUBE_VIDEOS, youtubeEmbedSrc } from '../data/youtubeVideos';

export function VideosPage() {
  return (
    <>
      <PageMeta
        title="Product videos"
        description="Watch BedTracker and ComplyCare walkthroughs: admissions, e-sign, PCC integration, concierge, and platform tours—embedded on ComplyCare.io."
        path="/videos"
      />
      <SiteShell includeFinalCta>
        <section className="section-pad border-b border-[#E4EDF5]">
          <div className="cc-container">
            <SectionIntro
              eyebrow="Watch on site"
              title="Product walkthroughs"
              description="Eight videos from the BedTracker EMR channel—play inline below. For the full channel, open YouTube."
            />
            <p className="mt-4 text-center text-sm text-[#4E6478]">
              <a
                href={YOUTUBE_CHANNEL_VIDEOS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-[#3DA882] hover:text-[#2E4057]"
              >
                Open channel on YouTube
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </p>
          </div>
        </section>

        <section className="section-pad bg-[#F2F6FA]">
          <div className="cc-container">
            <div className="grid gap-10 lg:gap-12">
              {FEATURED_YOUTUBE_VIDEOS.map((video, index) => (
                <article
                  key={video.videoId}
                  className="overflow-hidden rounded-2xl border border-[#E4EDF5] bg-white shadow-[0_14px_40px_rgba(46,64,87,0.06)]"
                >
                  <div className="border-b border-[#E4EDF5] px-5 py-4 sm:px-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8FA3B5]">
                      Video {index + 1} of {FEATURED_YOUTUBE_VIDEOS.length}
                    </p>
                    <h2 className="mt-2 font-display text-lg font-semibold leading-snug text-[#2E4057] sm:text-xl">
                      {video.title}
                    </h2>
                  </div>
                  <div className="aspect-video w-full bg-[#0f172a]">
                    <iframe
                      title={video.title}
                      src={youtubeEmbedSrc(video.videoId)}
                      className="h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-12 text-center text-sm text-[#4E6478]">
              Ready to go deeper?{' '}
              <Link to="/contact" className="font-semibold text-[#3DA882] hover:text-[#2E4057]">
                Book a demo
              </Link>{' '}
              or{' '}
              <Link to="/resources" className="font-semibold text-[#3DA882] hover:text-[#2E4057]">
                browse written guides
              </Link>
              .
            </p>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
