import React, { FC, SVGProps } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavItemProps {
  title: string;
  link: string;
  icon: React.FunctionComponent<SVGProps<SVGSVGElement>>;
}

const NavItem: FC<NavItemProps> = ({ title, link, icon: Icon }) => {
  const { query, asPath } = useRouter();

  const { team } = query;

  const currenLink = `/${team}${link}`;

  const isActive = asPath === `/${team}${link}`;

  const linkClasses = isActive ? 'text-neutralDark bg-primary' : 'text-primaryLight';

  const iconClasses = isActive ? 'stroke-neutralDark' : 'stroke-primaryLight';

  return (
    <Link
      href={currenLink}
      className={`flex items-center gap-2 px-2 ${linkClasses} group hover:text-neutralDark hover:bg-primary h-[40px] rounded-full transition-colors duration-150`}
    >
      <div className={`group-hover:stroke-neutralDark fill-none ${iconClasses} transition-colors duration-150`}>
        <Icon />
      </div>
      {title}
    </Link>
  );
};

export default NavItem;
