import { createFileRoute, useParams } from '@tanstack/react-router';

export const Route = createFileRoute('/with/$tool/enablement')({
  component: VariantEnablement,
});

function VariantEnablement() {
  const { tool } = useParams({ from: '/with/$tool/enablement' });
  const src = `/gcp/tanstack/variants/${tool}/enablement/index.html`;
  return (
    <div style={{ height: "100%", display: "flex" }}>
      <iframe
        title={`AI Enablement - ${tool}`}
        src={src}
        style={{ width: "100%", height: "100%", border: "0", background: "#fff" }}
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  );
}