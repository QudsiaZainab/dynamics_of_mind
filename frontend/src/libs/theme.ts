import { extendTheme } from "@chakra-ui/react";

const colors = {
    brand: {
      50: "#e5f4ff",
      100: "#b3deff",
      200: "#80c8ff",
      300: "#4db2ff",
      400: "#1a9cff",
      500: "#0083e6",
      600: "#0066b3",
      700: "#004980",
      800: "#002c4d",
      900: "#000f1a"
    }
  };
  
  const theme = extendTheme({ colors });

  export default theme;