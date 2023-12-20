import "../styles/globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const gtFlexa = localFont({
  variable: "--font-gt-flexa",
  src: [
    {
      path: "../styles/GT-Flexa-Standard-Medium.woff",
      style: "normal",
      weight: "400",
    },
  ],
});

// const gtFlexa = localFont({
//   src: "../styles/GT-Flexa-Standard-Medium.woff2",
//   variable: "--font-gt-flexa",
// });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${gtFlexa.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
  return <Component {...pageProps} />;
}
