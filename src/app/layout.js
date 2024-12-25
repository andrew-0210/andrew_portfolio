import Navbar from '@/components/Navbar';
import { syne, manrope } from './font/font';

import './globals.css';

export const metadata = {
  title: 'Andrew Portfolio',
  description: 'Design Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${syne.variable} ${manrope.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
