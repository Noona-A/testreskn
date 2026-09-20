import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Play } from "lucide-react";

interface VideoEmbedProps {
  /** YouTube video ID. Renders nothing when empty, so sections can be wired up before videos exist. */
  youtubeId?: string;
  title: string;
  description: string;
  /** ISO date the video was published, for VideoObject schema. */
  uploadDate?: string;
  className?: string;
}

/**
 * Privacy-friendly, click-to-load YouTube embed with VideoObject structured data.
 * Loads only a thumbnail until the viewer taps play, which keeps page speed high
 * on mobile. Uses youtube-nocookie so no tracking cookies are set before consent.
 */
const VideoEmbed = ({ youtubeId, title, description, uploadDate, className = "" }: VideoEmbedProps) => {
  const [playing, setPlaying] = useState(false);
  if (!youtubeId) return null;

  const thumb = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: title,
    description,
    thumbnailUrl: [thumb],
    embedUrl: `https://www.youtube-nocookie.com/embed/${youtubeId}`,
    contentUrl: `https://www.youtube.com/watch?v=${youtubeId}`,
    ...(uploadDate ? { uploadDate } : {}),
  };

  return (
    <figure className={`my-6 ${className}`}>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full group"
            aria-label={`Play video: ${title}`}
          >
            <img src={thumb} alt="" loading="lazy" className="w-full h-full object-cover" />
            <span className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
              <span className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg">
                <Play className="w-7 h-7 ml-1" aria-hidden="true" />
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-2 text-xs text-muted-foreground">{title}</figcaption>
    </figure>
  );
};

export default VideoEmbed;
