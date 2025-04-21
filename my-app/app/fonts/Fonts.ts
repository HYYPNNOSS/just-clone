import localFont from "next/font/local";
import { Poppins, Work_Sans } from "next/font/google";

export const georgia = localFont({
  src: "./georgia.woff2",
  variable: "--georgia-font",
  weight: "100 600",
});

export const workSans = Work_Sans({
    weight: ['300', '700'],
    subsets: ['latin'],
    variable: '--workSans-font',
    display: 'swap'
})

export const poppins = Poppins({
    weight: ['300', '700'],
    subsets: ['latin'],
    variable: '--poppins-font',
    display: 'swap'
})
