import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import DashboardPage from '@/components/pages/DashboardPage';

export default function Home() {
  return (
    <div className="app-layout">
      <Sidebar activePage="dashboard" />
      <div className="main-content">
        <Header title="Dashboard" subtitle="Welcome back, Alex Johnson!" />
        <main className="page-content">
          <DashboardPage />
        </main>
      </div>
    </div>
  );
}
