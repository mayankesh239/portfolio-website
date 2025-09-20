// src/app/layout.tsx
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const metadata = {
  title: "Mayankesh Jha | Portfolio",
  description: "Portfolio of Mayankesh Jha",
  icons: {
    icon: "/MayankeshJha.jpeg", 
  },

};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
