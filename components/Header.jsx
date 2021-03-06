import { MenuButton } from '.';

const Header = () => (
  <div className="text-white flex flex-col">
    <div className="max-w-screen-lg w-full flex items-center">
      <h1 className="flex-1">Header | Your awesome website</h1>
      <MenuButton />
    </div>
  </div>
);

export default Header;
