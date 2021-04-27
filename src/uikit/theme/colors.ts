import { Colors } from "./types";

export const baseColors = {
  failure: "#17f0ff",
  primary: "#19defa",
  primaryBright: "#000000",
  primaryDark: "#a8a89e",
  secondary: "#52fae9",
  success: "#63fff7",
  warning: "#56f5ef",
};

export const brandColors = {
  binance: "#56f5ef",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#4ee8fc",
  background: "#fefffa",
  backgroundDisabled: "#ffffff",
  contrast: "#ffffff",
  invertedContrast: "#ffffff",
  input: "#ffffff",
  primaryDark: "#0098A1",
  tertiary: "#ffffff",
  text: "#000000",
  textDisabled: "#000000",
  textSubtle: "#000000",
  borderColor: "#ffffff",
  card: "#ffc60d",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#001113",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#53fcf1",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#4ee8fc",
  textDisabled: "#4ee8fc",
  textSubtle: "#4ee8fc",
  borderColor: "#4ee8fc",
  card: "#010f11",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};
