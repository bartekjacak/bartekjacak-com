import { afterEach, beforeEach, describe, expect, test, vitest } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useWinking } from "./InteractiveSmiley.hooks";

describe("useWinking", () => {
  beforeEach(() => {
    vitest.useFakeTimers();
  });

  afterEach(() => {
    vitest.clearAllTimers();
    vitest.useRealTimers();
  });

  test("should initialize with isWinking set to false", () => {
    const { result } = renderHook(() =>
      useWinking({ initialTimeout: 1000, winkingDuration: 500 }),
    );
    expect(result.current.isWinking).toBe(false);
  });

  test("should start winking after initialTimeout", () => {
    const { result } = renderHook(() =>
      useWinking({ initialTimeout: 1000, winkingDuration: 500 }),
    );

    act(() => {
      vitest.advanceTimersByTime(1000);
    });

    expect(result.current.isWinking).toBe(true);
  });

  test("should stop winking after winkingDuration", () => {
    const { result } = renderHook(() =>
      useWinking({ initialTimeout: 1000, winkingDuration: 500 }),
    );

    act(() => {
      vitest.advanceTimersByTime(1000);
    });

    expect(result.current.isWinking).toBe(true);

    act(() => {
      vitest.advanceTimersByTime(500);
    });

    expect(result.current.isWinking).toBe(false);
  });

  test("should start forced wink immediately and stop after calling endForcedWink", () => {
    const { result } = renderHook(() =>
      useWinking({ initialTimeout: 1000, winkingDuration: 500 }),
    );

    act(() => {
      result.current.beginForcedWink();
    });

    expect(result.current.isWinking).toBe(true);

    act(() => {
      result.current.endForcedWink();
    });

    expect(result.current.isWinking).toBe(false);
  });
});
