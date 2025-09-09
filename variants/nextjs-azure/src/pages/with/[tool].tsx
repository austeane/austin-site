import { useRouter } from 'next/router';

export default function VariantView() {
  const router = useRouter();
  const { tool } = router.query as { tool?: string };
  const src = tool ? `/azure/next/variants/${tool}/index.html` : undefined;

  return (
    <div style={{ height: "100%", display: "flex" }}>
      {src ? (
        <iframe
          title={`AI Variant: ${tool}`}
          src={src}
          style={{ width: "100%", height: "100%", border: "0", background: "#fff" }}
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        />
      ) : null}
    </div>
  );
}

