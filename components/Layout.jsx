import { Footer, Header, Menu } from '.';

const Layout = ({ withHeader, withFooter, children }) => (
  <div className="flex flex-col h-screen">
    {withHeader && <Header />}
    <Menu />
    <main className="bg-gray-100 flex flex-col flex-1">
      <div className="max-w-screen-lg w-full">{children}</div>
    </main>
    {withFooter && <Footer />}
  </div>
);

export default Layout;
