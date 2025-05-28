import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const PlayerRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const TranscriptColumn = styled.div`
  flex-shrink: 0;
`;

export const CaptionSettingsPanelWrapper = styled.div`
  align-self: stretch;
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 640px;
  height: 360px;
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
`;

export const SubtitleDisplay = styled.div<{
  fontSize: string;
  bgColor: string;
  fontWeight: string;
  isElevated: boolean;
}>`
  position: absolute;
  bottom: ${({ isElevated }) => (isElevated ? "60px" : "30px")};
  left: 50%;
  transform: translateX(-50%);
  max-width: 80%;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  pointer-events: none;
  transition: all 0.2s ease;
  color: white;
  font-size: ${({ fontSize }) => fontSize};
  background-color: ${({ bgColor }) => bgColor};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: center;
  z-index: ${({ isElevated }) => (isElevated ? 20 : 5)};
`;
