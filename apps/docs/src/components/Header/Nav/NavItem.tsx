import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavItem = ({ name, href }: { name: string; href: string }) => {
  const pathname = usePathname();
  const isActive = pathname ? pathname.includes(href) : false;

  return (
    <Link href={href}>
      <span className={isActive ? 'active' : ''}>{name}</span>
    </Link>
  );
};

export default NavItem;
