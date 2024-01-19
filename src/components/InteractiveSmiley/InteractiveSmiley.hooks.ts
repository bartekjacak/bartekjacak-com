import { useCallback, useEffect, useRef, useState } from "react";

interface Props {
  initialTimeout: number;
  winkingDuration: number;
}

type Timeout = ReturnType<typeof setTimeout>;

// Get random number between 6000 and 10000
const getRandomTimeout = () => Math.floor(Math.random() * 4000) + 6000;

export const useWinking = ({ initialTimeout, winkingDuration }: Props) => {
  const [isWinking, setIsWinking] = useState(false);
  const stopWinkFaceTimeout = useRef<Timeout | null>(null);
  const nextWinkingTimeout = useRef<Timeout | null>(null);

  const wink = useCallback(() => {
    setIsWinking(true);
    stopWinkFaceTimeout.current = setTimeout(
      () => setIsWinking(false),
      winkingDuration,
    );
  }, [winkingDuration]);

  const scheduleWinking = useCallback(
    (timeout: number) => {
      return setTimeout(() => {
        wink();
        nextWinkingTimeout.current = scheduleWinking(getRandomTimeout());
      }, timeout);
    },
    [wink],
  );

  const beginForcedWink = useCallback(() => {
    nextWinkingTimeout.current && clearTimeout(nextWinkingTimeout.current);
    stopWinkFaceTimeout.current && clearTimeout(stopWinkFaceTimeout.current);
    setIsWinking(true);
  }, [setIsWinking, nextWinkingTimeout, stopWinkFaceTimeout]);

  const endForcedWink = useCallback(() => {
    setIsWinking(false);
    nextWinkingTimeout.current = scheduleWinking(getRandomTimeout());
  }, [setIsWinking, nextWinkingTimeout, scheduleWinking]);

  useEffect(() => {
    nextWinkingTimeout.current = scheduleWinking(initialTimeout);

    return () => {
      nextWinkingTimeout.current && clearTimeout(nextWinkingTimeout.current);
      stopWinkFaceTimeout.current && clearTimeout(stopWinkFaceTimeout.current);
    };
  }, [initialTimeout, scheduleWinking]);

  return {
    isWinking,
    beginForcedWink,
    endForcedWink,
  };
};
