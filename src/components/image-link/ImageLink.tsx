import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface ImageLinkProps {
  link: string;
  children: React.ReactElement;
}

const ImageLink: FC<ImageLinkProps> = ({ children, link }) => {
  const { asPath } = useRouter();

  const asPathSegments = asPath.split('/');

  const linkSegments = link.split('/');

  const isActive = asPathSegments[1] === linkSegments[1];

  const space = isActive ? 1 : 0;

  const borderParent = isActive ? 'border-neutral' : 'border-none';

  return (
    <Link
      href={link}
      className={`p-3 border ${borderParent} rounded-full h-[64px] w-[64px] bg-gradient-to-r from-gold-light to-gold-dark relative`}
    >
      <div className={`absolute rounded-full m-${space} top-0 left-0 right-0 bottom-0 bg-neutralDark`} />
      <div className="relative">{children}</div>
    </Link>
  );
};

export default ImageLink;
