// pages/_app.tsx
import type { AppProps } from "next/app";
import Header from "../components/layout/Header";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}