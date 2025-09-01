export type Provider = {
  id: string;
  name: string;
  path: string;        // static path to variant entry
  noindex?: boolean;   // whether to add robots noindex on /with/[tool]
  icon?: string;       // emoji or text icon for the provider
  logo?: string;       // path to logo image
  color?: string;      // accent color for the provider
  comingSoon?: boolean; // whether this variant is still being developed
};

export const PROVIDERS: Provider[] = [
  { id: 'minimal', name: 'Minimal', path: '/', icon: '◐', color: '#000' },
  { id: 'claude-code', name: 'Claude Code', path: '/variants/claude-code/index.html', noindex: true, icon: '◈', logo: '/logos/claude.png', color: '#d97706' },
  { id: 'gpt-5-thinking', name: 'GPT-5 Thinking', path: '/variants/gpt-5-thinking/index.html', noindex: true, icon: '🧠', logo: '/logos/chatgpt.svg', color: '#10a37f' },
  { id: 'lovable', name: 'Lovable', path: '/variants/lovable/index.html', noindex: true, icon: '♥', logo: '/logos/lovable.png', color: '#ff006e' },
  { id: 'bolt', name: 'Bolt', path: '/variants/bolt/index.html', noindex: true, icon: '⚡', logo: '/logos/bolt.jpg', color: '#f59e0b' },
  { id: 'cursor', name: 'Cursor', path: '/variants/cursor/index.html', noindex: true, icon: '▮', logo: '/logos/cursor.png', color: '#3b82f6', comingSoon: true },
  { id: 'v0', name: 'v0', path: '/variants/v0/index.html', noindex: true, icon: 'v0', logo: '/logos/v0.png', color: '#000', comingSoon: true }
];