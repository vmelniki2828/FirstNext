import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import styles from './layout.module.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:'Drag13 blog',
  description: 'Super description'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
