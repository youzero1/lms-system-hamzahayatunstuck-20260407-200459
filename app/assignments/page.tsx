import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import AssignmentsPage from '@/components/pages/AssignmentsPage';

export default function Assignments() {
  return (
    <div className="app-layout">
      <Sidebar activePage="assignments" />
      <div className="main-content">
        <Header title="Assignments" subtitle="Track your assignments and submissions" />
        <main className="page-content">
          <AssignmentsPage />
        </main>
      </div>
    </div>
  );
}
