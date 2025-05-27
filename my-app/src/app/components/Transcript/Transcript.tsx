import React from "react";
import { formatTimestamp } from "../../utils/subtitles";
import { Subtitle } from "../../models/types";
import { SubtitleEntry, Timestamp, TranscriptContainer } from "./styles";

interface TranscriptProps {
  subtitles: Subtitle[];
  activeIndex: number | null;
  playerId: string;
  jumpTo: (time: number) => void;
  transcriptRef: React.RefObject<HTMLDivElement | null>;
}

export const Transcript = ({
  subtitles,
  activeIndex,
  playerId,
  jumpTo,
  transcriptRef,
}: TranscriptProps) => {
  return (
    <TranscriptContainer ref={transcriptRef}>
      {subtitles.map((s, i) => (
        <SubtitleEntry
          key={i}
          id={`subtitle-${playerId}-${i}`}
          onClick={() => jumpTo(s.start)}
          active={i === activeIndex}
        >
          <Timestamp isActive={i === activeIndex}>
            {formatTimestamp(s.start)} – {formatTimestamp(s.end)}
          </Timestamp>
          <div>{s.text}</div>
        </SubtitleEntry>
      ))}
    </TranscriptContainer>
  );
};
