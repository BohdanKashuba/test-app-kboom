import React from 'react';
import Header from '@/components/header';
import Sidebar from '@/sections/sidebar';
import { Team } from '@/_mock/teams';

interface DashboardLayoutProps {
  children: React.ReactNode;
  teamData?: Team;
}

export default function DashboardLayout({ children, teamData }: DashboardLayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow">
        <Sidebar teamData={teamData} />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
