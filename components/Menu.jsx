import { Logo, MenuItem } from '.';

const Menu = () => {
  return (
    <>
      <input type="checkbox" id="menu" className="hidden" aria-label="Menu open/close" />
      <label
        htmlFor="menu"
        aria-label="Menu open/close"
        className="backdrop bg-gray-300 fixed lg:hidden h-screen w-screen inset-0"
      />
      <nav className="nav-menu lg:w-80 lg:min-w-52 overflow-visible bg-white p-4 lg:p-8 border-r border-gray-200">
        <ul className="space-y-4 my-4 text-gray-300">
          <Logo />
          <MenuItem href="#">Home</MenuItem>
          <MenuItem href="#">Features</MenuItem>
          <MenuItem href="#">Prices</MenuItem>
          <MenuItem href="#">Contact us</MenuItem>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
