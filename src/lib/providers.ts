export type Provider = {
  id: string;
  name: string;
  path: string;        // static path to variant entry
  noindex?: boolean;   // whether to add robots noindex on /with/[tool]
  icon?: string;       // emoji or text icon for the provider
  color?: string;      // accent color for the provider
};

export const PROVIDERS: Provider[] = [
  { id: 'minimal', name: 'Minimal', path: '/', icon: '◐', color: '#000' },
  { id: 'lovable', name: 'Lovable', path: '/variants/lovable/index.html', noindex: true, icon: '♥', color: '#ff006e' },
  { id: 'bolt', name: 'Bolt', path: '/variants/bolt/index.html', noindex: true, icon: '⚡', color: '#f59e0b' },
  { id: 'cursor', name: 'Cursor', path: '/variants/cursor/index.html', noindex: true, icon: '▮', color: '#3b82f6' },
  { id: 'chatgpt', name: 'ChatGPT', path: '/variants/chatgpt/index.html', noindex: true, icon: '◉', color: '#10a37f' },
  { id: 'claude-code', name: 'Claude Code', path: '/variants/claude-code/index.html', noindex: true, icon: '◈', color: '#d97706' },
  { id: 'v0', name: 'v0', path: '/variants/v0/index.html', noindex: true, icon: 'v0', color: '#000' }
];