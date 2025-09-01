<script>
  import { PROVIDERS } from '$lib/providers';
  export let data; // { currentProviderId, isOnEnablement }

  $: ({ currentProviderId, isOnEnablement } = data);
  $: currentProvider = PROVIDERS.find(p => p.id === currentProviderId) ?? PROVIDERS[0];

  $: getProviderPath = (targetPage) => {
    return targetPage === 'resume'
      ? (currentProviderId === 'minimal' ? '/' : `/with/${currentProviderId}`)
      : (currentProviderId === 'minimal' ? '/enablement' : `/with/${currentProviderId}/enablement`);
  }

  function handleProviderClick(e, provider) {
    if (provider.comingSoon) {
      e.preventDefault();
    }
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
</style>

<div class="layout-container">
  <nav class="sidebar" aria-label="AI Variants">
    {#each PROVIDERS as provider}
      {@const providerHref = provider.comingSoon 
        ? '#' 
        : provider.id === 'minimal' 
          ? (isOnEnablement ? '/enablement' : '/')
          : (isOnEnablement ? `/with/${provider.id}/enablement` : `/with/${provider.id}`)}
      <a 
        href={providerHref}
        class="sidebar-item"
        class:active={currentProvider?.id === provider.id}
        class:coming-soon={provider.comingSoon}
        style="--accent-color: {provider.color || '#000'}"
        title="{provider.name} version{provider.comingSoon ? ' (coming soon)' : ''}"
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

  <div class="main-content">
    <header>
      <div style="display: flex; align-items: center; gap: 2rem;">
        <a href="/" style="text-decoration:none;color:inherit;font-weight:700">
          Austin Wallace — Data Engineer
        </a>
        <nav style="display: flex; gap: 1rem;">
          <a href={getProviderPath('resume')} class:active-page={!isOnEnablement}>Resume</a>
          <a href={getProviderPath('enablement')} class:active-page={isOnEnablement}>AI Enablement</a>
        </nav>
        {#if currentProvider}
          <span class="provider-badge">
            <span style="color: {currentProvider.color}">{currentProvider.icon}</span>
            {currentProvider.name} Version
          </span>
        {/if}
      </div>
    </header>

    <div class="content-area" id="content">
      <slot />
    </div>

    <footer>
      <p>Base text written by Austin, enhanced by various AI tooling providers, and deployed with SST. </p>
    </footer>
  </div>
</div>