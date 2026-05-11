const KEYS = {
  TASKS: 'dailysync_tasks',
  CONFIG: 'dailysync_config',
  API_KEY: 'dailysync_apikey',
};

const today = () => new Date().toLocaleDateString();

export function getTasks() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(KEYS.TASKS);
    const all = raw ? JSON.parse(raw) : [];
    return all.filter((t) => t.date === today());
  } catch { return []; }
}

export function saveTasks(tasks) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(KEYS.TASKS, JSON.stringify(tasks.filter((t) => t.date === today())));
}

export function getConfig() {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(KEYS.CONFIG);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

export function saveConfig(config) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(KEYS.CONFIG, JSON.stringify(config));
}

export function getApiKey() {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem(KEYS.API_KEY) || '';
}

export function saveApiKey(key) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(KEYS.API_KEY, key);
}
