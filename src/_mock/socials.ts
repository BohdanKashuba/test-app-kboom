import twitterSrc from '@/assets/images/socials/twitter.svg';
import twitchSrc from '@/assets/images/socials/twitch.svg';
import tiktokSrc from '@/assets/images/socials/tiktok.svg';
import youtubeSrc from '@/assets/images/socials/youtube.svg';
import instagramSrc from '@/assets/images/socials/instagram.svg';
import facebookSrc from '@/assets/images/socials/facebook.svg';
import discordSrc from '@/assets/images/socials/discord.svg';

interface ISocial {
  link: string;
  icon: string;
  alt: string;
}

export const socialList: ISocial[] = [
  {
    link: 'https://twitter.com/',
    icon: twitterSrc,
    alt: 'twitter',
  },
  {
    link: 'https://twitch.com/',
    icon: twitchSrc,
    alt: 'twitch',
  },
  {
    link: 'https://tiktok.com/',
    icon: tiktokSrc,
    alt: 'tiktok',
  },
  {
    link: 'https://youtube.com/',
    icon: youtubeSrc,
    alt: 'youtube',
  },
  {
    link: 'https://instagram.com/',
    icon: instagramSrc,
    alt: 'instagram',
  },
  {
    link: 'https://facebook.com/',
    icon: facebookSrc,
    alt: 'facebook',
  },
  {
    link: 'https://discord.com/',
    icon: discordSrc,
    alt: 'discord',
  },
];
