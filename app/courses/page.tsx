import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import CoursesPage from '@/components/pages/CoursesPage';

export default function Courses() {
  return (
    <div className="app-layout">
      <Sidebar activePage="courses" />
      <div className="main-content">
        <Header title="My Courses" subtitle="Browse and manage your enrolled courses" />
        <main className="page-content">
          <CoursesPage />
        </main>
      </div>
    </div>
  );
}
