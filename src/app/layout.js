import "./globals.css";
import { Hahmlet } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "./shared/footer";
import Navigation from "./shared/navigation";
config.autoAddCss = false;

const mainFont = Hahmlet({ subsets: ["latin"] });

export const metadata = {
  title: "Rolling Dough",
  description: "Your favorite pizza place. Mockup website for a pizza place.",
  "apple-mobile-web-app-status-bar-style": "black-translucent",
  "apple-mobile-web-app-capable": "yes",
  "theme-color": "#27272a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${mainFont.className} flex flex-col min-h-screen`}>
        <Navigation />
        <main
          id="main"
          className="mx-auto w-full bg-white flex flex-col justify-center text-black min-h-full flex-grow"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
