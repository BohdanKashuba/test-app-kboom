import React, { SVGProps } from 'react';
import { ERoutes } from '@/constants/routes';
import BellIcon from '@/assets/images/icons/BellIcon';
import StoreIcon from '@/assets/images/icons/StoreIcon';
import LicenseIcon from '@/assets/images/icons/LicenseIcon';
import MapIcon from '@/assets/images/icons/MapIcon';
import MedalIcon from '@/assets/images/icons/MedalIcon';
import AwardIcon from '@/assets/images/icons/AwardIcon';

interface INavItem {
  title: string;
  link: string;
  icon: React.FunctionComponent<SVGProps<SVGSVGElement>>;
}

export const navList: INavItem[] = [
  {
    title: 'Quests',
    link: ERoutes.QUESTS,
    icon: LicenseIcon,
  },
  {
    title: 'Location',
    link: ERoutes.LOCATION,
    icon: MapIcon,
  },
  {
    title: 'Advantages',
    link: ERoutes.ADVANTAGES,
    icon: MedalIcon,
  },
  {
    title: 'Shop',
    link: ERoutes.SHOP,
    icon: StoreIcon,
  },
  {
    title: 'Awards',
    link: ERoutes.AWARDS,
    icon: AwardIcon,
  },
  {
    title: 'Notifications',
    link: ERoutes.NOTIFICATIONS,
    icon: BellIcon,
  },
];
