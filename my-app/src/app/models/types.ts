export const FONT_SIZES = [
  { label: "Small", value: "0.875rem" },
  { label: "Medium", value: "1rem" },
  { label: "Large", value: "1.125rem" },
] as const;

export type FontSizeOption = typeof FONT_SIZES[number];
export type FontSize = FontSizeOption["value"];


export const BG_COLORS = [
  { label: "Black", value: "rgba(0, 0, 0, 0.7)" },
  { label: "Dark Gray", value: "rgba(31, 41, 55, 0.8)" },
  { label: "Transparent", value: "transparent" },
] as const;

export type BgColorOption = typeof BG_COLORS[number];
export type BgColor = BgColorOption["value"];

export const FONT_WEIGHTS = [
  { label: "Normal", value: "400" },
  { label: "Bold", value: "700" },
] as const;

export type FontWeightOption = typeof FONT_WEIGHTS[number];
export type FontWeight = FontWeightOption["value"];

export interface CaptionSettings {
  fontSize: FontSize;
  bgColor: BgColor;
  fontWeight: FontWeight;
}


export interface Subtitle {
  start: number;
  end: number;
  text: string;
}

export enum VideoAction {
  Play = "Play",
  Pause = "Pause",
  Rewind = "Rewind -5s",
  Forward = "Forward +5s",
  VolumeUp = "Volume Up",
  VolumeDown = "Volume Down",
  Muted = "Muted",
  Unmuted = "Unmuted",
}
