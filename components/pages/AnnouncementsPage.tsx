const announcements = [
  {
    icon: '📢',
    bg: '#eff6ff',
    title: 'Midterm Exam Schedule Released',
    body: 'The midterm examination schedule for all CS courses has been finalized. Please check your individual course pages for specific dates and room assignments. Make sure to bring your student ID.',
    time: '2 hours ago',
    author: 'Academic Office',
    important: true,
  },
  {
    icon: '🎓',
    bg: '#f0fdf4',
    title: 'Guest Lecture: AI in Industry',
    body: 'We are pleased to announce a special guest lecture by Dr. Jennifer Walsh from Google Research on the topic of "Large Language Models in Production". The lecture will be held on January 20th at 3:00 PM in the Main Auditorium.',
    time: '5 hours ago',
    author: 'CS Department',
    important: false,
  },
  {
    icon: '⚠️',
    bg: '#fff7ed',
    title: 'System Maintenance Scheduled',
    body: 'The student portal will be undergoing scheduled maintenance on Saturday, January 18th from 2:00 AM to 6:00 AM. During this time, submission of assignments will not be available. Please plan accordingly.',
    time: 'Yesterday',
    author: 'IT Department',
    important: true,
  },
  {
    icon: '📚',
    bg: '#faf5ff',
    title: 'New Study Resources Available',
    body: 'Additional study materials for Data Structures & Algorithms have been uploaded to the course portal. These include practice problems, solution walkthroughs, and video tutorials for the upcoming midterm.',
    time: '2 days ago',
    author: 'Dr. Sarah Chen',
    important: false,
  },
  {
    icon: '🏆',
    bg: '#fef9c3',
    title: 'Hackathon Registration Open',
    body: 'Registration for the Annual CS Department Hackathon is now open! Form a team of 2-4 students and compete for prizes worth $5,000. This year\'s theme is "Sustainable Technology". Register before January 25th.',
    time: '3 days ago',
    author: 'Student Affairs',
    important: false,
  },
  {
    icon: '📋',
    bg: '#ecfdf5',
    title: 'Course Registration for Fall 2025',
    body: 'Course registration for Fall 2025 semester will begin on February 1st. Academic advisors will be available for consultation from January 20th onwards. Please review the course catalog beforehand.',
    time: '1 week ago',
    author: 'Registrar Office',
    important: false,
  },
];

export default function AnnouncementsPage() {
  return (
    <div>
      <div className="page-header">
        <div>
          <div className="page-title">Announcements</div>
          <div className="page-subtitle">{announcements.length} announcements &bull; 2 important</div>
        </div>
        <div style={{display: 'flex', gap: '8px'}}>
          <button className="btn btn-secondary btn-sm">Mark All Read</button>
          <button className="btn btn-secondary btn-sm">Filter</button>
        </div>
      </div>

      {/* Important announcements */}
      <div className="card" style={{marginBottom: '24px', borderLeft: '4px solid var(--danger)'}}>
        <div className="card-header">
          <div className="card-title" style={{color: 'var(--danger)'}}>&#9888; Important Announcements</div>
        </div>
        <div className="activity-list">
          {announcements.filter(a => a.important).map((ann, i) => (
            <div key={i} className="announcement-item">
              <div className="announcement-icon" style={{background: ann.bg}}>{ann.icon}</div>
              <div style={{flex: 1}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                  <div className="announcement-title">{ann.title}</div>
                  <span className="status-badge red" style={{fontSize: '11px', marginLeft: '12px', flexShrink: 0}}>Important</span>
                </div>
                <div className="announcement-body">{ann.body}</div>
                <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
                  <div className="announcement-time">{ann.time}</div>
                  <div className="announcement-time">By {ann.author}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All announcements */}
      <div className="card">
        <div className="card-header">
          <div className="card-title">All Announcements</div>
        </div>
        <div className="activity-list">
          {announcements.map((ann, i) => (
            <div key={i} className="announcement-item">
              <div className="announcement-icon" style={{background: ann.bg}}>{ann.icon}</div>
              <div style={{flex: 1}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                  <div className="announcement-title">{ann.title}</div>
                  {ann.important && (
                    <span className="status-badge red" style={{fontSize: '11px', marginLeft: '12px', flexShrink: 0}}>Important</span>
                  )}
                </div>
                <div className="announcement-body">{ann.body}</div>
                <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
                  <div className="announcement-time">{ann.time}</div>
                  <div className="announcement-time">By {ann.author}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
