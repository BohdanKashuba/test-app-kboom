import { FC } from 'react';
import Image from 'next/image';
import avatarSrc from '@/assets/images/avatar.svg';
import coinSrc from '@/assets/images/coin.svg';
import skullSrc from '@/assets/images/skull.svg';
import stoneSrc from '@/assets/images/stone.svg';

interface TeamInfoProps {
  slug: string;
  name: string;
  level: number;
  levelCount: number;
  stat1: string;
  stat2: string;
  stat3: string;
}

const TeamInfo: FC<TeamInfoProps> = ({ name, level, levelCount, stat1, stat2, stat3 }) => {
  return (
    <div className="flex flex-col px-4 py-3 gap-3 border-neutral border rounded-md">
      <div className="flex gap-2 items-center">
        <Image src={avatarSrc} alt="avatar" />
        <h3 className="text-primaryLight">{name}</h3>
      </div>

      <div className="flex items-center">
        <div className="flex justify-center items-center rounded-md bg-primary text-neutralDark min-w-[24px] w-[24px] h-[24px]">
          {level}
        </div>
        <div className="relative bg-primaryDark border-primary border rounded-r-sm h-[18px] w-full ml-[-1px]">
          <div className="bg-primary w-1/3 h-full"></div>
          <p className="absolute top-0 left-1 text-xs">{levelCount}/1000</p>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex items-center relative">
          <div className="flex items-center border-neutral border rounded-r-md text-xs pr-1 h-[22px] pl-[12px] ml-[12px]">
            {stat1}
          </div>
          <Image className="absolute" src={coinSrc} alt="coin" />
        </div>
        <div className="flex items-center relative">
          <div className="flex items-center border-neutral border rounded-r-md text-xs pr-1 h-[22px] pl-[12px] ml-[12px]">
            {stat2}
          </div>
          <Image className="absolute" src={stoneSrc} alt="stone" />
        </div>
        <div className="flex items-center relative">
          <div className="flex items-center border-neutral border rounded-r-md text-xs pr-1 h-[22px] pl-[12px] ml-[12px]">
            {stat3}
          </div>
          <Image className="absolute" src={skullSrc} alt="skull" />
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
