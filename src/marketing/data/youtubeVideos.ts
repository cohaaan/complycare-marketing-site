/**
 * First eight public videos from https://www.youtube.com/@bedtracker-emr/videos
 * Titles from YouTube oEmbed (update if you re-record or reorder).
 */
export type FeaturedYoutubeVideo = {
  videoId: string;
  title: string;
};

export const FEATURED_YOUTUBE_VIDEOS: FeaturedYoutubeVideo[] = [
  {
    videoId: 'JdD1bWxXOGY',
    title: 'BedTracker: Nursing Home Patient Agreement eSign & PCC Integration',
  },
  {
    videoId: 'syDgfv_zSII',
    title: 'Grievance forms in Bed tracker',
  },
  {
    videoId: '6ylrwXRGUWE',
    title: 'Bed Trackers smooth admission for nursing homes',
  },
  {
    videoId: '7JQZ6efOda0',
    title: 'Bed Tracker: The First Agentic Operations Platform for Healthcare Facilities FAst version',
  },
  {
    videoId: 's-LlyTGA-Mo',
    title: 'Concierge in Bed Tracker',
  },
  {
    videoId: 'S1y0a3piBqc',
    title: 'Walkthrough of bedtracker',
  },
  {
    videoId: 'zmZRvKqtnNQ',
    title: 'Bedtracker Walk through slow version',
  },
  {
    videoId: 'G6AuFzjtFNM',
    title: 'Concierge in Bed Tracker (alternate)',
  },
];

export function youtubeEmbedSrc(videoId: string) {
  return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}`;
}
