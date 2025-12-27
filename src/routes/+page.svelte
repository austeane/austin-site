<script lang="ts">
  import { PROVIDERS, DEPLOYMENT_VARIANTS } from '$lib/providers';

  const aiAgents = PROVIDERS.filter(p => p.id !== 'minimal');
  const deploymentPlatforms = DEPLOYMENT_VARIANTS;

  const projects = [
    {
      name: 'QDrill',
      url: 'https://qdrill.app',
      github: 'https://github.com/austeane/qdrill',
      description: 'Complex practice planning app for my niche sport'
    },
    {
      name: 'Quadball Canada',
      url: 'https://quadballcanada.ca',
      github: 'https://github.com/austeane/quadball-canada',
      description: 'Official national governing body website'
    }
  ];
</script>

<svelte:head>
  <title>Austin Wallace — Data Engineer & AI Enablement</title>
  <meta name="description" content="Explore my resume designed by 6 different AI agents across 4 deployment platforms. Data Engineer and AI Enablement specialist." />
  <link rel="canonical" href="https://www.austinwallace.ca/" />
</svelte:head>

<div class="home">
  <section class="hero">
    <div class="hero-content">
      <img src="/images/austin-profile.jpg" alt="Austin Wallace" class="profile-photo" />
      <div class="hero-text">
        <h1>Austin Wallace</h1>
        <p class="tagline">Data Engineer & AI Enablement Specialist</p>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/austintwallace/" target="_blank" rel="noopener noreferrer" class="social-link linkedin" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://x.com/austeane" target="_blank" rel="noopener noreferrer" class="social-link x" aria-label="X (Twitter)">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
        <p class="intro">
          Welcome to my portfolio experiment — the same resume content,
          styled by <strong>6 different AI agents</strong>, deployed across
          <strong>4 cloud platforms</strong>.
        </p>
      </div>
    </div>
  </section>

  <section class="resume-variants">
    <h2>Two Resume Variants</h2>
    <p class="section-intro">Choose a perspective to explore my experience:</p>
    <div class="variant-cards">
      <a href="/with/claude-code" class="variant-card">
        <span class="variant-icon">📊</span>
        <h3>Data Engineer</h3>
        <p>9+ years building data platforms with Databricks, Snowflake, and dbt</p>
      </a>
      <a href="/with/claude-code/enablement" class="variant-card">
        <span class="variant-icon">🤖</span>
        <h3>AI Enablement</h3>
        <p>Helping teams adopt AI tools and workflows for accelerated development</p>
      </a>
    </div>
  </section>

  <section class="ai-agents">
    <h2>6 AI Agents</h2>
    <p class="section-intro">Each agent designed the same resume content with their unique approach:</p>
    <div class="agent-grid">
      {#each aiAgents as agent}
        <a href="/with/{agent.id}" class="agent-card" style="--agent-color: {agent.color}">
          {#if agent.logo}
            <img src={agent.logo} alt={agent.name} class="agent-logo" />
          {:else}
            <span class="agent-icon">{agent.icon}</span>
          {/if}
          <span class="agent-name">{agent.name}</span>
        </a>
      {/each}
    </div>
  </section>

  <section class="platforms">
    <h2>4 Deployment Platforms</h2>
    <p class="section-intro">The same app deployed across different cloud providers and frameworks:</p>
    <div class="platform-grid">
      {#each deploymentPlatforms as platform}
        <a href={platform.externalUrl} class="platform-card" style="--platform-color: {platform.color}" target="_blank" rel="noopener noreferrer">
          {#if platform.logo}
            <img src={platform.logo} alt={platform.name} class="platform-logo" />
          {:else}
            <span class="platform-icon">{platform.icon}</span>
          {/if}
          <span class="platform-name">{platform.name}</span>
        </a>
      {/each}
    </div>
  </section>

  <section class="projects">
    <h2>Side Projects</h2>
    <p class="section-intro">Other things I've built with AI:</p>
    <div class="project-grid">
      {#each projects as project}
        <div class="project-card">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div class="project-links">
            <a href={project.url} target="_blank" rel="noopener noreferrer" class="project-link">
              {project.url.replace('https://', '')} →
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" class="github-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>

<style>
  .home {
    max-width: 900px;
    margin: 0 auto;
  }

  section {
    margin-bottom: 3rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .section-intro {
    color: var(--muted);
    margin-bottom: 1.5rem;
  }

  /* Hero */
  .hero {
    margin-bottom: 3rem;
  }

  .hero-content {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .profile-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--border);
  }

  .hero-text h1 {
    font-size: 2.5rem;
    margin: 0 0 0.25rem 0;
    font-weight: 700;
  }

  .tagline {
    font-size: 1.1rem;
    color: var(--muted);
    margin: 0 0 0.75rem 0;
  }

  .social-links {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    color: #fff;
    transition: all 0.2s ease;
  }

  .social-link.linkedin {
    background: #0A66C2;
  }

  .social-link.linkedin:hover {
    background: #004182;
    transform: translateY(-2px);
  }

  .social-link.x {
    background: #000;
  }

  .social-link.x:hover {
    background: #333;
    transform: translateY(-2px);
  }

  .intro {
    max-width: 500px;
    line-height: 1.6;
    margin: 0;
  }

  /* Resume Variants */
  .variant-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
  }

  .variant-card {
    display: block;
    padding: 1.5rem;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 12px;
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
  }

  .variant-card:hover {
    border-color: #333;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transform: translateY(-2px);
  }

  .variant-icon {
    font-size: 2rem;
    display: block;
    margin-bottom: 0.5rem;
  }

  .variant-card h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
  }

  .variant-card p {
    margin: 0;
    color: var(--muted);
    font-size: 0.95rem;
  }

  /* AI Agents */
  .agent-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1rem;
  }

  .agent-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.25rem 1rem;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 12px;
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
  }

  .agent-card:hover {
    border-color: var(--agent-color);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transform: translateY(-2px);
  }

  .agent-logo {
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin-bottom: 0.5rem;
  }

  .agent-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .agent-name {
    font-size: 0.85rem;
    text-align: center;
    font-weight: 500;
  }

  /* Platforms */
  .platform-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1rem;
  }

  .platform-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.25rem 1rem;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 12px;
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
  }

  .platform-card:hover {
    border-color: var(--platform-color);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transform: translateY(-2px);
  }

  .platform-logo {
    width: 36px;
    height: 36px;
    object-fit: contain;
    margin-bottom: 0.5rem;
  }

  .platform-icon {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
  }

  .platform-name {
    font-size: 0.85rem;
    text-align: center;
    font-weight: 500;
  }

  /* Projects */
  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
  }

  .project-card {
    display: block;
    padding: 1.5rem;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 12px;
    color: inherit;
    transition: all 0.2s ease;
  }

  .project-card:hover {
    border-color: #333;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  .project-card h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
  }

  .project-card p {
    margin: 0 0 0.75rem 0;
    color: var(--muted);
    font-size: 0.95rem;
  }

  .project-links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .project-link {
    font-size: 0.85rem;
    color: #0066cc;
    font-weight: 500;
    text-decoration: none;
  }

  .project-link:hover {
    text-decoration: underline;
  }

  .github-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 6px;
    color: #333;
    background: #f0f0f0;
    transition: all 0.2s ease;
  }

  .github-link:hover {
    background: #333;
    color: #fff;
  }

  @media (max-width: 600px) {
    .hero-content {
      flex-direction: column;
      text-align: center;
    }

    .hero-text h1 {
      font-size: 2rem;
    }

    .social-links {
      justify-content: center;
    }

    .intro {
      text-align: center;
    }
  }
</style>
