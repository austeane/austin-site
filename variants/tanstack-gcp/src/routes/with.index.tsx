import { createFileRoute, Link } from '@tanstack/react-router';

const variants = [
  { id: "claude-code", name: "Claude Code" },
  { id: "gpt-5-pro", name: "GPT-5 Pro" },
  { id: "gpt-5-thinking", name: "GPT-5 Thinking" },
  { id: "lovable", name: "Lovable" },
  { id: "bolt", name: "Bolt" },
  { id: "firebase", name: "Firebase Studio" },
];

export const Route = createFileRoute('/with/')({
  component: () => (
    <main style={{ maxWidth: 960, margin: "2rem auto", padding: "0 1rem" }}>
      <h1>AI Variants on TanStack</h1>
      <p>Served from <code>/gcp/tanstack/variants/&lt;tool&gt;/index.html</code>.</p>
      <ul>
        {variants.map(v => (
          <li key={v.id}><Link to="/with/$tool" params={{ tool: v.id }}>{v.name}</Link></li>
        ))}
      </ul>
    </main>
  ),
});

