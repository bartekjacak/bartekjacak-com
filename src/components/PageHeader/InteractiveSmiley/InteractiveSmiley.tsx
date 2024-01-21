"use client";
import {
  FallbackFace,
  NeutralFace,
  WinkingFace,
} from "./InteractiveSmiley.sprites";
import { useWinking } from "./InteractiveSmiley.hooks";

const INITIAL_TIMEOUT = 4500;
const WINKING_DURATION = 600;

export default function InteractiveSmiley() {
  const { isWinking, beginForcedWink, endForcedWink } = useWinking({
    initialTimeout: INITIAL_TIMEOUT,
    winkingDuration: WINKING_DURATION,
  });

  return (
    <div
      className="h-30 w-30 relative inline-block"
      onMouseEnter={beginForcedWink}
      onMouseLeave={endForcedWink}
    >
      {/* Fallback face is used to prevent icon blinking glitch during the state change betweeen wink and neutral face  */}
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-full w-full">
        <FallbackFace />
      </div>

      {isWinking ? <WinkingFace /> : <NeutralFace />}
    </div>
  );
}
