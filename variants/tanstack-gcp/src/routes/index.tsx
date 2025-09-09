import { createFileRoute, redirect } from '@tanstack/react-router';

// Redirect the root route to the canonical /resume path
export const Route = createFileRoute('/')({
  beforeLoad: () => {
    throw redirect({ to: '/resume' });
  },
});
// Note: the canonical resume component now lives at /routes/resume.tsx
