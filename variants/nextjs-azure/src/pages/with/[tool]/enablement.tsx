import { useRouter } from 'next/router';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function VariantEnablement() {
  const router = useRouter();
  const { tool } = router.query as { tool?: string };
  const src = tool ? `${BASE_PATH}/variants/${tool}/enablement/index.html` : undefined;
  return (
    <div style={{ height: "100%", display: "flex" }}>
      {src ? (
        <iframe
          title={`AI Enablement - ${tool}`}
          src={src}
          style={{ width: "100%", height: "100%", border: "0", background: "#fff" }}
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        />
      ) : null}
    </div>
  );
}
