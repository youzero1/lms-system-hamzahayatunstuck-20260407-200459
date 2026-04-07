const courses = [
  {
    title: 'Data Structures & Algorithms',
    instructor: 'Dr. Sarah Chen',
    progress: 68,
    emoji: '🌳',
    color: '#eff6ff',
    tag: 'CS301',
    tagColor: '#3b82f6',
    tagBg: '#dbeafe',
    lessons: 24,
    completedLessons: 16,
    hours: 48,
    rating: 4.8,
    status: 'In Progress',
    statusClass: 'blue',
  },
  {
    title: 'Web Development',
    instructor: 'Prof. Mike Torres',
    progress: 45,
    emoji: '🌐',
    color: '#f0fdf4',
    tag: 'CS205',
    tagColor: '#16a34a',
    tagBg: '#dcfce7',
    lessons: 32,
    completedLessons: 14,
    hours: 64,
    rating: 4.6,
    status: 'In Progress',
    statusClass: 'blue',
  },
  {
    title: 'Algorithm Design',
    instructor: 'Dr. Emily Park',
    progress: 82,
    emoji: '⚡',
    color: '#faf5ff',
    tag: 'CS410',
    tagColor: '#9333ea',
    tagBg: '#f3e8ff',
    lessons: 20,
    completedLessons: 16,
    hours: 40,
    rating: 4.9,
    status: 'Almost Done',
    statusClass: 'green',
  },
  {
    title: 'Database Systems',
    instructor: 'Prof. James Liu',
    progress: 30,
    emoji: '🗄️',
    color: '#fff7ed',
    tag: 'CS320',
    tagColor: '#ea580c',
    tagBg: '#ffedd5',
    lessons: 28,
    completedLessons: 8,
    hours: 56,
    rating: 4.5,
    status: 'In Progress',
    statusClass: 'blue',
  },
  {
    title: 'Machine Learning',
    instructor: 'Dr. Rachel Kim',
    progress: 15,
    emoji: '🤖',
    color: '#fef9c3',
    tag: 'CS450',
    tagColor: '#ca8a04',
    tagBg: '#fef9c3',
    lessons: 36,
    completedLessons: 5,
    hours: 72,
    rating: 4.7,
    status: 'Just Started',
    statusClass: 'orange',
  },
  {
    title: 'Operating Systems',
    instructor: 'Prof. David Brown',
    progress: 100,
    emoji: '💻',
    color: '#ecfdf5',
    tag: 'CS340',
    tagColor: '#059669',
    tagBg: '#d1fae5',
    lessons: 22,
    completedLessons: 22,
    hours: 44,
    rating: 4.4,
    status: 'Completed',
    statusClass: 'green',
  },
];

const lessonData = [
  { title: 'Introduction to Binary Trees', duration: '45 min', type: 'video' as const, completed: true },
  { title: 'Tree Traversal Methods', duration: '60 min', type: 'video' as const, completed: true },
  { title: 'AVL Trees', duration: '50 min', type: 'video' as const, completed: true },
  { title: 'Heaps and Priority Queues', duration: '55 min', type: 'video' as const, completed: false },
  { title: 'Quiz: Tree Structures', duration: '20 min', type: 'quiz' as const, completed: false },
  { title: 'Graph Fundamentals', duration: '65 min', type: 'reading' as const, completed: false },
  { title: 'BFS and DFS', duration: '70 min', type: 'video' as const, completed: false },
];

export default function CoursesPage() {
  return (
    <div>
      <div className="page-header">
        <div>
          <div className="page-title">My Courses</div>
          <div className="page-subtitle">6 courses enrolled this semester</div>
        </div>
        <div style={{display: 'flex', gap: '12px'}}>
          <button className="btn btn-secondary btn-sm">Filter</button>
          <button className="btn btn-primary btn-sm">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Browse Catalog
          </button>
        </div>
      </div>

      <div className="courses-grid" style={{marginBottom: '32px'}}>
        {courses.map((course, i) => (
          <div key={i} className="course-card">
            <div className="course-banner" style={{background: course.color}}>
              <span style={{fontSize: '48px'}}>{course.emoji}</span>
            </div>
            <div className="course-body">
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px'}}>
                <span className="course-tag" style={{background: course.tagBg, color: course.tagColor}}>{course.tag}</span>
                <span className={`status-badge ${course.statusClass}`}>{course.status}</span>
              </div>
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
              <div className="course-meta">
                <div className="course-meta-item">
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  {course.completedLessons}/{course.lessons} lessons
                </div>
                <div className="course-meta-item">
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  {course.rating}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Course Detail Card */}
      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-title">Data Structures & Algorithms — Course Content</div>
            <div className="card-subtitle">Week 4: Tree Structures and Graph Theory</div>
          </div>
          <button className="btn btn-primary btn-sm">Resume Course</button>
        </div>
        <div className="lesson-list">
          {lessonData.map((lesson, i) => (
            <div key={i} className="lesson-item">
              <div className={`lesson-number ${lesson.completed ? 'completed' : ''}`}>
                {lesson.completed ? '✓' : i + 1}
              </div>
              <div className="lesson-info">
                <div className="lesson-title">{lesson.title}</div>
                <div className="lesson-duration">{lesson.duration}</div>
              </div>
              <span className={`lesson-type ${lesson.type}`}>{lesson.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
