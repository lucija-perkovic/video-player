export const parseSRT = (srtText: string) => {
    const blocks = srtText.trim().split(/\r?\n\r?\n/).filter(Boolean);
    const toSeconds = (time: string) => {
      const [h, m, s] = time.replace(",", ".").split(":");
      const [sec, ms] = s.split(".");
      return (
        Number(h) * 3600 + Number(m) * 60 + Number(sec) + (Number(ms) || 0) / 1000
      );
    };
    return blocks.map((block) => {
      const lines = block.split(/\r?\n/);
      const [startRaw, endRaw] = lines[1].split(" --> ");
      const text = lines.slice(2).join(" ");
      return {
        start: toSeconds(startRaw),
        end: toSeconds(endRaw),
        text: text.trim(),
      };
    });
  };
  
  export const formatTimestamp = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${mins}:${secs}`;
  };