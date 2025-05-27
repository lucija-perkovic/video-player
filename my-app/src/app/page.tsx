"use client";
import { useState } from "react";
import { VideoPlayer } from "./components/VideoPlayer/VideoPlayer";
import styled from "styled-components";

const ResponsiveLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 3rem 2rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default function Home() {
  const [activePlayerId, setActivePlayerId] = useState<string | null>(null);

  return (
    <ResponsiveLayout>
      <VideoPlayer
        src="video-player/videos/video_1/clip.mp4"
        subtitleUrl="/videos/video_1/captions.srt"
        playerId="player-1"
        isActive={activePlayerId === "player-1"}
        onActivate={() => setActivePlayerId("player-1")}
      />
      <VideoPlayer
        src="video-player/videos/video_2/clip.mp4"
        subtitleUrl="/videos/video_2/captions.srt"
        playerId="player-2"
        isActive={activePlayerId === "player-2"}
        onActivate={() => setActivePlayerId("player-2")}
      />
    </ResponsiveLayout>
  );
}
