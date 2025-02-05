import { ReactNode } from 'react';

import { Container } from '@/components/atoms/Container';
import { Footer } from '@/components/atoms/Footer';
import { Header } from '@/components/molecules/Header';

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

// This is the place responsible for wrapping your app.
// Add here components like Footer, Nav etc.
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Container className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </Container>
  );
};
