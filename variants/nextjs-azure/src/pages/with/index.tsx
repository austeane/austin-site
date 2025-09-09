import Link from 'next/link';

const AI_VARIANTS = [
  { id: "claude-code", name: "Claude Code" },
  { id: "gpt-5-pro", name: "GPT-5 Pro" },
  { id: "gpt-5-thinking", name: "GPT-5 Thinking" },
  { id: "lovable", name: "Lovable" },
  { id: "bolt", name: "Bolt" },
  { id: "firebase", name: "Firebase Studio" },
];

export default function WithIndex() {
  return (
    <main style={{ maxWidth: 960, margin: "2rem auto", padding: "0 1rem" }}>
      <h1>AI Variants on Next.js</h1>
      <p>
        These are served from <code>/azure/next/variants/&lt;tool&gt;/index.html</code>.
      </p>
      <ul>
        {AI_VARIANTS.map((v) => (
          <li key={v.id}>
            <Link href={`/with/${v.id}`}>{v.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

