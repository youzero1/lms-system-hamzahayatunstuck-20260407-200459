const weeklySchedule = [
  {
    day: 'Monday',
    classes: [
      { time: '9:00 AM', course: 'Data Structures & Algorithms', room: 'CS Building 201', duration: '1h 30m', color: '#dbeafe', textColor: '#2563eb' },
      { time: '2:00 PM', course: 'Web Development Lab', room: 'Lab 105', duration: '2h', color: '#dcfce7', textColor: '#16a34a' },
    ],
  },
  {
    day: 'Tuesday',
    classes: [
      { time: '10:00 AM', course: 'Algorithm Design', room: 'CS Building 305', duration: '1h 30m', color: '#f3e8ff', textColor: '#9333ea' },
      { time: '3:00 PM', course: 'Database Systems', room: 'CS Building 102', duration: '1h 30m', color: '#ffedd5', textColor: '#ea580c' },
    ],
  },
  {
    day: 'Wednesday',
    classes: [
      { time: '9:00 AM', course: 'Data Structures & Algorithms', room: 'CS Building 201', duration: '1h 30m', color: '#dbeafe', textColor: '#2563eb' },
      { time: '11:00 AM', course: 'Machine Learning', room: 'AI Lab 201', duration: '2h', color: '#fef9c3', textColor: '#ca8a04' },
    ],
  },
  {
    day: 'Thursday',
    classes: [
      { time: '10:00 AM', course: 'Algorithm Design', room: 'CS Building 305', duration: '1h 30m', color: '#f3e8ff', textColor: '#9333ea' },
      { time: '1:00 PM', course: 'Web Development', room: 'CS Building 210', duration: '1h 30m', color: '#dcfce7', textColor: '#16a34a' },
      { time: '3:30 PM', course: 'Database Systems', room: 'CS Building 102', duration: '1h', color: '#ffedd5', textColor: '#ea580c' },
    ],
  },
  {
    day: 'Friday',
    classes: [
      { time: '9:00 AM', course: 'Machine Learning', room: 'AI Lab 201', duration: '1h 30m', color: '#fef9c3', textColor: '#ca8a04' },
      { time: '11:00 AM', course: 'Data Structures & Algorithms', room: 'CS Building 201', duration: '1h', color: '#dbeafe', textColor: '#2563eb' },
    ],
  },
];

const upcomingExams = [
  { date: 'Jan 15', course: 'Data Structures Midterm', room: 'Exam Hall A', time: '10:00 AM - 12:00 PM', type: 'Midterm' },
  { date: 'Jan 22', course: 'Algorithm Design Quiz 3', room: 'CS Building 305', time: '2:00 PM - 3:00 PM', type: 'Quiz' },
  { date: 'Feb 5', course: 'Web Development Final Project', room: 'Lab 105', time: '9:00 AM - 12:00 PM', type: 'Final' },
  { date: 'Feb 12', course: 'Database Systems Exam', room: 'Exam Hall B', time: '1:00 PM - 3:00 PM', type: 'Midterm' },
];

const calendarDays = [
  { day: '', empty: true }, { day: '', empty: true },
  { day: '1' }, { day: '2' }, { day: '3' }, { day: '4' }, { day: '5' },
  { day: '6' }, { day: '7' }, { day: '8' }, { day: '9' }, { day: '10' }, { day: '11' }, { day: '12' },
  { day: '13' }, { day: '14' }, { day: '15', hasEvent: true }, { day: '16' }, { day: '17', hasEvent: true }, { day: '18' }, { day: '19' },
  { day: '20' }, { day: '21' }, { day: '22', hasEvent: true }, { day: '23' }, { day: '24' }, { day: '25', hasEvent: true }, { day: '26' },
  { day: '27' }, { day: '28' }, { day: '29' }, { day: '30' }, { day: '31' },
];

export default function SchedulePage() {
  return (
    <div>
      <div className="page-header">
        <div>
          <div className="page-title">Class Schedule</div>
          <div className="page-subtitle">Spring 2025 — Week of January 13</div>
        </div>
        <div style={{display: 'flex', gap: '8px'}}>
          <button className="btn btn-secondary btn-sm">Previous Week</button>
          <button className="btn btn-primary btn-sm">Next Week</button>
        </div>
      </div>

      <div className="grid-2" style={{marginBottom: '24px'}}>
        {/* Weekly Schedule */}
        <div className="card" style={{gridColumn: '1 / 2'}}>
          <div className="card-header">
            <div className="card-title">Weekly Schedule</div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            {weeklySchedule.map((dayItem, i) => (
              <div key={i}>
                <div style={{fontSize: '13px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px'}}>
                  {dayItem.day}
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  {dayItem.classes.map((cls, j) => (
                    <div key={j} style={{display: 'flex', gap: '12px', alignItems: 'center', padding: '10px 12px', borderRadius: 'var(--radius)', background: cls.color, border: `1px solid ${cls.color}`}}>
                      <div style={{minWidth: '70px', fontSize: '12px', fontWeight: 600, color: cls.textColor}}>{cls.time}</div>
                      <div style={{flex: 1}}>
                        <div style={{fontSize: '13px', fontWeight: 600, color: 'var(--text)'}}>{cls.course}</div>
                        <div style={{fontSize: '12px', color: 'var(--text-muted)'}}>{cls.room} &bull; {cls.duration}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar + Exams */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
          {/* Mini Calendar */}
          <div className="card">
            <div className="calendar">
              <div className="calendar-header">
                <button className="btn btn-secondary btn-sm" style={{padding: '4px 10px'}}>&lt;</button>
                <div className="calendar-title">January 2025</div>
                <button className="btn btn-secondary btn-sm" style={{padding: '4px 10px'}}>&gt;</button>
              </div>
              <div className="calendar-grid">
                {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
                  <div key={d} className="calendar-day-name">{d}</div>
                ))}
                {calendarDays.map((d, i) => (
                  <div
                    key={i}
                    className={`calendar-day${
                      d.empty ? ' other-month' : ''
                    }${d.day === '13' ? ' today' : ''}${d.hasEvent ? ' has-event' : ''}`}
                  >
                    {d.day}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Exams */}
          <div className="card">
            <div className="card-header">
              <div className="card-title">Upcoming Exams</div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              {upcomingExams.map((exam, i) => (
                <div key={i} style={{display: 'flex', gap: '12px', alignItems: 'center', padding: '10px', background: 'var(--bg)', borderRadius: 'var(--radius)', border: '1px solid var(--border)'}}>
                  <div style={{textAlign: 'center', minWidth: '40px'}}>
                    <div style={{fontSize: '16px', fontWeight: 700, color: 'var(--primary)'}}>{exam.date.split(' ')[1]}</div>
                    <div style={{fontSize: '10px', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase'}}>{exam.date.split(' ')[0]}</div>
                  </div>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: '13px', fontWeight: 600, color: 'var(--text)'}}>{exam.course}</div>
                    <div style={{fontSize: '12px', color: 'var(--text-muted)'}}>{exam.room} &bull; {exam.time}</div>
                  </div>
                  <span className={`status-badge ${exam.type === 'Final' ? 'red' : exam.type === 'Midterm' ? 'orange' : 'blue'}`} style={{fontSize: '11px'}}>{exam.type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
