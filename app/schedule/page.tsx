import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import SchedulePage from '@/components/pages/SchedulePage';

export default function Schedule() {
  return (
    <div className="app-layout">
      <Sidebar activePage="schedule" />
      <div className="main-content">
        <Header title="Schedule" subtitle="Your class schedule and calendar" />
        <main className="page-content">
          <SchedulePage />
        </main>
      </div>
    </div>
  );
}
