"use client";

import React, { useEffect, useRef, useState } from "react";
import { CaptionSettingsPanel } from "../CaptionSettingsPanel/CaptionSettingsPanel";
import { parseSRT } from "../../utils/subtitles";
import { useSubtitleSync } from "../../hooks/useSubtitlesSync";
import { CaptionSettings, Subtitle, VideoAction } from "../../models/types";
import { Transcript } from "../Transcript/Transcript";
import { useVideoShortcuts } from "../../hooks/useVideoShortcuts";
import { ActionOverlay } from "../ActionOverlay/ActionOverlay";
import { CaptionSettingsPanelWrapper, Container, LeftColumn, PlayerRow, StyledVideo, SubtitleDisplay, TranscriptColumn, VideoWrapper } from "./styles";

interface Props {
  src: string;
  subtitleUrl: string;
  playerId: string;
  isActive: boolean;
  onActivate: () => void;
}

export const VideoPlayer = ({
  src,
  subtitleUrl,
  playerId,
  isActive,
  onActivate,
}: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const [subtitles, setSubtitles] = useState<Subtitle[]>([]);
  const [currentSubtitle, setCurrentSubtitle] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [lastAction, setLastAction] = useState<VideoAction | null>(null);
  const [captionSettings, setCaptionSettings] = useState<CaptionSettings>({
    fontSize: "1rem",
    bgColor: "rgba(0, 0, 0, 0.7)",
    fontWeight: "400",
  });

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const overlayTimeout = useRef<NodeJS.Timeout | null>(null);

  const showOverlay = () => {
    setIsOverlayVisible(true);
    if (overlayTimeout.current) clearTimeout(overlayTimeout.current);
    overlayTimeout.current = setTimeout(() => {
      setIsOverlayVisible(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (overlayTimeout.current) clearTimeout(overlayTimeout.current);
    };
  }, []);

  const isPaused = videoRef.current?.paused ?? true;
  const shouldElevateCaptions = isOverlayVisible || isPaused;

  useSubtitleSync(
    videoRef,
    subtitles,
    playerId,
    activeIndex,
    setActiveIndex,
    setCurrentSubtitle
  );

  useVideoShortcuts({
    videoRef,
    isActive,
    onAction: (action) => {
      setLastAction(action);
      showOverlay();
      setTimeout(() => setLastAction(null), 1500);
    },
  });

  const jumpTo = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      videoRef.current.play();
    }
  };

  useEffect(() => {
    fetch(subtitleUrl)
      .then((res) => res.text())
      .then((text) => {
        const parsed = parseSRT(text);
        setSubtitles(parsed);
      });
  }, [subtitleUrl]);

  return (
    <Container onClick={onActivate}>
      <PlayerRow>
        <LeftColumn>
          <CaptionSettingsPanelWrapper>
            <CaptionSettingsPanel
              settings={captionSettings}
              onChange={setCaptionSettings}
            />
          </CaptionSettingsPanelWrapper>
          <VideoWrapper
            onMouseMove={showOverlay}
            onMouseEnter={showOverlay}
            onClick={showOverlay}
          >
            <StyledVideo ref={videoRef} src={src} controls />
            <ActionOverlay key={playerId} action={lastAction} />
            {currentSubtitle && (
              <SubtitleDisplay
                fontSize={captionSettings.fontSize}
                bgColor={captionSettings.bgColor}
                fontWeight={captionSettings.fontWeight}
                isElevated={shouldElevateCaptions}
              >
                {currentSubtitle}
              </SubtitleDisplay>
            )}
          </VideoWrapper>
        </LeftColumn>

        <TranscriptColumn>
          <Transcript
            subtitles={subtitles}
            activeIndex={activeIndex}
            playerId={playerId}
            jumpTo={jumpTo}
            transcriptRef={transcriptRef}
          />
        </TranscriptColumn>
      </PlayerRow>
    </Container>
  );
};
