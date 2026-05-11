import { useState, useEffect } from 'react';
import Header from '../components/Header';
import ConfigPanel from '../components/ConfigPanel';
import AddTaskPanel from '../components/AddTaskPanel';
import TaskListPanel from '../components/TaskListPanel';
import SummaryPanel from '../components/SummaryPanel';
import { ToastContainer, useToast } from '../components/Toast';
import { getTasks, saveTasks } from '../lib/storage';
import styles from './index.module.css';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const { toasts, toast } = useToast();

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  function addTask({ name, desc, status }) {
    const newTask = {
      id: Date.now(),
      name,
      desc,
      status,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      date: new Date().toLocaleDateString(),
    };
    const updated = [newTask, ...tasks];
    setTasks(updated);
    saveTasks(updated);
  }

  function deleteTask(id) {
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
    saveTasks(updated);
  }

  function clearAllTasks() {
    if (!confirm('Clear all tasks for today?')) return;
    setTasks([]);
    saveTasks([]);
    toast('All tasks cleared', 'info');
  }

  return (
    <div className={styles.app}>
      <Header />
      <ConfigPanel onToast={toast} />
      <div className={styles.grid}>
        <AddTaskPanel onAddTask={addTask} onToast={toast} />
        <TaskListPanel tasks={tasks} onDelete={deleteTask} onClearAll={clearAllTasks} />
        <SummaryPanel tasks={tasks} onToast={toast} />
      </div>
      <footer className={styles.footer}>
        DailySync · AI-powered by Gemini 1.5 Flash (free) · Tasks auto-clear daily
      </footer>
      <ToastContainer toasts={toasts} />
    </div>
  );
}
