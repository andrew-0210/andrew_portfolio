import Navbar from '@/components/Navbar';
import { syne, manrope } from './font/font';

import './globals.css';
import Contact from '@/components/Contact';
import SmoothScrolling from '@/components/SmoothScrolling';

export const metadata = {
  title: 'Andrew Portfolio',
  description: 'Design Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${syne.variable} ${manrope.variable} antialiased overflow-x-hidden`}
      >
        <Navbar />
        <SmoothScrolling>{children}</SmoothScrolling>
        <Contact />
      </body>
    </html>
  );
}
