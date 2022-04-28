import React from 'react';
import Header from '../Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <main className="main">
        <section className="main-content">
          {children}
        </section>
      </main>
    </>
  );
};

export default Layout;
