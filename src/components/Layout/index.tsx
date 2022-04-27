import Header from "../Header"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <main className="main">
        {children}
      </main>
    </>
  )
}

export default Layout;