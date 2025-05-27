import { useEffect } from "react";

export const useSubtitleSync = (
  videoRef: React.RefObject<HTMLVideoElement | null>,
  subtitles: { start: number; end: number; text: string }[],
  playerId: string,
  activeIndex: number | null,
  setActiveIndex: (index: number | null) => void,
  setCurrentSubtitle: (text: string) => void
) => {
  useEffect(() => {
    let rafId: number;

    const update = () => {
      const currentTime = videoRef.current?.currentTime ?? 0;
      const index = subtitles.findIndex(
        (s) => currentTime >= s.start && currentTime <= s.end
      );

      if (index !== activeIndex) {
        setActiveIndex(index);
        setCurrentSubtitle(subtitles[index]?.text ?? "");

        const el = document.getElementById(`subtitle-${playerId}-${index}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }

      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [subtitles, activeIndex, playerId, setActiveIndex, setCurrentSubtitle, videoRef]);
};
