import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'PhotoFeed',
  description: 'A simple photo feed application built with Next.js',
  //add favicon
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/heart.svg" type="image/svg+xml" />
      </head>
      <body>
        <Navbar />
        {children}
        <div id="modal-root-content" />
      </body>
    </html>
  );
}
