const GEMINI_MODEL = 'gemini-1.5-flash-latest';
const GEMINI_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';

export async function callGemini(prompt, apiKey) {
  if (!apiKey) throw new Error('No API key. Save your Gemini API key first.');

  const res = await fetch(
    `${GEMINI_BASE}/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.7, maxOutputTokens: 900, topP: 0.9 },
      }),
    }
  );

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error?.message || `API Error ${res.status}`);
  }

  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('No response from Gemini. Try again.');
  return text;
}

export function buildSingleTaskPrompt(task, config) {
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });
  return `Write a professional email update for the following task.

Task: ${task.name}
Status: ${task.status}
Details: ${task.desc || 'No additional details'}
Date: ${date}
${config.senderName ? `From: ${config.senderName}${config.senderRole ? ` (${config.senderRole})` : ''}` : ''}
${config.recipientEmail ? `To: ${config.recipientEmail}` : ''}
${config.projectName ? `Project/Team: ${config.projectName}` : ''}

Write a professional email with subject line, greeting, task update (2-3 sentences), blockers or next steps if relevant, and sign-off.
Output ONLY the email text. No markdown or extra commentary.`;
}

export function buildDailySummaryPrompt(tasks, type, config) {
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });
  const taskList = tasks
    .map((t) => `- [${t.status}] ${t.name}${t.desc ? ': ' + t.desc : ''}`)
    .join('\n');
  const done = tasks.filter((t) => t.status === 'Done').length;
  const inProg = tasks.filter((t) => t.status === 'In Progress').length;
  const pending = tasks.filter((t) => t.status === 'Pending').length;
  const typeDesc = type === 'morning'
    ? "morning standup / daily plan email"
    : "end-of-day summary email";

  return `Write a professional ${typeDesc} based on these tasks.

Date: ${date}
${config.senderName ? `From: ${config.senderName}${config.senderRole ? ` (${config.senderRole})` : ''}` : ''}
${config.recipientEmail ? `To: ${config.recipientEmail}` : ''}
${config.projectName ? `Project/Team: ${config.projectName}` : ''}

Tasks:
${taskList}

Stats: ${done} completed, ${inProg} in progress, ${pending} pending (${tasks.length} total)

Write with: subject line, greeting, ${type === 'morning' ? 'plan for today' : 'summary of accomplishments'}, blockers/pending items, next steps, sign-off.
Output ONLY the email text. No markdown formatting.`;
}
