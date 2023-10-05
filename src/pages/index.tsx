import React from 'react';
import DashboardLayout from '@/layouts/dashboard';

HomePage.getLayout = (page: React.ReactElement) => <DashboardLayout> {page} </DashboardLayout>;

export default function HomePage() {
  return <div>home</div>;
}
