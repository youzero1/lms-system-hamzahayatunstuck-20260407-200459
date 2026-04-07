import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import AnnouncementsPage from '@/components/pages/AnnouncementsPage';

export default function Announcements() {
  return (
    <div className="app-layout">
      <Sidebar activePage="announcements" />
      <div className="main-content">
        <Header title="Announcements" subtitle="Stay updated with the latest news" />
        <main className="page-content">
          <AnnouncementsPage />
        </main>
      </div>
    </div>
  );
}
