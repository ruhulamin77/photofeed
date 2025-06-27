import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'PhotoFeed',
  description: 'A simple photo feed application built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <div id="modal-root-content" />
      </body>
    </html>
  );
}
