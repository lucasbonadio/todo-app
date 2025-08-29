import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'To-Do List',
  description: 'Seu gerenciador de tarefas',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-purple-900 flex items-center justify-center min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}