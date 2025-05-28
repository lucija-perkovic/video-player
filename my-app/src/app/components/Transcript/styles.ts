import { css, styled } from "styled-components";

export const TranscriptContainer = styled.div`
  width: 320px;
  height: 360px;
  overflow-y: auto;
  padding: 0.75rem;
  background: black;
  color: white;
  border-radius: 0.5rem;
`;

export const SubtitleEntry = styled.div<{ active: boolean }>`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background 0.2s ease;

  ${({ active }) =>
    active
      ? css`
          background: #2563eb;
          border-left: 4px solid #93c5fd;
        `
      : css`
          &:hover {
            background: #27272a;
          }
        `}
`;

export const Timestamp = styled.div<{ isActive: boolean }>`
  font-size: 0.75rem;
  color: ${({ isActive }) => (isActive ? "#ffffff" : "#9ca3af")};
  margin-bottom: 0.25rem;
`;