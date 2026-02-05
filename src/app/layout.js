import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import logo from "../assets/splash.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.afhomes.ae"),
  title: {
    default: "A&F Homes | Real Estate in Dubai",
    template: "%s | A&F Homes Dubai",
  },
  description:
    "A&F Homes is a premium real estate agency in Dubai helping you buy, sell and rent luxury apartments, villas and off-plan properties across the UAE.",
  keywords: [
    "Dubai real estate",
    "Dubai properties",
    "buy property in Dubai",
    "rent apartment Dubai",
    "sell property Dubai",
    "off-plan properties Dubai",
    "A&F Homes",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://www.afhomes.ae",
    siteName: "A&F Homes",
    title: "A&F Homes | Real Estate in Dubai",
    description:
      "Buy, sell or rent property in Dubai with A&F Homes. Expert advice, curated listings and dedicated support for investors and end users.",
    images: [
      {
        url: "/file.svg",
        width: 1200,
        height: 630,
        alt: "A&F Homes Dubai Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A&F Homes | Real Estate in Dubai",
    description:
      "Premium real estate advisory in Dubai. Explore apartments, villas and investment opportunities with A&F Homes.",
    images: ["/file.svg"],
  },
  alternates: {
    canonical: "https://www.afhomes.ae",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased font-poppins`}
      >
        {/* <Splash /> */}
        {children}
      </body>
    </html>
  );
}
