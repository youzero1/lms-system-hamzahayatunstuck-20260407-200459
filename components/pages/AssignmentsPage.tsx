const assignments = [
  {
    title: 'Binary Tree Implementation',
    course: 'Data Structures (CS301)',
    dueDate: 'Jan 17, 2025',
    submitted: 'Jan 15, 2025',
    grade: '95/100',
    status: 'Graded',
    statusClass: 'green',
    type: 'Programming',
  },
  {
    title: 'Responsive Portfolio Website',
    course: 'Web Development (CS205)',
    dueDate: 'Jan 20, 2025',
    submitted: null,
    grade: null,
    status: 'Due Soon',
    statusClass: 'orange',
    type: 'Project',
  },
  {
    title: 'Sorting Algorithm Analysis',
    course: 'Algorithm Design (CS410)',
    dueDate: 'Jan 22, 2025',
    submitted: null,
    grade: null,
    status: 'Not Started',
    statusClass: 'gray',
    type: 'Research',
  },
  {
    title: 'ER Diagram Design',
    course: 'Database Systems (CS320)',
    dueDate: 'Jan 18, 2025',
    submitted: 'Jan 17, 2025',
    grade: 'Pending',
    status: 'Submitted',
    statusClass: 'blue',
    type: 'Design',
  },
  {
    title: 'Linear Regression Model',
    course: 'Machine Learning (CS450)',
    dueDate: 'Jan 25, 2025',
    submitted: null,
    grade: null,
    status: 'In Progress',
    statusClass: 'blue',
    type: 'Programming',
  },
  {
    title: 'Process Scheduler Report',
    course: 'Operating Systems (CS340)',
    dueDate: 'Dec 15, 2024',
    submitted: 'Dec 14, 2024',
    grade: '88/100',
    status: 'Graded',
    statusClass: 'green',
    type: 'Report',
  },
  {
    title: 'Hash Table Implementation',
    course: 'Data Structures (CS301)',
    dueDate: 'Jan 10, 2025',
    submitted: 'Jan 9, 2025',
    grade: '90/100',
    status: 'Graded',
    statusClass: 'green',
    type: 'Programming',
  },
  {
    title: 'React Components Project',
    course: 'Web Development (CS205)',
    dueDate: 'Jan 14, 2025',
    submitted: 'Jan 13, 2025',
    grade: '85/100',
    status: 'Graded',
    statusClass: 'green',
    type: 'Project',
  },
];

export default function AssignmentsPage() {
  const pending = assignments.filter(a => !a.submitted);
  const submitted = assignments.filter(a => a.submitted);

  return (
    <div>
      <div className="page-header">
        <div>
          <div className="page-title">Assignments</div>
          <div className="page-subtitle">{pending.length} pending · {submitted.length} submitted</div>
        </div>
        <button className="btn btn-primary btn-sm">Submit Assignment</button>
      </div>

      {/* Summary Cards */}
      <div className="stats-grid" style={{marginBottom: '28px'}}>
        <div className="stat-card">
          <div className="stat-icon orange">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="stat-info">
            <div className="stat-label">Pending</div>
            <div className="stat-value">{pending.length}</div>
            <div className="stat-change negative">Due soon</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon blue">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="stat-info">
            <div className="stat-label">Submitted</div>
            <div className="stat-value">{submitted.length}</div>
            <div className="stat-change positive">Awaiting grades</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon green">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="stat-info">
            <div className="stat-label">Graded</div>
            <div className="stat-value">{assignments.filter(a => a.status === 'Graded').length}</div>
            <div className="stat-change positive">Avg: 89.5%</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon purple">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <div className="stat-info">
            <div className="stat-label">Completion Rate</div>
            <div className="stat-value">91%</div>
            <div className="stat-change positive">This semester</div>
          </div>
        </div>
      </div>

      {/* Assignments Table */}
      <div className="card">
        <div className="card-header">
          <div className="card-title">All Assignments</div>
          <div style={{display: 'flex', gap: '8px'}}>
            <button className="btn btn-secondary btn-sm">Filter by Course</button>
            <button className="btn btn-secondary btn-sm">Sort by Due Date</button>
          </div>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Assignment</th>
                <th>Course</th>
                <th>Type</th>
                <th>Due Date</th>
                <th>Submitted</th>
                <th>Grade</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((a, i) => (
                <tr key={i}>
                  <td style={{fontWeight: 500}}>{a.title}</td>
                  <td style={{color: 'var(--text-muted)', fontSize: '13px'}}>{a.course}</td>
                  <td>
                    <span className="status-badge gray" style={{fontSize: '11px'}}>{a.type}</span>
                  </td>
                  <td style={{fontSize: '13px'}}>{a.dueDate}</td>
                  <td style={{fontSize: '13px', color: 'var(--text-muted)'}}>{a.submitted || '—'}</td>
                  <td style={{fontWeight: 600, color: a.grade && a.grade !== 'Pending' ? 'var(--success)' : 'var(--text-muted)'}}>
                    {a.grade || '—'}
                  </td>
                  <td>
                    <span className={`status-badge ${a.statusClass}`}>{a.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
