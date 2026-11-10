// Official launch timestamp: 11 November 2026 at 11:11:11 AM Sri Lanka Standard Time (UTC+5:30)
export const LAUNCH_DATE_ISO = "2026-11-11T11:11:11+05:30";
export const LAUNCH_TIMESTAMP = new Date(LAUNCH_DATE_ISO).getTime();

export interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLaunched: boolean;
}

export function getCountdownParts(now: number = Date.now()): CountdownParts {
  const diff = LAUNCH_TIMESTAMP - now;
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLaunched: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isLaunched: false,
  };
}

export function padCountdownUnit(value: number): string {
  return String(value).padStart(2, "0");
}

export function formatCountdownLabel(parts: CountdownParts): string {
  if (parts.isLaunched) {
    return "The Cave Is Open";
  }

  const chunks: string[] = [];
  if (parts.days > 0) chunks.push(`${parts.days}d`);
  chunks.push(`${padCountdownUnit(parts.hours)}h`);
  chunks.push(`${padCountdownUnit(parts.minutes)}m`);
  return chunks.join(" ");
}

