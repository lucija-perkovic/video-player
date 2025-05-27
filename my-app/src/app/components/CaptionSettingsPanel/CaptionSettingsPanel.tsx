import React from "react";
import {
  FONT_SIZES,
  BG_COLORS,
  FONT_WEIGHTS,
  CaptionSettings,
  FontSize,
  BgColor,
  FontWeight,
} from "../../models/types";
import { Label, Panel, Select } from "./styles";

interface Props {
  settings: CaptionSettings;
  onChange: (settings: CaptionSettings) => void;
}

export const CaptionSettingsPanel = ({ settings, onChange }: Props) => {
  return (
    <Panel>
      <Label>
        Font Size:
        <Select
          value={settings.fontSize}
          onChange={(e) => {
            const value = e.target.value as FontSize;
            onChange({ ...settings, fontSize: value });
          }}
        >
          {FONT_SIZES.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </Label>

      <Label>
        Background:
        <Select
          value={settings.bgColor}
          onChange={(e) => {
            const value = e.target.value as BgColor;
            onChange({ ...settings, bgColor: value });
          }}
        >
          {BG_COLORS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </Label>

      <Label>
        Weight:
        <Select
          value={settings.fontWeight}
          onChange={(e) => {
            const value = e.target.value as FontWeight;
            onChange({ ...settings, fontWeight: value });
          }}
        >
          {FONT_WEIGHTS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </Label>
    </Panel>
  );
};
