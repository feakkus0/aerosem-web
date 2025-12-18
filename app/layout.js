import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/global/Footer";
import SmoothScroll from "@/components/global/SmoothScroll";
import PageTransition from "@/components/global/PageTransition";
import Preloader from "@/components/global/Preloader";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "Aerosem | Engineering Safety for the Skies",
    template: "%s | Aerosem Aviation Chemistry",
  },
  description: "Leading provider of advanced chemical solutions for the aerospace industry. Biodegradable cleaners, precision solvents, and exterior coatings engineered for performance.",
  keywords: ["Aviation chemicals", "aerospace cleaning", "aircraft maintenance", "biodegradable solvents", "Aerosem Kimya"],
  icons: {
    icon: '/logoa1.webp',
    apple: '/logoa1.webp',
  },
  openGraph: {
    title: "Aerosem - Beyond Chemistry",
    description: "Discover advanced aerospace solutions engineered for tomorrow's skies.",
    type: 'website',
    images: [
      {
        url: '/newhero.png',
        width: 1200,
        height: 630,
        alt: 'Aerosem Aviation Solutions',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} antialiased bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-display`} suppressHydrationWarning>
        <Preloader />
        <SmoothScroll>
          <Navbar />
          <PageTransition>
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
