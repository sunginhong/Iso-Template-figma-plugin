const easingMap: Record<string, number[]> = {
  standard: [0.15, 0, 0.15, 1],
  ease_Out: [0.33, 1, 0.68, 1],
  ease_Out_Level_1: [0.25, 1, 0.5, 1],
  ease_In: [0.55, 0.055, 0.675, 0.19],
  ease_InOut: [0.65, 0, 0.35, 1],
  ease_Spring: [0.34, 1.5, 0.54, 1],
  ease_Spring_Level_1: [0.45, 1.8, 0.57, 0.92],
  ease_Spring_Level_2: [0.45, 2.4, 0.68, 0.86],
  linear: [0, 0, 1, 1],
};

export const setEasing = (easing: string): number[] => {
  return easingMap[easing] ?? [];
};
