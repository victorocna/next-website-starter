import { useRouter } from 'next/router';
import { Link } from '.';

const MenuItem = ({ href, children }) => {
  const router = useRouter();
  const { pathname } = router;

  const classes = ['menu-link text-gray-900'];
  if (pathname === href) {
    // menu item active styles
    classes.push('text-accent');
  }

  return (
    <li className="menu-item flex flex-wrap items-center space-x-3">
      <Link href={href} className={classes.join(' ')}>
        {children}
      </Link>
    </li>
  );
};

export default MenuItem;
