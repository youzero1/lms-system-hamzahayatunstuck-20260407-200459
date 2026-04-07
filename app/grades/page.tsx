import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import GradesPage from '@/components/pages/GradesPage';

export default function Grades() {
  return (
    <div className="app-layout">
      <Sidebar activePage="grades" />
      <div className="main-content">
        <Header title="Grades" subtitle="View your academic performance" />
        <main className="page-content">
          <GradesPage />
        </main>
      </div>
    </div>
  );
}
