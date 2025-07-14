import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'The Stellarum',
  description: 'A cosmic portfolio and emotional showcase.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-8">
        <nav className="mb-8 space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
