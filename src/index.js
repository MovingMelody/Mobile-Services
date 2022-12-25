import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/quicksand";
import "@fontsource/montserrat";
import "@fontsource/inter";
const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#ffffff",
      },

      // styles for the `a`
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
  colors: {
    hc: "#333333",
    white: "#fff",
    bc: "#66707A",
    brand: "#FC7969",
    primary: {
      100: "#dbd6e7",
      200: "#cac2dc",
      300: "#b8aed0",
      400: "#a79ac5",
      500: "#9585b9",
      600: "#8371ad",
      700: "#725da2",
      800: "#604996",
      900: "#4f358b",
    },
  },
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
});
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
