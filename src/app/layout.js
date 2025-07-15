import './globals.css';
import './stars.css';
import Link from 'next/link';

export const metadata = {
  title: 'The Stellarum',
  description: 'A cosmic portfolio and emotional showcase.',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-black via-indigo-900 to-black text-gray-100 font-sans">
        <nav className="p-6 text-center space-x-6 text-gray-300">
          <Link href="/" className="hover:text-indigo-500 transition-colors duration-300">Home</Link>
          <Link href="/about" className="hover:text-indigo-500 transition-colors duration-300">About</Link>
          <Link href="/projects" className="hover:text-indigo-500 transition-colors duration-300">Projects</Link>
          <Link href="/contact" className="hover:text-indigo-500 transition-colors duration-300">Contact</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
