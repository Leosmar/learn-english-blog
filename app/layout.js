import { Space_Grotesk } from "@next/font/google";
import Footer from "../components/Footer/Footer";
import "../styles/globals.css";
import styles from "./HomePage.module.css";

const SpaceGroteskTitle = Space_Grotesk({
  variable: "--title",
  weight: ["300", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <meta name="description" content="" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <meta property="og:title" content="Blog ingles - articulos" />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="Blog ingles - estudiantes UPT" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@leosmar_delgado" />
        <meta name="twitter:title" content="Blog ingles - articulos" />
        <title>English blog</title>
      </head>
      <body className={SpaceGroteskTitle.variable}>
        <main className="block w-full max-w-6xl p-4 pb-32 m-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
