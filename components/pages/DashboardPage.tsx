import Link from 'next/link';

const recentActivity = [
  { icon: '📚', text: <><strong>Submitted</strong> Assignment 3 for Data Structures</>, time: '2 hours ago', bg: '#eff6ff' },
  { icon: '🎯', text: <><strong>Completed</strong> Quiz 2 in Web Development - Score: 92%</>, time: '5 hours ago', bg: '#f0fdf4' },
  { icon: '📖', text: <><strong>Started</strong> Lesson 7: Binary Trees</>, time: 'Yesterday', bg: '#faf5ff' },
  { icon: '💬', text: <><strong>Replied</strong> to a discussion in Algorithm Design</>, time: 'Yesterday', bg: '#fff7ed' },
  { icon: '🏆', text: <><strong>Earned</strong> &quot;Quick Learner&quot; achievement badge</>, time: '2 days ago', bg: '#fef9c3' },
];

const upcomingItems = [
  { day: '15', month: 'Jan', title: 'Data Structures Midterm', course: 'CS301', time: '10:00 AM - 12:00 PM', type: 'exam' },
  { day: '17', month: 'Jan', title: 'Web Dev Assignment Due', course: 'CS205', time: '11:59 PM', type: 'assignment' },
  { day: '19', month: 'Jan', title: 'Algorithm Design Quiz', course: 'CS410', time: '2:00 PM - 3:00 PM', type: 'quiz' },
  { day: '22', month: 'Jan', title: 'Group Project Presentation', course: 'CS350', time: '9:00 AM - 10:30 AM', type: 'presentation' },
];

const enrolledCourses = [
  { title: 'Data Structures & Algorithms', instructor: 'Dr. Sarah Chen', progress: 68, emoji: '🌳', color: '#eff6ff', tag: 'CS301', tagColor: '#3b82f6', tagBg: '#dbeafe' },
  { title: 'Web Development', instructor: 'Prof. Mike Torres', progress: 45, emoji: '🌐', color: '#f0fdf4', tag: 'CS205', tagColor: '#16a34a', tagBg: '#dcfce7' },
  { title: 'Algorithm Design', instructor: 'Dr. Emily Park', progress: 82, emoji: '⚡', color: '#faf5ff', tag: 'CS410', tagColor: '#9333ea', tagBg: '#f3e8ff' },
];

export default function DashboardPage() {
  return (
    <div>
      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div className="stat-info">
            <div className="stat-label">Enrolled Courses</div>
            <div className="stat-value">6</div>
            <div className="stat-change positive">↑ 2 this semester</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon green">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="stat-info">
            <div className="stat-label">Assignments Done</div>
            <div className="stat-value">24</div>
            <div className="stat-change positive">↑ 3 this week</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon purple">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <div className="stat-info">
            <div className="stat-label">Overall GPA</div>
            <div className="stat-value">3.8</div>
            <div className="stat-change positive">↑ 0.2 from last sem</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon orange">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="stat-info">
            <div className="stat-label">Study Hours</div>
            <div className="stat-value">142</div>
            <div className="stat-change positive">↑ 18 this month</div>
          </div>
        </div>
      </div>

      {/* Recent Courses */}
      <div className="card" style={{marginBottom: '24px'}}>
        <div className="card-header">
          <div>
            <div className="card-title">Continue Learning</div>
            <div className="card-subtitle">Pick up where you left off</div>
          </div>
          <Link href="/courses" className="btn btn-secondary btn-sm">View All Courses</Link>
        </div>
        <div className="courses-grid">
          {enrolledCourses.map((course, i) => (
            <Link href="/courses" key={i} style={{textDecoration: 'none'}}>
              <div className="course-card">
                <div className="course-banner" style={{background: course.color}}>
                  <span style={{fontSize: '48px'}}>{course.emoji}</span>
                </div>
                <div className="course-body">
                  <span className="course-tag" style={{background: course.tagBg, color: course.tagColor}}>{course.tag}</span>
                  <div className="course-title">{course.title}</div>
                  <div className="course-instructor">{course.instructor}</div>
                  <div className="progress-bar-container">
                    <div className="progress-label">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: `${course.progress}%`}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid-2">
        {/* Recent Activity */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">Recent Activity</div>
              <div className="card-subtitle">Your latest actions</div>
            </div>
          </div>
          <div className="activity-list">
            {recentActivity.map((item, i) => (
              <div key={i} className="activity-item">
                <div className="activity-icon" style={{background: item.bg}}>{item.icon}</div>
                <div className="activity-text">
                  <div style={{fontSize: '14px', color: 'var(--text)'}}>{item.text}</div>
                  <div className="activity-time">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">Upcoming Deadlines</div>
              <div className="card-subtitle">Don&apos;t miss these dates</div>
            </div>
            <Link href="/schedule" className="btn btn-ghost btn-sm">View Calendar</Link>
          </div>
          <div className="upcoming-list">
            {upcomingItems.map((item, i) => (
              <div key={i} className="upcoming-item">
                <div className="upcoming-date">
                  <div className="day">{item.day}</div>
                  <div className="month">{item.month}</div>
                </div>
                <div className="upcoming-info">
                  <div className="upcoming-title">{item.title}</div>
                  <div className="upcoming-course">{item.course}</div>
                </div>
                <div className="upcoming-time">
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
