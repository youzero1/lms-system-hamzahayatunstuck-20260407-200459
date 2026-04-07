const gradeData = [
  {
    course: 'Data Structures & Algorithms',
    code: 'CS301',
    grade: 'A',
    score: 94,
    gradeClass: 'a',
    assignments: '8/8',
    midterm: '91/100',
    quizAvg: '95%',
    trend: 'up',
  },
  {
    course: 'Web Development',
    code: 'CS205',
    grade: 'B+',
    score: 88,
    gradeClass: 'b',
    assignments: '7/8',
    midterm: '85/100',
    quizAvg: '90%',
    trend: 'up',
  },
  {
    course: 'Algorithm Design',
    code: 'CS410',
    grade: 'A+',
    score: 98,
    gradeClass: 'a',
    assignments: '8/8',
    midterm: '97/100',
    quizAvg: '99%',
    trend: 'up',
  },
  {
    course: 'Database Systems',
    code: 'CS320',
    grade: 'B',
    score: 83,
    gradeClass: 'b',
    assignments: '6/8',
    midterm: '80/100',
    quizAvg: '85%',
    trend: 'stable',
  },
  {
    course: 'Machine Learning',
    code: 'CS450',
    grade: 'A-',
    score: 91,
    gradeClass: 'a',
    assignments: '5/5',
    midterm: '89/100',
    quizAvg: '93%',
    trend: 'up',
  },
  {
    course: 'Operating Systems',
    code: 'CS340',
    grade: 'B+',
    score: 87,
    gradeClass: 'b',
    assignments: '8/8',
    midterm: '84/100',
    quizAvg: '88%',
    trend: 'down',
  },
];

export default function GradesPage() {
  const gpa = 3.8;

  return (
    <div>
      <div className="page-header">
        <div>
          <div className="page-title">Academic Grades</div>
          <div className="page-subtitle">Spring 2025 Semester</div>
        </div>
        <button className="btn btn-secondary btn-sm">Download Transcript</button>
      </div>

      {/* GPA Summary */}
      <div className="stats-grid" style={{marginBottom: '28px'}}>
        <div className="stat-card">
          <div className="stat-icon purple">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <div className="stat-info">
            <div className="stat-label">Current GPA</div>
            <div className="stat-value">{gpa}</div>
            <div className="stat-change positive">&#8593; 0.2 from last sem</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon green">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="stat-info">
            <div className="stat-label">Highest Grade</div>
            <div className="stat-value">A+</div>
            <div className="stat-change positive">Algorithm Design</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon blue">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div className="stat-info">
            <div className="stat-label">Average Score</div>
            <div className="stat-value">90%</div>
            <div className="stat-change positive">Across all courses</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon orange">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div className="stat-info">
            <div className="stat-label">Credits Earned</div>
            <div className="stat-value">18</div>
            <div className="stat-change positive">This semester</div>
          </div>
        </div>
      </div>

      {/* Grades Table */}
      <div className="card" style={{marginBottom: '24px'}}>
        <div className="card-header">
          <div className="card-title">Course Grades</div>
          <span className="status-badge green">On Track for Dean&apos;s List</span>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Code</th>
                <th>Assignments</th>
                <th>Midterm</th>
                <th>Quiz Avg</th>
                <th>Score</th>
                <th>Grade</th>
                <th>Trend</th>
              </tr>
            </thead>
            <tbody>
              {gradeData.map((g, i) => (
                <tr key={i}>
                  <td style={{fontWeight: 500}}>{g.course}</td>
                  <td>
                    <span className="status-badge gray">{g.code}</span>
                  </td>
                  <td style={{fontSize: '13px'}}>{g.assignments}</td>
                  <td style={{fontSize: '13px'}}>{g.midterm}</td>
                  <td style={{fontSize: '13px'}}>{g.quizAvg}</td>
                  <td>
                    <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                      <div style={{flex: 1, height: '6px', background: 'var(--bg)', borderRadius: '3px', minWidth: '60px'}}>
                        <div style={{height: '100%', borderRadius: '3px', background: 'linear-gradient(90deg, var(--primary), var(--primary-light))', width: `${g.score}%`}}></div>
                      </div>
                      <span style={{fontSize: '13px', fontWeight: 600}}>{g.score}%</span>
                    </div>
                  </td>
                  <td>
                    <span className={`grade-score ${g.gradeClass}`} style={{fontSize: '18px', fontWeight: 700}}>{g.grade}</span>
                  </td>
                  <td>
                    {g.trend === 'up' && <span style={{color: 'var(--success)', fontSize: '18px'}}>&#8593;</span>}
                    {g.trend === 'down' && <span style={{color: 'var(--danger)', fontSize: '18px'}}>&#8595;</span>}
                    {g.trend === 'stable' && <span style={{color: 'var(--text-muted)', fontSize: '18px'}}>&#8212;</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grade Distribution */}
      <div className="card">
        <div className="card-header">
          <div className="card-title">Grade Distribution</div>
          <div className="card-subtitle">Visual breakdown of your performance</div>
        </div>
        <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
          {gradeData.map((g, i) => (
            <div key={i} style={{flex: '1', minWidth: '140px', padding: '16px', background: 'var(--bg)', borderRadius: 'var(--radius)', textAlign: 'center'}}>
              <div className={`grade-score ${g.gradeClass}`} style={{fontSize: '32px', marginBottom: '4px'}}>{g.grade}</div>
              <div style={{fontSize: '12px', color: 'var(--text-muted)', fontWeight: 500}}>{g.code}</div>
              <div style={{fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px'}}>{g.score}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
