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
        <nav className="mb-8 space-x-4 text-gray-700 dark:text-gray-200">
          <Link href="/" className="hover:text-indigo-500 transition-colors duration-300">Home</Link>
          <Link href="/about" className="hover:text-indigo-500 transition-colors duration-300">About</Link>
          <Link href="/projects" className="hover:text-indigo-500 transition-colors duration-300">Projects</Link>
          <Link href="/contact" className="hover:text-indigo-500 transition-colors duration-300">Contact</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
