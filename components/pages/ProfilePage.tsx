const achievements = [
  { icon: '🏆', name: 'Top Performer', desc: 'GPA above 3.8', locked: false },
  { icon: '⚡', name: 'Quick Learner', desc: 'Completed 5 lessons in a day', locked: false },
  { icon: '🎯', name: 'Perfect Score', desc: 'Scored 100% on a quiz', locked: false },
  { icon: '📚', name: 'Bookworm', desc: 'Read 50 articles', locked: false },
  { icon: '🌟', name: 'Star Student', desc: 'Top of the class', locked: true },
  { icon: '🔥', name: 'On Fire', desc: '30-day study streak', locked: true },
  { icon: '💎', name: 'Diamond Scholar', desc: 'Complete 10 courses', locked: true },
  { icon: '🚀', name: 'Rocket Launcher', desc: 'Submit 50 assignments', locked: true },
];

export default function ProfilePage() {
  return (
    <div>
      {/* Profile Header */}
      <div className="card" style={{marginBottom: '24px'}}>
        <div className="profile-header">
          <div className="profile-avatar">AJ</div>
          <div style={{flex: 1}}>
            <div className="profile-name">Alex Johnson</div>
            <div className="profile-role">Computer Science, Year 3 &bull; Student ID: CS2021045</div>
            <div className="profile-stats">
              <div className="profile-stat">
                <div className="profile-stat-value">6</div>
                <div className="profile-stat-label">Courses</div>
              </div>
              <div className="profile-stat">
                <div className="profile-stat-value">3.8</div>
                <div className="profile-stat-label">GPA</div>
              </div>
              <div className="profile-stat">
                <div className="profile-stat-value">24</div>
                <div className="profile-stat-label">Assignments</div>
              </div>
              <div className="profile-stat">
                <div className="profile-stat-value">142h</div>
                <div className="profile-stat-label">Study Hours</div>
              </div>
            </div>
          </div>
          <button className="btn btn-secondary btn-sm">Edit Profile</button>
        </div>
      </div>

      <div className="grid-2">
        {/* Personal Info */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">Personal Information</div>
            <button className="btn btn-ghost btn-sm">Edit</button>
          </div>
          <div className="form-group">
            <div className="form-row">
              <div>
                <label className="form-label">First Name</label>
                <input className="form-input" type="text" defaultValue="Alex" />
              </div>
              <div>
                <label className="form-label">Last Name</label>
                <input className="form-input" type="text" defaultValue="Johnson" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input className="form-input" type="email" defaultValue="alex.johnson@university.edu" />
          </div>
          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input className="form-input" type="tel" defaultValue="+1 (555) 234-5678" />
          </div>
          <div className="form-group">
            <label className="form-label">Major</label>
            <select className="form-select">
              <option>Computer Science</option>
              <option>Software Engineering</option>
              <option>Information Technology</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Bio</label>
            <textarea className="form-textarea" defaultValue="Passionate about algorithms and machine learning. Love building innovative solutions to real-world problems."></textarea>
          </div>
          <button className="btn btn-primary">Save Changes</button>
        </div>

        {/* Settings + Achievements */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
          {/* Preferences */}
          <div className="card">
            <div className="card-header">
              <div className="card-title">Preferences</div>
            </div>
            <div className="form-group">
              <label className="form-label">Language</label>
              <select className="form-select">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Timezone</label>
              <select className="form-select">
                <option>UTC-5 (Eastern Time)</option>
                <option>UTC-8 (Pacific Time)</option>
                <option>UTC+0 (GMT)</option>
              </select>
            </div>
            <div className="form-group" style={{marginBottom: 0}}>
              <label className="form-label">Notification Preferences</label>
              <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px'}}>
                {['Email notifications', 'Assignment reminders', 'Grade updates', 'Announcements'].map((pref, i) => (
                  <label key={i} style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer'}}>
                    <input type="checkbox" defaultChecked={i < 3} style={{width: '16px', height: '16px', cursor: 'pointer'}} />
                    {pref}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="card">
            <div className="card-header">
              <div className="card-title">Security</div>
            </div>
            <div className="form-group">
              <label className="form-label">Current Password</label>
              <input className="form-input" type="password" placeholder="Enter current password" />
            </div>
            <div className="form-group">
              <label className="form-label">New Password</label>
              <input className="form-input" type="password" placeholder="Enter new password" />
            </div>
            <button className="btn btn-primary btn-sm">Update Password</button>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="card" style={{marginTop: '24px'}}>
        <div className="card-header">
          <div className="card-title">Achievements</div>
          <div className="card-subtitle">4 of 8 earned</div>
        </div>
        <div className="achievement-grid">
          {achievements.map((a, i) => (
            <div key={i} className={`achievement-item${a.locked ? ' locked' : ''}`}>
              <div className="achievement-icon">{a.icon}</div>
              <div className="achievement-name">{a.name}</div>
              <div className="achievement-desc">{a.desc}</div>
              {a.locked && <div style={{fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px'}}>&#128274; Locked</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
