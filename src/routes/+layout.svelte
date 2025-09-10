<script>
  import { PROVIDERS, DEPLOYMENT_VARIANTS } from '$lib/providers';
  export let data; // { currentProviderId, isOnEnablement, isVariantRoute, isExternalPath }

  // Simple backend detection based on pathname prefixes that the SST router
  // forwards to external apps. Falls back to AWS/SST for the core site.
  function detectBackend(pathname) {
    if (!pathname) return 'AWS';
    if (pathname.startsWith('/azure/next')) return 'Vercel (Next.js)';
    if (pathname.startsWith('/azure/react')) return 'Azure SWA (React)';
    if (pathname.startsWith('/gcp/tanstack')) return 'Netlify (TanStack)';
    return 'AWS (SST)';
  }

  let backend = detectBackend(typeof window !== 'undefined' ? window.location.pathname : '');
  let isExternalPath = data?.isExternalPath ?? (typeof window !== 'undefined' ? /^(?:\/azure\/|\/gcp\/)/.test(window.location.pathname) : false);
  let isFramed = typeof window !== 'undefined' ? window.self !== window.top : false;
  $: isShellHidden = isExternalPath || isFramed;

  // Light‑weight progress bar driven by client‑side navigation
  let loading = false;
  import { afterNavigate, beforeNavigate } from '$app/navigation';
  if (typeof window !== 'undefined') {
    beforeNavigate(() => { loading = true; });
    afterNavigate(() => { 
      loading = false; 
      backend = detectBackend(window.location.pathname);
      isExternalPath = /^(?:\/azure\/|\/gcp\/)/.test(window.location.pathname);
      isFramed = window.self !== window.top;
    });
  }

  // Minimal route inspector (toggle with ?). Shows path, backend, and HEAD headers.
  let inspectorOpen = false;
  let headHeaders = [];
  async function refreshHeaders() {
    headHeaders = [];
    try {
      const res = await fetch(window.location.href, { method: 'HEAD' });
      // Collect a few interesting headers
      const interesting = ['server', 'x-backend', 'x-cache', 'cache-control', 'age', 'content-type', 'server-timing'];
      headHeaders = interesting.map((h) => ({ name: h, value: res.headers.get(h) })).filter(h => h.value);
    } catch {}
  }
  function onKeydown(e) {
    if (e.key === '?') {
      inspectorOpen = !inspectorOpen;
      if (inspectorOpen && typeof window !== 'undefined') refreshHeaders();
    }
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', onKeydown);
  }

  let showDeploymentVariants = false; // default; will be set by route below
  let userToggled = false;

  $: ({ currentProviderId, isOnEnablement, isVariantRoute } = data);
  $: activeProviders = showDeploymentVariants ? DEPLOYMENT_VARIANTS : PROVIDERS;
  $: currentProvider = [...PROVIDERS, ...DEPLOYMENT_VARIANTS].find(p => p.id === currentProviderId) ?? PROVIDERS[0];

  // Default the sidebar to Deploy Variants on /with/<tool> routes
  // Respect user toggles for the remainder of the session
  $: if (!userToggled) {
    showDeploymentVariants = !!isVariantRoute;
  }

  $: getProviderPath = (targetPage) => {
    return targetPage === 'resume'
      ? (currentProviderId === 'minimal' ? '/' : `/with/${currentProviderId}`)
      : (currentProviderId === 'minimal' ? '/enablement' : `/with/${currentProviderId}/enablement`);
  }

  function handleProviderClick(e, provider) {
    // Block navigation for coming-soon items
    if (provider.comingSoon) {
      e.preventDefault();
      return;
    }
    // For deployment variants, let the anchor's href/target handle navigation
    // so we open in a new tab when target="_blank" is set.
  }

  function toggleVariantType() {
    userToggled = true;
    showDeploymentVariants = !showDeploymentVariants;
  }
</script>

