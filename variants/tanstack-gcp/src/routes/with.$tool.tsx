import { createFileRoute, useParams } from '@tanstack/react-router';

export const Route = createFileRoute('/with/$tool')({
  component: VariantView,
});

function VariantView() {
  const { tool } = useParams({ from: '/with/$tool' });
  const src = `/gcp/tanstack/variants/${tool}/index.html`;
  return (
    <div style={{ height: "100%", display: "flex" }}>
      <iframe
        title={`AI Variant: ${tool}`}
        src={src}
        style={{ width: "100%", height: "100%", border: "0", background: "#fff" }}
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  );
}