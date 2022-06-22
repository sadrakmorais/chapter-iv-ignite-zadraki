import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SiderbarDrawerProvider } from "../contexts/SidebarDrawer";
import { makeServer } from "../services/mirage";
import { queryClient } from "../services/queryClient";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS theme={theme}>
        <ReactQueryDevtools />
        <SiderbarDrawerProvider>
          <Component {...pageProps} />
        </SiderbarDrawerProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
