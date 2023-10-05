import { FC } from 'react';
import Image from 'next/image';
import logoSrc from '@/assets/images/logo.svg';
import { socialList } from '@/_mock/socials';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="px-4 py-3 border-b-neutral border-b">
      <div className="max-w-screen-xl m-auto flex flex-col md:flex-row gap-2 justify-between items-center">
        <Image src={logoSrc} alt="logo" />

        <div className="flex gap-2">
          {socialList.map(({ link, icon, alt }, index) => (
            <a key={index} href={link} target="_blank">
              <Image src={icon} alt={alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
