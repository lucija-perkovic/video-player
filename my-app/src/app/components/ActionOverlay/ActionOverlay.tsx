import React from "react";
import { VideoAction } from "../../models/types";
import { Overlay } from "./styles";

interface ActionOverlayProps {
  action: VideoAction | null;
}

export const ActionOverlay = ({ action }: ActionOverlayProps) => {
  if (!action) return null;

  return <Overlay>{action}</Overlay>;
};
