import { Syne, Manrope } from 'next/font/google';

export const syne = Syne({
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const manrope = Manrope({
  variable: '--font-manrope',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});
