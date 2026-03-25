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
  metadataBase: new URL('https://aerosemkimya.com.tr'), // Replace with actual production URL
  title: {
    default: "Aerosem Kimya | Advanced Aerospace Solutions",
    template: "%s | Aerosem Kimya",
  },
  description: "Aerosem Kimya is a leading provider of advanced chemical solutions for the aerospace and industrial sectors. We specialize in precision engineering and reliable formulations.",
  keywords: ["Aerosem Kimya", "Aviation chemicals", "aerospace cleaning", "aircraft maintenance", "biodegradable solvents", "industrial chemicals"],
  authors: [{ name: "Aerosem Kimya" }],
  creator: "Aerosem Kimya",
  publisher: "Aerosem Kimya",
  icons: {
    icon: '/logoa1.webp',
    apple: '/logoa1.webp',
  },
  openGraph: {
    title: "Aerosem Kimya | Beyond Chemistry",
    description: "Discover advanced aerospace and industrial chemical solutions engineered for tomorrow's skies. Uncompromising performance and reliability.",
    url: 'https://aerosemkimya.com',
    siteName: 'Aerosem Kimya',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/newhero.png', // Ensure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: 'Aerosem Kimya Aviation Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aerosem Kimya | Beyond Chemistry',
    description: 'Advanced aerospace chemical solutions engineered for performance, safety, and reliability.',
    images: ['/newhero.png'],
  },
  verification: {
    google: "yoursiteverification", // Optional, wait for client
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
            <main className="relative z-10 flex-grow bg-background-light dark:bg-background-dark shadow-2xl">
              {children}
            </main>
            <Footer />
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
