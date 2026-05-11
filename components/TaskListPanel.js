import styles from './TaskListPanel.module.css';

const TAG_CLASS = {
  'Done': styles.tagDone,
  'In Progress': styles.tagProgress,
  'Pending': styles.tagPending,
};

export default function TaskListPanel({ tasks, onDelete, onClearAll }) {
  const done = tasks.filter((t) => t.status === 'Done').length;
  const inProg = tasks.filter((t) => t.status === 'In Progress').length;
  const pending = tasks.filter((t) => t.status === 'Pending').length;

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.title}>Today&apos;s Tasks</span>
          <span className={styles.badge}>{tasks.length}</span>
        </div>
        <div className={styles.headerRight}>
          {tasks.length > 0 && (
            <div className={styles.stats}>
              <span className={styles.statDone}>{done}✓</span>
              <span className={styles.statProg}>{inProg}⏳</span>
              <span className={styles.statPend}>{pending}●</span>
            </div>
          )}
          <button className={styles.dangerBtn} onClick={onClearAll}>Clear All</button>
        </div>
      </div>
      <div className={styles.body}>
        {tasks.length === 0 ? (
          <div className={styles.empty}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p>No tasks yet. Add your first task!</p>
          </div>
        ) : (
          <div className={styles.list}>
            {tasks.map((task) => (
              <div key={task.id} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.cardInfo}>
                    <div className={styles.taskName}>{task.name}</div>
                    {task.desc && (
                      <div className={styles.taskDesc}>{task.desc.length > 110 ? task.desc.slice(0, 110) + '…' : task.desc}</div>
                    )}
                  </div>
                  <button className={styles.deleteBtn} onClick={() => onDelete(task.id)} title="Delete">✕</button>
                </div>
                <div className={styles.cardMeta}>
                  <span className={`${styles.tag} ${TAG_CLASS[task.status] || ''}`}>{task.status}</span>
                  <span className={styles.taskTime}>{task.time}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
