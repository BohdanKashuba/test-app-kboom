import React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import DashboardLayout from '@/layouts/dashboard';
import { BASE_URL, ERoutes } from '@/constants';
import { Team } from '@/_mock/teams';
import axios from '../../../utils/axios';

interface QuestsPageProps {
  teamData: Team;
}

QuestsPage.getLayout = (page: React.ReactElement) => <DashboardLayout {...page.props}> {page} </DashboardLayout>;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get(`${BASE_URL}/api/team`);
  const teams: Team[] = response.data;

  const paths = teams.map((team) => ({
    params: { team: team.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const response = await axios.get(`${BASE_URL}/api/team`, {
    params,
  });
  const teamData: Team = response.data;

  if (!teamData) {
    return { notFound: true };
  }

  return {
    props: {
      teamData,
    },
  };
};

export default function QuestsPage(props: QuestsPageProps) {
  return <div>{ERoutes.QUESTS}</div>;
}
