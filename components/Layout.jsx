import { Footer, Header } from '.';

const Layout = ({ withHeader, withFooter, children }) => (
  <div className="flex flex-col h-screen">
    {withHeader && <Header />}
    <main className="bg-gray-100 flex flex-col flex-1">
      <div className="max-w-screen-lg w-full">{children}</div>
    </main>
    {withFooter && <Footer />}
  </div>
);

export default Layout;
