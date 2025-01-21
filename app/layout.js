import localFont from "next/font/local";
import { Inter, Poppins } from "@next/font/google";
import "./globals.css";
import NavDesktop from "./components/shared-compontents/nav-desktop";
import MobileNav from "./components/shared-compontents/mobile-nav";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title:
    "Solar Gard Solutions, Ireland | Glass Film Solutions, Anti-glare window films, heat reduction window films, Privacy window films, Car Tinting, CoverStyl' Surface Wrapping, Printed Graphics & Vehicle Wrapping",
  description:
    "Solar Gard Solutions, Ireland. Offers premium glass film solutions, including Solar window films, Anti-Glare window films, Heat reductions window films, Privacy window Films, and Safety window films, Cloaking films, as well as car tinting, vehicle wrapping, and CoverStyl' for stylish surface transformations. Contact us for innovative solutions today!",
  keywords:
    "solar films, privacy films, frosted films, privacy films, anti glare films, heat reduction films, safety films, car tinting, vehicle wrapping, CoverStyl', glass film solutions, heat reduction films, anti-glare films, decorative films Ireland, surface vinyl, automotive wraps, architectural films",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="subject"
        content="Glass Solar Film Solutions, Car Tinting, Vehicle Wrapping, Anti-Glare window film, Heat reduction window film, Privacy window film, Safety window films, Cloaking films, and Coverstyl' Surface Transformations in Ireland"
      ></meta>
      <meta name="Classification" content="Business"></meta>
      <meta name="coverage" content="Ireland"></meta>
      <link rel="icon" href="favicon.ico?v=2"></link>
      <body className={inter.className}>
        <div>{children}</div>
        <div>
          <NavDesktop />
        </div>
        <div>
          <MobileNav />
        </div>
      </body>
    </html>
  );
}
