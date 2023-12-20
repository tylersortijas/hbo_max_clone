import { Noto_Sans } from 'next/font/google'
import '../styles/styles.scss'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { HBOProvider } from '../components/HBOProvider.js';
config.autoAddCss = false;

const noto_sans = Noto_Sans({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata = {
  title: 'HBO Max',
  description: 'A streaming platform rivaling the likes of Netflix and the House of Mouse',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <HBOProvider>
        <body className={noto_sans.className}>{children}</body>
      </HBOProvider>
    </html>
  )
}

