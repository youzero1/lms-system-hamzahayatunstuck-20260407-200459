import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import ProfilePage from '@/components/pages/ProfilePage';

export default function Profile() {
  return (
    <div className="app-layout">
      <Sidebar activePage="profile" />
      <div className="main-content">
        <Header title="Profile" subtitle="Manage your account and preferences" />
        <main className="page-content">
          <ProfilePage />
        </main>
      </div>
    </div>
  );
}
