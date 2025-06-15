import TareasProvider from "@/conceptos-react/5-hooks/4-useContext/TareasProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={geist.className}>
      <TareasProvider>
        <Component {...pageProps} />
      </TareasProvider>
    </div>
  );
}
