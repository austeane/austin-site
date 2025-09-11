// Use SSR page that fetches through API proxy to avoid WAF issues
export { default, getServerSideProps } from './resume_ssr';
