import '@/styles/globals.css';

import { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ReactNode } from 'react';

import { MainProvider } from '@/components/providers/MainProvider';
import { MainLayout } from '@/components/templates/MainLayout';

import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-primary' });
const poppins = Poppins({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  display: 'swap',
  variable: '--font-secondary',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Home page | Nextjs boilerplate',
  description:
    '🚀 Boilerplate and Starter for Next.js, Tailwind CSS and TypeScript ⚡️ Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Jest, React Testing Library, PostCSS, Tailwind CSS, Storybook, Plop, GH actions.'
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body
        className={cn(inter.variable, poppins.variable, 'font-secondary')}
        suppressHydrationWarning
      >
        <MainProvider>
          <MainLayout>
            <main>{children}</main>
          </MainLayout>
        </MainProvider>
      </body>
    </html>
  );
};

export default RootLayout;
