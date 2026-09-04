"use client";

import { useEffect, useRef } from "react";

interface SlowVideoBackdropProps {
  src: string;
  playbackRate?: number;
  className?: string;
}

export function SlowVideoBackdrop({
  src,
  playbackRate = 0.4,
  className = "w-full h-full object-cover object-center",
}: SlowVideoBackdropProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className={className}
      aria-hidden="true"
    />
  );
}
