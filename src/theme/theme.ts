// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 2. Extend the theme to include custom colors, fonts, etc

const colors = {
  brand: {
    700: "rgba(255, 255, 255, 0.4)",
    600: "#4A5568",
    500: "#179848",
    400: "#000000",
    300: "#ffffff",
    200: "#ee2761",
    100: "#1a202c",
  },
};

const theme = extendTheme({
  colors,
  config,
});

export default theme;
