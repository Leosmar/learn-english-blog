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
        <title>English blog</title>
      </head>
      <body className={SpaceGroteskTitle.variable}>
        <main className={styles.containerLayout}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
