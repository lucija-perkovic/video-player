import { useEffect } from "react";
import { VideoAction } from "../models/types";

interface VideoShortcutsProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  isActive: boolean;
  onAction?: (action: VideoAction) => void;
}

export const useVideoShortcuts = ({
  videoRef,
  isActive,
  onAction,
}: VideoShortcutsProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isActive) return;

      const video = videoRef.current;
      if (!video) return;

      const target = e.target as HTMLElement;
      if (["INPUT", "TEXTAREA", "BUTTON"].includes(target.tagName)) {
        return;
      }

      switch (e.code) {
        case "Space":
          e.preventDefault();
          if (video.paused) {
            video.play();
            onAction?.(VideoAction.Play);
          } else {
            video.pause();
            onAction?.(VideoAction.Pause);
          }
          break;
        case "ArrowLeft":
          video.currentTime = Math.max(0, video.currentTime - 5);
          onAction?.(VideoAction.Rewind);
          break;
        case "ArrowRight":
          video.currentTime = Math.min(video.duration, video.currentTime + 5);
          onAction?.(VideoAction.Forward);
          break;
        case "ArrowUp":
          video.volume = Math.min(1, video.volume + 0.1);
          onAction?.(VideoAction.VolumeUp);
          break;
        case "ArrowDown":
          video.volume = Math.max(0, video.volume - 0.1);
          onAction?.(VideoAction.VolumeDown);
          break;
        case "KeyC":
          video.muted = !video.muted;
          onAction?.(video.muted ? VideoAction.Muted : VideoAction.Unmuted);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isActive, onAction, videoRef]);
};
