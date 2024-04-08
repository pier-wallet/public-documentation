import { Inter, Inconsolata, Lora } from "next/font/google";
import localFont from "next/font/local";

// const gtFlexa = localFont({
//   variable: "--font-gt-flexa",
//   src: [
//     {
//       path: "../styles/GT-Flexa-Standard-Medium.woff",
//       style: "normal",
//       weight: "400",
//     },
//   ],
// });

const gtFlexa = localFont({
  variable: "--font-gt-flexa",
  src: "../styles/GT-Flexa-Standard-Medium.woff2",
});

export const inter = Inter({
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-inter",
  fallback: ["Times New Roman", "sans-serif"],
  subsets: ["latin"],
});

export const inconsolata = Inconsolata({
  // weight: ["400", "700"],
  display: "swap",
  variable: "--font-inconsolata",
  // fallback: ["Courier New", "Courier", "monospace"],
  subsets: ["latin"],
});

export const lora = Lora({
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-lora",
  fallback: ["Times New Roman", "Times", "serif"],
  subsets: ["latin"],
});

export default function Main({ children }) {
  return (
    <>
      <style jsx global>{`
        :root {
          font-family: ${inter.style.fontFamily};
        }

        h1,
        h2,
        h3 {
          font-family: ${gtFlexa.style.fontFamily};
        }
      `}</style>
      <main
        className={`${inter.variable} ${inconsolata.variable} ${lora.variable} ${gtFlexa.variable} font-inter antialiased tracking-tight`}
      >
        {children}
      </main>
    </>
  );
}
