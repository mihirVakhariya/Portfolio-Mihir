import Favicon from "/public/images/favicon.png";
import ClientRootLayout from "../components/ClientRootLayout";

export const metadata = {
  metadataBase: new URL('https://mihirvakhariya.com'),
  title: {
    default: "Mihir Vakhariya | Digital Marketer & Business Development",
    template: "%s | Mihir Vakhariya"
  },
  description: "Welcome to Mihir's Portfolio. Explore expertise in Digital Marketing and Business Development, driving brand growth, lead generation, and client acquisition through SEO, social media marketing, and strategic partnerships.",
  keywords: [
    "portfolio",
    "digital marketer",
    "business development",
    "SEO",
    "social media marketing",
    "lead generation",
    "brand growth",
    "strategic partnerships",
    "marketing automation",
    "client acquisition",
    "business growth",
    "content marketing",
    "paid ads performance",
    "market expansion",
    "web development"
  ],
  authors: [{ name: "Mihir P. Vakhariya" }],
  creator: "Mihir P. Vakhariya",
  publisher: "Mihir P. Vakhariya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mihirvakhariya.com',
    title: 'Mihir Vakhariya | Digital Marketer & Business Development',
    description: "Explore Mihir's expertise in driving business performance, brand visibility, and lead generation through data-driven digital marketing strategies.",
    siteName: 'Mihir Vakhariya Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mihir Vakhariya Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mihir Vakhariya | Digital Marketer & Business Development',
    description: "Explore Mihir's expertise in Digital Marketing and Business Development, driving growth and expanding market reach.",
    images: ['/images/og-image.jpg'],
    creator: '@mihirvakhariya',
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
  icons: [{
    rel: 'icon',
    url: Favicon.src,
  }],
  verification: {
    google: 'Dz2xp2RtP9GiXlS5Wj_tzIm0QeRcbzKILqVNJAUAd5w',
    yandex: '827e25c6099be3b0',
    yahoo: 'EAF9D5ED84139FFD4C2CE4429F37BC3B',
  },
};

export default function RootLayout({ children }) {
  return <ClientRootLayout>{children}</ClientRootLayout>;
}
