import { FC } from 'react';
import Image from 'next/image';
import { _teamList, Team, teamLogos } from '@/_mock/teams';
import { ERoutes } from '@/constants/routes';
import TeamInfo from '@/components/team-info';
import { navList } from '@/_mock/nav';
import NavItem from '@/components/nav-item';
import gearSrc from '@/assets/images/gear.svg';
import personSrc from '@/assets/images/person.svg';
import ImageLink from '@/components/image-link';

interface SidebarProps {
  teamData?: Team;
}

const Sidebar: FC<SidebarProps> = ({ teamData }) => {
  const { slug, title } = teamData || {};
  const teamLogoSrc = slug ? teamLogos[slug] : '';
  return (
    <div className="flex">
      <div className="flex flex-col gap-4 py-6 pl-6 pr-8 border-neutral border-r border-n">
        {_teamList.map(({ title, slug, logo }) => (
          <ImageLink key={slug} link={`/${slug}${ERoutes.QUESTS}`}>
            <Image src={logo} alt={title} />
          </ImageLink>
        ))}
      </div>

      <div className="flex flex-col gap-6 py-6 px-4 justify-between border-neutral border-r w-[243px]">
        <div className="flex flex-col gap-6">
          <div className="flex gap-2 items-center">
            {teamLogoSrc && <Image src={teamLogoSrc} alt="team-logo" />}
            <h1>{title}</h1>
          </div>

          {teamData && (
            <TeamInfo
              slug={teamData.slug}
              level={teamData.level}
              levelCount={teamData.levelCount}
              name={teamData.name}
              stat1={teamData.stat1}
              stat2={teamData.stat2}
              stat3={teamData.stat3}
            />
          )}

          <div className="flex flex-col gap-3">
            {navList.map(({ title, icon, link }) => (
              <NavItem key={link} title={title} icon={icon} link={link} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p>Account management</p>
          <Image src={gearSrc} alt="gear" />
          <Image src={personSrc} alt="person" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
