import teamGoSrc from '@/assets/images/logos/team-go.svg';
import team2Src from '@/assets/images/logos/team-2.svg';
import team3Src from '@/assets/images/logos/team-3.svg';
import team4Src from '@/assets/images/logos/team-4.svg';

export interface Team {
  slug: string;
  title: string;
  name: string;
  level: number;
  levelCount: number;
  stat1: string;
  stat2: string;
  stat3: string;
}

export interface TeamListItem {
  title: string;
  slug: string;
  logo: string;
}

const enum TEAMS {
  TEAM1 = 'team-go',
  TEAM2 = 'team-2',
  TEAM3 = 'team-3',
  TEAM4 = 'team-4',
}

export const teamLogos: Record<string, string> = {
  [TEAMS.TEAM1]: teamGoSrc,
  [TEAMS.TEAM2]: team2Src,
  [TEAMS.TEAM3]: team3Src,
  [TEAMS.TEAM4]: team4Src,
};

export const _teamList: TeamListItem[] = [
  {
    title: 'Team GO',
    slug: TEAMS.TEAM1,
    logo: teamGoSrc,
  },
  {
    title: 'Team 2',
    slug: TEAMS.TEAM2,
    logo: team2Src,
  },
  {
    title: 'Team 3',
    slug: TEAMS.TEAM3,
    logo: team3Src,
  },
  {
    title: 'Team 4',
    slug: TEAMS.TEAM4,
    logo: team4Src,
  },
];

export const _teamDetailList: Team[] = [
  {
    title: 'Team GO',
    slug: TEAMS.TEAM1,
    name: 'Pseudo',
    level: 7,
    levelCount: 200,
    stat1: '12,897',
    stat2: '322',
    stat3: '2/5',
  },
  {
    title: 'Team 1',
    slug: TEAMS.TEAM2,
    name: 'Pseudo 2',
    level: 3,
    levelCount: 400,
    stat1: '12,897',
    stat2: '322',
    stat3: '2/5',
  },
  {
    title: 'Team 2',
    slug: TEAMS.TEAM3,
    name: 'Pseudo 3',
    level: 7,
    levelCount: 233,
    stat1: '12,897',
    stat2: '322',
    stat3: '2/5',
  },
  {
    title: 'Team 3',
    slug: TEAMS.TEAM4,
    name: 'Pseudo 4',
    level: 12,
    levelCount: 900,
    stat1: '12,897',
    stat2: '322',
    stat3: '2/5',
  },
];