<style>
  .layout-container {
    display: flex;
    height: 100vh;
    overflow: hidden;
  }
  
  .sidebar {
    width: 80px;
    background: #fafafa;
    border-right: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    gap: 0.5rem;
    overflow-y: auto;
    flex-shrink: 0;
  }

  .variant-toggle {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    margin: 0 0.5rem 0.5rem;
    border-radius: 8px;
    background: #fff;
    border: 1px solid var(--border);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .variant-toggle:hover {
    background: #f0f0f0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }

  .variant-toggle-icon {
    font-size: 1.2rem;
    margin-bottom: 0.25rem;
  }

  .variant-toggle-label {
    font-size: 0.6rem;
    text-align: center;
    line-height: 1.2;
  }

  .sidebar-divider {
    height: 1px;
    background: var(--border);
    margin: 0.5rem 1rem;
  }
  
  .sidebar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.75rem;
    text-decoration: none;
    color: var(--fg);
    border-radius: 8px;
    margin: 0 0.5rem;
    transition: all 0.2s ease;
    min-height: 60px;
    position: relative;
  }
  
  .sidebar-item:hover {
    background: #f0f0f0;
    transform: translateX(2px);
  }
  
  .sidebar-item.active {
    background: #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  .sidebar-item.active::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 24px;
    background: var(--accent-color, #000);
    border-radius: 0 2px 2px 0;
  }
  
  .sidebar-item.coming-soon {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .sidebar-item.coming-soon:hover {
    opacity: 0.8;
    transform: none;
  }
  
  .sidebar-item.coming-soon .sidebar-logo,
  .sidebar-item.coming-soon .sidebar-icon {
    filter: grayscale(30%);
  }
  
  .coming-soon-tooltip {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.65rem;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.2s;
    pointer-events: none;
    z-index: 10;
  }
  
  .sidebar-item.coming-soon:hover .coming-soon-tooltip {
    opacity: 1;
  }
  
  .sidebar-icon {
    font-size: 1.5rem;
    line-height: 1;
    margin-bottom: 0.25rem;
  }
  
  .sidebar-logo {
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin-bottom: 0.25rem;
  }
  
  .sidebar-label {
    font-size: 0.65rem;
    text-align: center;
    opacity: 0.7;
  }
  
  .main-content {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }
  
  header {
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--border);
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .progress {
    position: fixed;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--progress-color, #111) 0%, transparent 70%);
    background-size: 200% 100%;
    animation: progress 1.2s linear infinite;
    opacity: 0.9;
    z-index: 1000;
  }
  @keyframes progress { from { background-position: 200% 0 } to { background-position: -200% 0 } }
  
  .content-area {
    flex: 1;
    max-width: 2000px;
    width: 100%;
    margin: 0 auto;
    padding: 1.25rem;
  }
  
  footer {
    padding: 1rem 2rem;
    border-top: 1px solid var(--border);
    background: #fafafa;
    text-align: center;
    color: var(--muted);
    font-size: 0.85rem;
  }
  
  .provider-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0.75rem;
    background: #f0f0f0;
    border-radius: 999px;
    font-size: 0.85rem;
  }
  
  .active-page {
    font-weight: 600;
    color: var(--text);
    text-decoration: underline;
  }

  /* Remove padding for pages with VariantFrame */
  .content-area:has(.frame-wrap) {
    padding: 0;
  }
  
  @media (max-width: 768px) {
    .sidebar {
      width: 60px;
    }
    
    .sidebar-label {
      display: none;
    }
  }
  .backend-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0.6rem;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: #fafafa;
    font-size: 0.8rem;
    color: #333;
  }
  .inspector {
    position: fixed;
    right: 16px;
    bottom: 16px;
    width: min(420px, 90vw);
    background: #111;
    color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.35);
    z-index: 1001;
    border: 1px solid #333;
    overflow: hidden;
  }
  .inspector header { display:flex; justify-content: space-between; align-items:center; padding: 10px 12px; background:#171717; border-bottom:1px solid #2a2a2a; }
  .inspector pre { margin: 0; padding: 10px 12px; white-space: pre-wrap; font-size: 12px; line-height: 1.4; }
  .kbd { background:#222; border:1px solid #444; padding:1px 6px; border-radius:6px; font-size: 11px; }
</style>

<div class="layout-container">
  {#if loading}
    <div class="progress" style="--progress-color:{backend.includes('Vercel') ? '#000' : backend.includes('Azure') ? '#0078D4' : backend.includes('Netlify') ? '#00AD9F' : '#FF9900'}"></div>
  {/if}
  {#if !isShellHidden}
  <nav class="sidebar" aria-label="Variants">
    <!-- Toggle between AI and Deployment variants -->
    <button 
      class="variant-toggle" 
      on:click={toggleVariantType}
      aria-pressed={showDeploymentVariants}
      aria-label={showDeploymentVariants ? 'Show AI variants' : 'Show deployment variants'}
      title="Switch between AI-styled and deployment variants"
    >
      <span class="variant-toggle-icon" aria-hidden="true">
        {showDeploymentVariants ? '🚀' : '🤖'}
      </span>
      <span class="variant-toggle-label">
        {showDeploymentVariants ? 'Deploy\nVariants' : 'AI\nVariants'}
      </span>
    </button>
    
    <div class="sidebar-divider"></div>
    
    {#each activeProviders as provider}
      {@const providerHref = provider.isDeployment
        // Preserve the currently selected AI variant when jumping to a deployment variant
        ? (
            currentProviderId === 'minimal'
              // Minimal doesn't have a variant file in external apps; go to the app root
              ? provider.externalUrl
              // Deep link to the same variant (and page type) within the external app
              // All deployment variants now use their app routes, not static HTML
              : `${provider.externalUrl}/with/${currentProviderId}${isOnEnablement ? '/enablement' : ''}`
          )
        : provider.comingSoon 
          ? '#' 
          : provider.id === 'minimal' 
            ? (isOnEnablement ? '/enablement' : '/')
            : (isOnEnablement ? `/with/${provider.id}/enablement` : `/with/${provider.id}`)}
      <a 
        href={providerHref}
        class="sidebar-item"
        class:active={currentProvider?.id === provider.id}
        class:coming-soon={provider.comingSoon}
        aria-label="{provider.name}{provider.comingSoon ? ' (coming soon)' : ''}"
        style="--accent-color: {provider.color || '#000'}"
        title="{provider.name}{provider.comingSoon ? ' (coming soon)' : ''}{provider.isDeployment ? ' (external deployment)' : ''}"
        on:click={(e) => handleProviderClick(e, provider)}
      >
        {#if provider.logo}
          <img src={provider.logo} alt={provider.name} class="sidebar-logo" />
        {:else}
          <span class="sidebar-icon" style="color: {provider.color || 'inherit'}">
            {provider.icon}
          </span>
        {/if}
        <span class="sidebar-label">{provider.name}</span>
        {#if provider.comingSoon}
          <span class="coming-soon-tooltip">Coming Soon</span>
        {/if}
      </a>
    {/each}
  </nav>
  {/if}

  <div class="main-content">
    {#if !isShellHidden}
    <header>
      <div style="display: flex; align-items: center; gap: 2rem;">
        <a href="/" style="text-decoration:none;color:inherit;font-weight:700">
          Austin Wallace — Data Engineer
        </a>
        <nav style="display: flex; gap: 1rem;">
          <a href={getProviderPath('resume')} class:active-page={!isOnEnablement} aria-current={!isOnEnablement ? 'page' : undefined}>Resume</a>
          <a href={getProviderPath('enablement')} class:active-page={isOnEnablement} aria-current={isOnEnablement ? 'page' : undefined}>AI Enablement</a>
        </nav>
        <div style="display:flex; gap:8px; align-items:center;">
          {#if currentProvider}
            <span class="provider-badge">
              <span style="color: {currentProvider.color}">{currentProvider.icon}</span>
              {currentProvider.name} Version
            </span>
          {/if}
          <span class="backend-pill" aria-label="Current backend">
            🔌 {backend}
          </span>
        </div>
      </div>
    </header>
    {/if}

    <div class="content-area" id="content">
      <slot />
    </div>

    {#if !isShellHidden}
    <footer>
      <p>Base text written by Austin, enhanced by various AI tooling providers, and deployed with SST. </p>
    </footer>
    {/if}
  </div>
</div>

{#if inspectorOpen}
  <div class="inspector">
    <header>
      <strong>Route Inspector</strong>
      <span class="kbd">?</span>
    </header>
    <pre>
Path: {typeof window !== 'undefined' ? window.location.pathname : ''}
Backend: {backend}
{#if headHeaders.length}
Headers:
{#each headHeaders as h}- {h.name}: {h.value}
{/each}
{:else}
Press ? to refresh headers
{/if}
    </pre>
  </div>
{/if}
