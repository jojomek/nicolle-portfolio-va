import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  poster: string;
  title: string;
  tag?: string;
}

const PLAY_EVENT = "portfolio:video-play";

export function VideoCard({ src, poster, title, tag }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const onOtherPlay = (e: Event) => {
      const detail = (e as CustomEvent).detail as HTMLVideoElement;
      if (detail !== videoRef.current && videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
        setPlaying(false);
      }
    };
    document.addEventListener(PLAY_EVENT, onOtherPlay);
    return () => document.removeEventListener(PLAY_EVENT, onOtherPlay);
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      document.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: v }));
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="group relative overflow-hidden border border-border bg-card hover-lift">
      <div className="relative aspect-[9/16] sm:aspect-video bg-black">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          preload="none"
          playsInline
          controls={playing}
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
          onEnded={() => setPlaying(false)}
          onPause={() => setPlaying(false)}
          onPlay={() => {
            document.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: videoRef.current }));
            setPlaying(true);
          }}
          onClick={toggle}
          className="absolute inset-0 w-full h-full object-contain bg-black cursor-pointer"
        />
        {!playing && (
          <button
            onClick={toggle}
            aria-label={`Play ${title}`}
            className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors"
          >
            <span className="w-16 h-16 rounded-full border border-white/80 flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:scale-110 transition-transform">
              <svg width="18" height="20" viewBox="0 0 18 20" fill="white"><path d="M18 10L0 20V0z"/></svg>
            </span>
          </button>
        )}
      </div>
      <div className="p-5 flex items-start justify-between gap-4">
        <div>
          {tag && <div className="text-eyebrow mb-2">{tag}</div>}
          <h4 className="font-display text-xl leading-tight">{title}</h4>
        </div>
      </div>
    </div>
  );
}
