This file is a merged representation of the entire codebase, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure>
public/
  logos/
    chatgpt.svg
    claude.svg
    firebase.svg
  variants/
    bolt/
      enablement/
        index.html
      index.html
    claude-code/
      enablement/
        index.html
      index.html
    firebase/
      enablement/
        index.html
      index.html
    gpt-5-pro/
      enablement/
        index.html
      index.html
    gpt-5-thinking/
      enablement/
        index.html
      index.html
    lovable/
      enablement/
        index.html
      index.html
    template/
      enablement/
        index.html
      index.html
      README.md
src/
  components/
    Layout.tsx
  data/
    resume.json
  pages/
    api/
      resume.ts
      test-fetch.ts
    with/
      [tool]/
        enablement.tsx
      [tool].tsx
      index.tsx
    _app.tsx
    _document.tsx
    enablement.tsx
    probe.tsx
    resume_ssr.tsx
    resume.tsx
    test.tsx
  styles/
    globals.css
.dockerignore
.env.azure
.env.production.local
.gitignore
azure-deploy.yml
Dockerfile
next-env.d.ts
next.config.mjs
package.json
postcss.config.js
repomix-sst-router-complete.xml
sst-env.d.ts
tailwind.config.ts
tsconfig.json
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="public/logos/chatgpt.svg">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2406 2406">
	<path d="M1 578.4C1 259.5 259.5 1 578.4 1h1249.1c319 0 577.5 258.5 577.5 577.4V2406H578.4C259.5 2406 1 2147.5 1 1828.6V578.4z" fill="#74aa9c"/>
	<path id="a" d="M1107.3 299.1c-197.999 0-373.9 127.3-435.2 315.3L650 743.5v427.9c0 21.4 11 40.4 29.4 51.4l344.5 198.515V833.3h.1v-27.9L1372.7 604c33.715-19.52 70.44-32.857 108.47-39.828L1447.6 450.3C1361 353.5 1237.1 298.5 1107.3 299.1zm0 117.5-.6.6c79.699 0 156.3 27.5 217.6 78.4-2.5 1.2-7.4 4.3-11 6.1L952.8 709.3c-18.4 10.4-29.4 30-29.4 51.4V1248l-155.1-89.4V755.8c-.1-187.099 151.601-338.9 339-339.2z" fill="#fff"/>
	<use xlink:href="#a" transform="rotate(60 1203 1203)"/>
  	<use xlink:href="#a" transform="rotate(120 1203 1203)"/>
	<use xlink:href="#a" transform="rotate(180 1203 1203)"/>
	<use xlink:href="#a" transform="rotate(240 1203 1203)"/>
	<use xlink:href="#a" transform="rotate(300 1203 1203)"/>

</svg>
</file>

<file path="public/logos/claude.svg">
<svg height="1em" style="flex:none;line-height:1" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><title>Claude</title><path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z" fill="#D97757" fill-rule="nonzero"></path></svg>
</file>

<file path="public/logos/firebase.svg">
<svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M213.918 560.499C237.166 569.856 262.387 575.408 288.87 576.333C324.71 577.585 358.792 570.175 389.261 556.099C352.724 541.744 319.634 520.751 291.392 494.651C273.086 523.961 246.01 547.113 213.918 560.499Z" fill="#FF9100"/>
<path d="M291.389 494.66C226.923 435.038 187.815 348.743 191.12 254.092C191.228 251.019 191.39 247.947 191.58 244.876C180.034 241.89 167.98 240.068 155.576 239.635C137.821 239.015 120.626 241.217 104.393 245.788C87.1838 275.933 76.7989 310.521 75.5051 347.569C72.1663 443.18 130.027 526.723 213.914 560.508C246.007 547.121 273.082 523.998 291.389 494.66Z" fill="#FFC400"/>
<path d="M291.39 494.657C306.378 470.671 315.465 442.551 316.523 412.254C319.306 332.559 265.731 264.003 191.581 244.873C191.391 247.944 191.229 251.016 191.121 254.089C187.816 348.74 226.924 435.035 291.39 494.657Z" fill="#FF9100"/>
<path d="M308.231 20.8584C266 54.6908 232.652 99.302 212.475 150.693C200.924 180.129 193.665 211.748 191.546 244.893C265.696 264.023 319.272 332.579 316.489 412.273C315.431 442.57 306.317 470.663 291.355 494.677C319.595 520.804 352.686 541.77 389.223 556.124C462.56 522.224 514.593 449.278 517.606 362.997C519.558 307.096 498.08 257.273 467.731 215.219C435.68 170.742 308.231 20.8584 308.231 20.8584Z" fill="#DD2C00"/>
</svg>
</file>

<file path="public/variants/bolt/enablement/index.html">
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Enablement - Bolt Variant</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    :root {
      --bolt-primary: #f59e0b;
      --bolt-secondary: #fbbf24;
      --bolt-accent: #fef3c7;
      --bolt-dark: #92400e;
      --bolt-light: #fffbeb;
      --text-primary: #111827;
      --text-secondary: #6b7280;
      --text-muted: #9ca3af;
      --bg-primary: #ffffff;
      --bg-secondary: #f9fafb;
      --bg-tertiary: #f3f4f6;
      --border: #e5e7eb;
      --success: #10b981;
      --warning: #f59e0b;
      --error: #ef4444;
      --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
      --radius: 12px;
      --radius-lg: 16px;
      --radius-xl: 24px;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
      color: var(--text-primary);
      background: linear-gradient(135deg, var(--bolt-light) 0%, var(--bg-primary) 30%, var(--bg-secondary) 100%);
      line-height: 1.6;
      min-height: 100vh;
    }
    
    #app-bolt {
      max-width: 1400px;
      margin: 0 auto;
      padding: 2rem;
      animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeInScale {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    @keyframes shimmer {
      0% {
        background-position: -300px 0;
      }
      100% {
        background-position: calc(300px + 100%) 0;
      }
    }
    
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-15px);
      }
    }
    
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.05);
        opacity: 0.9;
      }
    }
    
    .hero-section {
      text-align: center;
      padding: 5rem 3rem;
      background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bolt-light) 50%, var(--bg-primary) 100%);
      border-radius: var(--radius-xl);
      margin-bottom: 4rem;
      box-shadow: var(--shadow-xl);
      border: 2px solid var(--border);
      position: relative;
      overflow: hidden;
      animation: fadeInScale 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    .hero-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 8px;
      background: linear-gradient(90deg, var(--bolt-primary), var(--bolt-secondary), var(--bolt-primary));
      background-size: 300px 100%;
      animation: shimmer 3s infinite linear;
    }
    
    .hero-section::after {
      content: '';
      position: absolute;
      top: -50%;
      right: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, var(--bolt-accent) 0%, transparent 70%);
      opacity: 0.3;
      animation: float 8s ease-in-out infinite;
      pointer-events: none;
    }
    
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      background: linear-gradient(135deg, var(--bolt-primary), var(--bolt-secondary));
      color: white;
      padding: 1rem 2rem;
      border-radius: 999px;
      font-size: 1.125rem;
      font-weight: 800;
      margin-bottom: 2rem;
      box-shadow: var(--shadow-xl);
      animation: pulse 3s infinite;
      position: relative;
      z-index: 1;
    }
    
    .hero-title {
      font-size: 4.5rem;
      font-weight: 900;
      line-height: 1.1;
      margin-bottom: 1.5rem;
      background: linear-gradient(135deg, var(--bolt-primary) 0%, var(--bolt-secondary) 50%, var(--bolt-dark) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      position: relative;
      z-index: 1;
    }
    
    .hero-subtitle {
      font-size: 1.75rem;
      color: var(--text-secondary);
      margin-bottom: 3rem;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.5;
      position: relative;
      z-index: 1;
    }
    
    .hero-actions {
      display: flex;
      gap: 2rem;
      justify-content: center;
      flex-wrap: wrap;
      position: relative;
      z-index: 1;
    }
    
    .btn {
      padding: 1.25rem 2.5rem;
      border-radius: var(--radius-lg);
      font-weight: 800;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 1rem;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      border: 3px solid transparent;
      font-size: 1.25rem;
      position: relative;
      overflow: hidden;
    }
    
    .btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.5s;
    }
    
    .btn:hover::before {
      left: 100%;
    }
    
    .btn-primary {
      background: linear-gradient(135deg, var(--bolt-primary), var(--bolt-secondary));
      color: white;
      box-shadow: var(--shadow-xl);
    }
    
    .btn-primary:hover {
      transform: translateY(-4px) scale(1.05);
      box-shadow: 0 25px 50px rgba(245, 158, 11, 0.4);
      filter: brightness(1.1);
    }
    
    .btn-secondary {
      background: var(--bg-primary);
      color: var(--bolt-primary);
      border-color: var(--bolt-primary);
      box-shadow: var(--shadow-lg);
    }
    
    .btn-secondary:hover {
      background: var(--bolt-primary);
      color: white;
      transform: translateY(-3px);
    }
    
    .value-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2.5rem;
      margin-bottom: 5rem;
    }
    
    .value-card {
      background: var(--bg-primary);
      border-radius: var(--radius-lg);
      padding: 2.5rem;
      border: 2px solid var(--border);
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      overflow: hidden;
      animation: fadeInScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    
    .value-card:nth-child(1) { animation-delay: 0.1s; }
    .value-card:nth-child(2) { animation-delay: 0.2s; }
    .value-card:nth-child(3) { animation-delay: 0.3s; }
    .value-card:nth-child(4) { animation-delay: 0.4s; }
    .value-card:nth-child(5) { animation-delay: 0.5s; }
    
    .value-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      background: linear-gradient(90deg, var(--bolt-primary), var(--bolt-secondary));
      transform: scaleX(0);
      transition: transform 0.4s ease;
    }
    
    .value-card::after {
      content: '';
      position: absolute;
      top: -50%;
      right: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, var(--bolt-accent) 0%, transparent 70%);
      opacity: 0;
      transition: opacity 0.4s ease;
      pointer-events: none;
    }
    
    .value-card:hover {
      border-color: var(--bolt-primary);
      transform: translateY(-10px) scale(1.03);
      box-shadow: var(--shadow-xl);
      background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bolt-light) 100%);
    }
    
    .value-card:hover::before {
      transform: scaleX(1);
    }
    
    .value-card:hover::after {
      opacity: 0.15;
    }
    
    .value-icon {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, var(--bolt-accent), var(--bolt-secondary));
      border-radius: var(--radius-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.5rem;
      margin-bottom: 2rem;
      box-shadow: var(--shadow-lg);
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      border: 3px solid var(--bolt-secondary);
    }
    
    .value-card:hover .value-icon {
      transform: scale(1.15) rotate(10deg);
      box-shadow: var(--shadow-xl);
    }
    
    .value-title {
      font-size: 1.75rem;
      font-weight: 800;
      margin-bottom: 1.5rem;
      color: var(--text-primary);
    }
    
    .value-bullets {
      list-style: none;
    }
    
    .value-bullets li {
      position: relative;
      padding: 1rem 0 1rem 3rem;
      color: var(--text-secondary);
      transition: all 0.3s ease;
      border-radius: var(--radius);
      margin-bottom: 0.5rem;
      font-size: 1.125rem;
      line-height: 1.7;
    }
    
    .value-bullets li:hover {
      color: var(--text-primary);
      background: var(--bg-secondary);
      transform: translateX(8px);
    }
    
    .value-bullets li::before {
      content: '⚡';
      position: absolute;
      left: 0;
      top: 1rem;
      color: var(--bolt-primary);
      font-size: 1.5rem;
      animation: pulse 2.5s infinite;
    }
    
    .section {
      background: var(--bg-primary);
      border-radius: var(--radius-lg);
      padding: 4rem 3rem;
      margin-bottom: 4rem;
      box-shadow: var(--shadow-lg);
      border: 2px solid var(--border);
      position: relative;
      animation: fadeInScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    
    .section:nth-child(3) { animation-delay: 0.2s; }
    .section:nth-child(4) { animation-delay: 0.4s; }
    .section:nth-child(5) { animation-delay: 0.6s; }
    .section:nth-child(6) { animation-delay: 0.8s; }
    
    .section-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .section-badge {
      display: inline-block;
      background: var(--bolt-accent);
      color: var(--bolt-dark);
      padding: 0.75rem 1.5rem;
      border-radius: 999px;
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      border: 2px solid var(--bolt-secondary);
      animation: pulse 3s infinite;
    }
    
    .section-title {
      font-size: 3.5rem;
      font-weight: 900;
      margin-bottom: 1.5rem;
      color: var(--text-primary);
      line-height: 1.1;
    }
    
    .section-intro {
      font-size: 1.375rem;
      color: var(--text-secondary);
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.7;
    }
    
    .service-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 3rem;
    }
    
    .service-card {
      background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
      border-radius: var(--radius-lg);
      padding: 3rem;
      border: 2px solid var(--border);
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      overflow: hidden;
    }
    
    .service-card::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(135deg, var(--bolt-primary), var(--bolt-secondary));
      border-radius: var(--radius-lg);
      opacity: 0;
      transition: opacity 0.4s ease;
      z-index: -1;
    }
    
    .service-card:hover {
      transform: translateY(-12px) scale(1.03);
      box-shadow: var(--shadow-xl);
      background: var(--bg-primary);
    }
    
    .service-card:hover::before {
      opacity: 1;
    }
    
    .service-icon {
      width: 96px;
      height: 96px;
      background: linear-gradient(135deg, var(--bolt-primary), var(--bolt-secondary));
      border-radius: var(--radius-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      margin-bottom: 2rem;
      box-shadow: var(--shadow-lg);
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      border: 4px solid white;
    }
    
    .service-card:hover .service-icon {
      transform: scale(1.15) rotate(10deg);
      box-shadow: var(--shadow-xl);
    }
    
    .service-title {
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 1.5rem;
      color: var(--text-primary);
    }
    
    .service-description {
      color: var(--text-secondary);
      margin-bottom: 2.5rem;
      line-height: 1.8;
      font-size: 1.25rem;
    }
    
    .deliverables {
      border-top: 3px solid var(--bg-tertiary);
      padding-top: 2rem;
    }
    
    .deliverables-title {
      font-size: 1.125rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--bolt-primary);
      margin-bottom: 1.5rem;
      font-weight: 800;
    }
    
    .deliverables-list {
      list-style: none;
      display: grid;
      gap: 1rem;
    }
    
    .deliverables-list li {
      padding: 1rem 1.5rem;
      background: var(--bg-secondary);
      border-radius: var(--radius);
      border: 2px solid var(--border);
      position: relative;
      padding-left: 4rem;
      transition: all 0.3s ease;
      font-weight: 600;
    }
    
    .deliverables-list li:hover {
      background: var(--bolt-light);
      border-color: var(--bolt-secondary);
      transform: translateX(8px);
    }
    
    .deliverables-list li::before {
      content: '✓';
      position: absolute;
      left: 1.5rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--success);
      font-weight: bold;
      font-size: 1.5rem;
    }
    
    .content-section {
      background: var(--bg-primary);
      border-radius: var(--radius-lg);
      padding: 4rem 3rem;
      margin-bottom: 4rem;
      box-shadow: var(--shadow-lg);
      border: 2px solid var(--border);
      animation: fadeInScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    
    .content-title {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 2rem;
      color: var(--text-primary);
      display: flex;
      align-items: center;
      gap: 1.5rem;
      justify-content: center;
    }
    
    .content-icon {
      width: 72px;
      height: 72px;
      background: linear-gradient(135deg, var(--bolt-primary), var(--bolt-secondary));
      border-radius: var(--radius-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.25rem;
      box-shadow: var(--shadow-lg);
      border: 3px solid white;
    }
    
    .content-text {
      font-size: 1.375rem;
      color: var(--text-secondary);
      line-height: 1.8;
      margin-bottom: 2rem;
      text-align: center;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .content-bullets {
      list-style: none;
      display: grid;
      gap: 1.5rem;
      max-width: 900px;
      margin: 0 auto;
    }
    
    .content-bullets li {
      padding: 1.5rem 2rem;
      background: var(--bg-secondary);
      border-radius: var(--radius-lg);
      border: 2px solid var(--border);
      position: relative;
      padding-left: 4.5rem;
      transition: all 0.3s ease;
      font-size: 1.25rem;
      line-height: 1.7;
    }
    
    .content-bullets li:hover {
      background: var(--bolt-light);
      border-color: var(--bolt-secondary);
      transform: translateX(12px);
    }
    
    .content-bullets li::before {
      content: '→';
      position: absolute;
      left: 1.75rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--bolt-primary);
      font-weight: bold;
      font-size: 2rem;
    }
    
    .accordion {
      background: var(--bg-primary);
      border: 3px solid var(--border);
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-lg);
    }
    
    .accordion-item {
      border-bottom: 2px solid var(--border);
      transition: all 0.3s ease;
    }
    
    .accordion-item:last-child {
      border-bottom: none;
    }
    
    .accordion-item.active {
      background: var(--bolt-light);
      border-color: var(--bolt-secondary);
    }
    
    .accordion-header {
      width: 100%;
      padding: 2rem 2.5rem;
      background: none;
      border: none;
      text-align: left;
      font-size: 1.5rem;
      font-weight: 800;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.3s ease;
      color: var(--text-primary);
    }
    
    .accordion-header:hover {
      background: var(--bg-secondary);
      color: var(--bolt-primary);
    }
    
    .accordion-icon {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, var(--bolt-accent), var(--bolt-secondary));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      color: var(--bolt-dark);
      font-weight: bold;
      font-size: 1.25rem;
      border: 3px solid var(--bolt-secondary);
      box-shadow: var(--shadow-md);
    }
    
    .accordion-item.active .accordion-icon {
      transform: rotate(90deg) scale(1.2);
      background: linear-gradient(135deg, var(--bolt-primary), var(--bolt-secondary));
      color: white;
      box-shadow: var(--shadow-lg);
    }
    
    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      background: var(--bg-secondary);
    }
    
    .accordion-item.active .accordion-content {
      max-height: 800px;
    }
    
    .accordion-body {
      padding: 2.5rem;
    }
    
    .accordion-list {
      list-style: none;
      display: grid;
      gap: 1rem;
    }
    
    .accordion-list li {
      padding: 1.25rem 1.5rem;
      background: var(--bg-primary);
      border-radius: var(--radius);
      border: 2px solid var(--border);
      position: relative;
      padding-left: 4rem;
      transition: all 0.3s ease;
      font-size: 1.125rem;
      line-height: 1.7;
    }
    
    .accordion-list li:hover {
      background: var(--bolt-light);
      border-color: var(--bolt-secondary);
      transform: translateX(8px);
    }
    
    .accordion-list li::before {
      content: '•';
      position: absolute;
      left: 1.5rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--bolt-primary);
      font-weight: bold;
      font-size: 1.75rem;
    }
    
    .process-section {
      background: linear-gradient(135deg, var(--bolt-primary) 0%, var(--bolt-secondary) 100%);
      color: white;
      border-radius: var(--radius-xl);
      padding: 5rem 4rem;
      margin-bottom: 4rem;
      box-shadow: var(--shadow-xl);
      position: relative;
      overflow: hidden;
    }
    
    .process-section::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
      animation: float 8s ease-in-out infinite;
      pointer-events: none;
    }
    
    .process-title {
      font-size: 4rem;
      font-weight: 900;
      text-align: center;
      margin-bottom: 4rem;
      text-shadow: 0 4px 8px rgba(0,0,0,0.2);
      position: relative;
      z-index: 1;
    }
    
    .process-timeline {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 3rem;
      position: relative;
      z-index: 1;
    }
    
    .process-step {
      background: rgba(255, 255, 255, 0.95);
      color: var(--text-primary);
      border-radius: var(--radius-lg);
      padding: 2.5rem;
      position: relative;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      border: 3px solid rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(10px);
    }
    
    .process-step:hover {
      transform: translateY(-8px) scale(1.03);
      box-shadow: 0 25px 50px rgba(0,0,0,0.2);
      background: white;
      border-color: rgba(255,255,255,0.8);
    }
    
    .process-number {
      position: absolute;
      top: -20px;
      left: 2.5rem;
      width: 56px;
      height: 56px;
      background: linear-gradient(135deg, var(--bolt-primary), var(--bolt-secondary));
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.5rem;
      box-shadow: var(--shadow-xl);
      border: 4px solid white;
      transition: transform 0.3s ease;
    }
    
    .process-step:hover .process-number {
      transform: scale(1.1) rotate(5deg);
    }
    
    .process-step-title {
      font-weight: 800;
      margin-bottom: 1rem;
      color: var(--bolt-dark);
      font-size: 1.5rem;
    }
    
    .process-step-description {
      color: var(--text-secondary);
      line-height: 1.8;
      font-size: 1.125rem;
    }
    
    .cta-section {
      text-align: center;
      padding: 5rem 4rem;
      background: linear-gradient(135deg, var(--text-primary) 0%, var(--bolt-dark) 100%);
      border-radius: var(--radius-xl);
      color: white;
      box-shadow: var(--shadow-xl);
      position: relative;
      overflow: hidden;
    }
    
    .cta-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><pattern id="bolt-pattern" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M20 5L25 15H15L20 25L15 15H25L20 5Z" fill="white" opacity="0.05"/></pattern></defs><rect width="200" height="200" fill="url(%23bolt-pattern)"/></svg>');
      pointer-events: none;
    }
    
    .cta-title {
      font-size: 4rem;
      font-weight: 900;
      margin-bottom: 1.5rem;
      text-shadow: 0 4px 8px rgba(0,0,0,0.3);
      position: relative;
      z-index: 1;
    }
    
    .cta-subtitle {
      font-size: 1.75rem;
      margin-bottom: 3rem;
      opacity: 0.95;
      line-height: 1.5;
      position: relative;
      z-index: 1;
    }
    
    .cta-actions {
      display: flex;
      gap: 2rem;
      justify-content: center;
      flex-wrap: wrap;
      position: relative;
      z-index: 1;
    }
    
    .btn-cta {
      background: linear-gradient(135deg, var(--bolt-primary), var(--bolt-secondary));
      color: white;
      font-weight: 900;
      font-size: 1.5rem;
      padding: 1.5rem 3rem;
      box-shadow: var(--shadow-xl);
      border: 4px solid rgba(255,255,255,0.2);
      position: relative;
      overflow: hidden;
    }
    
    .btn-cta::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
      transition: left 0.6s;
    }
    
    .btn-cta:hover {
      transform: translateY(-6px) scale(1.05);
      box-shadow: 0 30px 60px rgba(0,0,0,0.3);
      filter: brightness(1.15);
    }
    
    .btn-cta:hover::before {
      left: 100%;
    }
    
    .bolt-signature {
      text-align: center;
      margin-top: 5rem;
      padding: 3rem;
      background: var(--bg-primary);
      border-radius: var(--radius-xl);
      border: 3px dashed var(--bolt-secondary);
      box-shadow: var(--shadow-lg);
    }
    
    .bolt-logo {
      display: inline-flex;
      align-items: center;
      gap: 1rem;
      color: var(--bolt-primary);
      font-weight: 900;
      font-size: 1.75rem;
      margin-bottom: 1rem;
    }
    
    .bolt-tagline {
      color: var(--text-muted);
      font-style: italic;
      font-size: 1.125rem;
    }
    
    .loading-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 8rem 2rem;
      color: var(--text-secondary);
    }
    
    .loading-spinner {
      width: 80px;
      height: 80px;
      border: 6px solid var(--border);
      border-top-color: var(--bolt-primary);
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 2rem;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    .error-state {
      text-align: center;
      padding: 5rem 3rem;
      color: var(--error);
      background: #fef2f2;
      border: 3px solid #fecaca;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
    }
    
    @media (max-width: 768px) {
      #app-bolt {
        padding: 1rem;
      }
      
      .hero-section {
        padding: 3rem 2rem;
      }
      
      .hero-title {
        font-size: 3rem;
      }
      
      .hero-subtitle {
        font-size: 1.25rem;
      }
      
      .section {
        padding: 2.5rem 2rem;
      }
      
      .section-title {
        font-size: 2.5rem;
      }
      
      .service-grid {
        grid-template-columns: 1fr;
      }
      
      .process-timeline {
        grid-template-columns: 1fr;
      }
      
      .cta-title {
        font-size: 2.5rem;
      }
      
      .cta-subtitle {
        font-size: 1.25rem;
      }
    }
    
    @media (max-width: 480px) {
      .hero-title {
        font-size: 2.5rem;
      }
      
      .section-title {
        font-size: 2rem;
      }
      
      .cta-title {
        font-size: 2rem;
      }
      
      .btn {
        padding: 1rem 2rem;
        font-size: 1rem;
      }
      
      .service-card,
      .content-section {
        padding: 2rem;
      }
    }
  </style>
</head>
<body>
  <div id="app-bolt">
    <div class="loading-state">
      <div class="loading-spinner"></div>
      <h2>Charging up with Bolt energy...</h2>
      <p>Preparing your AI enablement experience</p>
    </div>
  </div>
  
  <script>
    // Height tracking with performance optimization
    let lastHeight = 0;
    let resizeTimeout;
    let isUpdating = false;
    
    function updateHeight() {
      if (isUpdating) return;
      isUpdating = true;
      
      requestAnimationFrame(() => {
        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.offsetHeight
        );
        
        if (Math.abs(height - lastHeight) > 20) {
          lastHeight = height;
          parent?.postMessage({ type: 'variant:height', value: height }, '*');
        }
        isUpdating = false;
      });
    }
    
    async function loadEnablement() {
      const container = document.getElementById('app-bolt');
      
      try {
        const response = await fetch("https://www.austinwallace.ca/data/enablement.json")
        if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        
        const data = await response.json();
        
        let html = `
          <div class="hero-section">
            <div class="hero-badge">
              <span>⚡</span>
              <span>Bolt-Powered AI Enablement</span>
            </div>
            <h1 class="hero-title">${data.hero.title}</h1>
            <p class="hero-subtitle">${data.hero.subtitle}</p>
            <div class="hero-actions">
              <a href="${data.hero.primary_cta.href}" class="btn btn-primary">
                <span>📧</span>
                <span>${data.hero.primary_cta.label}</span>
              </a>
              <a href="${data.hero.secondary_cta.href}" class="btn btn-secondary">
                <span>${data.hero.secondary_cta.label}</span>
                <span>↓</span>
              </a>
            </div>
          </div>
        `;
        
        // Value propositions
        html += '<div class="value-grid">';
        const icons = ['🎯', '🚀', '⚡', '🔒', '📈'];
        data.value_props.forEach((prop, index) => {
          html += `
            <div class="value-card">
              <div class="value-icon">${icons[index] || '⭐'}</div>
              <h3 class="value-title">${prop.title}</h3>
              <ul class="value-bullets">
          `;
          prop.bullets.forEach(bullet => {
            html += `<li>${bullet}</li>`;
          });
          html += `
              </ul>
            </div>
          `;
        });
        html += '</div>';
        
        // Services section
        const servicesSection = data.sections.find(s => s.id === 'what-i-do');
        if (servicesSection && servicesSection.cards) {
          html += `
            <section class="section">
              <div class="section-header">
                <div class="section-badge">Services</div>
                <h2 class="section-title">${servicesSection.title}</h2>
                <p class="section-intro">Comprehensive AI enablement tailored to your organization's needs</p>
              </div>
              <div class="service-grid">
          `;
          
          const serviceIcons = ['🎯', '⚙️', '🛡️', '🎓'];
          servicesSection.cards.forEach((card, index) => {
            html += `
              <div class="service-card">
                <div class="service-icon">${serviceIcons[index] || '⭐'}</div>
                <h3 class="service-title">${card.title}</h3>
                <p class="service-description">${card.body}</p>
                <div class="deliverables">
                  <h4 class="deliverables-title">Deliverables</h4>
                  <ul class="deliverables-list">
            `;
            card.deliverables.forEach(deliverable => {
              html += `<li>${deliverable}</li>`;
            });
            html += `
                  </ul>
                </div>
              </div>
            `;
          });
          
          html += `
              </div>
            </section>
          `;
        }
        
        // Effectiveness section
        const effectivenessSection = data.sections.find(s => s.id === 'effectiveness');
        if (effectivenessSection) {
          html += `
            <section class="content-section">
              <h2 class="content-title">
                <div class="content-icon">📊</div>
                ${effectivenessSection.title}
              </h2>
          `;
          effectivenessSection.body.forEach(paragraph => {
            html += `<p class="content-text">${paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>`;
          });
          html += '</section>';
        }
        
        // Best practices accordion
        const practicesSection = data.sections.find(s => s.id === 'prompting-best-practices');
        if (practicesSection && practicesSection.items) {
          html += `
            <section class="section">
              <div class="section-header">
                <div class="section-badge">Best Practices</div>
                <h2 class="section-title">${practicesSection.title}</h2>
                <p class="section-intro">Proven strategies for effective AI integration</p>
              </div>
              <div class="accordion">
          `;
          
          practicesSection.items.forEach((item, index) => {
            html += `
              <div class="accordion-item" data-index="${index}">
                <button class="accordion-header">
                  <span>${item.label}</span>
                  <div class="accordion-icon">▶</div>
                </button>
                <div class="accordion-content">
                  <div class="accordion-body">
                    <ul class="accordion-list">
            `;
            item.content.forEach(content => {
              html += `<li>${content}</li>`;
            });
            html += `
                    </ul>
                  </div>
                </div>
              </div>
            `;
          });
          
          html += `
              </div>
            </section>
          `;
        }
        
        // Process section
        const processSection = data.sections.find(s => s.id === 'process');
        if (processSection && processSection.steps) {
          html += `
            <section class="process-section">
              <h2 class="process-title">Engagement Process</h2>
              <div class="process-timeline">
          `;
          
          processSection.steps.forEach((step, index) => {
            const parts = step.split(':');
            const title = parts[0].trim();
            const description = parts.slice(1).join(':').trim();
            
            html += `
              <div class="process-step">
                <div class="process-number">${index + 1}</div>
                <div class="process-step-title">${title}</div>
                <div class="process-step-description">${description}</div>
              </div>
            `;
          });
          
          html += `
              </div>
            </section>
          `;
        }
        
        // CTA section
        if (data.cta) {
          html += `
            <section class="cta-section">
              <h2 class="cta-title">${data.cta.headline}</h2>
              <p class="cta-subtitle">${data.cta.subhead}</p>
              <div class="cta-actions">
          `;
          data.cta.actions.forEach(action => {
            html += `
              <a href="${action.href}" class="btn btn-cta">
                <span>🚀</span>
                <span>${action.label}</span>
              </a>
            `;
          });
          html += `
              </div>
            </section>
          `;
        }
        
        html += `
          <div class="bolt-signature">
            <div class="bolt-logo">
              <span>⚡</span>
              <span>Crafted with Bolt</span>
            </div>
            <p class="bolt-tagline">Lightning-fast development meets beautiful design</p>
          </div>
        `;
        
        container.innerHTML = html;
        
        // Add accordion functionality
        document.querySelectorAll('.accordion-header').forEach(header => {
          header.addEventListener('click', () => {
            const item = header.closest('.accordion-item');
            const isActive = item.classList.contains('active');
            
            // Close all other items
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
              if (otherItem !== item) {
                otherItem.classList.remove('active');
              }
            });
            
            // Toggle current item
            item.classList.toggle('active', !isActive);
            
            // Update height after animation
            setTimeout(() => {
              updateHeight();
            }, 500);
          });
        });
        
        // Update height after content loads and animations complete
        setTimeout(() => {
          updateHeight();
        }, 300);
        
        // Add intersection observer for performance
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.animationPlayState = 'running';
            }
          });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.section, .value-card').forEach(element => {
          observer.observe(element);
        });
        
      } catch (error) {
        console.error('Error loading enablement data:', error);
        container.innerHTML = `
          <div class="error-state">
            <h2>⚠️ Unable to Load Content</h2>
            <p>There was an error fetching the enablement data.</p>
            <p style="font-size: 0.875rem; margin-top: 1rem; opacity: 0.7;">Error: ${error.message}</p>
          </div>
        `;
      }
    }
    
    // Initialize
    loadEnablement();
    
    // Optimized resize handling
    let windowWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      if (window.innerWidth !== windowWidth) {
        windowWidth = window.innerWidth;
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          updateHeight();
        }, 250);
      }
    });
  </script>
</body>
</html>
</file>

<file path="public/variants/bolt/index.html">
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Austin Wallace - Resume (Bolt Variant)</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    :root {
      --bolt-primary: #f59e0b;
      --bolt-secondary: #fbbf24;
      --bolt-accent: #fef3c7;
      --bolt-dark: #92400e;
      --text-primary: #111827;
      --text-secondary: #6b7280;
      --text-muted: #9ca3af;
      --bg-primary: #ffffff;
      --bg-secondary: #f9fafb;
      --bg-tertiary: #f3f4f6;
      --border: #e5e7eb;
      --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
      --radius: 12px;
      --radius-lg: 16px;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
      color: var(--text-primary);
      background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
      line-height: 1.6;
      min-height: 100vh;
    }
    
    #app-bolt {
      max-width: 1000px;
      margin: 0 auto;
      padding: 2rem;
      animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeInScale {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    @keyframes shimmer {
      0% {
        background-position: -200px 0;
      }
      100% {
        background-position: calc(200px + 100%) 0;
      }
    }
    
    .hero-section {
      background: var(--bg-primary);
      border-radius: var(--radius-lg);
      padding: 3rem;
      margin-bottom: 2rem;
      box-shadow: var(--shadow-xl);
      border: 1px solid var(--border);
      position: relative;
      overflow: hidden;
      animation: fadeInScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
    }
    
    .hero-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--bolt-primary), var(--bolt-secondary), var(--bolt-primary));
      background-size: 200px 100%;
      animation: shimmer 2s infinite linear;
    }
    
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: linear-gradient(135deg, var(--bolt-primary), var(--bolt-secondary));
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 999px;
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      box-shadow: var(--shadow-md);
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.05);
        opacity: 0.9;
      }
    }
    
    .hero-name {
      font-size: 3.5rem;
      font-weight: 900;
      line-height: 1.1;
      margin-bottom: 0.75rem;
      background: linear-gradient(135deg, var(--bolt-primary) 0%, var(--bolt-secondary) 50%, var(--bolt-dark) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      position: relative;
    }
    
    .hero-title {
      font-size: 1.5rem;
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
      font-weight: 500;
    }
    
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      list-style: none;
    }
    
    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      background: var(--bg-secondary);
      border-radius: var(--radius);
      border: 1px solid var(--border);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    .contact-item:hover {
      background: var(--bg-primary);
      border-color: var(--bolt-primary);
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }
    
    .contact-icon {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--bolt-accent);
      border-radius: 8px;
      font-size: 1rem;
    }
    
    .contact-item a {
      color: var(--text-primary);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;
    }
    
    .contact-item:hover a {
      color: var(--bolt-primary);
    }
    
    .section {
      background: var(--bg-primary);
      border-radius: var(--radius-lg);
      padding: 2rem;
      margin-bottom: 2rem;
      box-shadow: var(--shadow-lg);
      border: 1px solid var(--border);
      position: relative;
      overflow: hidden;
      animation: fadeInScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    
    .section:nth-child(2) { animation-delay: 0.1s; }
    .section:nth-child(3) { animation-delay: 0.2s; }
    .section:nth-child(4) { animation-delay: 0.3s; }
    .section:nth-child(5) { animation-delay: 0.4s; }
    
    .section-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid var(--bg-tertiary);
    }
    
    .section-icon {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, var(--bolt-primary), var(--bolt-secondary));
      border-radius: var(--radius);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      box-shadow: var(--shadow-md);
    }
    
    .section-title {
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--text-primary);
    }
    
    .summary-text {
      font-size: 1.125rem;
      color: var(--text-secondary);
      line-height: 1.8;
      max-width: 75ch;
    }
    
    .experience-timeline {
      position: relative;
      padding-left: 2rem;
    }
    
    .experience-timeline::before {
      content: '';
      position: absolute;
      left: 15px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(180deg, var(--bolt-primary), var(--bolt-secondary));
    }
    
    .experience-item {
      position: relative;
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: var(--bg-secondary);
      border-radius: var(--radius);
      border: 1px solid var(--border);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    .experience-item:hover {
      background: var(--bg-primary);
      transform: translateX(8px);
      box-shadow: var(--shadow-lg);
      border-color: var(--bolt-primary);
    }
    
    .experience-item::before {
      content: '';
      position: absolute;
      left: -2.25rem;
      top: 1.5rem;
      width: 12px;
      height: 12px;
      background: var(--bolt-primary);
      border-radius: 50%;
      border: 3px solid var(--bg-primary);
      box-shadow: 0 0 0 2px var(--bolt-primary);
    }
    
    .experience-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 0.75rem;
    }
    
    .experience-role {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text-primary);
    }
    
    .experience-company {
      color: var(--bolt-primary);
      font-weight: 600;
    }
    
    .experience-date {
      background: var(--bolt-accent);
      color: var(--bolt-dark);
      padding: 0.375rem 0.75rem;
      border-radius: 999px;
      font-size: 0.875rem;
      font-weight: 600;
      border: 1px solid var(--bolt-secondary);
    }
    
    .experience-summary {
      color: var(--text-secondary);
      margin-bottom: 1rem;
      font-style: italic;
    }
    
    .highlights {
      list-style: none;
    }
    
    .highlights li {
      position: relative;
      padding: 0.5rem 0 0.5rem 2rem;
      color: var(--text-secondary);
      transition: all 0.2s;
    }
    
    .highlights li:hover {
      color: var(--text-primary);
      transform: translateX(4px);
    }
    
    .highlights li::before {
      content: '⚡';
      position: absolute;
      left: 0;
      top: 0.5rem;
      color: var(--bolt-primary);
      font-size: 1.125rem;
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }
    
    .project-card {
      background: var(--bg-secondary);
      border-radius: var(--radius);
      padding: 1.5rem;
      border: 1px solid var(--border);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      overflow: hidden;
    }
    
    .project-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--bolt-primary), var(--bolt-secondary));
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
    
    .project-card:hover {
      background: var(--bg-primary);
      transform: translateY(-4px) scale(1.02);
      box-shadow: var(--shadow-xl);
      border-color: var(--bolt-primary);
    }
    
    .project-card:hover::before {
      transform: scaleX(1);
    }
    
    .project-name {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .project-icon {
      font-size: 1.125rem;
    }
    
    .project-link {
      color: var(--bolt-primary);
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      margin-bottom: 0.75rem;
      transition: all 0.2s;
    }
    
    .project-link:hover {
      color: var(--bolt-dark);
      transform: translateX(2px);
    }
    
    .project-description {
      color: var(--text-secondary);
      margin-bottom: 1rem;
      line-height: 1.7;
    }
    
    .project-keywords {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    
    .keyword-tag {
      background: var(--bolt-accent);
      color: var(--bolt-dark);
      padding: 0.25rem 0.75rem;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 600;
      border: 1px solid var(--bolt-secondary);
      transition: all 0.2s;
    }
    
    .keyword-tag:hover {
      background: var(--bolt-secondary);
      transform: scale(1.05);
    }
    
    .skills-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }
    
    .skill-category {
      background: var(--bg-secondary);
      border-radius: var(--radius);
      padding: 1.5rem;
      border: 1px solid var(--border);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
    }
    
    .skill-category:hover {
      background: var(--bg-primary);
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
      border-color: var(--bolt-primary);
    }
    
    .skill-name {
      font-size: 1.125rem;
      font-weight: 700;
      color: var(--bolt-primary);
      margin-bottom: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .skill-keywords {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    
    .skill-keyword {
      background: var(--bg-primary);
      color: var(--text-secondary);
      padding: 0.375rem 0.75rem;
      border-radius: 999px;
      font-size: 0.875rem;
      border: 1px solid var(--border);
      transition: all 0.2s;
    }
    
    .skill-keyword:hover {
      background: var(--bolt-accent);
      color: var(--bolt-dark);
      border-color: var(--bolt-secondary);
      transform: scale(1.05);
    }
    
    .loading-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 4rem;
      color: var(--text-secondary);
    }
    
    .loading-spinner {
      width: 48px;
      height: 48px;
      border: 3px solid var(--border);
      border-top-color: var(--bolt-primary);
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 1rem;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    .error-state {
      text-align: center;
      padding: 3rem;
      color: #ef4444;
      background: #fef2f2;
      border: 1px solid #fecaca;
      border-radius: var(--radius);
    }
    
    .bolt-signature {
      text-align: center;
      margin-top: 3rem;
      padding: 1rem;
      color: var(--text-muted);
      font-size: 0.875rem;
      border-top: 1px solid var(--border);
    }
    
    .bolt-logo {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--bolt-primary);
      font-weight: 600;
    }
    
    @media (max-width: 768px) {
      #app-bolt {
        padding: 1rem;
      }
      
      .hero-section {
        padding: 2rem;
      }
      
      .hero-name {
        font-size: 2.5rem;
      }
      
      .hero-title {
        font-size: 1.25rem;
      }
      
      .contact-grid {
        grid-template-columns: 1fr;
      }
      
      .section {
        padding: 1.5rem;
      }
      
      .experience-timeline {
        padding-left: 1.5rem;
      }
      
      .projects-grid {
        grid-template-columns: 1fr;
      }
      
      .skills-container {
        grid-template-columns: 1fr;
      }
    }
    
    @media (max-width: 480px) {
      .hero-name {
        font-size: 2rem;
      }
      
      .section-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }
    }
  </style>
</head>
<body>
  <div id="app-bolt">
    <div class="loading-state">
      <div class="loading-spinner"></div>
      <p>Loading resume with Bolt magic...</p>
    </div>
  </div>
  
  <script>
    // Height tracking with debouncing
    let lastHeight = 0;
    let resizeTimeout;
    let isUpdating = false;
    
    function updateHeight() {
      if (isUpdating) return;
      isUpdating = true;
      
      requestAnimationFrame(() => {
        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.offsetHeight
        );
        
        if (Math.abs(height - lastHeight) > 10) {
          lastHeight = height;
          parent?.postMessage({ type: 'variant:height', value: height }, '*');
        }
        isUpdating = false;
      });
    }
    
    async function loadResume() {
      const container = document.getElementById('app-bolt');
      
      try {
        const response = await fetch('https://www.austinwallace.ca/data/resume.json');
        if (!response.ok) throw new Error('Failed to fetch resume data');
        
        const resume = await response.json();
        
        let html = `
          <div class="hero-section">
            <div class="hero-badge">
              <span>⚡</span>
              <span>Built with Bolt</span>
            </div>
            <h1 class="hero-name">${resume.basics?.name || 'Your Name'}</h1>
            <p class="hero-title">${resume.basics?.label || 'Professional Title'}</p>
            <ul class="contact-grid">
        `;
        
        // Contact information
        if (resume.basics?.email) {
          html += `
            <li class="contact-item">
              <div class="contact-icon">📧</div>
              <a href="mailto:${resume.basics.email}">${resume.basics.email}</a>
            </li>
          `;
        }
        
        if (resume.basics?.location?.city) {
          html += `
            <li class="contact-item">
              <div class="contact-icon">📍</div>
              <span>${resume.basics.location.city}</span>
            </li>
          `;
        }
        
        const github = resume.basics?.profiles?.find(p => p.network?.toLowerCase() === 'github');
        if (github) {
          html += `
            <li class="contact-item">
              <div class="contact-icon">💻</div>
              <a href="${github.url}" target="_blank" rel="noopener">GitHub</a>
            </li>
          `;
        }
        
        const linkedin = resume.basics?.profiles?.find(p => p.network?.toLowerCase() === 'linkedin');
        if (linkedin) {
          html += `
            <li class="contact-item">
              <div class="contact-icon">💼</div>
              <a href="${linkedin.url}" target="_blank" rel="noopener">LinkedIn</a>
            </li>
          `;
        }
        
        html += `
            </ul>
          </div>
        `;
        
        // Summary section
        if (resume.basics?.summary) {
          html += `
            <section class="section">
              <div class="section-header">
                <div class="section-icon">📋</div>
                <h2 class="section-title">Summary</h2>
              </div>
              <p class="summary-text">${resume.basics.summary}</p>
            </section>
          `;
        }
        
        // Experience section
        if (resume.work?.length) {
          html += `
            <section class="section">
              <div class="section-header">
                <div class="section-icon">💼</div>
                <h2 class="section-title">Experience</h2>
              </div>
              <div class="experience-timeline">
          `;
          
          resume.work.forEach(job => {
            html += `
              <div class="experience-item">
                <div class="experience-header">
                  <div>
                    <div class="experience-role">${job.position}</div>
                    <div class="experience-company">@ ${job.name}</div>
                  </div>
                  <div class="experience-date">
                    ${job.startDate}${job.endDate ? ` – ${job.endDate}` : ' – Present'}
                  </div>
                </div>
            `;
            
            if (job.summary) {
              html += `<p class="experience-summary">${job.summary}</p>`;
            }
            
            if (job.highlights?.length) {
              html += '<ul class="highlights">';
              job.highlights.forEach(highlight => {
                html += `<li>${highlight}</li>`;
              });
              html += '</ul>';
            }
            
            html += '</div>';
          });
          
          html += `
              </div>
            </section>
          `;
        }
        
        // Projects section
        if (resume.projects?.length) {
          html += `
            <section class="section">
              <div class="section-header">
                <div class="section-icon">🚀</div>
                <h2 class="section-title">Projects</h2>
              </div>
              <div class="projects-grid">
          `;
          
          resume.projects.forEach(project => {
            html += `
              <div class="project-card">
                <div class="project-name">
                  <span class="project-icon">🔧</span>
                  ${project.name}
                </div>
            `;
            
            if (project.url) {
              html += `
                <a href="${project.url}" class="project-link" target="_blank" rel="noopener">
                  ${project.url} →
                </a>
              `;
            }
            
            if (project.description) {
              html += `<p class="project-description">${project.description}</p>`;
            }
            
            if (project.keywords?.length) {
              html += '<div class="project-keywords">';
              project.keywords.forEach(keyword => {
                html += `<span class="keyword-tag">${keyword}</span>`;
              });
              html += '</div>';
            }
            
            html += '</div>';
          });
          
          html += `
              </div>
            </section>
          `;
        }
        
        // Skills section
        if (resume.skills?.length) {
          html += `
            <section class="section">
              <div class="section-header">
                <div class="section-icon">⚡</div>
                <h2 class="section-title">Skills</h2>
              </div>
              <div class="skills-container">
          `;
          
          resume.skills.forEach(skill => {
            html += `
              <div class="skill-category">
                <div class="skill-name">
                  <span>🔥</span>
                  ${skill.name}
                </div>
                <div class="skill-keywords">
            `;
            
            if (skill.keywords?.length) {
              skill.keywords.forEach(keyword => {
                html += `<span class="skill-keyword">${keyword}</span>`;
              });
            }
            
            html += `
                </div>
              </div>
            `;
          });
          
          html += `
              </div>
            </section>
          `;
        }
        
        html += `
          <div class="bolt-signature">
            <div class="bolt-logo">
              <span>⚡</span>
              <span>Crafted with Bolt</span>
            </div>
            <p>This variant showcases modern web development with smooth animations and responsive design</p>
          </div>
        `;
        
        container.innerHTML = html;
        
        // Update height after content loads and animations settle
        setTimeout(() => {
          updateHeight();
        }, 100);
        
        // Add intersection observer for staggered animations
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.animationPlayState = 'running';
            }
          });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.section').forEach(section => {
          observer.observe(section);
        });
        
      } catch (error) {
        console.error('Error loading resume:', error);
        container.innerHTML = `
          <div class="error-state">
            <h2>⚠️ Error Loading Resume</h2>
            <p>Unable to fetch resume data. Please try again later.</p>
            <p style="font-size: 0.875rem; margin-top: 1rem;">Error: ${error.message}</p>
          </div>
        `;
      }
    }
    
    // Initialize
    loadResume();
    
    // Handle window resize
    let windowWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      if (window.innerWidth !== windowWidth) {
        windowWidth = window.innerWidth;
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          updateHeight();
        }, 150);
      }
    });
  </script>
</body>
</html>
</file>

<file path="public/variants/claude-code/enablement/index.html">
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Enablement - Claude Code Variant</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    :root {
      --claude-primary: #D97706;
      --claude-secondary: #F59E0B;
      --claude-accent: #FCD34D;
      --text-primary: #111827;
      --text-secondary: #6B7280;
      --bg-primary: #FFFFFF;
      --bg-secondary: #F9FAFB;
      --border: #E5E7EB;
      --success: #10B981;
      --radius: 12px;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
      color: var(--text-primary);
      background: var(--bg-primary);
      line-height: 1.6;
    }
    
    #app-claude-code {
      max-width: 1400px;
      margin: 0 auto;
      padding: 2rem;
    }
    
    .hero-section {
      text-align: center;
      padding: 4rem 2rem;
      background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
      border-radius: var(--radius);
      margin-bottom: 3rem;
      border: 1px solid var(--border);
    }
    
    .hero-badge {
      display: inline-block;
      background: var(--claude-primary);
      color: white;
      padding: 0.25rem 1rem;
      border-radius: 999px;
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 1rem;
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.8; }
    }
    
    .hero-title {
      font-size: 3rem;
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, var(--claude-primary), var(--claude-secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .hero-subtitle {
      font-size: 1.25rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto 2rem;
    }
    
    .hero-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }
    
    .btn {
      padding: 0.75rem 2rem;
      border-radius: var(--radius);
      font-weight: 600;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s ease;
      border: 2px solid transparent;
    }
    
    .btn-primary {
      background: var(--claude-primary);
      color: white;
    }
    
    .btn-primary:hover {
      background: var(--claude-secondary);
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(217, 119, 6, 0.3);
    }
    
    .btn-secondary {
      background: var(--bg-primary);
      color: var(--claude-primary);
      border-color: var(--claude-primary);
    }
    
    .btn-secondary:hover {
      background: var(--claude-primary);
      color: white;
    }
    
    .value-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-bottom: 4rem;
    }
    
    .value-card {
      background: var(--bg-primary);
      border: 2px solid var(--border);
      border-radius: var(--radius);
      padding: 1.5rem;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    
    .value-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--claude-primary), var(--claude-secondary));
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
    
    .value-card:hover {
      border-color: var(--claude-primary);
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    
    .value-card:hover::before {
      transform: scaleX(1);
    }
    
    .value-icon {
      width: 48px;
      height: 48px;
      background: var(--claude-accent);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    .value-title {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 0.75rem;
      color: var(--text-primary);
    }
    
    .value-bullets {
      list-style: none;
    }
    
    .value-bullets li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--text-secondary);
    }
    
    .value-bullets li::before {
      content: '→';
      position: absolute;
      left: 0;
      color: var(--claude-primary);
      font-weight: bold;
    }
    
    .section {
      margin-bottom: 4rem;
    }
    
    .section-header {
      margin-bottom: 2rem;
      text-align: center;
    }
    
    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: var(--text-primary);
    }
    
    .section-intro {
      color: var(--text-secondary);
      max-width: 700px;
      margin: 0 auto;
    }
    
    .service-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .service-card {
      background: var(--bg-secondary);
      border-radius: var(--radius);
      padding: 2rem;
      border: 1px solid var(--border);
      transition: all 0.3s ease;
    }
    
    .service-card:hover {
      background: var(--bg-primary);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
      transform: translateY(-4px);
    }
    
    .service-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--claude-primary);
    }
    
    .service-description {
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
      line-height: 1.7;
    }
    
    .deliverables {
      border-top: 1px solid var(--border);
      padding-top: 1rem;
    }
    
    .deliverables-title {
      font-size: 0.875rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-secondary);
      margin-bottom: 0.75rem;
    }
    
    .deliverables-list {
      list-style: none;
    }
    
    .deliverables-list li {
      padding: 0.25rem 0;
      padding-left: 1.25rem;
      position: relative;
      color: var(--text-primary);
    }
    
    .deliverables-list li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--success);
      font-weight: bold;
    }
    
    .accordion {
      background: var(--bg-primary);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      overflow: hidden;
    }
    
    .accordion-item {
      border-bottom: 1px solid var(--border);
    }
    
    .accordion-item:last-child {
      border-bottom: none;
    }
    
    .accordion-header {
      width: 100%;
      padding: 1.25rem 1.5rem;
      background: none;
      border: none;
      text-align: left;
      font-size: 1.125rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.3s ease;
    }
    
    .accordion-header:hover {
      background: var(--bg-secondary);
      color: var(--claude-primary);
    }
    
    .accordion-icon {
      transition: transform 0.3s ease;
      color: var(--claude-primary);
    }
    
    .accordion-item.active .accordion-icon {
      transform: rotate(90deg);
    }
    
    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
      background: var(--bg-secondary);
    }
    
    .accordion-item.active .accordion-content {
      max-height: 500px;
    }
    
    .accordion-body {
      padding: 1.5rem;
    }
    
    .process-timeline {
      position: relative;
      padding-left: 2rem;
    }
    
    .process-timeline::before {
      content: '';
      position: absolute;
      left: 15px;
      top: 20px;
      bottom: 20px;
      width: 2px;
      background: linear-gradient(180deg, var(--claude-primary), var(--claude-secondary));
    }
    
    .process-step {
      position: relative;
      padding: 1.5rem;
      margin-bottom: 2rem;
      background: var(--bg-secondary);
      border-radius: var(--radius);
      border: 1px solid var(--border);
    }
    
    .process-step::before {
      content: attr(data-step);
      position: absolute;
      left: -2rem;
      top: 1.5rem;
      width: 30px;
      height: 30px;
      background: var(--claude-primary);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 0.875rem;
    }
    
    .process-title {
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }
    
    .process-description {
      color: var(--text-secondary);
    }
    
    .cta-section {
      text-align: center;
      padding: 4rem 2rem;
      background: linear-gradient(135deg, var(--claude-primary), var(--claude-secondary));
      border-radius: var(--radius);
      color: white;
    }
    
    .cta-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    
    .cta-subtitle {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      opacity: 0.95;
    }
    
    .cta-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }
    
    .btn-cta {
      background: white;
      color: var(--claude-primary);
      font-weight: 700;
    }
    
    .btn-cta:hover {
      background: var(--bg-secondary);
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }
    
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2rem;
      }
      
      .section-title {
        font-size: 1.75rem;
      }
      
      #app-claude-code {
        padding: 1rem;
      }
    }
  </style>
</head>
<body>
  <div id="app-claude-code">
    <div class="hero-section">
      <span class="hero-badge">🤖 Claude Code Enhanced</span>
      <h1 class="hero-title">AI Enablement that Drives Effectiveness</h1>
      <p class="hero-subtitle">Ship faster and safer, with workflows your team will actually use.</p>
      <div class="hero-actions">
        <a href="mailto:you@example.com" class="btn btn-primary">
          <span>📧</span>
          <span>Email me</span>
        </a>
        <a href="#process" class="btn btn-secondary">
          <span>See approach</span>
          <span>↓</span>
        </a>
      </div>
    </div>
    
    <div class="value-grid" id="value-props">
      <!-- Value props will be inserted here -->
    </div>
    
    <section class="section" id="services">
      <div class="section-header">
        <h2 class="section-title">How I Help</h2>
        <p class="section-intro">Comprehensive AI enablement services tailored to your organization's needs</p>
      </div>
      <div class="service-grid" id="service-cards">
        <!-- Service cards will be inserted here -->
      </div>
    </section>
    
    <section class="section" id="best-practices">
      <div class="section-header">
        <h2 class="section-title">Best Practices</h2>
        <p class="section-intro">Proven approaches for effective AI integration</p>
      </div>
      <div class="accordion" id="practices-accordion">
        <!-- Accordion items will be inserted here -->
      </div>
    </section>
    
    <section class="section" id="process">
      <div class="section-header">
        <h2 class="section-title">Engagement Process</h2>
        <p class="section-intro">A structured approach to AI transformation</p>
      </div>
      <div class="process-timeline" id="process-timeline">
        <!-- Process steps will be inserted here -->
      </div>
    </section>
    
    <div class="cta-section" id="cta">
      <h2 class="cta-title">Ready to Transform Your Team?</h2>
      <p class="cta-subtitle">Let's discuss how AI enablement can accelerate your organization</p>
      <div class="cta-actions">
        <a href="mailto:you@example.com" class="btn btn-cta">Get Started Today</a>
      </div>
    </div>
  </div>
  
  <script>
    // Height tracking
    let lastHeight = 0;
    let resizeTimeout;
    let isUpdating = false;
    
    function updateHeight() {
      if (isUpdating) return;
      isUpdating = true;
      
      setTimeout(() => {
        // Use body's offset height which is more stable
        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.offsetHeight
        );
        
        // Only send if height actually changed by more than 5px
        if (Math.abs(height - lastHeight) > 5) {
          lastHeight = height;
          parent?.postMessage({ type: 'variant:height', value: height }, '*');
        }
        isUpdating = false;
      }, 0);
    }
    
    async function init() {
      try {
        const response = await fetch("https://www.austinwallace.ca/data/enablement.json")
        const data = await response.json();
        
        // Render value props
        const valueGrid = document.getElementById('value-props');
        data.value_props.forEach((prop, index) => {
          const card = document.createElement('div');
          card.className = 'value-card';
          card.innerHTML = `
            <div class="value-icon">${['🎯', '🚀', '⚡', '🔒', '📈'][index]}</div>
            <h3 class="value-title">${prop.title}</h3>
            <ul class="value-bullets">
              ${prop.bullets.map(b => `<li>${b}</li>`).join('')}
            </ul>
          `;
          valueGrid.appendChild(card);
        });
        
        // Render service cards
        const serviceGrid = document.getElementById('service-cards');
        const servicesSection = data.sections.find(s => s.id === 'what-i-do');
        if (servicesSection && servicesSection.cards) {
          servicesSection.cards.forEach(card => {
            const serviceCard = document.createElement('div');
            serviceCard.className = 'service-card';
            serviceCard.innerHTML = `
              <h3 class="service-title">${card.title}</h3>
              <p class="service-description">${card.body}</p>
              <div class="deliverables">
                <h4 class="deliverables-title">Deliverables</h4>
                <ul class="deliverables-list">
                  ${card.deliverables.map(d => `<li>${d}</li>`).join('')}
                </ul>
              </div>
            `;
            serviceGrid.appendChild(serviceCard);
          });
        }
        
        // Render best practices accordion
        const accordion = document.getElementById('practices-accordion');
        const practicesSection = data.sections.find(s => s.id === 'prompting-best-practices');
        if (practicesSection && practicesSection.items) {
          practicesSection.items.forEach((item, index) => {
            const accordionItem = document.createElement('div');
            accordionItem.className = 'accordion-item';
            accordionItem.innerHTML = `
              <button class="accordion-header">
                <span>${item.label}</span>
                <span class="accordion-icon">▶</span>
              </button>
              <div class="accordion-content">
                <div class="accordion-body">
                  <ul>
                    ${item.content.map(c => `<li>${c}</li>`).join('')}
                  </ul>
                </div>
              </div>
            `;
            
            const header = accordionItem.querySelector('.accordion-header');
            header.addEventListener('click', () => {
              accordionItem.classList.toggle('active');
            });
            
            accordion.appendChild(accordionItem);
          });
        }
        
        // Render process timeline
        const timeline = document.getElementById('process-timeline');
        const processSection = data.sections.find(s => s.id === 'process');
        if (processSection && processSection.steps) {
          processSection.steps.forEach((step, index) => {
            const stepElement = document.createElement('div');
            stepElement.className = 'process-step';
            stepElement.setAttribute('data-step', index + 1);
            
            const parts = step.split(':');
            stepElement.innerHTML = `
              <div class="process-title">${parts[0]}</div>
              <div class="process-description">${parts.slice(1).join(':').trim()}</div>
            `;
            
            timeline.appendChild(stepElement);
          });
        }
        
        // Update CTA with actual data
        if (data.cta) {
          const ctaTitle = document.querySelector('.cta-title');
          const ctaSubtitle = document.querySelector('.cta-subtitle');
          const ctaButton = document.querySelector('.btn-cta');
          
          if (ctaTitle) ctaTitle.textContent = data.cta.headline;
          if (ctaSubtitle) ctaSubtitle.textContent = data.cta.subhead;
          if (ctaButton && data.cta.actions && data.cta.actions[0]) {
            ctaButton.textContent = data.cta.actions[0].label;
            ctaButton.href = data.cta.actions[0].href;
          }
        }
        
        // Post initial height to parent for iframe resizing
        requestAnimationFrame(() => {
          updateHeight();
        });
        
      } catch (error) {
        console.error('Error loading enablement data:', error);
        document.getElementById('app-claude-code').innerHTML = `
          <div style="text-align: center; padding: 2rem; color: #ef4444;">
            <h2>Error Loading Content</h2>
            <p>Unable to fetch enablement data. Please try again later.</p>
          </div>
        `;
      }
    }
    
    // Initialize on load
    init();
    
    // Only update on actual window resize (not scrolling)
    let windowWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      // Check if it's an actual resize, not just a scroll
      if (window.innerWidth !== windowWidth) {
        windowWidth = window.innerWidth;
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          requestAnimationFrame(updateHeight);
        }, 100);
      }
    });
  </script>
</body>
</html>
</file>

<file path="public/variants/claude-code/index.html">
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resume - Claude Code Variant</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    :root {
      --claude-primary: #D97706;
      --claude-secondary: #F59E0B;
      --claude-accent: #FCD34D;
      --text-primary: #111827;
      --text-secondary: #6B7280;
      --bg-primary: #FFFFFF;
      --bg-secondary: #F9FAFB;
      --border: #E5E7EB;
      --success: #10B981;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
      color: var(--text-primary);
      background: var(--bg-primary);
      line-height: 1.6;
    }
    
    #app-claude-code {
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem;
      animation: fadeIn 0.5s ease-out;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .header {
      border-bottom: 3px solid var(--claude-primary);
      padding-bottom: 1.5rem;
      margin-bottom: 2rem;
    }
    
    .name {
      font-size: 2.5rem;
      font-weight: 800;
      background: linear-gradient(135deg, var(--claude-primary), var(--claude-secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 0.5rem;
    }
    
    .title {
      font-size: 1.25rem;
      color: var(--text-secondary);
      margin-bottom: 1rem;
    }
    
    .contact-info {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      list-style: none;
    }
    
    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .contact-icon {
      width: 20px;
      height: 20px;
      color: var(--claude-primary);
    }
    
    .contact-item a {
      color: var(--text-primary);
      text-decoration: none;
      transition: color 0.2s;
    }
    
    .contact-item a:hover {
      color: var(--claude-primary);
    }
    
    .section {
      margin-bottom: 2.5rem;
      padding: 1.5rem;
      background: var(--bg-secondary);
      border-radius: 12px;
      border: 1px solid var(--border);
      position: relative;
      overflow: hidden;
    }
    
    .section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--claude-primary), var(--claude-secondary));
    }
    
    .section-title {
      font-size: 1.125rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--claude-primary);
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .section-icon {
      font-size: 1.25rem;
    }
    
    .summary {
      color: var(--text-secondary);
      line-height: 1.8;
      max-width: 70ch;
    }
    
    .experience-item {
      margin-bottom: 1.5rem;
      padding-left: 1.5rem;
      border-left: 2px solid var(--claude-primary);
    }
    
    .experience-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 0.5rem;
    }
    
    .experience-title {
      font-weight: 700;
      color: var(--text-primary);
    }
    
    .experience-company {
      color: var(--claude-primary);
      font-weight: 500;
    }
    
    .experience-date {
      color: var(--text-secondary);
      font-size: 0.875rem;
      background: var(--bg-primary);
      padding: 0.25rem 0.75rem;
      border-radius: 999px;
      border: 1px solid var(--border);
    }
    
    .experience-description {
      color: var(--text-secondary);
      margin-bottom: 0.75rem;
    }
    
    .highlights {
      list-style: none;
      padding: 0;
    }
    
    .highlights li {
      padding: 0.5rem 0;
      padding-left: 1.5rem;
      position: relative;
      color: var(--text-secondary);
    }
    
    .highlights li::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: var(--claude-primary);
      font-weight: bold;
    }
    
    .project-item {
      margin-bottom: 1rem;
      padding: 1rem;
      background: var(--bg-primary);
      border-radius: 8px;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    
    .project-item:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .project-name {
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 0.25rem;
    }
    
    .project-link {
      color: var(--claude-primary);
      text-decoration: none;
      font-size: 0.875rem;
    }
    
    .project-link:hover {
      text-decoration: underline;
    }
    
    .project-description {
      color: var(--text-secondary);
      margin-top: 0.5rem;
      font-size: 0.95rem;
    }
    
    .project-keywords {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 0.75rem;
    }
    
    .keyword {
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;
      background: var(--claude-accent);
      color: var(--claude-primary);
      border-radius: 999px;
      font-weight: 500;
    }
    
    .skills-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }
    
    .skill-item {
      padding: 0.5rem 1rem;
      background: var(--bg-primary);
      border: 2px solid var(--border);
      border-radius: 999px;
      font-weight: 500;
      transition: all 0.2s;
    }
    
    .skill-item:hover {
      border-color: var(--claude-primary);
      color: var(--claude-primary);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(217, 119, 6, 0.1);
    }
    
    .loading {
      text-align: center;
      padding: 3rem;
      color: var(--text-secondary);
    }
    
    .loading-spinner {
      display: inline-block;
      width: 40px;
      height: 40px;
      border: 3px solid var(--border);
      border-top-color: var(--claude-primary);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    @media (max-width: 768px) {
      #app-claude-code {
        padding: 1rem;
      }
      
      .name {
        font-size: 2rem;
      }
      
      .section {
        padding: 1rem;
      }
    }
  </style>
</head>
<body>
  <div id="app-claude-code">
    <div class="loading">
      <div class="loading-spinner"></div>
      <p>Loading resume...</p>
    </div>
  </div>
  
  <script>
    // Height tracking
    let lastHeight = 0;
    let resizeTimeout;
    let isUpdating = false;
    
    function updateHeight() {
      if (isUpdating) return;
      isUpdating = true;
      
      setTimeout(() => {
        // Use body's offset height which is more stable
        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.offsetHeight
        );
        
        // Only send if height actually changed by more than 5px
        if (Math.abs(height - lastHeight) > 5) {
          lastHeight = height;
          parent?.postMessage({ type: 'variant:height', value: height }, '*');
        }
        isUpdating = false;
      }, 0);
    }
    
    async function init() {
      const container = document.getElementById('app-claude-code');
      
      try {
        const response = await fetch('https://www.austinwallace.ca/data/resume.json');
        const resume = await response.json();
        
        // Build HTML
        let html = `
          <header class="header">
            <h1 class="name">${resume.basics?.name || 'Your Name'}</h1>
            <p class="title">${resume.basics?.label || 'Professional Title'}</p>
            <ul class="contact-info">
        `;
        
        // Contact info
        if (resume.basics?.email) {
          html += `
            <li class="contact-item">
              <span class="contact-icon">📧</span>
              <a href="mailto:${resume.basics.email}">${resume.basics.email}</a>
            </li>
          `;
        }
        
        if (resume.basics?.website) {
          html += `
            <li class="contact-item">
              <span class="contact-icon">🌐</span>
              <a href="${resume.basics.website}" target="_blank" rel="noopener">${resume.basics.website}</a>
            </li>
          `;
        }
        
        if (resume.basics?.location?.city) {
          html += `
            <li class="contact-item">
              <span class="contact-icon">📍</span>
              <span>${resume.basics.location.city}</span>
            </li>
          `;
        }
        
        // GitHub
        const github = resume.basics?.profiles?.find(p => p.network?.toLowerCase() === 'github');
        if (github) {
          html += `
            <li class="contact-item">
              <span class="contact-icon">💻</span>
              <a href="${github.url}" target="_blank" rel="noopener">GitHub</a>
            </li>
          `;
        }
        
        // LinkedIn
        const linkedin = resume.basics?.profiles?.find(p => p.network?.toLowerCase() === 'linkedin');
        if (linkedin) {
          html += `
            <li class="contact-item">
              <span class="contact-icon">💼</span>
              <a href="${linkedin.url}" target="_blank" rel="noopener">LinkedIn</a>
            </li>
          `;
        }
        
        html += `
            </ul>
          </header>
        `;
        
        // Summary
        if (resume.basics?.summary) {
          html += `
            <section class="section">
              <h2 class="section-title">
                <span class="section-icon">📋</span>
                Summary
              </h2>
              <p class="summary">${resume.basics.summary}</p>
            </section>
          `;
        }
        
        // Experience
        if (resume.work?.length) {
          html += `
            <section class="section">
              <h2 class="section-title">
                <span class="section-icon">💼</span>
                Experience
              </h2>
          `;
          
          resume.work.forEach(job => {
            html += `
              <div class="experience-item">
                <div class="experience-header">
                  <div>
                    <span class="experience-title">${job.position}</span>
                    <span class="experience-company"> @ ${job.name}</span>
                  </div>
                  <span class="experience-date">${job.startDate}${job.endDate ? ` – ${job.endDate}` : ' – Present'}</span>
                </div>
            `;
            
            if (job.summary) {
              html += `<p class="experience-description">${job.summary}</p>`;
            }
            
            if (job.highlights?.length) {
              html += '<ul class="highlights">';
              job.highlights.forEach(h => {
                html += `<li>${h}</li>`;
              });
              html += '</ul>';
            }
            
            html += '</div>';
          });
          
          html += '</section>';
        }
        
        // Projects
        if (resume.projects?.length) {
          html += `
            <section class="section">
              <h2 class="section-title">
                <span class="section-icon">🚀</span>
                Projects
              </h2>
          `;
          
          resume.projects.forEach(project => {
            html += `
              <div class="project-item">
                <div class="project-name">${project.name}</div>
            `;
            
            if (project.url) {
              html += `<a href="${project.url}" class="project-link" target="_blank" rel="noopener">${project.url}</a>`;
            }
            
            if (project.description) {
              html += `<p class="project-description">${project.description}</p>`;
            }
            
            if (project.keywords?.length) {
              html += '<div class="project-keywords">';
              project.keywords.forEach(k => {
                html += `<span class="keyword">${k}</span>`;
              });
              html += '</div>';
            }
            
            html += '</div>';
          });
          
          html += '</section>';
        }
        
        // Skills
        if (resume.skills?.length) {
          html += `
            <section class="section">
              <h2 class="section-title">
                <span class="section-icon">⚡</span>
                Skills
              </h2>
              <div class="skills-grid">
          `;
          
          resume.skills.forEach(skill => {
            let skillText = skill.name;
            if (skill.keywords?.length) {
              skillText += ` — ${skill.keywords.join(', ')}`;
            }
            html += `<div class="skill-item">${skillText}</div>`;
          });
          
          html += `
              </div>
            </section>
          `;
        }
        
        container.innerHTML = html;
        
        // Post initial height to parent
        requestAnimationFrame(() => {
          updateHeight();
        });
        
      } catch (error) {
        console.error('Error loading resume:', error);
        container.innerHTML = `
          <div style="text-align: center; padding: 2rem; color: #ef4444;">
            <h2>Error Loading Resume</h2>
            <p>Unable to fetch resume data. Please try again later.</p>
          </div>
        `;
      }
    }
    
    // Initialize
    init();
    
    // Only update on actual window resize (not scrolling)
    let windowWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      // Check if it's an actual resize, not just a scroll
      if (window.innerWidth !== windowWidth) {
        windowWidth = window.innerWidth;
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          requestAnimationFrame(updateHeight);
        }, 100);
      }
    });
  </script>
</body>
</html>
</file>

<file path="public/variants/firebase/enablement/index.html">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Enablement</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #ECEFF1;
            color: #37474F;
            margin: 0;
            padding: 1.5rem;
            box-sizing: border-box;
        }
        .container {
            max-width: 1000px;
            margin: auto;
        }
        header {
            background: #039BE5; /* Firebase Blue */
            color: white;
            padding: 3rem 2rem;
            border-radius: 8px;
            text-align: center;
            margin-bottom: 2rem;
        }
        header h1 {
            font-size: 2.8rem;
            font-weight: 500;
            margin: 0 0 0.5rem 0;
        }
        header p {
            font-size: 1.3rem;
            font-weight: 300;
            max-width: 700px;
            margin: 0 auto;
        }
        .section {
            background-color: #FFFFFF;
            padding: 2rem;
            border-radius: 8px;
            margin-bottom: 2rem;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .section h2 {
            font-size: 1.8rem;
            font-weight: 500;
            color: #FFA000; /* Firebase Amber */
            margin: 0 0 1.5rem 0;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid #FFA000;
        }
        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
        }
        .card {
            background-color: #F5F5F5;
            padding: 1.5rem;
            border-radius: 4px;
            border-left: 4px solid #039BE5;
        }
        .card h3 {
            font-size: 1.3rem;
            font-weight: 500;
            color: #263238;
            margin: 0 0 0.75rem 0;
        }
        .card p {
            line-height: 1.6;
            margin: 0 0 1rem 0;
        }
        .card ul {
            margin: 0;
            padding-left: 1.5rem;
        }
        .card li {
            margin-bottom: 0.5rem;
            color: #546E7A;
        }
        .timeline {
            position: relative;
            padding-left: 2rem;
        }
        .timeline::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 2px;
            background: #FFA000;
        }
        .timeline-item {
            position: relative;
            margin-bottom: 2rem;
        }
        .timeline-item::before {
            content: '';
            position: absolute;
            left: -2.4rem;
            top: 0.5rem;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #039BE5;
            border: 2px solid #FFFFFF;
        }
        .timeline-item .label {
            font-weight: 500;
            color: #039BE5;
            margin-bottom: 0.5rem;
        }
        .timeline-item ul {
            margin: 0;
            padding-left: 1.5rem;
        }
        .timeline-item li {
            margin-bottom: 0.5rem;
            line-height: 1.6;
        }
        .stack-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
            margin-top: 1rem;
        }
        .stack-item {
            background: #039BE5;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.9rem;
        }
        details {
            margin-bottom: 1rem;
        }
        summary {
            cursor: pointer;
            font-weight: 500;
            color: #263238;
            padding: 0.75rem;
            background: #F5F5F5;
            border-radius: 4px;
            margin-bottom: 0.5rem;
        }
        summary:hover {
            background: #E0E0E0;
        }
        details[open] summary {
            background: #039BE5;
            color: white;
        }
        .accordion-content {
            padding: 1rem;
            background: #FAFAFA;
            border-radius: 4px;
            margin-top: 0.5rem;
        }
    </style>
</head>
<body>
    <div class="container" id="content">
        <p style="text-align:center;padding:2rem;">Loading AI Enablement content...</p>
    </div>

    <script>
        async function loadEnablement() {
            try {
                const response = await fetch("https://www.austinwallace.ca/data/enablement.json")
                if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
                const data = await response.json();
                renderEnablement(data);
            } catch (error) {
                console.error('Failed to load enablement data:', error);
                document.getElementById('content').innerHTML = '<p style="text-align:center;color:red;">Error loading data. Please check the console.</p>';
            }
        }

        function renderEnablement(data) {
            const container = document.getElementById('content');
            
            // Hero Section
            let html = `
                <header>
                    <h1>${data.hero?.title || 'AI Enablement'}</h1>
                    <p>${data.hero?.subtitle || ''}</p>
                </header>
            `;

            // Process sections from the data
            if (data.sections && Array.isArray(data.sections)) {
                data.sections.forEach(section => {
                    if (section.type === 'cards' && section.cards) {
                        html += `
                            <div class="section">
                                <h2>${section.title}</h2>
                                <div class="cards">
                                    ${section.cards.map(card => `
                                        <div class="card">
                                            <h3>${card.title}</h3>
                                            <p>${card.body}</p>
                                            ${card.deliverables?.length ? `
                                                <ul>${card.deliverables.map(d => `<li>${d}</li>`).join('')}</ul>
                                            ` : ''}
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `;
                    } else if (section.type === 'timeline' && section.items) {
                        html += `
                            <div class="section">
                                <h2>${section.title}</h2>
                                <div class="timeline">
                                    ${section.items.map(item => `
                                        <div class="timeline-item">
                                            <div class="label">${item.label}</div>
                                            ${Array.isArray(item.content) ? `
                                                <ul>${item.content.map(c => `<li>${c}</li>`).join('')}</ul>
                                            ` : `<p>${item.content}</p>`}
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `;
                    } else if (section.type === 'stack' && section.items) {
                        html += `
                            <div class="section">
                                <h2>${section.title}</h2>
                                <p>${section.description || ''}</p>
                                <div class="stack-list">
                                    ${section.items.map(item => `
                                        <div class="stack-item">${item}</div>
                                    `).join('')}
                                </div>
                            </div>
                        `;
                    } else if (section.type === 'faq' && section.items) {
                        html += `
                            <div class="section">
                                <h2>${section.title}</h2>
                                ${section.items.map(item => `
                                    <details>
                                        <summary>${item.q}</summary>
                                        <div class="accordion-content">
                                            ${Array.isArray(item.a) ? item.a.join('<br><br>') : item.a}
                                        </div>
                                    </details>
                                `).join('')}
                            </div>
                        `;
                    } else if (section.type === 'principles' && section.items) {
                        html += `
                            <div class="section">
                                <h2>${section.title}</h2>
                                <div class="cards">
                                    ${section.items.map(item => `
                                        <div class="card">
                                            <h3>${item.label}</h3>
                                            <p>${item.value}</p>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `;
                    }
                });
            }

            container.innerHTML = html;

            // Report height to parent frame
            const reportHeight = () => {
                const height = document.documentElement.scrollHeight;
                parent?.postMessage({ type: 'variant:height', value: height }, '*');
            };

            // Report height on load and after rendering
            reportHeight();
            setTimeout(reportHeight, 100);
            window.addEventListener('resize', reportHeight);
        }

        // Load enablement when page loads
        loadEnablement();
    </script>
</body>
</html>
</file>

<file path="public/variants/firebase/index.html">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Austin Wallace - Resume</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #ECEFF1;
            color: #37474F;
            margin: 0;
            padding: 1.5rem;
            box-sizing: border-box;
        }
        .container {
            max-width: 900px;
            margin: auto;
            background-color: #FFFFFF;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        header {
            background-color: #039BE5; /* Firebase Blue */
            color: white;
            padding: 2rem;
            text-align: center;
        }
        header h1 {
            margin: 0;
            font-size: 2.5rem;
            font-weight: 500;
        }
        header p {
            margin: 0.5rem 0 0;
            font-size: 1.2rem;
            font-weight: 300;
        }
        .contact-info {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            margin-top: 1rem;
        }
        .contact-info a {
            color: white;
            text-decoration: none;
        }
        .contact-info a:hover {
            text-decoration: underline;
        }
        main {
            padding: 2rem;
        }
        .section {
            margin-bottom: 2rem;
        }
        .section h2 {
            color: #FFA000; /* Firebase Amber */
            font-size: 1.5rem;
            font-weight: 500;
            margin-bottom: 1rem;
            border-bottom: 2px solid #FFA000;
            padding-bottom: 0.5rem;
        }
        .work-item, .project-item {
            margin-bottom: 1.5rem;
        }
        .work-item h3, .project-item h3 {
            color: #263238;
            font-size: 1.2rem;
            font-weight: 500;
            margin: 0;
        }
        .work-item .position {
            color: #546E7A;
            font-style: italic;
            margin: 0.25rem 0;
        }
        .work-item .date {
            color: #78909C;
            font-size: 0.9rem;
            margin: 0;
        }
        .highlights {
            margin: 0.5rem 0;
            padding-left: 1.5rem;
        }
        .highlights li {
            margin-bottom: 0.25rem;
        }
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
        }
        .skill-item {
            background-color: #F5F5F5;
            padding: 1rem;
            border-radius: 4px;
            border-left: 4px solid #039BE5;
        }
        .skill-name {
            font-weight: 500;
            color: #263238;
        }
        .skill-keywords {
            display: block;
            margin-top: 0.5rem;
            color: #546E7A;
            font-size: 0.9rem;
        }
        a {
            color: #039BE5;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container" id="resume">
        <p style="text-align:center;padding:2rem;">Loading resume...</p>
    </div>

    <script>
        async function loadResume() {
            try {
                const response = await fetch('https://www.austinwallace.ca/data/resume.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                renderResume(data);
            } catch (error) {
                console.error("Failed to fetch resume data:", error);
                document.getElementById('resume').innerHTML = '<p style="text-align:center;color:red;">Error loading data. Please check the console.</p>';
            }
        }

        function renderResume(data) {
            const resumeContainer = document.getElementById('resume');
            resumeContainer.innerHTML = `
                <header>
                    <h1>${data.basics?.name || 'Name'}</h1>
                    <p>${data.basics?.label || 'Title'}</p>
                    <div class="contact-info">
                        ${data.basics?.email ? `<a href="mailto:${data.basics.email}">${data.basics.email}</a>` : ''}
                        ${data.basics?.email && data.basics?.location?.city ? '<span>|</span>' : ''}
                        ${data.basics?.location?.city ? `<span>${data.basics.location.city}</span>` : ''}
                        ${data.basics?.profiles?.map(p => `<span>|</span> <a href="${p.url}" target="_blank">${p.network}</a>`).join('') || ''}
                    </div>
                </header>
                <main>
                    ${data.basics?.summary ? `
                    <div class="section">
                        <h2>Summary</h2>
                        <p>${data.basics.summary}</p>
                    </div>
                    ` : ''}

                    ${data.work?.length ? `
                    <div class="section">
                        <h2>Work Experience</h2>
                        ${data.work.map(job => `
                            <div class="work-item">
                                <p class="date">${job.startDate} - ${job.endDate || 'Present'}</p>
                                <h3>${job.name}</h3>
                                <p class="position">${job.position}</p>
                                ${job.summary ? `<p>${job.summary}</p>` : ''}
                                ${job.highlights?.length ? `
                                <ul class="highlights">
                                    ${job.highlights.map(h => `<li>${h}</li>`).join('')}
                                </ul>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                    ` : ''}

                    ${data.projects?.length ? `
                    <div class="section">
                        <h2>Projects</h2>
                        ${data.projects.map(proj => `
                            <div class="project-item">
                                <h3><a href="${proj.url || '#'}" target="_blank">${proj.name}</a></h3>
                                ${proj.description ? `<p>${proj.description}</p>` : ''}
                                ${proj.highlights?.length ? `
                                <ul class="highlights">
                                    ${proj.highlights.map(h => `<li>${h}</li>`).join('')}
                                </ul>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                    ` : ''}

                    ${data.skills?.length ? `
                    <div class="section">
                        <h2>Skills</h2>
                        <div class="skills-grid">
                            ${data.skills.map(skill => `
                                <div class="skill-item">
                                    <span class="skill-name">${skill.name}</span>
                                    ${skill.keywords?.length ? `<span class="skill-keywords">${skill.keywords.join(', ')}</span>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                </main>
            `;

            // Report height to parent frame
            const reportHeight = () => {
                const height = document.documentElement.scrollHeight;
                parent?.postMessage({ type: 'variant:height', value: height }, '*');
            };

            // Report height on load and after rendering
            reportHeight();
            setTimeout(reportHeight, 100);
            window.addEventListener('resize', reportHeight);
        }

        // Load resume when page loads
        loadResume();
    </script>
</body>
</html>
</file>

<file path="public/variants/gpt-5-pro/enablement/index.html">
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, viewport-fit=cover"
  />
  <meta name="color-scheme" content="light dark" />
  <title>AI Enablement — Resume Variant</title>
  <meta name="description" content="AI enablement that drives effectiveness: faster, safer shipping with workflows your team will actually use. Single-file variant that renders from /data/enablement.json." />
  <!-- Scoped styles will be injected by script to avoid CSS leaks -->
  <style id="scoped-style"></style>
</head>

<!-- The top-level container id is set dynamically to #app-<tool> from the URL (/variants/<tool>/index.html) -->
<body>
  <div id="app-PLACEHOLDER" data-app-root hidden>
    <!-- Fixed progress bar (scoped styles will ensure no leakage) -->
    <div class="progbar" aria-hidden="true"><span></span></div>

    <!-- Sticky header -->
    <header class="site-header" role="banner">
      <div class="inner">
        <a class="brand" href="#top" aria-label="Home">
          <svg class="logo" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 2l8 4.5v10.9L12 22l-8-4.6V6.5L12 2zm0 2.2L6 6.3v7.9l6 3.5 6-3.5V6.3l-6-2.1z" fill="currentColor"/>
            <circle cx="12" cy="12" r="2.2" fill="currentColor" opacity=".2"/>
          </svg>
          <span class="brand-text">Enablement</span>
        </a>

        <nav class="top-nav" aria-label="Primary">
          <button class="nav-toggle" aria-expanded="false" aria-controls="nav-links">Menu</button>
          <ul id="nav-links" class="links">
            <li><a href="#value">Value</a></li>
            <li><a href="#what-i-do">How I Help</a></li>
            <li><a href="#prompting-best-practices">Best Practices</a></li>
            <li><a href="#security">Security</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#resources">Resources</a></li>
          </ul>
        </nav>

        <div class="actions">
          <button class="btn ghost" id="theme-toggle" title="Toggle theme" aria-label="Toggle theme">🌓</button>
          <button class="btn ghost" id="print-btn" title="Print / Save PDF" aria-label="Print">🖨️</button>
        </div>
      </div>
    </header>

    <main id="top" class="main" role="main" tabindex="-1">
      <section class="hero" id="hero" aria-labelledby="hero-title">
        <div class="inner">
          <div class="hero-copy">
            <p class="eyebrow">AI Enablement</p>
            <h1 id="hero-title"></h1>
            <p class="subtitle" id="hero-subtitle"></p>
            <div class="hero-ctas">
              <a id="hero-cta-primary" class="btn primary" href="#" target="_self" rel="noopener">Email me</a>
              <a id="hero-cta-secondary" class="btn secondary" href="#process">See approach</a>
              <button id="copy-email" class="btn ghost" type="button" title="Copy email">Copy email</button>
            </div>

            <div class="audience" aria-label="Intended audience"></div>
            <p class="note small" id="hero-note"></p>
          </div>

          <aside class="hero-aside">
            <div class="metric-card">
              <div class="metric">
                <span class="num" id="metric-effectiveness">→</span>
                <span class="label">Effectiveness First</span>
              </div>
              <div class="metric">
                <span class="num">ZDR</span>
                <span class="label">Security-Grounded</span>
              </div>
              <div class="metric">
                <span class="num">TTFW</span>
                <span class="label">Time‑to‑First‑Win</span>
              </div>
            </div>
            <div class="callout">
              <strong>Principle:</strong> <span id="meta-principle"></span>
            </div>
          </aside>
        </div>
      </section>

      <section class="value" id="value" aria-labelledby="value-title">
        <div class="inner">
          <h2 id="value-title">Why this works</h2>
          <div id="value-grid" class="cards"></div>
        </div>
      </section>

      <div id="dynamic-sections"></div>

      <section class="resources" id="resources" aria-labelledby="resources-title">
        <div class="inner">
          <h2 id="resources-title">Selected Resources</h2>
          <ul id="resources-list" class="resource-list"></ul>
        </div>
      </section>

      <section class="cta" id="final-cta" aria-labelledby="cta-title">
        <div class="inner">
          <h2 id="cta-title"></h2>
          <p id="cta-subhead" class="subtitle"></p>
          <div id="cta-actions" class="hero-ctas"></div>
        </div>
      </section>
    </main>

    <footer class="site-footer" role="contentinfo">
      <div class="inner">
        <div class="left">
          <p class="small">Version <span id="meta-version"></span> • <a id="resume-link" href="/resume">Minimal resume</a></p>
          <p class="small">Contact mode: <span id="contact-mode"></span></p>
        </div>
        <div class="right">
          <a class="small" href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>

    <!-- Sticky mini-CTA shown on scroll -->
    <div class="dock-cta" role="dialog" aria-live="polite" aria-label="Quick contact">
      <div class="dock-inner">
        <span class="dock-text">Curious if this would work for your team?</span>
        <a id="dock-email" class="btn primary small" href="#">Email me</a>
        <a class="btn secondary small" href="#process">See approach</a>
      </div>
    </div>
  </div>

  <script>
  (function () {
    'use strict';

    // --- Utility: get tool slug from /variants/<tool>/index.html
    function getToolSlug() {
      var m = (window.location.pathname || '').match(/\/variants\/([^/]+)\//);
      return m && m[1] ? m[1] : 'tool';
    }

    // --- Scope root setup to satisfy the "id=app-<tool>" requirement
    var tool = getToolSlug();
    var appRoot = document.querySelector('[data-app-root]');
    var scopedId = 'app-' + tool;
    appRoot.id = scopedId;
    appRoot.hidden = false;

    // --- Inject fully scoped CSS (no global leakage)
    var CSS = `
#${scopedId} * { box-sizing: border-box; }
#${scopedId} { --bg: #0b0d10; --bg-elev: #131720; --bg-soft: #0f1218; --text: #e9eef5;
  --muted: #a9b4c0; --accent: #72e5b2; --accent-2: #8bb8ff; --danger: #ff6b6b;
  --card: #12161f; --border: #1d2330; --ring: #2a3242; --shadow: rgba(0,0,0,0.4);
  --radius: 14px; --radius-sm: 10px; --radius-xs: 8px; --gap: 18px; --maxw: 1100px;
  --focus: 2px solid var(--accent); --font: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: var(--text); background: var(--bg); font-family: var(--font); line-height: 1.55; }
@media (prefers-color-scheme: light) {
  #${scopedId}[data-theme="light"] { --bg: #f7f9fb; --bg-elev: #ffffff; --bg-soft: #f0f4f8; --text: #0e1217; --muted: #4b5563; --card: #ffffff; --border: #e5e9f0; --ring: #dfe6ef; --shadow: rgba(2, 8, 20, .06); }
}
#${scopedId} a { color: var(--accent-2); text-decoration: none; }
#${scopedId} a:hover { text-decoration: underline; }
#${scopedId} .inner { max-width: var(--maxw); margin: 0 auto; padding: 0 20px; }

/* Progress bar */
#${scopedId} .progbar { position: fixed; inset: 0 0 auto 0; height: 3px; background: transparent; z-index: 60; }
#${scopedId} .progbar > span { display:block; height:100%; width:0%; background: linear-gradient(90deg, var(--accent), var(--accent-2)); transition: width .12s ease; }

/* Header */
#${scopedId} .site-header { position: sticky; top: 0; z-index: 50; backdrop-filter: saturate(1.2) blur(8px); background: color-mix(in srgb, var(--bg-elev) 80%, transparent); border-bottom: 1px solid var(--border); }
#${scopedId} .site-header .inner { display:flex; align-items:center; gap:14px; padding: 14px 20px; }
#${scopedId} .brand { display:flex; align-items:center; gap:10px; color: var(--text); text-decoration:none; font-weight:600; }
#${scopedId} .logo { opacity:.9 }
#${scopedId} .brand-text { letter-spacing:.2px; }
#${scopedId} .top-nav .links { display:flex; gap:16px; list-style:none; padding:0; margin:0; }
#${scopedId} .top-nav a { display:inline-block; padding:8px 10px; border-radius: 8px; }
#${scopedId} .top-nav a:hover { background: var(--bg-soft); text-decoration:none; }
#${scopedId} .nav-toggle { display:none; }
#${scopedId} .actions { margin-left:auto; display:flex; gap:8px; }

/* Buttons */
#${scopedId} .btn { --padx: 16px; --pady: 12px; display:inline-flex; align-items:center; justify-content:center; gap:10px; padding: var(--pady) var(--padx); border-radius: 999px; border:1px solid var(--ring); background: var(--bg-elev); color: var(--text); text-decoration:none; font-weight:600; box-shadow: 0 6px 20px var(--shadow); transition: transform .08s ease, background .2s ease, border-color .2s ease; }
#${scopedId} .btn:hover { transform: translateY(-1px); text-decoration:none; }
#${scopedId} .btn:focus-visible { outline: var(--focus); outline-offset: 2px; }
#${scopedId} .btn.primary { background: linear-gradient(180deg, var(--accent), #48c896); color:#06140d; border-color: transparent; }
#${scopedId} .btn.secondary { background: var(--bg-soft); }
#${scopedId} .btn.ghost { background: transparent; border-color: var(--ring); }
#${scopedId} .btn.small { --padx:12px; --pady:8px; font-size:.9rem; }

/* Hero */
#${scopedId} .hero { padding: 56px 0 24px; border-bottom: 1px solid var(--border); background:
  radial-gradient(1200px 500px at 15% -10%, color-mix(in srgb, var(--accent) 22%, transparent), transparent),
  radial-gradient(800px 400px at 90% -10%, color-mix(in srgb, var(--accent-2) 22%, transparent), transparent); }
#${scopedId} .hero .inner { display:grid; grid-template-columns: 1.2fr .8fr; gap: 28px; align-items: center; }
#${scopedId} .eyebrow { color: var(--muted); letter-spacing:.12em; text-transform: uppercase; font-weight:700; margin:0 0 8px; font-size:.85rem; }
#${scopedId} .hero h1 { font-size: clamp(1.8rem, 4vw, 3rem); line-height:1.15; margin:.2em 0 .3em; }
#${scopedId} .subtitle { color: var(--muted); font-size: clamp(1rem, 1.5vw, 1.15rem); }
#${scopedId} .hero-ctas { margin-top: 18px; display:flex; gap: 10px; flex-wrap: wrap; }
#${scopedId} .audience { margin-top: 16px; display:flex; gap:8px; flex-wrap:wrap; }
#${scopedId} .chip { display:inline-flex; align-items:center; gap:8px; padding:8px 12px; background: var(--bg-soft); border:1px solid var(--ring); border-radius:999px; font-size:.9rem; color: var(--muted); }
#${scopedId} .hero-aside .metric-card { display:grid; grid-template-columns: repeat(3, 1fr); gap: 10px; background: var(--card); border:1px solid var(--ring); border-radius: var(--radius); padding: 14px; }
#${scopedId} .metric { background: var(--bg-soft); border:1px solid var(--ring); border-radius: var(--radius-sm); padding: 12px; text-align:center; }
#${scopedId} .metric .num { display:block; font-weight:800; font-size: 1.05rem; margin-bottom: 4px; color: var(--accent); }
#${scopedId} .metric .label { color: var(--muted); font-size:.9rem; }
#${scopedId} .callout { margin-top: 12px; padding: 12px 14px; background: var(--bg-soft); border:1px solid var(--ring); border-radius: var(--radius); color: var(--muted); }

/* Cards / Value */
#${scopedId} .value { padding: 28px 0; }
#${scopedId} h2 { font-size: clamp(1.35rem, 2.2vw, 1.8rem); margin: 0 0 12px; }
#${scopedId} .cards { display:grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 14px; }
@media (min-width: 720px) { #${scopedId} .cards { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1040px) { #${scopedId} .cards { grid-template-columns: repeat(3, 1fr); } }
#${scopedId} .card { background: var(--card); border:1px solid var(--ring); border-radius: var(--radius); padding: 16px; box-shadow: 0 10px 30px var(--shadow); }
#${scopedId} .card h3 { margin:.1em 0 .4em; font-size: 1.1rem; }
#${scopedId} .card ul { margin: 8px 0 0 18px; color: var(--muted); }
#${scopedId} .pill { display:inline-block; padding:6px 10px; border:1px solid var(--ring); background: var(--bg-soft); border-radius: 999px; font-size:.85rem; color: var(--muted); margin: 6px 6px 0 0; }

/* Section wrapper */
#${scopedId} section { padding: 26px 0; border-top: 1px solid var(--border); }
#${scopedId} section:first-of-type { border-top: none; }

/* Text & Bullets */
#${scopedId} .text p { margin: 0 0 10px; color: var(--text); }
#${scopedId} .bullets ul { margin: 6px 0 0 18px; }
#${scopedId} .small { font-size: .92rem; color: var(--muted); }

/* Accordion */
#${scopedId} .accordion { display:grid; gap: 10px; }
#${scopedId} .acc-item { border:1px solid var(--ring); border-radius: var(--radius-sm); background: var(--bg-elev); overflow:hidden; }
#${scopedId} .acc-head { display:flex; justify-content:space-between; align-items:center; padding: 12px 14px; cursor:pointer; }
#${scopedId} .acc-head:hover { background: var(--bg-soft); }
#${scopedId} .acc-body { padding: 0 14px 12px; display:none; }
#${scopedId} .acc-item[open] .acc-body { display:block; }

/* Process stepper */
#${scopedId} .process { --col: #2f394a; background: var(--card); border: 1px solid var(--ring); border-radius: var(--radius); padding: 16px; }
#${scopedId} .steps { counter-reset: step; display:grid; gap: 12px; }
#${scopedId} .step { display:grid; grid-template-columns: 36px 1fr; gap: 12px; align-items:start; }
#${scopedId} .dot { width: 36px; height: 36px; border-radius: 999px; background: var(--bg-soft); border: 1px solid var(--ring); display:grid; place-items:center; font-weight: 800; color: var(--accent-2); }
#${scopedId} .step p { margin: 4px 0 0; color: var(--muted); }

/* Resources */
#${scopedId} .resources .resource-list { list-style:none; padding:0; margin:0; display:grid; gap: 12px; }
#${scopedId} .resource { display:flex; gap: 12px; padding: 12px; border:1px solid var(--ring); background: var(--bg-elev); border-radius: var(--radius-sm); align-items: flex-start; }
#${scopedId} .badge { font-size:.75rem; padding: 4px 8px; border-radius: 999px; border:1px solid var(--ring); background: var(--bg-soft); color: var(--muted); }

/* CTA */
#${scopedId} .cta { padding: 32px 0 46px; }
#${scopedId} .cta .inner { text-align:center; }
#${scopedId} .cta .hero-ctas { justify-content:center; }

/* Footer */
#${scopedId} .site-footer { border-top:1px solid var(--border); padding: 16px 0 32px; }
#${scopedId} .site-footer .inner { display:flex; align-items:center; justify-content:space-between; gap: 10px; }

/* Docked CTA */
#${scopedId} .dock-cta { position: fixed; inset: auto 20px 20px auto; z-index: 40; }
#${scopedId} .dock-inner { display:flex; gap: 10px; align-items:center; padding: 10px 12px; border: 1px solid var(--ring); background: var(--bg-elev); border-radius: 999px; box-shadow: 0 10px 26px var(--shadow); }
#${scopedId} .dock-text { color: var(--muted); display:none; }
@media (min-width: 900px) { #${scopedId} .dock-text { display:inline; } }

/* Print */
@media print {
  #${scopedId} .site-header, #${scopedId} .progbar, #${scopedId} .dock-cta, #${scopedId} #copy-email, #${scopedId} #theme-toggle, #${scopedId} #print-btn { display:none !important; }
  #${scopedId} a { color: inherit; text-decoration: underline; }
  #${scopedId} .btn { border: 1px solid #888; background: transparent; box-shadow:none; }
  #${scopedId} .inner { max-width: 100%; }
}

/* Responsive nav */
@media (max-width: 820px) {
  #${scopedId} .hero .inner { grid-template-columns: 1fr; }
  #${scopedId} .top-nav .links { display:none; position:absolute; top: 58px; right: 10px; background: var(--bg-elev); border:1px solid var(--ring); border-radius: 12px; padding: 8px; flex-direction:column; }
  #${scopedId} .top-nav .links[aria-expanded="true"] { display:flex; }
  #${scopedId} .nav-toggle { display:inline-flex; align-items:center; justify-content:center; padding: 8px 12px; border:1px solid var(--ring); background: var(--bg-elev); border-radius: 8px; }
}
    `.trim();

    document.getElementById('scoped-style').textContent = CSS;

    // --- Helpers
    const $ = (sel, root = appRoot) => root.querySelector(sel);
    const el = (tag, props = {}, ...children) => {
      const node = document.createElement(tag);
      Object.entries(props || {}).forEach(([k, v]) => {
        if (k === 'class') node.className = v;
        else if (k === 'dataset') Object.assign(node.dataset, v);
        else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.substring(2), v);
        else if (k === 'html') node.innerHTML = v;
        else if (v !== null && v !== undefined) node.setAttribute(k, v);
      });
      children.flat().forEach((c) => {
        if (c === null || c === undefined) return;
        if (typeof c === 'string') node.appendChild(document.createTextNode(c));
        else node.appendChild(c);
      });
      return node;
    };
    const escapeHtml = (s) => s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    // minimal rich text: **bold**, *italic* (safe: escape first)
    function toRichHTML(s) {
      let out = escapeHtml(String(s || ''));
      out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      out = out.replace(/\*([^*]+)\*/g, '<em>$1</em>');
      return out;
    }

    // --- UI widgets
    function bulletList(items) {
      const ul = el('ul');
      (items || []).forEach(txt => {
        const li = el('li'); li.innerHTML = toRichHTML(txt); ul.appendChild(li);
      });
      return ul;
    }

    function renderValueProps(list) {
      const grid = $('#value-grid');
      grid.innerHTML = '';
      (list || []).forEach(v => {
        const card = el('article', { class: 'card' },
          el('h3', {}, v.title),
          bulletList(v.bullets || [])
        );
        grid.appendChild(card);
      });
    }

    function renderSections(sections) {
      const mount = $('#dynamic-sections');
      mount.innerHTML = '';
      (sections || []).forEach(section => {
        const wrap = el('section', { id: section.id });
        const inner = el('div', { class: 'inner' });
        wrap.appendChild(inner);
        const title = el('h2', {}, section.title || '');
        inner.appendChild(title);

        if (section.type === 'cards') {
          const grid = el('div', { class: 'cards' });
          (section.cards || []).forEach(c => {
            const card = el('article', { class: 'card' },
              el('h3', {}, c.title),
              el('p', { class: 'small' }, c.body || '')
            );
            if (c.deliverables && c.deliverables.length) {
              const pills = el('div', {});
              c.deliverables.forEach(d => pills.appendChild(el('span', { class: 'pill' }, d)));
              card.appendChild(pills);
            }
            grid.appendChild(card);
          });
          inner.appendChild(grid);

        } else if (section.type === 'text') {
          const container = el('div', { class: 'text' });
          (section.body || []).forEach(p => {
            const para = el('p'); para.innerHTML = toRichHTML(p); container.appendChild(para);
          });
          inner.appendChild(container);

        } else if (section.type === 'bullets') {
          const div = el('div', { class: 'bullets' });
          div.appendChild(bulletList(section.bullets || []));
          inner.appendChild(div);

        } else if (section.type === 'accordion') {
          if (section.intro) {
            const intro = el('p', { class: 'small' }, section.intro);
            inner.appendChild(intro);
          }
          const acc = el('div', { class: 'accordion' });
          (section.items || []).forEach(it => {
            const item = el('div', { class: 'acc-item' });
            const head = el('button', { class: 'acc-head', type: 'button', 'aria-expanded': 'false' },
              el('span', {}, it.label || ''),
              el('span', { 'aria-hidden': 'true' }, '▸')
            );
            const body = el('div', { class: 'acc-body' });
            (it.content || []).forEach(p => {
              const para = el('p'); para.innerHTML = toRichHTML(p); body.appendChild(para);
            });
            head.addEventListener('click', () => {
              const open = item.hasAttribute('open');
              item.toggleAttribute('open');
              head.setAttribute('aria-expanded', String(!open));
              head.querySelector('span[aria-hidden]').textContent = !open ? '▾' : '▸';
            });
            item.append(head, body);
            acc.appendChild(item);
          });
          inner.appendChild(acc);

        } else if (section.type === 'process') {
          const box = el('div', { class: 'process' });
          const steps = el('div', { class: 'steps' });
          (section.steps || []).forEach((txt, i) => {
            const step = el('div', { class: 'step' },
              el('div', { class: 'dot' }, String(i + 1)),
              el('div', {},
                el('strong', {}, txt.split(':')[0] || ('Step ' + (i + 1))),
                el('p', {}, txt.includes(':') ? txt.split(':').slice(1).join(':').trim() : '')
              )
            );
            steps.appendChild(step);
          });
          box.appendChild(steps);
          inner.appendChild(box);
        }

        mount.appendChild(wrap);
      });
    }

    function renderResources(items) {
      const list = $('#resources-list');
      list.innerHTML = '';
      (items || []).forEach(r => {
        const li = el('li', { class: 'resource' });
        const icon = el('span', { class: 'badge' }, r.kind || 'link');
        const block = el('div', {},
          el('a', { href: r.url, target: '_blank', rel: 'noopener' }, r.title),
          r.notes ? el('div', { class: 'small' }, r.notes) : null
        );
        li.append(icon, block);
        list.appendChild(li);
      });
    }

    function setHero(hero, meta) {
      $('#hero-title').textContent = hero.title || '';
      $('#hero-subtitle').textContent = hero.subtitle || '';
      $('#hero-note').textContent = hero.notes || '';
      $('#meta-principle').textContent = (meta && meta.principle) ? meta.principle : '';
      const aud = $('.audience');
      aud.innerHTML = '';
      (meta && meta.audience || []).forEach(a => aud.appendChild(el('span', { class: 'chip' }, a)));

      const primary = $('#hero-cta-primary');
      const secondary = $('#hero-cta-secondary');
      if (hero.primary_cta) { primary.textContent = hero.primary_cta.label || 'Email me'; primary.href = hero.primary_cta.href || '#'; }
      if (hero.secondary_cta) { secondary.textContent = hero.secondary_cta.label || 'See approach'; secondary.href = hero.secondary_cta.href || '#process'; }

      // Docked CTA mirrors primary email
      const dockEmail = $('#dock-email');
      dockEmail.href = hero.primary_cta && hero.primary_cta.href ? hero.primary_cta.href : '#';
    }

    function setMeta(meta) {
      $('#meta-version').textContent = meta.version || '';
      $('#contact-mode').textContent = meta.contact_mode || '';
      const resume = $('#resume-link');
      if (meta.canonical_resume_path) resume.setAttribute('href', meta.canonical_resume_path);
    }

    // --- Progressive enhancements
    function setupProgressBar() {
      const bar = $('.progbar > span');
      const onScroll = () => {
        const h = document.documentElement;
        const scrollTop = h.scrollTop || document.body.scrollTop;
        const height = (h.scrollHeight - h.clientHeight) || 1;
        const pct = Math.min(1, Math.max(0, scrollTop / height));
        bar.style.width = (pct * 100) + '%';
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    function setupThemeToggle() {
      const key = 'theme:' + tool;
      const root = document.getElementById(scopedId);
      const btn = $('#theme-toggle');
      const saved = localStorage.getItem(key);
      if (saved) root.dataset.theme = saved;
      btn.addEventListener('click', () => {
        const next = root.dataset.theme === 'light' ? '' : 'light';
        if (next) { root.dataset.theme = next; localStorage.setItem(key, next); }
        else { delete root.dataset.theme; localStorage.removeItem(key); }
      });
    }

    function setupPrint() {
      $('#print-btn').addEventListener('click', () => window.print());
    }

    function setupCopyEmail(primaryHref) {
      const btn = $('#copy-email');
      const email = (primaryHref || '').replace(/^mailto:/i, '');
      btn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(email);
          btn.textContent = 'Copied!';
          setTimeout(() => (btn.textContent = 'Copy email'), 1200);
        } catch (_) {
          btn.textContent = 'Copy failed';
          setTimeout(() => (btn.textContent = 'Copy email'), 1200);
        }
      });
    }

    function setupMobileNav() {
      const toggle = $('.nav-toggle');
      const links = $('#nav-links');
      const closeMenu = () => { links.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-expanded', 'false'); };
      toggle.addEventListener('click', () => {
        const exp = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!exp));
        links.setAttribute('aria-expanded', String(!exp));
      });
      links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    }

    function setupDockCTA() {
      let shown = false;
      const dock = $('.dock-cta');
      const show = () => { if (!shown) { dock.style.transform = 'translateY(0)'; shown = true; } };
      const hide = () => { dock.style.transform = 'translateY(120%)'; shown = false; };
      hide();
      let lastY = window.scrollY;
      window.addEventListener('scroll', () => {
        const y = window.scrollY;
        if (y > 400 && y > lastY) show(); else if (y < lastY) hide();
        lastY = y;
      }, { passive: true });
    }

    // --- Load data and render
    async function init() {
      setupProgressBar();
      setupThemeToggle();
      setupPrint();
      setupMobileNav();
      setupDockCTA();

      // Only network call allowed by spec
      const res = await fetch("https://www.austinwallace.ca/data/enablement.json")
      if (!res.ok) throw new Error('Failed to load /data/enablement.json');
      const data = await res.json();

      // Hero & meta
      setHero(data.hero || {}, data.meta || {});
      setMeta(data.meta || {});
      setupCopyEmail((data.hero && data.hero.primary_cta && data.hero.primary_cta.href) || '');

      // Value props
      renderValueProps(data.value_props || []);

      // Sections
      renderSections(data.sections || []);

      // Resources
      renderResources(data.resources || []);

      // Final CTA
      const cta = data.cta || {};
      $('#cta-title').textContent = cta.headline || 'Let’s talk';
      $('#cta-subhead').textContent = cta.subhead || '';
      const actions = $('#cta-actions'); actions.innerHTML = '';
      (cta.actions || []).forEach(a => {
        actions.appendChild(el('a', { class: 'btn primary', href: a.href || '#', target: '_self', rel: 'noopener' }, a.label || 'Contact'));
      });

      // Update nav anchors based on actual sections present
      const ids = (data.sections || []).map(s => s.id);
      const navList = $('#nav-links');
      navList.innerHTML = '';
      const navItems = [
        { id: 'value', label: 'Value' },
        ...ids.map(id => ({ id, label: startCase(id) })),
        { id: 'resources', label: 'Resources' },
      ];
      navItems.forEach(item => {
        const li = el('li', {}, el('a', { href: '#' + item.id }, item.label));
        navList.appendChild(li);
      });

      // Smooth scroll
      appRoot.addEventListener('click', (e) => {
        const t = e.target.closest('a[href^="#"]');
        if (!t) return;
        const hash = t.getAttribute('href');
        const target = hash && $(hash);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          target.focus({ preventScroll: true });
        }
      });
    }

    function startCase(id) {
      return String(id || '')
        .replace(/[-_]+/g, ' ')
        .replace(/\b\w/g, s => s.toUpperCase());
    }

    // --- Bootstrap
    init().catch(err => {
      // Minimal inline error UI inside the scoped container only
      const main = $('.main');
      const msg = el('section', {},
        el('div', { class: 'inner' },
          el('div', { class: 'card' },
            el('h3', {}, 'Unable to load resume'),
            el('p', { class: 'small' }, 'I couldn’t fetch("https://www.austinwallace.ca/data/enablement.json")
            el('pre', { class: 'small' }, String(err && err.message || err || 'Unknown error'))
          )
        )
      );
      main.appendChild(msg);
      console.error(err);
    });
  })();
  </script>
</body>
</html>
</file>

<file path="public/variants/gpt-5-pro/index.html">
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Resume</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light dark">
  <style id="scoped-style"></style>
</head>
<body>
  <!-- The container id is set dynamically to `app-<tool>` based on /variants/<tool>/ in the URL -->
  <div id="app-root" aria-live="polite"></div>

  <script>
  (function () {
    "use strict";

    /*** ====== 0) Bootstrap: determine <tool> and scope ====== ***/
    function getToolFromPath() {
      try {
        const parts = location.pathname.split("/").filter(Boolean);
        const i = parts.indexOf("variants");
        if (i >= 0 && parts[i + 1]) return parts[i + 1];
      } catch (e) {}
      return "tool";
    }
    const TOOL = getToolFromPath();
    const container = document.getElementById("app-root");
    container.id = `app-${TOOL}`;
    container.setAttribute("data-theme", (localStorage.getItem("resumeTheme") || "auto"));

    // Inject scoped CSS using the computed id
    const SCOPE = "#" + container.id;
    const styleEl = document.getElementById("scoped-style");
    styleEl.textContent = `
/* ====== Scoped Styles for ${SCOPE} ====== */
${SCOPE} { --bg: #0b0b0c; --panel: #121214; --panel-2: #16171a; --muted:#8a8f98; --fg:#eef2f6; --brand:#7dd3fc; --accent:#a78bfa; --ok:#34d399; --warn:#fbbf24; --link:#60a5fa; --chip:#1f2937; --chip-fg:#e5e7eb; --shadow: 0 10px 30px rgba(0,0,0,.35); }
@media (prefers-color-scheme: light) {
  ${SCOPE}[data-theme="auto"] { --bg:#fafafa; --panel:#ffffff; --panel-2:#f6f7f9; --muted:#5b6572; --fg:#0e141b; --brand:#0284c7; --accent:#7c3aed; --ok:#059669; --warn:#b45309; --link:#2563eb; --chip:#eef2f6; --chip-fg:#0e141b; --shadow: 0 6px 22px rgba(2,6,23,.08); }
}
${SCOPE}[data-theme="light"] { --bg:#fafafa; --panel:#ffffff; --panel-2:#f6f7f9; --muted:#5b6572; --fg:#0e141b; --brand:#0284c7; --accent:#7c3aed; --ok:#059669; --warn:#b45309; --link:#2563eb; --chip:#eef2f6; --chip-fg:#0e141b; --shadow: 0 6px 22px rgba(2,6,23,.08); }
${SCOPE}[data-theme="dark"] { --bg:#0b0b0c; --panel:#121214; --panel-2:#16171a; --muted:#8a8f98; --fg:#eef2f6; --brand:#7dd3fc; --accent:#a78bfa; --ok:#34d399; --warn:#fbbf24; --link:#60a5fa; --chip:#1f2937; --chip-fg:#e5e7eb; --shadow: 0 10px 30px rgba(0,0,0,.35); }

${SCOPE} {
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji","Segoe UI Emoji";
  background: var(--bg);
  color: var(--fg);
  min-height: 100dvh;
}
${SCOPE} * { box-sizing: border-box; }
${SCOPE} a { color: var(--link); text-decoration: none; }
${SCOPE} a:hover { text-decoration: underline; }
${SCOPE} .wrap {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
}
${SCOPE} .header {
  position: sticky; top: 0; z-index: 50;
  backdrop-filter: saturate(120%) blur(8px);
  background: color-mix(in oklab, var(--bg) 85%, transparent);
  border-bottom: 1px solid color-mix(in oklab, var(--fg) 12%, transparent);
}
${SCOPE} .header-inner {
  display: grid; grid-template-columns: 1fr auto; gap: 16px; align-items: center;
  max-width: 1100px; margin: 0 auto; padding: 12px 24px;
}
${SCOPE} .title { font-weight: 800; letter-spacing: .2px; line-height: 1.1; }
${SCOPE} .subtitle { color: var(--muted); font-weight: 600; }

${SCOPE} .toolbar { display:flex; gap:8px; align-items:center; flex-wrap: wrap; }
${SCOPE} .btn {
  background: var(--panel-2); color: var(--fg); border: 1px solid color-mix(in oklab, var(--fg) 12%, transparent);
  padding: 8px 12px; border-radius: 10px; font-weight: 600; display:inline-flex; gap:8px; align-items:center;
  box-shadow: var(--shadow); cursor: pointer; transition: transform .06s ease, background .2s ease, border-color .2s ease;
}
${SCOPE} .btn:hover { transform: translateY(-1px); background: color-mix(in oklab, var(--panel-2) 85%, var(--fg) 5%); }
${SCOPE} .btn:active { transform: translateY(0); }
${SCOPE} .btn.ghost { background: transparent; box-shadow: none; }

${SCOPE} .grid {
  display: grid; gap: 18px; grid-template-columns: 280px 1fr; align-items: start; margin-top: 18px;
}
@media (max-width: 900px) { ${SCOPE} .grid { grid-template-columns: 1fr; } }

${SCOPE} .card { background: var(--panel); border: 1px solid color-mix(in oklab, var(--fg) 10%, transparent); border-radius: 14px; padding: 18px; box-shadow: var(--shadow); }
${SCOPE} .muted { color: var(--muted); }
${SCOPE} .lead { font-size: 1.05rem; line-height: 1.5; }

${SCOPE} .contact { display: grid; gap:10px; }
${SCOPE} .contact a, ${SCOPE} .contact button {
  display: grid; grid-template-columns: 22px 1fr; gap:10px; align-items:center;
  padding: 8px 10px; border-radius: 10px; background: var(--panel-2); border: 1px solid color-mix(in oklab, var(--fg) 12%, transparent);
  color: var(--fg); text-align:left; cursor: pointer;
}
${SCOPE} .contact a:hover, ${SCOPE} .contact button:hover { background: color-mix(in oklab, var(--panel-2) 85%, var(--fg) 5%); text-decoration: none; }

${SCOPE} .chips { display:flex; gap:8px; flex-wrap: wrap; margin-top: 8px; }
${SCOPE} .chip {
  background: var(--chip); color: var(--chip-fg);
  border: 1px solid color-mix(in oklab, var(--fg) 14%, transparent);
  padding: 6px 10px; border-radius: 999px; font-size: .9rem; font-weight: 600; cursor: pointer;
  transition: transform .06s ease, background .2s ease, border-color .2s ease, color .2s ease;
}
${SCOPE} .chip:hover { transform: translateY(-1px); }
${SCOPE} .chip.active { background: color-mix(in oklab, var(--brand) 20%, var(--chip)); border-color: color-mix(in oklab, var(--brand) 50%, transparent); color: var(--fg); }
${SCOPE} .chip.badge { pointer-events: none; }

${SCOPE} .section { margin-top: 18px; }
${SCOPE} .section h2 { margin: 0 0 10px; font-size: 1.1rem; letter-spacing: .4px; text-transform: uppercase; color: var(--muted); }
${SCOPE} .section h3 { margin: 0 0 4px; font-size: 1.05rem; }
${SCOPE} .kicker { color: var(--muted); font-weight: 600; }

${SCOPE} .timeline { display: grid; gap: 12px; }
${SCOPE} .job {
  position: relative; padding-left: 24px; border-left: 2px dashed color-mix(in oklab, var(--fg) 18%, transparent);
}
${SCOPE} .job::before {
  content:""; position:absolute; left:-6px; top: 4px; width: 10px; height:10px; border-radius: 50%;
  background: var(--accent); box-shadow: 0 0 0 4px color-mix(in oklab, var(--accent) 20%, transparent);
}
${SCOPE} .meta { display:flex; gap:10px; flex-wrap: wrap; font-weight: 600; }
${SCOPE} .meta .pill {
  background: var(--panel-2); padding: 4px 8px; border-radius: 8px; border: 1px solid color-mix(in oklab, var(--fg) 12%, transparent);
}
${SCOPE} ul.clean { list-style: none; padding-left: 0; margin: 8px 0 0; }
${SCOPE} ul.clean li { margin: 6px 0; line-height: 1.45; }
${SCOPE} .num { font-weight: 800; background: linear-gradient(90deg, color-mix(in oklab, var(--brand) 50%, transparent), color-mix(in oklab, var(--accent) 50%, transparent)); -webkit-background-clip: text; background-clip: text; color: transparent; }

${SCOPE} .projects { display:grid; gap:12px; grid-template-columns: repeat(2,minmax(0,1fr)); }
@media (max-width: 700px) { ${SCOPE} .projects { grid-template-columns: 1fr; } }
${SCOPE} .project { border: 1px solid color-mix(in oklab, var(--fg) 10%, transparent); border-radius: 12px; padding: 14px; background: var(--panel); }

${SCOPE} .searchbar { display:flex; gap:8px; margin-top: 10px; }
${SCOPE} .searchbar input {
  width: 100%; padding: 10px 12px; border-radius: 10px; border:1px solid color-mix(in oklab, var(--fg) 15%, transparent); background: var(--panel-2); color: var(--fg);
}
${SCOPE} .hint { font-size: .88rem; color: var(--muted); margin-top: 6px; }

${SCOPE} .footer { margin: 16px 0 32px; text-align: center; color: var(--muted); font-size: .9rem; }

@media print {
  ${SCOPE} .header, ${SCOPE} .toolbar, ${SCOPE} .searchbar, ${SCOPE} .hint, ${SCOPE} .footer { display:none !important; }
  ${SCOPE} { --bg:#fff; --panel:#fff; --panel-2:#fff; --fg:#111; --muted:#555; box-shadow:none; }
  ${SCOPE} .card, ${SCOPE} .project { border-color:#999 !important; box-shadow:none !important; }
  ${SCOPE} .grid { grid-template-columns: 1fr 2fr; gap: 14px; }
  body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
}
`;

    // Minimal skeleton while loading
    container.innerHTML = `
      <header class="header">
        <div class="header-inner">
          <div>
            <div class="title">Loading…</div>
            <div class="subtitle muted">Fetching resume</div>
          </div>
          <div class="toolbar">
            <button class="btn ghost" id="themeToggle" aria-label="Toggle theme">${iconSunMoon()}</button>
            <button class="btn ghost" id="printBtn" aria-label="Print / Save PDF">${iconPrint()}</button>
          </div>
        </div>
      </header>
      <div class="wrap">
        <div class="grid">
          <aside class="card">
            <div class="lead muted">Preparing content…</div>
          </aside>
          <main class="card">
            <div class="lead">Please wait while we load your data.</div>
          </main>
        </div>
      </div>
    `;

    // Attach toolbar actions early
    attachToolbarActions();

    /*** ====== 1) Fetch & render ====== ***/
    fetch("https://www.austinwallace.ca/data/resume.json")
      .then(r => {
        if (!r.ok) throw new Error("Failed to load /data/resume.json");
        return r.json();
      })
      .then(data => renderResume(data))
      .catch(err => {
        renderError(err);
      });

    /*** ====== 2) Rendering ====== ***/
    function renderResume(resume) {
      const b = resume.basics || {};
      document.title = `${b.name || "Resume"} – ${b.label || ""}`.trim();

      const profilesHTML = (b.profiles || []).map(p => `
        <a href="${escapeAttr(p.url || "#")}" target="_blank" rel="noopener noreferrer">
          ${profileIcon(p.network)} <span>${escapeHTML(p.network || "")}</span> • <span class="muted">${escapeHTML(p.username || "")}</span>
        </a>
      `).join("");

      const skillsHTML = (resume.skills || []).map(group => `
        <div class="section">
          <h3>${escapeHTML(group.name || "")}</h3>
          <div class="chips">
            ${(group.keywords || []).map(k => `<button class="chip js-skill" data-skill="${escapeAttr(k)}">${escapeHTML(k)}</button>`).join("")}
          </div>
        </div>
      `).join("");

      const workHTML = (resume.work || []).map(w => {
        const dates = formatDates(w.startDate, w.endDate);
        const hi = (w.highlights || []).map(h => `<li>${emphasizeNumbers(escapeHTML(h))}</li>`).join("");
        return `
          <article class="job" data-block="work">
            <h3>${escapeHTML(w.position || "")} • <span class="kicker">${escapeHTML(w.name || "")}</span></h3>
            <div class="meta">
              <span class="pill">${escapeHTML(w.location || "")}</span>
              <span class="pill">${escapeHTML(dates.label)}</span>
              ${dates.tenure ? `<span class="pill">${escapeHTML(dates.tenure)}</span>` : ""}
            </div>
            ${w.summary ? `<p class="lead">${escapeHTML(w.summary)}</p>` : ""}
            ${hi ? `<ul class="clean">${hi}</ul>` : ""}
          </article>
        `;
      }).join("");

      const projectsHTML = (resume.projects || []).map(p => `
        <article class="project" data-block="project">
          <h3>${p.url ? `<a href="${escapeAttr(p.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(p.name || "")}</a>` : escapeHTML(p.name || "")}</h3>
          ${p.description ? `<p class="lead">${escapeHTML(p.description)}</p>` : ""}
          ${(p.keywords && p.keywords.length) ? `
            <div class="chips" aria-label="Project technologies">
              ${p.keywords.map(k => `<span class="chip badge" data-tech="${escapeAttr(k)}">${escapeHTML(k)}</span>`).join("")}
            </div>` : ""}
          ${(p.highlights && p.highlights.length) ? `<ul class="clean">${p.highlights.map(h => `<li>${emphasizeNumbers(escapeHTML(h))}</li>`).join("")}</ul>` : ""}
        </article>
      `).join("");

      const edu = (resume.education && resume.education[0]) || null;
      const eduHTML = edu ? `
        <div class="section">
          <h2>Education</h2>
          <div class="card">
            <h3>${escapeHTML(edu.institution || "")}</h3>
            <div class="meta"><span class="pill">${escapeHTML(edu.location || "")}</span><span class="pill">${escapeHTML(edu.startDate || "")}–${escapeHTML(edu.endDate || "")}</span></div>
            <p class="lead"><strong>${escapeHTML(edu.studyType || "")}</strong> — ${escapeHTML(edu.area || "")}</p>
            ${edu.description ? `<p>${escapeHTML(edu.description)}</p>` : ""}
          </div>
        </div>
      ` : "";

      const accHTML = (resume.accomplishments || []).map(a => `
        <li><strong>${escapeHTML(a.title || "")}:</strong> ${escapeHTML(a.summary || "")}</li>
      `).join("");

      const headerName = `
        <div class="title" style="font-size: clamp(1.4rem, 3vw, 1.9rem);">
          ${escapeHTML(b.name || "")}
        </div>
        <div class="subtitle">
          ${escapeHTML(b.label || "")}${b.location && b.location.city ? ` • ${escapeHTML(b.location.city)}` : ""}
        </div>
      `;

      container.innerHTML = `
        <header class="header">
          <div class="header-inner">
            <div>${headerName}</div>
            <div class="toolbar">
              <button class="btn ghost" id="themeToggle" aria-label="Toggle theme">${iconSunMoon()} <span class="hide@sm">Theme</span></button>
              <button class="btn ghost" id="printBtn" aria-label="Print / Save PDF">${iconPrint()} <span class="hide@sm">Print</span></button>
            </div>
          </div>
        </header>

        <div class="wrap">
          <div class="grid">
            <!-- LEFT -->
            <aside>
              <section class="card section">
                <h2>About</h2>
                ${b.summary ? `<p class="lead">${escapeHTML(b.summary)}</p>` : ""}
                <div class="searchbar">
                  <input id="searchInput" type="search" placeholder="Search: Databricks, dbt, migration…" aria-label="Search resume" />
                </div>
                <div class="hint">Tip: click a skill to filter the Experience & Projects.</div>
              </section>

              <section class="card section">
                <h2>Contact</h2>
                <div class="contact">
                  ${b.email ? `<button id="copyEmail">${iconMail()} <span>${escapeHTML(b.email)}</span></button>` : ""}
                  ${b.phone ? `<a href="tel:${escapeAttr(b.phone)}">${iconPhone()}<span>${escapeHTML(b.phone)}</span></a>` : ""}
                  ${b.location?.city ? `<div class="muted" style="display:grid;grid-template-columns:22px 1fr;gap:10px;align-items:center;">${iconLocation()} <span>${escapeHTML(b.location.city)}</span></div>` : ""}
                  ${profilesHTML}
                </div>
              </section>

              <section class="card section">
                <h2>Skills</h2>
                ${skillsHTML || `<div class="muted">No skills provided.</div>`}
              </section>
            </aside>

            <!-- RIGHT -->
            <main>
              <section class="card section">
                <h2>Experience</h2>
                <div class="timeline" id="experience">
                  ${workHTML || `<div class="muted">No work history provided.</div>`}
                </div>
              </section>

              <section class="card section">
                <h2>Projects</h2>
                <div class="projects" id="projects">
                  ${projectsHTML || `<div class="muted">No projects listed.</div>`}
                </div>
              </section>

              ${eduHTML}

              <section class="card section">
                <h2>Accomplishments</h2>
                ${accHTML ? `<ul class="clean">${accHTML}</ul>` : `<div class="muted">No notable accomplishments listed.</div>`}
              </section>

              <div class="footer">Built as a single-file, self-contained variant • No external calls (besides /data/resume.json)</div>
            </main>
          </div>
        </div>
      `;

      attachToolbarActions();
      attachInteractions();
    }

    function renderError(err) {
      container.innerHTML = `
        <header class="header">
          <div class="header-inner">
            <div>
              <div class="title">Unable to load resume</div>
              <div class="subtitle muted">Please ensure <code>/data/resume.json</code> is available on the same origin.</div>
            </div>
            <div class="toolbar">
              <button class="btn ghost" id="themeToggle" aria-label="Toggle theme">${iconSunMoon()}</button>
              <button class="btn ghost" id="printBtn" aria-label="Print / Save PDF">${iconPrint()}</button>
            </div>
          </div>
        </header>
        <div class="wrap">
          <div class="card">
            <p class="lead"><strong>Error:</strong> ${escapeHTML(String(err && err.message || err))}</p>
            <p class="muted">Expected to find JSON at <code>/data/resume.json</code>.</p>
          </div>
        </div>`;
      attachToolbarActions();
    }

    /*** ====== 3) Interactions (search, filter, actions) ====== ***/
    function attachToolbarActions() {
      const printBtn = container.querySelector("#printBtn");
      if (printBtn) printBtn.onclick = () => window.print();

      const themeBtn = container.querySelector("#themeToggle");
      if (themeBtn) themeBtn.onclick = () => {
        const cur = container.getAttribute("data-theme") || "auto";
        const next = cur === "auto" ? "dark" : (cur === "dark" ? "light" : "auto");
        container.setAttribute("data-theme", next);
        localStorage.setItem("resumeTheme", next);
      };
    }

    function attachInteractions() {
      // Copy email
      const copyBtn = container.querySelector("#copyEmail");
      if (copyBtn) copyBtn.onclick = async () => {
        const text = copyBtn.textContent.trim();
        try { await navigator.clipboard.writeText(text); copyBtn.classList.add("active"); setTimeout(()=>copyBtn.classList.remove("active"), 800); } catch(e){}
      };

      // Skill filter chips
      const activeSkills = new Set();
      container.querySelectorAll(".js-skill").forEach(btn => {
        btn.addEventListener("click", () => {
          const key = btn.getAttribute("data-skill");
          if (btn.classList.toggle("active")) activeSkills.add(key);
          else activeSkills.delete(key);
          applyFilters();
        });
      });

      // Search filter
      const search = container.querySelector("#searchInput");
      if (search) {
        let t;
        search.addEventListener("input", () => {
          clearTimeout(t);
          t = setTimeout(applyFilters, 120);
        });
      }

      function applyFilters() {
        const q = (container.querySelector("#searchInput")?.value || "").toLowerCase().trim();
        const skills = Array.from(activeSkills);
        const blocks = container.querySelectorAll('[data-block="work"],[data-block="project"]');
        blocks.forEach(b => {
          const txt = b.textContent.toLowerCase();
          const matchesQuery = q ? txt.includes(q) : true;
          const matchesSkills = skills.length ? skills.some(s => txt.includes(s.toLowerCase())) : true;
          b.style.display = (matchesQuery && matchesSkills) ? "" : "none";
        });
      }
    }

    /*** ====== 4) Utilities ====== ***/
    function escapeHTML(s) {
      return String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));
    }
    function escapeAttr(s) {
      return String(s).replace(/"/g, "&quot;");
    }
    function emphasizeNumbers(s) {
      // Highlight metrics: numbers, $, %, and X multipliers
      return s.replace(/(\$?\b\d[\d,\.]*\+?|\b\d+x\b|[1-9]\d?%)/gi, '<span class="num">$1</span>');
    }
    function formatDates(start, end) {
      const fmt = d => {
        if (!d) return "Present";
        const [y, m="01"] = String(d).split("-");
        const date = new Date(Number(y), Number(m)-1, 1);
        return date.toLocaleString(undefined, { month: "short", year: "numeric" });
      };
      const now = new Date();
      const s = parseYM(start);
      const e = end ? parseYM(end) : now;
      const tenure = s ? diffYM(s, e) : "";
      return { label: `${fmt(start)}–${fmt(end || "")}`, tenure };
    }
    function parseYM(str) {
      if (!str) return null;
      const [y, m="01"] = String(str).split("-");
      return new Date(Number(y), Number(m)-1, 1);
    }
    function diffYM(a, b) {
      try {
        let months = (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth());
        if (months < 0) months = 0;
        const y = Math.floor(months / 12);
        const m = months % 12;
        const yPart = y ? `${y} yr${y>1?"s":""}` : "";
        const mPart = m ? `${m} mo` : "";
        return [yPart, mPart].filter(Boolean).join(" ");
      } catch { return ""; }
    }

    /*** ====== 5) Icons (inline SVG) ====== ***/
    function iconPrint(){return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 7V3h10v4M6 17H4a2 2 0 0 1-2-2v-3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v3a2 2 0 0 1-2 2h-2M7 13h10v8H7v-8Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`}
    function iconSunMoon(){return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v2m0 14v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12h2m14 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`}
    function iconMail(){return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6h16v12H4z" stroke="currentColor" stroke-width="1.6"/><path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="1.6" fill="none"/></svg>`}
    function iconPhone(){return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.15 9.81a19.8 19.8 0 0 1-3.07-8.63A2 2 0 0 1 2.06-.99h2a2 2 0 0 1 2 1.72c.13 1 .37 1.97.72 2.9a2 2 0 0 1-.45 2.11L5.1 7.68a16 16 0 0 0 6.22 6.22l1.94-1.23a2 2 0 0 1 2.11-.45c.93.35 1.9.59 2.9.72A2 2 0 0 1 22 16.92Z" stroke="currentColor" stroke-width="1.4"/></svg>`}
    function iconLocation(){return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s7-5.33 7-11a7 7 0 1 0-14 0c0 5.67 7 11 7 11Z" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.6"/></svg>`}
    function profileIcon(nw){
      const n = (nw||"").toLowerCase();
      if (n.includes("github")) return `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.41-4.04-1.41-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.82 1.3 3.51.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.46 11.46 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.9 1.24 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"/></svg>`;
      if (n.includes("linkedin")) return `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5H4.5V23H.5V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V23h-4V15.6c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.82 1.91-2.82 3.89V23h-4V8.5z"/></svg>`;
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="10"/></svg>`;
    }
  })();
  </script>
</body>
</html>
</file>

<file path="public/variants/gpt-5-thinking/enablement/index.html">
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>AI Enablement — Variant</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light dark" />
  <style>
    /* ===============================
       Scoped Styles (no CSS leaks)
       Everything lives under [id^="app-"]
       =============================== */
    [id^="app-"] { --bg: #0b0c0f; --panel:#11131a; --panel-2:#0f1117; --text:#e6e8ee; --muted:#a6adbb; --link:#7dd3fc; --brand:#8b5cf6;
      --ok:#22c55e; --warn:#f59e0b; --danger:#ef4444; --ring:#334155; --card:#0e1016; --border:#1f2430; --shadow: 0 10px 30px rgba(0,0,0,.35);
      --radius: 16px; --radius-sm: 10px; --radius-lg: 22px; --gap: 16px; --gap-lg: 28px; --maxw: 1100px; font: 500 16px/1.6 system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji;
      color: var(--text); background: radial-gradient(1200px 800px at 10% -10%, #1a1942 0%, transparent 40%), radial-gradient(1000px 700px at 120% 10%, #0a3b5e 0%, transparent 45%), var(--bg);
      min-height: 100svh; }
    @media (prefers-color-scheme: light){
      [id^="app-"]{ --bg:#f7f7fb; --panel:#ffffff; --panel-2:#f9fafb; --text:#0f1222; --muted:#525a70; --link:#0ea5e9; --brand:#6d28d9; --card:#ffffff; --border:#e6e8ee; --ring:#d6d9e2; box-shadow:none; background: linear-gradient(180deg,#f7f8ff, #fff 20%, #fafbff);}
    }

    [id^="app-"] .shell{ max-width: var(--maxw); margin-inline:auto; padding: 24px; }
    [id^="app-"] .topbar{ position: sticky; top: 0; z-index: 50; backdrop-filter: blur(8px);
      background: color-mix(in oklab, var(--panel) 70%, transparent); border-bottom: 1px solid var(--border); }
    [id^="app-"] .topbar-inner{ max-width: var(--maxw); margin: 0 auto; display:grid; grid-template-columns: 1fr auto; gap: 10px; align-items: center; padding: 10px 24px; }
    [id^="app-"] .brand{ display:flex; gap:10px; align-items:center; text-decoration: none; color: var(--text); }
    [id^="app-"] .logo{ inline-size: 36px; block-size: 36px; display:grid; place-items:center; border-radius: 10px; background: linear-gradient(135deg, var(--brand), #22d3ee); color:white; font-weight: 800; box-shadow: var(--shadow) }
    [id^="app-"] .brand small{ color: var(--muted); display:block; font-weight: 600; margin-top:-4px; }
    [id^="app-"] nav a{ color: var(--muted); text-decoration:none; padding:8px 10px; border-radius: 999px; border:1px solid transparent}
    [id^="app-"] nav a.active{ color: var(--text); border-color: var(--border); background: color-mix(in oklab, var(--panel) 70%, transparent)}
    [id^="app-"] .nav{ display:flex; flex-wrap: wrap; gap: 6px; align-items:center; }
    [id^="app-"] .top-actions{ display:flex; gap:8px; align-items:center; }
    [id^="app-"] .btn{ --bgc: color-mix(in oklab, var(--brand) 60%, #3b82f6); --fg: white; background: var(--bgc); color: var(--fg); border:none; padding:10px 14px; border-radius: 999px; font-weight:700; cursor:pointer; box-shadow: var(--shadow); }
    [id^="app-"] .btn.secondary{ background: transparent; color: var(--text); border:1px solid var(--border); box-shadow:none; }
    [id^="app-"] .btn.ghost{ background: transparent; color: var(--muted); border:1px solid var(--border); box-shadow:none; }
    [id^="app-"] .icon{ inline-size: 1.1em; block-size: 1.1em; vertical-align: -0.15em }

    /* Hero */
    [id^="app-"] .hero{ display:grid; gap: 18px; padding: 40px 24px 12px; align-items:center; }
    [id^="app-"] .hero h1{ font-size: clamp(28px, 4vw, 44px); line-height:1.1; letter-spacing:-0.02em; margin:0; }
    [id^="app-"] .hero p.lead{ color: var(--muted); font-size: clamp(16px, 2.2vw, 20px); margin: 0 }
    [id^="app-"] .hero-ctas{ display:flex; flex-wrap:wrap; gap:10px; margin-top: 8px; }
    [id^="app-"] .meta{ display:flex; flex-wrap: wrap; gap: 10px; color: var(--muted); font-size: 14px; }
    [id^="app-"] .meta span{ display:inline-flex; align-items:center; gap:6px; padding:6px 10px; border:1px solid var(--border); border-radius:999px; background: color-mix(in oklab, var(--panel) 75%, transparent) }

    /* Surfaces */
    [id^="app-"] .card{ background: var(--card); border:1px solid var(--border); border-radius: var(--radius); box-shadow: var(--shadow) }
    [id^="app-"] .panel{ background: var(--panel); border:1px solid var(--border); border-radius: var(--radius); }

    /* Value props */
    [id^="app-"] .props{ display:grid; gap: var(--gap); grid-template-columns: repeat( auto-fit, minmax(220px,1fr) ); margin-top: 18px;}
    [id^="app-"] .prop{ padding: 16px; display:grid; gap:10px; }
    [id^="app-"] .prop h3{ margin:0; font-size: 18px }
    [id^="app-"] .prop ul{ margin:0; padding-left: 1.1em; color: var(--muted) }

    /* Sections */
    [id^="app-"] section{ scroll-margin-top: 90px; }
    [id^="app-"] .section{ padding: 24px; margin-top: 18px }
    [id^="app-"] .section header{ display:flex; justify-content:space-between; align-items:center; gap:10px; margin-bottom: 10px;}
    [id^="app-"] .section h2{ margin:0; font-size: clamp(20px, 3vw, 26px) }
    [id^="app-"] .section .copylink{ color: var(--muted); border:1px solid var(--border); border-radius: 999px; padding:6px 10px; background:transparent; }
    [id^="app-"] .two-col{ display:grid; grid-template-columns: 1.2fr .8fr; gap: var(--gap); }
    @media (max-width: 880px){ [id^="app-"] .two-col{ grid-template-columns: 1fr } }

    /* Cards grid */
    [id^="app-"] .cards{ display:grid; gap: var(--gap); grid-template-columns: repeat( auto-fit, minmax(240px,1fr) ); }
    [id^="app-"] .kard{ padding: 16px; display:grid; gap:8px }
    [id^="app-"] .kard h3{ margin:0; font-size: 18px }
    [id^="app-"] .kard .deliver{ display:flex; flex-wrap:wrap; gap:8px; margin-top:6px }
    [id^="app-"] .pill{ padding:6px 10px; border-radius:999px; background: color-mix(in oklab, var(--panel) 85%, transparent); border: 1px solid var(--border); font-size: 13px; color: var(--muted) }

    /* Lists */
    [id^="app-"] .bullets ul{ margin: 0; padding-left: 1.1em; }
    [id^="app-"] .text p{ margin: 0 0 8px; }

    /* Accordion */
    [id^="app-"] .accordion details{ border:1px solid var(--border); border-radius: var(--radius-sm); padding: 10px 12px; background: var(--panel-2) }
    [id^="app-"] .accordion details + details{ margin-top: 8px }
    [id^="app-"] .accordion summary{ cursor:pointer; list-style: none; display:flex; align-items:center; gap:10px; font-weight: 700 }
    [id^="app-"] .accordion summary::-webkit-details-marker{ display:none }
    [id^="app-"] .accordion .acontent{ color: var(--muted); padding: 6px 2px 2px 2px }
    [id^="app-"] .accordion .acontent p{ margin: 0 0 6px }

    /* Process timeline */
    [id^="app-"] .process{ position:relative; padding-left: 26px }
    [id^="app-"] .process::before{ content:""; position:absolute; left: 9px; top: 6px; bottom: 6px; width: 2px; background: linear-gradient(180deg, var(--brand), transparent) }
    [id^="app-"] .step{ position:relative; margin: 0 0 12px; padding: 0 0 0 4px }
    [id^="app-"] .step::before{ content:""; position:absolute; left: -18px; top: 2px; width: 14px; height:14px; border-radius:50%; background: color-mix(in oklab, var(--brand) 70%, #22d3ee); box-shadow: 0 0 0 3px color-mix(in oklab, var(--brand) 25%, transparent); }

    /* Resources */
    [id^="app-"] .resources{ display:grid; gap: var(--gap); grid-template-columns: repeat( auto-fit, minmax(260px,1fr) ); }
    [id^="app-"] .resource{ padding: 14px; display:grid; gap:6px }
    [id^="app-"] .resource .kind{ font-size: 12px; color: var(--muted) }
    [id^="app-"] .resource a.link{ text-decoration:none; color: var(--link); font-weight: 700 }

    /* Footer CTA */
    [id^="app-"] .cta{ text-align:center; padding: 28px; display:grid; gap: 10px }
    [id^="app-"] .cta h3{ margin:0; font-size: 24px }
    [id^="app-"] .cta p{ margin:0; color: var(--muted) }

    /* Toolbar (theme, print, search) */
    [id^="app-"] .toolbar{ display:flex; gap:6px; align-items:center; flex-wrap: wrap; }
    [id^="app-"] .input{ background: var(--panel-2); color:var(--text); border:1px solid var(--border); border-radius: 999px; padding: 8px 12px; outline:none; min-width: 180px }
    [id^="app-"] .kbd{ font: 600 12px/1 system-ui; color: var(--muted); border:1px solid var(--border); border-radius: 6px; padding: 2px 6px; background: var(--panel-2) }

    /* Toast */
    [id^="app-"] .toast{ position: fixed; inset-inline: 0; bottom: 18px; display:grid; place-items:center; pointer-events: none; z-index: 60 }
    [id^="app-"] .toast span{ pointer-events:auto; background: var(--panel); border: 1px solid var(--border); padding: 10px 14px; border-radius: 999px; box-shadow: var(--shadow); }

    /* Loader skeletons */
    [id^="app-"] .skeleton{ display:block; border-radius: 8px; background: linear-gradient(90deg, color-mix(in oklab, var(--panel) 75%, transparent), color-mix(in oklab, var(--panel) 60%, transparent), color-mix(in oklab, var(--panel) 75%, transparent)); background-size: 200% 100%; animation: s 1.2s infinite linear; }
    [id^="app-"] .sk-title{ height: 28px; width: 60%; }
    [id^="app-"] .sk-line{ height: 14px; width: 100% }
    @keyframes s{ to{ background-position: -200% 0 } }

    /* Print */
    @media print{
      [id^="app-"] .topbar,[id^="app-"] .hero-ctas,[id^="app-"] .top-actions,[id^="app-"] .copylink,[id^="app-"] .toast{ display:none !important }
      [id^="app-"]{ background:white; color:#111 }
      [id^="app-"] .card, [id^="app-"] .panel{ box-shadow:none; border-color:#ddd }
      [id^="app-"] a{ color:#000; text-decoration:underline }
    }
  </style>
</head>
<body>
<div id="app-tool">
  <div class="topbar">
    <div class="topbar-inner">
      <a class="brand" href="#top" aria-label="Go to top">
        <div class="logo" aria-hidden="true">AE</div>
        <div>
          <strong>AI Enablement</strong>
          <small>Effectiveness &gt; Output</small>
        </div>
      </a>
      <div class="top-actions">
        <nav class="nav" aria-label="Primary">
          <!-- Populated from data -->
        </nav>
        <div class="toolbar">
          <input id="q" class="input" placeholder="Search sections…" aria-label="Search" />
          <button class="btn ghost" id="themeBtn" title="Toggle theme" aria-label="Toggle theme">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3a9 9 0 0 0 9 9 9 9 0 1 1-9-9Z" stroke-width="2"/></svg>
          </button>
          <button class="btn ghost" id="printBtn" title="Print / Save PDF" aria-label="Print">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M8 22h8v-7H8v7Z" stroke-width="2"/></svg>
          </button>
        </div>
      </div>
    </div>
  </div>

  <main class="shell" id="top" tabindex="-1">
    <!-- Hero -->
    <section class="hero">
      <h1 class="skeleton sk-title" id="hero-title"></h1>
      <p class="lead skeleton sk-line" id="hero-sub"></p>
      <div class="hero-ctas" id="hero-ctas">
        <!-- CTAs from data -->
      </div>
      <div class="meta" id="meta">
        <!-- meta chips -->
      </div>
    </section>

    <!-- Value Props -->
    <section class="section card" id="value-props">
      <header>
        <h2>Why this works</h2>
        <button class="copylink" data-target="value-props" title="Copy link">#</button>
      </header>
      <div class="props" id="props-grid">
        <!-- populated -->
      </div>
    </section>

    <!-- Dynamic Sections -->
    <div id="sections">
      <!-- populated -->
    </div>

    <!-- Resources -->
    <section id="resources" class="section card">
      <header>
        <h2>Resources</h2>
        <button class="copylink" data-target="resources" title="Copy link">#</button>
      </header>
      <div class="resources" id="resources-grid"></div>
    </section>

    <!-- CTA -->
    <section class="section panel cta" id="contact">
      <h3 id="cta-head">Let's talk</h3>
      <p id="cta-sub">Email is best—happy to tailor a plan to your context.</p>
      <div class="hero-ctas" id="cta-actions"></div>
      <p class="meta">
        <span><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 8v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18-3H3m18 0-9 7L3 5" stroke-width="2"/></svg> email-first; contact for quote or to hire</span>
        <span><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18l6-6-6-6" stroke-width="2"/></svg> Minimal resume: <a href="/resume">/resume</a></span>
      </p>
    </section>
  </main>

  <!-- Toasts -->
  <div class="toast" id="toast" aria-live="polite" aria-atomic="true" hidden>
    <span id="toast-msg"></span>
  </div>
</div>

<script>
(function(){
  // Scope root id = app-<tool> inferred from URL
  const root = document.getElementById('app-tool');
  const match = location.pathname.match(/\/variants\/([^/]+)/i);
  const tool = (match && match[1]) ? match[1] : 'tool';
  root.id = `app-${tool}`;

  // Helpers
  const $ = (sel, base=root) => base.querySelector(sel);
  const $$ = (sel, base=root) => Array.from(base.querySelectorAll(sel));
  const el = (tag, props={}, children=[]) => {
    const n = document.createElement(tag);
    Object.entries(props).forEach(([k,v])=>{
      if (k === 'class') n.className = v;
      else if (k === 'html') n.innerHTML = v;
      else if (k.startsWith('on') && typeof v === 'function') n.addEventListener(k.substring(2), v);
      else if (v !== undefined && v !== null) n.setAttribute(k, v);
    });
    (Array.isArray(children)?children:[children]).filter(Boolean).forEach(c => n.append(c.nodeType?c:document.createTextNode(c)));
    return n;
  };
  const icon = (name) => {
    const svgs = {
      mail:'<path d="M21 8v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18-3H3m18 0-9 7L3 5" stroke-width="2"/>',
      arrow:'<path d="M9 18l6-6-6-6" stroke-width="2"/>',
      check:'<path d="M20 6 9 17l-5-5" stroke-width="2"/>',
      bolt:'<path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" stroke-width="2"/>',
      lock:'<rect x="4" y="10" width="16" height="10" rx="2" stroke-width="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3" stroke-width="2"/>',
      list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke-width="2"/>',
      link:'<path d="M10 13a5 5 0 0 0 7.07 0l3.54-3.54a5 5 0 0 0-7.07-7.07L11 4M14 11a5 5 0 0 1-7.07 0L3.39 7.46a5 5 0 0 1 7.07-7.07L13 2" stroke-width="2"/>'
    };
    const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('viewBox','0 0 24 24');
    svg.setAttribute('fill','none'); svg.setAttribute('stroke','currentColor'); svg.setAttribute('class','icon');
    svg.innerHTML = svgs[name] || svgs['bolt'];
    return svg;
  };
  const toast = (msg) => {
    const t = $('#toast'), m = $('#toast-msg');
    m.textContent = msg; t.hidden = false;
    clearTimeout(t._h); t._h = setTimeout(()=> t.hidden = true, 1600);
  };
  const copy = async (text) => { try{ await navigator.clipboard.writeText(text); toast('Link copied'); }catch(e){ toast('Copy failed'); } };

  // Theme toggle
  const THEME_KEY = 'ae:theme';
  const setTheme = (mode) => { if(mode==='dark'){ root.dataset.theme='dark'; document.documentElement.style.colorScheme='dark'; } else { delete root.dataset.theme; document.documentElement.style.colorScheme='light'; } localStorage.setItem(THEME_KEY, mode); };
  const loadTheme = ()=> { const saved = localStorage.getItem(THEME_KEY); if(saved) setTheme(saved); };
  $('#themeBtn').addEventListener('click', ()=> setTheme(root.dataset.theme==='dark'?'light':'dark'));
  loadTheme();

  // Print
  $('#printBtn').addEventListener('click', ()=> window.print());

  // Fetch and render
  const hrefSafe = (s)=> (typeof s==='string'?s:'#');
  const fetchData = async () => {
    const res = await fetch("https://www.austinwallace.ca/data/enablement.json")
    if(!res.ok) throw new Error('Failed to load /data/enablement.json');
    return res.json();
  };

  const makeNav = (data) => {
    const nav = $('.nav');
    const items = [
      ['Approach', '#value-props'],
      ...(data.sections||[]).map(s => [s.title, `#${s.id}`]),
      ['Resources', '#resources'],
      ['Contact', '#contact']
    ];
    items.forEach(([label, href])=>{
      const a = el('a', {href, 'data-nav': href}, label);
      nav.append(a);
    });
    // Active-on-scroll
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          const id = '#'+e.target.id;
          $$('.nav a').forEach(a=> a.classList.toggle('active', a.getAttribute('data-nav')===id));
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0.01 });
    ['value-props', ...(data.sections||[]).map(s=>s.id), 'resources', 'contact'].forEach(id=>{
      const n = document.getElementById(id);
      if(n) obs.observe(n);
    });
  };

  const renderHero = (hero, meta) => {
    const title = $('#hero-title'), sub = $('#hero-sub'), ctas = $('#hero-ctas'), metaBox = $('#meta');
    title.classList.remove('skeleton','sk-title'); title.textContent = hero?.title || 'AI Enablement';
    sub.classList.remove('skeleton','sk-line'); sub.textContent = hero?.subtitle || '';
    ctas.innerHTML = '';
    if(hero?.primary_cta){ const a = el('a',{href:hrefSafe(hero.primary_cta.href), class:'btn'}, [icon('mail'),' ', hero.primary_cta.label||'Email']); ctas.append(a); }
    if(hero?.secondary_cta){ const a2 = el('a',{href:hrefSafe(hero.secondary_cta.href), class:'btn secondary'}, [hero.secondary_cta.label||'Learn more']); ctas.append(a2); }
    metaBox.innerHTML='';
    if(meta?.audience) meta.audience.forEach(a=> metaBox.append(el('span',{},[icon('list'),' ', a])));
    if(meta?.principle) metaBox.append(el('span',{},[icon('check'),' ', meta.principle]));
  };

  const renderValueProps = (props=[]) => {
    const grid = $('#props-grid'); grid.innerHTML='';
    props.forEach(p=>{
      const card = el('article', {class:'prop panel', id:p.id || ''});
      card.append(el('h3',{},p.title||''));
      if(p.bullets?.length){
        const ul = el('ul'); p.bullets.forEach(b=> ul.append(el('li',{},b))); card.append(ul);
      }
      grid.append(card);
    });
  };

  const renderSections = (sections=[]) => {
    const wrap = $('#sections'); wrap.innerHTML = '';
    sections.forEach(s=>{
      const sec = el('section',{id:s.id, class:'section card'});
      const header = el('header'); header.append(el('h2',{},s.title||''));
      const btn = el('button',{class:'copylink','data-target':s.id, title:'Copy link'},'#');
      btn.addEventListener('click', ()=> copy(location.origin + location.pathname + '#' + s.id));
      header.append(btn); sec.append(header);

      if(s.type==='cards'){
        const grid = el('div',{class:'cards'});
        (s.cards||[]).forEach(k=>{
          const c = el('article',{class:'kard panel'});
          c.append(el('h3',{},k.title||''), el('p',{class:'muted'}, k.body||''));
          if(k.deliverables?.length){
            const row = el('div',{class:'deliver'});
            k.deliverables.forEach(d=> row.append(el('span',{class:'pill'}, d)));
            c.append(row);
          }
          grid.append(c);
        });
        sec.append(grid);
      }

      if(s.type==='text'){ const bx = el('div',{class:'text'}); (s.body||[]).forEach(p=> bx.append(el('p',{},p))); sec.append(bx); }

      if(s.type==='bullets'){
        const bx = el('div',{class:'bullets'});
        const ul = el('ul'); (s.bullets||[]).forEach(b=> ul.append(el('li',{},b)));
        bx.append(ul); sec.append(bx);
      }

      if(s.type==='accordion'){
        const ac = el('div',{class:'accordion'});
        if(s.intro) ac.append(el('p',{class:'muted'}, s.intro));
        (s.items||[]).forEach(it=>{
          const d = el('details'); const sum = el('summary',{},[icon('arrow'), ' ', it.label||'']);
          const cont = el('div',{class:'acontent'}); (it.content||[]).forEach(p=> cont.append(el('p',{},p)));
          d.append(sum, cont); ac.append(d);
        });
        sec.append(ac);
      }

      if(s.type==='process'){
        const proc = el('div',{class:'process panel', role:'list'});
        (s.steps||[]).forEach(step=> proc.append(el('div',{class:'step', role:'listitem'}, step)));
        sec.append(proc);
      }

      wrap.append(sec);
    });
  };

  const renderResources = (resources=[]) => {
    const grid = $('#resources-grid'); grid.innerHTML='';
    resources.forEach(r=>{
      const c = el('article',{class:'resource panel'});
      c.append(el('span',{class:'kind'}, r.kind || 'link'));
      c.append(el('a',{href:hrefSafe(r.url), class:'link', target:'_blank', rel:'noopener'}, r.title || r.url));
      if(r.notes) c.append(el('p',{class:'muted'}, r.notes));
      grid.append(c);
    });
  };

  const renderCTA = (cta={}, meta={}) => {
    $('#cta-head').textContent = cta.headline || 'Curious if this would work for your team?';
    $('#cta-sub').textContent = cta.subhead || 'If these ideas resonate, let\'s talk about your context.';
    const actions = $('#cta-actions'); actions.innerHTML='';
    (cta.actions||[]).forEach(a=> actions.append(el('a',{href:hrefSafe(a.href), class:'btn'}, [icon('mail'),' ', a.label||'Email me'])));
    // meta chips already shown in hero, but surface contact mode here too
    if(meta?.contact_mode){
      const p = $('#contact .meta'); if(p) p.firstElementChild && (p.firstElementChild.innerHTML = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 8v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18-3H3m18 0-9 7L3 5" stroke-width="2"/></svg> '+ meta.contact_mode);
    }
  };

  const applySearch = () => {
    const q = $('#q').value.trim().toLowerCase();
    const sections = ['#value-props', ...($$('#sections .section').map(s=> '#'+s.id)), '#resources', '#contact'];
    if(!q){ sections.forEach(id=> root.querySelector(id).style.removeProperty('display')); return; }
    sections.forEach(id=>{
      const node = root.querySelector(id);
      const text = node.textContent.toLowerCase();
      node.style.display = text.includes(q) ? '' : 'none';
    });
  };
  $('#q').addEventListener('input', applySearch);

  // Copy link buttons
  root.addEventListener('click', (e)=>{
    const btn = e.target.closest('.copylink');
    if(!btn) return;
    const id = btn.getAttribute('data-target');
    const link = location.origin + location.pathname + '#' + id;
    copy(link);
  });

  // Load + render
  (async function init(){
    try{
      const data = await fetchData();
      renderHero(data.hero, data.meta);
      renderValueProps(data.value_props);
      renderSections(data.sections);
      renderResources(data.resources);
      renderCTA(data.cta, data.meta);
      makeNav(data);
    }catch(err){
      // Graceful fallback content
      $('#hero-title').classList.remove('skeleton','sk-title');
      $('#hero-sub').classList.remove('skeleton','sk-line');
      $('#hero-title').textContent = 'AI Enablement';
      $('#hero-sub').textContent = 'Ship faster and safer with workflows your team will actually use.';
      $('#hero-ctas').append(el('a',{href:'#contact', class:'btn'}, [icon('mail'),' ','Get in touch']));
      $('#props-grid').innerHTML = '<div class="prop panel"><h3>Effectiveness first</h3><ul><li>Progress towards goals beats raw output.</li></ul></div>';
      toast('Using fallback content (data not found)');
      console.error(err);
    }
  })();
})();
</script>
</body>
</html>
</file>

<file path="public/variants/gpt-5-thinking/index.html">
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Austin Wallace — Data Engineer · Resume</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light dark" />
  <meta name="description" content="Resume and work showcase for Austin Wallace — Data Engineer specializing in Databricks, Snowflake, dbt, and AI enablement." />
  <style>
    /* ========= SCOPE ALL STYLES TO THIS VARIANT =========
       We scope by any element whose id starts with "app-".
       This satisfies the namespace requirement even if the <tool> segment changes.
    */
    :where([id^="app-"]) { --radius: 14px; --radius-sm: 10px; --shadow-1: 0 1px 2px rgba(0,0,0,.06), 0 8px 30px rgba(0,0,0,.06); --shadow-2: 0 2px 4px rgba(0,0,0,.08), 0 14px 45px rgba(0,0,0,.10); --maxw: 1100px; --fw-ui: 600; --fw-bold: 700; --fw-normal: 450; --sp-0: .25rem; --sp-1: .5rem; --sp-2: .75rem; --sp-3: 1rem; --sp-4: 1.25rem; --sp-5: 1.5rem; --sp-6: 2rem; --sp-7: 3rem; --sp-8: 4rem;
      --font: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji";
      --mono: ui-monospace, Menlo, Consolas, "Liberation Mono", monospace;
      --bg: #0b0c0f; --panel: #11131a; --muted: #7a8699; --text: #e8edf5; --link: #87b7ff; --ok: #2fd17a; --chip: #1a2030; --chip-border: #28324a; --hero-accent: radial-gradient(1200px 600px at 10% -10%, rgba(67,97,238,.25), transparent 60%), radial-gradient(900px 700px at 120% 10%, rgba(47,209,122,.18), transparent 60%);
      --border: rgba(255,255,255,.08); --divider: rgba(255,255,255,.06); --callout: #141a26; --tag-bg: #0e1422; --tag-bd: #1e263a; --cta: #def; --cta-text: #07131f;
    }
    @media (prefers-color-scheme: light) {
      :where([id^="app-"]):not([data-theme="dark"]) {
        --bg: #f6f8fb; --panel: #ffffff; --muted: #617086; --text: #0b1426; --link: #1256d1; --ok: #1a9a5f; --chip: #f2f6ff; --chip-border: #dde7ff;
        --border: rgba(2, 19, 51, .08); --divider: rgba(2,19,51,.06); --callout: #f4f7ff; --tag-bg: #eef3ff; --tag-bd: #dfe8ff; --cta: #0b5cff; --cta-text: #fff;
        --hero-accent: radial-gradient(1200px 600px at 10% -10%, rgba(11,92,255,.12), transparent 60%), radial-gradient(900px 700px at 120% 10%, rgba(47,209,122,.10), transparent 60%);
      }
    }
    :where([id^="app-"]) * { box-sizing: border-box; }
    :where([id^="app-"]) body, :where([id^="app-"]) div { margin: 0; }
    :where([id^="app-"]) { font-family: var(--font); color: var(--text); }
    :where([id^="app-"]) a { color: var(--link); text-decoration: none; }
    :where([id^="app-"]) a:hover { text-decoration: underline; text-underline-offset: 2px; }
    :where([id^="app-"]) .shell { min-height: 100svh; background: var(--bg); }
    :where([id^="app-"]) .hero {
      background: linear-gradient(180deg, rgba(0,0,0,0) 0 50%, var(--bg) 100%), var(--hero-accent);
      padding: var(--sp-7) var(--sp-3) var(--sp-6);
      position: relative;
      overflow: hidden;
    }
    :where([id^="app-"]) .container { max-width: var(--maxw); margin: 0 auto; }
    :where([id^="app-"]) .card {
      background: var(--panel); border: 1px solid var(--border); border-radius: var(--radius);
      box-shadow: var(--shadow-1);
    }
    :where([id^="app-"]) .stack { display: grid; gap: var(--sp-5); }
    :where([id^="app-"]) .hstack { display: flex; gap: var(--sp-2); align-items: center; }
    :where([id^="app-"]) .spread { display: flex; align-items: center; justify-content: space-between; gap: var(--sp-3); }
    :where([id^="app-"]) .muted { color: var(--muted); }
    :where([id^="app-"]) .badge { background: var(--chip); border: 1px solid var(--chip-border); padding: .25rem .6rem; border-radius: 999px; font-size: .8rem; }
    :where([id^="app-"]) .btn {
      display: inline-flex; align-items: center; gap: .5rem; padding: .6rem .9rem; border: 1px solid var(--border);
      border-radius: 999px; background: var(--panel); box-shadow: var(--shadow-1); cursor: pointer; font-weight: var(--fw-ui);
    }
    :where([id^="app-"]) .btn.primary { background: var(--cta); color: var(--cta-text); border-color: transparent; }
    :where([id^="app-"]) .btn.ghost { background: transparent; }
    :where([id^="app-"]) .btn:disabled { opacity: .6; cursor: not-allowed; }
    :where([id^="app-"]) .toolbar { position: sticky; top: 0; z-index: 10; backdrop-filter: blur(8px); background: color-mix(in oklab, var(--bg) 88%, transparent); border-bottom: 1px solid var(--divider); }
    :where([id^="app-"]) nav .nav { display: flex; gap: .5rem; flex-wrap: wrap; }
    :where([id^="app-"]) nav .nav a { display: inline-flex; align-items: center; gap: .5rem; padding: .6rem .9rem; border-radius: 999px; border: 1px solid transparent; }
    :where([id^="app-"]) nav .nav a.active { border-color: var(--chip-border); background: var(--chip); }
    :where([id^="app-"]) h1 { font-size: clamp(2rem, 3vw + 1rem, 3rem); margin: 0; line-height: 1.1; letter-spacing: -.02em; }
    :where([id^="app-"]) h2 { font-size: 1.35rem; letter-spacing: -.01em; margin: 0 0 .25rem; }
    :where([id^="app-"]) h3 { font-size: 1.05rem; margin: 0 0 .25rem; }
    :where([id^="app-"]) p { margin: 0; line-height: 1.55; }
    :where([id^="app-"]) .hero-grid { display: grid; grid-template-columns: 1.2fr .8fr; gap: var(--sp-5); }
    @media (max-width: 900px) { :where([id^="app-"]) .hero-grid { grid-template-columns: 1fr; } }
    :where([id^="app-"]) .chips { display: flex; flex-wrap: wrap; gap: .5rem; }
    :where([id^="app-"]) .chip { background: var(--tag-bg); border: 1px solid var(--tag-bd); padding: .35rem .6rem; border-radius: 999px; font-size: .85rem; white-space: nowrap; }
    :where([id^="app-"]) .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: var(--sp-5); }
    @media (max-width: 900px) { :where([id^="app-"]) .grid-2 { grid-template-columns: 1fr; } }
    :where([id^="app-"]) .section { padding: var(--sp-6) var(--sp-3); }
    :where([id^="app-"]) .work-item { padding: var(--sp-5); border: 1px solid var(--border); border-radius: var(--radius); background: var(--panel); }
    :where([id^="app-"]) .work-head { display: grid; grid-template-columns: 1fr auto; gap: var(--sp-2); margin-bottom: .35rem; }
    :where([id^="app-"]) .kpis { display: flex; gap: var(--sp-5); flex-wrap: wrap; }
    :where([id^="app-"]) .kpi { display: grid; gap: .2rem; }
    :where([id^="app-"]) .kpi strong { font-size: 1.1rem; }
    :where([id^="app-"]) .list { display: grid; gap: .6rem; margin-top: .6rem; }
    :where([id^="app-"]) .list li { list-style: none; padding-left: 1.4rem; position: relative; }
    :where([id^="app-"]) .list li::before { content: ""; position: absolute; left: 0; top: .45rem; width: .6rem; height: .6rem; border-radius: 50%; background: var(--ok); box-shadow: 0 0 0 3px color-mix(in oklab, var(--ok) 25%, transparent); }
    :where([id^="app-"]) .highlight { background: var(--callout); border: 1px dashed var(--chip-border); padding: .8rem .9rem; border-radius: var(--radius-sm); }
    :where([id^="app-"]) .proj { padding: var(--sp-4); border: 1px solid var(--border); border-radius: var(--radius); background: var(--panel); display: grid; gap: .4rem; }
    :where([id^="app-"]) .foot { padding: var(--sp-6) var(--sp-3) var(--sp-7); text-align: center; color: var(--muted); }
    :where([id^="app-"]) .sr-only { position: absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }
    :where([id^="app-"]) .loader { height: 4px; border-radius: 999px; background: linear-gradient(90deg, color-mix(in oklab, var(--link) 60%, transparent), transparent); overflow: hidden; }
    :where([id^="app-"]) .loader::before { content:""; display:block; height:100%; width:40%; background: var(--link); filter: saturate(160%); animation: l 1.3s infinite; border-radius: 999px; }
    @keyframes l { 0%{transform:translateX(-100%);} 60%{transform:translateX(180%);} 100%{transform:translateX(220%);} }
    :where([id^="app-"]) .searchbar { display: flex; gap: .5rem; align-items: center; background: var(--panel); border: 1px solid var(--border); padding: .5rem .75rem; border-radius: 999px; }
    :where([id^="app-"]) .searchbar input { background: transparent; border: none; outline: none; color: var(--text); width: 100%; font-size: .95rem; }
    :where([id^="app-"]) .pill { padding: .35rem .55rem; border-radius: 999px; border: 1px solid var(--chip-border); background: var(--chip); font-size: .8rem; }
    :where([id^="app-"]) .tooltips { font-size: .85rem; }
    :where([id^="app-"]) .kv { display: grid; grid-auto-flow: column; gap: .5rem; }
    :where([id^="app-"]) .kv code { font-family: var(--mono); padding: .15rem .35rem; border-radius: .4rem; border: 1px solid var(--chip-border); background: var(--chip); }
    :where([id^="app-"]) .grid-3 { display: grid; gap: var(--sp-4); grid-template-columns: repeat(3,1fr); }
    @media (max-width: 1000px) { :where([id^="app-"]) .grid-3 { grid-template-columns: 1fr; } }
    :where([id^="app-"]) .accomplishment { padding: var(--sp-4); border: 1px solid var(--border); border-radius: var(--radius); background: var(--panel); }
    :where([id^="app-"]) .callout { padding: .9rem 1rem; border: 1px solid var(--tag-bd); border-radius: var(--radius); background: var(--tag-bg); }
    :where([id^="app-"]) .sep { border-top: 1px solid var(--divider); margin: var(--sp-5) 0; }
    :where([id^="app-"]) .sticky-cta { position: fixed; right: 16px; bottom: 16px; z-index: 20; display: flex; flex-direction: column; gap: .5rem; }
    :where([id^="app-"]) .sticky-cta .btn { box-shadow: var(--shadow-2); }
    :where([id^="app-"]) .avatar {
      width: 64px; height: 64px; border-radius: 50%;
      background: linear-gradient(135deg, color-mix(in oklab, var(--link) 25%, transparent), color-mix(in oklab, var(--ok) 25%, transparent));
      display: grid; place-items: center; color: #fff; font-weight: 800; letter-spacing: .5px;
      text-shadow: 0 1px 2px rgba(0,0,0,.25);
      border: 2px solid color-mix(in oklab, #fff 60%, transparent);
    }
    /* PRINT */
    @media print {
      :where([id^="app-"]) .toolbar, :where([id^="app-"]) .sticky-cta { display: none !important; }
      :where([id^="app-"]) .hero { padding: 0; background: none; }
      :where([id^="app-"]) .card, :where([id^="app-"]) .work-item, :where([id^="app-"]) .proj, :where([id^="app-"]) .accomplishment { box-shadow: none; border-color: #ddd; }
      :where([id^="app-"]) .section { padding: 0; }
      :where([id^="app-"]) .foot { padding: 0; }
      :where([id^="app-"]) .chip, :where([id^="app-"]) .badge, :where([id^="app-"]) .pill { border-color: #ccc; background: #f8f8f8; color: #000; }
      :where([id^="app-"]) .hero-grid { grid-template-columns: 1fr 1fr; }
      :where([id^="app-"]) .grid-3 { grid-template-columns: 1fr 1fr 1fr; }
    }
  </style>
</head>

<body>
  <!-- Dynamically set the required namespace id: app-<tool>
       We derive <tool> from /variants/<tool>/index.html to avoid CSS/JS leaks across variants. -->
  <script>
    (function () {
      const tool = (location.pathname.match(/\/variants\/([^/]+)/) || [,'resume'])[1];
      const id = 'app-' + tool;
      document.write('<div id="' + id + '" class="shell">');
    }());
  </script>

    <a class="sr-only" href="#main">Skip to content</a>

    <!-- Sticky top toolbar -->
    <header class="toolbar">
      <div class="container" style="padding: .6rem var(--sp-3); display:flex; align-items:center; justify-content:space-between; gap: .75rem;">
        <div class="hstack" role="status" aria-live="polite">
          <div class="avatar" aria-hidden="true">AW</div>
          <div>
            <strong style="display:block; letter-spacing:.2px;">Austin Wallace</strong>
            <span class="muted">Data Engineer · Victoria, BC</span>
          </div>
        </div>
        <nav aria-label="Primary">
          <div class="nav">
            <a href="#about" data-nav>About</a>
            <a href="#experience" data-nav>Experience</a>
            <a href="#projects" data-nav>Projects</a>
            <a href="#skills" data-nav>Skills</a>
            <a href="#accomplishments" data-nav>Highlights</a>
            <a href="#contact" data-nav>Contact</a>
          </div>
        </nav>
        <div class="hstack">
          <button class="btn ghost" id="themeBtn" aria-pressed="false" title="Toggle theme">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg>
            Theme
          </button>
          <button class="btn" id="printBtn" title="Save as PDF">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6 2h12v6H6zM6 14H4a2 2 0 0 1-2-2V9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v3a2 2 0 0 1-2 2h-2v6H6z"/></svg>
            PDF
          </button>
        </div>
      </div>
    </header>

    <!-- HERO -->
    <section class="hero">
      <div class="container hero-grid">
        <div class="card" style="padding: var(--sp-5); display:grid; gap: var(--sp-4);">
          <div class="spread">
            <div>
              <h1 id="about">Austin Wallace</h1>
              <div class="hstack" style="flex-wrap:wrap; gap:.5rem; margin-top:.35rem;">
                <span class="badge" id="roleBadge">Data Engineer</span>
                <span class="badge" id="expBadge" title="From resume summary">Experience</span>
                <span class="badge" id="locBadge">Victoria, BC</span>
              </div>
            </div>
            <div class="tooltips" style="text-align:right;">
              <div class="chips">
                <a class="chip" id="ghLink" rel="noopener noreferrer">GitHub</a>
                <a class="chip" id="liLink" rel="noopener noreferrer">LinkedIn</a>
                <button class="chip" id="copyEmailBtn" title="Copy email">Copy Email</button>
                <button class="chip" id="copyPhoneBtn" title="Copy phone">Copy Phone</button>
              </div>
            </div>
          </div>
          <p id="summaryText" class="muted"></p>

          <div class="kpis" role="list">
            <div class="kpi" role="listitem"><strong id="kpi1">—</strong><span class="muted">AI enablement impact</span></div>
            <div class="kpi" role="listitem"><strong id="kpi2">—</strong><span class="muted">Pipelines owned</span></div>
            <div class="kpi" role="listitem"><strong id="kpi3">—</strong><span class="muted">Rows handled / game</span></div>
          </div>

          <div class="highlight">
            <strong>What teams say I do best</strong>
            <ul class="list" id="heroBullets" style="margin-top:.5rem;"></ul>
          </div>

          <div class="hstack" style="flex-wrap:wrap; gap:.5rem;">
            <a href="#experience" class="btn primary">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 7h-5V3H9v4H4v2h16V7ZM6 10v9h12v-9H6Zm2 2h8v5H8v-5Z"/></svg>
              View Experience
            </a>
            <a href="#projects" class="btn">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 5h18v4H3zm0 5h18v4H3zm0 5h18v4H3z"/></svg>
              Projects
            </a>
            <a href="#contact" class="btn ghost">Contact</a>
          </div>
        </div>

        <aside class="card" style="padding: var(--sp-5); display:grid; gap: var(--sp-4);" aria-labelledby="quick-actions">
          <div class="spread">
            <h2 id="quick-actions" style="margin:0;">Quick Actions</h2>
            <span class="pill">No trackers. No external calls.</span>
          </div>
          <div class="searchbar" role="search">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M15.5 14h-.8l-.3-.3A6.5 6.5 0 1 0 14 15.5l.3.3v.8L20 21.5 21.5 20l-6-6zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z"/></svg>
            <input id="searchInput" type="search" placeholder="Filter highlights, skills, projects…" autocomplete="off" />
          </div>
          <div class="stack">
            <div class="kv">
              <span class="muted">Email</span>
              <code id="emailCode"></code>
              <button class="btn ghost" id="emailBtn">Open</button>
            </div>
            <div class="kv">
              <span class="muted">Phone</span>
              <code id="phoneCode"></code>
              <button class="btn ghost" id="phoneBtn">Call</button>
            </div>
            <div class="kv">
              <span class="muted">Location</span>
              <code id="locCode"></code>
            </div>
          </div>
          <div class="callout">
            <strong>Tip:</strong> Click any skill chip to highlight relevant bullets across the resume.
          </div>
        </aside>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <main id="main">
      <section class="section container">
        <div class="spread" style="margin-bottom: var(--sp-3);">
          <h2 id="experience">Experience</h2>
          <div class="hstack">
            <button class="btn ghost" id="expandAllBtn">Expand all</button>
            <button class="btn ghost" id="collapseAllBtn">Collapse all</button>
          </div>
        </div>
        <div id="workList" class="stack"></div>
      </section>

      <!-- PROJECTS & EDUCATION -->
      <section class="section container grid-2" id="projectsSection">
        <div>
          <div class="spread" style="margin-bottom: var(--sp-3);">
            <h2 id="projects">Projects</h2>
            <span class="muted">Production-grade side projects</span>
          </div>
          <div id="projectsList" class="stack"></div>
        </div>
        <div>
          <div class="spread" style="margin-bottom: var(--sp-3);">
            <h2 id="education">Education</h2>
          </div>
          <div id="educationCard" class="proj" aria-live="polite"></div>
        </div>
      </section>

      <!-- SKILLS -->
      <section class="section container">
        <div class="spread" style="margin-bottom: var(--sp-3);">
          <h2 id="skills">Skills</h2>
          <div class="hstack">
            <button class="btn ghost" id="clearFilterBtn" disabled>Clear filters</button>
          </div>
        </div>
        <div id="skillsGrid" class="grid-3"></div>
      </section>

      <!-- ACCOMPLISHMENTS -->
      <section class="section container">
        <div class="spread" style="margin-bottom: var(--sp-3);">
          <h2 id="accomplishments">Career Highlights</h2>
          <span class="muted">Select leadership & impact</span>
        </div>
        <div id="accompList" class="grid-3"></div>
      </section>

      <section id="contact" class="section container">
        <div class="spread">
          <h2>Contact</h2>
          <span class="muted">Let's talk about how I can help your team move faster—safely.</span>
        </div>
        <div class="sep"></div>
        <div class="hstack" style="flex-wrap:wrap; gap:.75rem;">
          <a id="contactEmail" class="btn primary">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 13L2 6.76V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.76zM21.64 6H2.36L12 12z"/></svg>
            Email Austin
          </a>
          <a id="contactLinkedIn" class="btn">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.94 6.5A2.19 2.19 0 1 1 4.75 4.3a2.2 2.2 0 0 1 2.19 2.2ZM6.94 20H2.88V8.8h4.06V20Zm6.41-7.5c0-1.53.71-2.44 2.08-2.44s2 1 2 2.87V20h4.06v-6.21c0-3.32-1.77-4.87-4.14-4.87a3.62 3.62 0 0 0-3.31 1.82v-1.6H10.1V20h4.06Z"/></svg>
            Message on LinkedIn
          </a>
          <button id="contactCopy" class="btn ghost">Copy full contact block</button>
        </div>
      </section>

      <footer class="foot container">
        <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
          <span class="muted">Last updated from <code>/data/resume.json</code>.</span>
          <span class="muted">Single-file, no external requests.</span>
        </div>
      </footer>
    </main>

    <div class="sticky-cta" aria-hidden="true">
      <button class="btn primary" id="hireMeBtn">
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17 8V7a5 5 0 1 0-10 0v1H4v14h16V8h-3Zm-8 0V7a3 3 0 0 1 6 0v1H9Zm-2 4h10v8H7v-8Z"/></svg>
        Hire Austin
      </button>
      <button class="btn" id="topBtn" title="Back to top">▲</button>
    </div>

  <!-- Close the dynamic app container -->
  </div>

  <script>
  (function () {
    const app = document.querySelector('[id^="app-"]');
    const qs = (sel, el = app) => el.querySelector(sel);
    const qsa = (sel, el = app) => [...el.querySelectorAll(sel)];
    const formatDate = (iso) => {
      if (!iso) return 'Present';
      const [y, m='01'] = iso.split('-');
      const dt = new Date(Number(y), Number(m)-1, 1);
      return dt.toLocaleString(undefined, { month: 'short', year: 'numeric' });
    };
    const monthDiff = (a, b) => (b.getFullYear()-a.getFullYear())*12 + (b.getMonth()-a.getMonth());
    const duration = (start, end) => {
      const s = new Date(start + (start.length===7 ? '-01' : ''));
      const e = end ? new Date(end + (end.length===7 ? '-01' : '')) : new Date();
      const m = Math.max(1, monthDiff(s, e)+1);
      const y = Math.floor(m/12), mo = m%12;
      const p = (n, w) => n ? `${n} ${w}${n>1?'s':''}` : '';
      return [p(y,'yr'), p(mo,'mo')].filter(Boolean).join(' ');
    };
    const escape = (s='') => s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
    const parseExpFromSummary = (s='') => {
      const m = s.match(/(\d+\+?)\s*years?/i);
      return m ? m[1] + ' yrs' : '';
    };
    const setTheme = (t) => {
      if (t) localStorage.setItem('aw-theme', t);
      const pref = t || localStorage.getItem('aw-theme') || 'auto';
      app.dataset.theme = pref === 'dark' ? 'dark' : (pref === 'light' ? 'light' : '');
      qs('#themeBtn').setAttribute('aria-pressed', String(pref === 'dark'));
      qs('#themeBtn').innerHTML = (pref==='dark'
        ? '<svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.8 1.8-1.8ZM1 13h3v-2H1v2Zm10 10h2v-3h-2v3Zm8.24-3.16l1.8 1.8 1.79-1.8-1.8-1.79-1.79 1.79ZM20 11v2h3v-2h-3Zm-8-8h2V0h-2v3Zm-6.24 15.16l-1.8 1.8 1.79 1.8 1.8-1.8-1.79-1.8ZM12 6a6 6 0 1 0 .001 12.001A6 6 0 0 0 12 6Z"/></svg> Dark'
        : '<svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg> Theme');
    };

    // NAV active link on scroll
    const observeSections = () => {
      const links = qsa('[data-nav]');
      const ids = links.map(a => a.getAttribute('href')).filter(Boolean).map(h => h.slice(1));
      const obs = new IntersectionObserver((ents) => {
        ents.forEach(ent => {
          const id = ent.target.id;
          const link = qs(`a[href="#${id}"]`);
          if (ent.isIntersecting) { links.forEach(a => a.classList.toggle('active', a===link)); }
        });
      }, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 });
      ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    };

    // Render helpers
    const renderWork = (work=[]) => {
      const root = qs('#workList');
      root.innerHTML = '';
      work.forEach((w, idx) => {
        const item = document.createElement('article');
        item.className = 'work-item';
        item.dataset.keywords = (w.highlights||[]).join(' ').toLowerCase();
        const time = `${formatDate(w.startDate)} — ${formatDate(w.endDate || '')}`;
        item.innerHTML = `
          <header class="work-head">
            <div>
              <h3>${escape(w.position)} · <span class="muted">${escape(w.name)}</span></h3>
              <div class="hstack muted" style="gap:.75rem; flex-wrap:wrap;">
                <span title="Dates">${escape(time)}</span>
                <span aria-hidden="true">•</span>
                <span title="Location">${escape(w.location||'')}</span>
                <span aria-hidden="true">•</span>
                <span class="badge" title="Duration">${escape(duration(w.startDate, w.endDate || ''))}</span>
              </div>
            </div>
            <div class="hstack">
              <button class="btn ghost" data-toggle="#bullets-${idx}">Toggle</button>
            </div>
          </header>
          <p class="muted">${escape(w.summary||'')}</p>
          <ul class="list" id="bullets-${idx}" style="margin-top:.8rem;">${
            (w.highlights||[]).map(h => `<li data-item>${escape(h)}</li>`).join('')
          }</ul>
        `;
        root.appendChild(item);
      });
    };

    const renderProjects = (projects=[]) => {
      const root = qs('#projectsList');
      root.innerHTML = projects.map(p => `
        <article class="proj" data-keywords="${escape((p.keywords||[]).join(' ').toLowerCase())}">
          <h3>
            <a href="${escape(p.url||'#')}" target="_blank" rel="noopener noreferrer">${escape(p.name)}</a>
          </h3>
          <p class="muted">${escape(p.description||'')}</p>
          <div class="chips">${(p.keywords||[]).map(k => `<button class="chip" data-skill="${escape(k)}">${escape(k)}</button>`).join('')}</div>
        </article>
      `).join('');
    };

    const renderEducation = (edu=[]) => {
      const e = edu[0]; if (!e) return;
      qs('#educationCard').innerHTML = `
        <h3>${escape(e.institution)}</h3>
        <div class="muted" style="margin-bottom:.25rem;">
          ${escape(e.studyType)} · ${escape(e.area)} — ${escape(e.location||'')}
        </div>
        <div class="chips" style="margin-bottom:.5rem;">
          <span class="chip">${escape(e.startDate)}–${escape(e.endDate)}</span>
          <span class="chip">Custom Degree Approval</span>
        </div>
        <p class="muted">${escape(e.description||'')}</p>
      `;
    };

    const renderSkills = (skills=[]) => {
      const grid = qs('#skillsGrid');
      grid.innerHTML = skills.map(s => `
        <div class="accomplishment">
          <h3>${escape(s.name)}</h3>
          <div class="chips" style="margin-top:.4rem;">
            ${(s.keywords||[]).map(k => `<button class="chip" data-skill="${escape(k)}">${escape(k)}</button>`).join('')}
          </div>
        </div>
      `).join('');
    };

    const renderAccomplishments = (accomp=[]) => {
      const root = qs('#accompList');
      root.innerHTML = accomp.map(a => `
        <div class="accomplishment">
          <h3>${escape(a.title)}</h3>
          <p class="muted">${escape(a.summary||'')}</p>
        </div>
      `).join('');
    };

    // Filtering logic (skills + search)
    const state = { activeSkills: new Set(), search: '' };
    const applyFilters = () => {
      const term = state.search.toLowerCase();
      const hasTerm = !!term;
      const skillTerms = [...state.activeSkills].map(s => s.toLowerCase());

      const match = (text) => {
        const t = text.toLowerCase();
        const okTerm = hasTerm ? t.includes(term) : true;
        const okSkill = skillTerms.length ? skillTerms.every(s => t.includes(s)) : true;
        return okTerm && okSkill;
      };

      // Work bullets
      qsa('#workList [data-item]').forEach(li => {
        li.style.display = match(li.textContent) ? '' : 'none';
      });
      // Work cards visibility (hide only if ALL bullets hidden)
      qsa('#workList .work-item').forEach(card => {
        const items = [...card.querySelectorAll('[data-item]')];
        const anyVisible = items.some(el => el.style.display !== 'none');
        card.style.opacity = anyVisible ? '1' : '.35';
        card.style.outline = anyVisible ? '' : '1px dashed var(--divider)';
      });

      // Projects
      qsa('#projectsList .proj').forEach(p => {
        const kw = p.dataset.keywords || '';
        const name = p.querySelector('h3')?.textContent || '';
        const desc = p.querySelector('p')?.textContent || '';
        const text = kw + ' ' + name + ' ' + desc + ' ' + [...p.querySelectorAll('[data-skill]')].map(b=>b.textContent).join(' ');
        p.style.display = match(text) ? '' : 'none';
      });

      // Enable/disable clear button
      const clearBtn = qs('#clearFilterBtn');
      clearBtn.disabled = !term && state.activeSkills.size === 0;
    };

    const attachInteractions = () => {
      // Theme toggle
      qs('#themeBtn').addEventListener('click', () => {
        const cur = localStorage.getItem('aw-theme') || 'auto';
        const next = cur === 'dark' ? 'light' : (cur === 'light' ? 'auto' : 'dark');
        setTheme(next);
      });

      // Print
      qs('#printBtn').addEventListener('click', () => window.print());
      qs('#topBtn').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
      qs('#hireMeBtn').addEventListener('click', () => qs('#contactEmail').click());

      // Expand/Collapse all
      qs('#expandAllBtn').addEventListener('click', () => qsa('[id^="bullets-"]').forEach(ul => ul.style.display = 'grid'));
      qs('#collapseAllBtn').addEventListener('click', () => qsa('[id^="bullets-"]').forEach(ul => ul.style.display = 'none'));
      app.addEventListener('click', (e) => {
        const t = e.target.closest('[data-toggle]');
        if (t) {
          const sel = t.getAttribute('data-toggle');
          const el = qs(sel);
          if (el) el.style.display = (getComputedStyle(el).display === 'none') ? 'grid' : 'none';
        }
      });

      // Skill chip click -> filter
      app.addEventListener('click', (e) => {
        const chip = e.target.closest('[data-skill]');
        if (!chip) return;
        const skill = chip.dataset.skill;
        if (state.activeSkills.has(skill)) state.activeSkills.delete(skill);
        else state.activeSkills.add(skill);
        chip.classList.toggle('badge');
        applyFilters();
      });

      // Search
      qs('#searchInput').addEventListener('input', (e) => { state.search = e.target.value || ''; applyFilters(); });

      // Clear filters
      qs('#clearFilterBtn').addEventListener('click', () => {
        state.activeSkills.clear(); state.search = '';
        qsa('[data-skill].badge').forEach(b => b.classList.remove('badge'));
        qs('#searchInput').value = '';
        applyFilters();
      });

      // Copy + contact
      const copy = async (text, okMsg='Copied!') => {
        try { await navigator.clipboard.writeText(text); toast(okMsg); }
        catch { alert(text); }
      };
      const toast = (msg) => {
        const t = document.createElement('div'); t.textContent = msg;
        t.style.cssText = 'position:fixed;left:50%;bottom:30px;transform:translateX(-50%);background:var(--panel);border:1px solid var(--border);padding:.5rem .75rem;border-radius:999px;box-shadow:var(--shadow-2);z-index:9999';
        app.appendChild(t); setTimeout(()=>t.remove(), 1300);
      };
      qs('#copyEmailBtn').addEventListener('click', () => copy(qs('#emailCode').textContent.trim()));
      qs('#copyPhoneBtn').addEventListener('click', () => copy(qs('#phoneCode').textContent.trim()));
      qs('#contactCopy').addEventListener('click', () => {
        const all = `Austin Wallace — Data Engineer
Email: ${qs('#emailCode').textContent.trim()}
Phone: ${qs('#phoneCode').textContent.trim()}
LinkedIn: ${qs('#liLink').href}
GitHub: ${qs('#ghLink').href}`;
        copy(all, 'Contact copied');
      });

      observeSections();
      setTheme(); // initialize
    };

    // Seed loading state
    const seedLoading = () => {
      // Small loader below toolbar on first render
      const heroBullets = qs('#heroBullets');
      heroBullets.innerHTML = `
        <li>Loading resume…</li>
        <div class="loader" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-label="Loading"></div>
      `;
    };

    seedLoading();

    // ======= Fetch the JSON (only allowed network call) =======
    fetch('/data/resume.json', { cache: 'no-store' })
      .then(r => r.json())
      .then(data => {
        // Basics
        const b = data.basics || {};
        qs('#roleBadge').textContent = b.label || 'Data Engineer';
        qs('#locBadge').textContent = (b.location && b.location.city) ? b.location.city : '—';
        const exp = parseExpFromSummary(b.summary || '');
        qs('#expBadge').textContent = exp || 'Experienced';
        qs('#summaryText').textContent = b.summary || '';

        // Profiles & contacts
        const gh = (b.profiles || []).find(p => /github/i.test(p.network||''));
        const li = (b.profiles || []).find(p => /linkedin/i.test(p.network||''));
        if (gh) { const a = qs('#ghLink'); a.href = gh.url || '#'; a.title = gh.username || 'GitHub'; }
        if (li) { const a = qs('#liLink'); a.href = li.url || '#'; a.title = li.username || 'LinkedIn'; qs('#contactLinkedIn').href = li.url || '#'; qs('#contactLinkedIn').setAttribute('target', '_blank'); qs('#contactLinkedIn').setAttribute('rel','noopener noreferrer'); }

        qs('#emailCode').textContent = b.email || '';
        qs('#phoneCode').textContent = b.phone || '';
        qs('#locCode').textContent = (b.location && b.location.city) ? b.location.city : '';
        if (b.email) { qs('#emailBtn').addEventListener('click', () => location.href = 'mailto:' + b.email); qs('#contactEmail').href = 'mailto:' + b.email; }
        if (b.phone) { qs('#phoneBtn').addEventListener('click', () => location.href = 'tel:' + b.phone); }

        // Hero KPI examples derived from work bullets where possible
        const w = data.work || [];
        const clio = w.find(x => /clio/i.test(x.name||'')) || {};
        const devs = w.find(x => /devils/i.test(x.name||'')) || {};
        qs('#kpi1').textContent = (clio.highlights||[]).find(h=>/\$?1 ?million/i.test(h)) ? '$1M+ value unlocked' : 'AI best practices adopted';
        qs('#kpi2').textContent = (clio.summary||'').match(/\d+\+/)?.[0] || '10+';
        qs('#kpi3').textContent = (devs.highlights||[]).find(h=>/10 ?million/i.test(h)) ? '10M rows / game' : 'High-volume pipelines';

        // Hero bullets — pick 3 compelling cross-role highlights
        const picks = [];
        (clio.highlights||[]).forEach(h => { if (picks.length<2 && /AI|token|Databricks|diff tool/i.test(h)) picks.push(h); });
        (devs.highlights||[]).forEach(h => { if (picks.length<3) picks.push(h); });
        qs('#heroBullets').innerHTML = picks.slice(0,3).map(h => `<li>${escape(h)}</li>`).join('');

        // Experience
        renderWork(w);

        // Projects / Education / Skills / Accomplishments
        renderProjects(data.projects || []);
        renderEducation(data.education || []);
        renderSkills(data.skills || []);
        renderAccomplishments(data.accomplishments || []);

        attachInteractions();
        applyFilters();
      })
      .catch(err => {
        console.error(err);
        qs('#summaryText').textContent = 'Sorry — could not load resume data. Please ensure /data/resume.json is available on the same origin.';
        qs('#heroBullets').innerHTML = '';
      });

  }());
  </script>
</body>
</html>
</file>

<file path="public/variants/lovable/enablement/index.html">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Enablement that Drives Effectiveness</title>
    <meta name="description" content="Ship faster and safer, with workflows your team will actually use.">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --bg-primary: #0a0a0a;
            --bg-secondary: #1a1a1a;
            --bg-tertiary: #2a2a2a;
            --text-primary: #ffffff;
            --text-secondary: #a1a1aa;
            --accent-primary: #3b82f6;
            --accent-secondary: #1d4ed8;
            --accent-glow: #3b82f6;
            --success: #10b981;
            --warning: #f59e0b;
            --border: #374151;
            --gradient-primary: linear-gradient(135deg, #3b82f6, #1d4ed8);
            --gradient-glow: linear-gradient(135deg, #3b82f6, #8b5cf6);
            --shadow-glow: 0 0 50px rgba(59, 130, 246, 0.3);
            --shadow-card: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.6;
            overflow-x: hidden;
        }

        #app-tool {
            min-height: 100vh;
            position: relative;
        }

        /* Background Effects */
        .bg-gradient {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
            z-index: -1;
            animation: pulse 4s ease-in-out infinite alternate;
        }

        @keyframes pulse {
            0% { opacity: 0.5; }
            100% { opacity: 1; }
        }

        /* Navigation */
        .nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
            background: rgba(10, 10, 10, 0.9);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border);
            transition: all 0.3s ease;
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .nav-logo {
            font-size: 1.5rem;
            font-weight: 700;
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
        }

        .nav-links a {
            color: var(--text-secondary);
            text-decoration: none;
            transition: color 0.3s ease;
            font-weight: 500;
        }

        .nav-links a:hover {
            color: var(--accent-primary);
        }

        /* Hero Section */
        .hero {
            min-height: 90vh;
            max-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 2rem;
            position: relative;
        }

        .hero-content {
            max-width: 800px;
            animation: fadeInUp 1s ease;
        }

        .hero h1 {
            font-size: clamp(2.5rem, 8vw, 6rem);
            font-weight: 800;
            margin-bottom: 1.5rem;
            background: var(--gradient-glow);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: var(--shadow-glow);
        }

        .hero p {
            font-size: 1.25rem;
            color: var(--text-secondary);
            margin-bottom: 3rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .hero-ctas {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        /* Buttons */
        .btn {
            padding: 1rem 2rem;
            border: none;
            border-radius: 0.75rem;
            font-weight: 600;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
            cursor: pointer;
            font-size: 1rem;
        }

        .btn-primary {
            background: var(--gradient-primary);
            color: white;
            box-shadow: var(--shadow-glow);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 60px rgba(59, 130, 246, 0.4);
        }

        .btn-secondary {
            background: transparent;
            color: var(--accent-primary);
            border: 2px solid var(--accent-primary);
        }

        .btn-secondary:hover {
            background: var(--accent-primary);
            color: white;
            transform: translateY(-2px);
        }

        /* Sections */
        .section {
            padding: 5rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-title {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 700;
            margin-bottom: 3rem;
            text-align: center;
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        /* Value Props */
        .value-props {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 4rem;
        }

        .value-prop {
            background: var(--bg-secondary);
            padding: 2rem;
            border-radius: 1rem;
            border: 1px solid var(--border);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .value-prop::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: var(--gradient-primary);
            transform: scaleX(0);
            transition: transform 0.3s ease;
            transform-origin: left;
        }

        .value-prop:hover::before {
            transform: scaleX(1);
        }

        .value-prop:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-card);
            border-color: var(--accent-primary);
        }

        .value-prop h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--text-primary);
        }

        .value-prop ul {
            list-style: none;
        }

        .value-prop li {
            color: var(--text-secondary);
            margin-bottom: 0.5rem;
            padding-left: 1.5rem;
            position: relative;
        }

        .value-prop li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: var(--accent-primary);
            font-weight: bold;
        }

        /* Cards Grid */
        .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .card {
            background: var(--bg-secondary);
            padding: 2rem;
            border-radius: 1rem;
            border: 1px solid var(--border);
            transition: all 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-card);
            border-color: var(--accent-primary);
        }

        .card h3 {
            color: var(--accent-primary);
            margin-bottom: 1rem;
            font-size: 1.25rem;
        }

        .card-deliverables {
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid var(--border);
        }

        .card-deliverables strong {
            color: var(--text-primary);
            display: block;
            margin-bottom: 0.5rem;
        }

        .card-deliverables ul {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            list-style: none;
        }

        .card-deliverables li {
            background: var(--bg-tertiary);
            padding: 0.25rem 0.75rem;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            color: var(--text-secondary);
            border: 1px solid var(--border);
        }

        /* Accordion */
        .accordion {
            background: var(--bg-secondary);
            border-radius: 1rem;
            border: 1px solid var(--border);
            overflow: hidden;
        }

        .accordion-item {
            border-bottom: 1px solid var(--border);
        }

        .accordion-item:last-child {
            border-bottom: none;
        }

        .accordion-header {
            background: transparent;
            border: none;
            width: 100%;
            padding: 1.5rem;
            text-align: left;
            color: var(--text-primary);
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 1.1rem;
        }

        .accordion-header:hover {
            background: var(--bg-tertiary);
            color: var(--accent-primary);
        }

        .accordion-content {
            padding: 0 1.5rem;
            max-height: 0;
            overflow: hidden;
            transition: all 0.3s ease;
        }

        .accordion-content.active {
            max-height: 1000px;
            padding: 0 1.5rem 1.5rem;
        }

        .accordion-content ul {
            list-style: none;
        }

        .accordion-content li {
            color: var(--text-secondary);
            margin-bottom: 0.75rem;
            padding-left: 1.5rem;
            position: relative;
        }

        .accordion-content li::before {
            content: '•';
            position: absolute;
            left: 0;
            color: var(--accent-primary);
            font-weight: bold;
        }

        /* Process */
        .process-steps {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .process-step {
            text-align: center;
            position: relative;
        }

        .process-step::after {
            content: '';
            position: absolute;
            top: 50%;
            right: -1rem;
            width: 2rem;
            height: 2px;
            background: var(--accent-primary);
            display: none;
        }

        @media (min-width: 768px) {
            .process-step:not(:last-child)::after {
                display: block;
            }
        }

        .step-number {
            width: 3rem;
            height: 3rem;
            background: var(--gradient-primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
            font-weight: bold;
            font-size: 1.25rem;
        }

        .step-title {
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
        }

        .step-description {
            color: var(--text-secondary);
            font-size: 0.9rem;
        }

        /* Bullets */
        .bullets {
            background: var(--bg-secondary);
            padding: 2rem;
            border-radius: 1rem;
            border: 1px solid var(--border);
        }

        .bullets ul {
            list-style: none;
        }

        .bullets li {
            color: var(--text-secondary);
            margin-bottom: 1rem;
            padding-left: 2rem;
            position: relative;
            line-height: 1.7;
        }

        .bullets li::before {
            content: '▶';
            position: absolute;
            left: 0;
            color: var(--accent-primary);
        }

        .bullets li strong {
            color: var(--text-primary);
        }

        /* Resources */
        .resources {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
        }

        .resource {
            background: var(--bg-secondary);
            padding: 1.5rem;
            border-radius: 0.75rem;
            border: 1px solid var(--border);
            transition: all 0.3s ease;
        }

        .resource:hover {
            transform: translateY(-3px);
            border-color: var(--accent-primary);
        }

        .resource-kind {
            display: inline-block;
            background: var(--accent-primary);
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 0.5rem;
            font-size: 0.75rem;
            font-weight: 600;
            margin-bottom: 1rem;
            text-transform: uppercase;
        }

        .resource h4 {
            color: var(--text-primary);
            margin-bottom: 0.5rem;
        }

        .resource a {
            color: var(--accent-primary);
            text-decoration: none;
            font-weight: 500;
        }

        .resource a:hover {
            text-decoration: underline;
        }

        .resource-notes {
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin-top: 0.5rem;
        }

        /* CTA */
        .cta {
            background: var(--bg-secondary);
            padding: 4rem 2rem;
            border-radius: 2rem;
            text-align: center;
            border: 1px solid var(--border);
            margin-top: 3rem;
            position: relative;
            overflow: hidden;
        }

        .cta::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--gradient-primary);
            opacity: 0.1;
            z-index: 0;
        }

        .cta-content {
            position: relative;
            z-index: 1;
        }

        .cta h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .cta p {
            color: var(--text-secondary);
            font-size: 1.2rem;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        /* Loading */
        .loading {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            font-size: 1.25rem;
            color: var(--text-secondary);
        }

        .spinner {
            width: 40px;
            height: 40px;
            border: 3px solid var(--border);
            border-top: 3px solid var(--accent-primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-right: 1rem;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }

        .animate-on-scroll.visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Responsive */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }

            .hero-ctas {
                flex-direction: column;
                align-items: center;
            }

            .value-props {
                grid-template-columns: 1fr;
            }

            .cards-grid {
                grid-template-columns: 1fr;
            }

            .process-steps {
                grid-template-columns: 1fr;
            }

            .process-step::after {
                display: none;
            }
        }

        /* Smooth scrolling */
        html {
            scroll-behavior: smooth;
        }
    </style>
</head>
<body>
    <div id="app-tool">
        <div class="bg-gradient"></div>
        
        <nav class="nav">
            <div class="nav-container">
                <div class="nav-logo">AI Enablement</div>
                <ul class="nav-links">
                    <li><a href="#process">Process</a></li>
                    <li><a href="#what-i-do">Services</a></li>
                    <li><a href="#resources">Resources</a></li>
                    <li><a href="mailto:austeane@gmail.com" class="btn btn-primary">Email Me</a></li>
                </ul>
            </div>
        </nav>

        <div class="loading" id="loading">
            <div class="spinner"></div>
            Loading content...
        </div>

        <main id="content" style="display: none;"></main>

        <script>
            // Fetch and render data
            async function loadContent() {
                try {
                    const response = await fetch("https://www.austinwallace.ca/data/enablement.json")
                    const data = await response.json();
                    renderContent(data);
                    
                    // Hide loading, show content
                    document.getElementById('loading').style.display = 'none';
                    document.getElementById('content').style.display = 'block';
                    
                    // Initialize interactions
                    initializeAccordions();
                    initializeScrollAnimations();
                    
                } catch (error) {
                    console.error('Error loading content:', error);
                    document.getElementById('loading').innerHTML = 
                        '<div class="spinner"></div>Error loading content. Please check the data source.';
                }
            }

            function renderContent(data) {
                const content = document.getElementById('content');
                
                // Hero Section
                content.innerHTML = `
                    <section class="hero">
                        <div class="hero-content animate-on-scroll">
                            <h1>${data.hero.title}</h1>
                            <p>${data.hero.subtitle}</p>
                            <div class="hero-ctas">
                                <a href="${data.hero.primary_cta.href}" class="btn btn-primary">
                                    ${data.hero.primary_cta.label}
                                </a>
                                <a href="${data.hero.secondary_cta.href}" class="btn btn-secondary">
                                    ${data.hero.secondary_cta.label}
                                </a>
                            </div>
                        </div>
                    </section>

                    <section class="section animate-on-scroll">
                        <h2 class="section-title">Why Choose This Approach</h2>
                        <div class="value-props">
                            ${data.value_props.map(prop => `
                                <div class="value-prop">
                                    <h3>${prop.title}</h3>
                                    <ul>
                                        ${prop.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
                                    </ul>
                                </div>
                            `).join('')}
                        </div>
                    </section>

                    ${data.sections.map(section => renderSection(section)).join('')}

                    <section class="section animate-on-scroll">
                        <h2 class="section-title">Resources & References</h2>
                        <div class="resources">
                            ${data.resources.map(resource => `
                                <div class="resource">
                                    <div class="resource-kind">${resource.kind}</div>
                                    <h4><a href="${resource.url}" target="_blank">${resource.title}</a></h4>
                                    <div class="resource-notes">${resource.notes}</div>
                                </div>
                            `).join('')}
                        </div>
                    </section>

                    <section class="section animate-on-scroll">
                        <div class="cta">
                            <div class="cta-content">
                                <h2>${data.cta.headline}</h2>
                                <p>${data.cta.subhead}</p>
                                <div class="hero-ctas">
                                    ${data.cta.actions.map(action => `
                                        <a href="${action.href}" class="btn btn-primary">
                                            ${action.label}
                                        </a>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </section>
                `;
            }

            function renderSection(section) {
                switch(section.type) {
                    case 'cards':
                        return `
                            <section class="section animate-on-scroll" id="${section.id}">
                                <h2 class="section-title">${section.title}</h2>
                                <div class="cards-grid">
                                    ${section.cards.map(card => `
                                        <div class="card">
                                            <h3>${card.title}</h3>
                                            <p>${card.body}</p>
                                            ${card.deliverables ? `
                                                <div class="card-deliverables">
                                                    <strong>Deliverables:</strong>
                                                    <ul>
                                                        ${card.deliverables.map(item => `<li>${item}</li>`).join('')}
                                                    </ul>
                                                </div>
                                            ` : ''}
                                        </div>
                                    `).join('')}
                                </div>
                            </section>
                        `;
                    
                    case 'text':
                        return `
                            <section class="section animate-on-scroll" id="${section.id}">
                                <h2 class="section-title">${section.title}</h2>
                                <div class="bullets">
                                    ${Array.isArray(section.body) 
                                        ? section.body.map(p => `<p style="margin-bottom: 1rem; color: var(--text-secondary);">${p}</p>`).join('')
                                        : `<p style="color: var(--text-secondary);">${section.body}</p>`
                                    }
                                </div>
                            </section>
                        `;
                    
                    case 'bullets':
                        return `
                            <section class="section animate-on-scroll" id="${section.id}">
                                <h2 class="section-title">${section.title}</h2>
                                <div class="bullets">
                                    <ul>
                                        ${section.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
                                    </ul>
                                </div>
                            </section>
                        `;
                    
                    case 'accordion':
                        return `
                            <section class="section animate-on-scroll" id="${section.id}">
                                <h2 class="section-title">${section.title}</h2>
                                ${section.intro ? `<p style="text-align: center; color: var(--text-secondary); margin-bottom: 2rem;">${section.intro}</p>` : ''}
                                <div class="accordion">
                                    ${section.items.map((item, index) => `
                                        <div class="accordion-item">
                                            <button class="accordion-header" onclick="toggleAccordion(${index})">
                                                ${item.label}
                                                <span id="icon-${index}">+</span>
                                            </button>
                                            <div class="accordion-content" id="content-${index}">
                                                <ul>
                                                    ${item.content.map(c => `<li>${c}</li>`).join('')}
                                                </ul>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </section>
                        `;
                    
                    case 'process':
                        return `
                            <section class="section animate-on-scroll" id="${section.id}">
                                <h2 class="section-title">${section.title}</h2>
                                <div class="process-steps">
                                    ${section.steps.map((step, index) => `
                                        <div class="process-step">
                                            <div class="step-number">${index + 1}</div>
                                            <div class="step-title">${step.split(':')[0]}</div>
                                            <div class="step-description">${step.split(':')[1] || ''}</div>
                                        </div>
                                    `).join('')}
                                </div>
                            </section>
                        `;
                    
                    default:
                        return '';
                }
            }

            function toggleAccordion(index) {
                const content = document.getElementById(`content-${index}`);
                const icon = document.getElementById(`icon-${index}`);
                
                content.classList.toggle('active');
                icon.textContent = content.classList.contains('active') ? '−' : '+';
            }

            function initializeAccordions() {
                // Accordion functionality is handled by toggleAccordion function
            }

            function initializeScrollAnimations() {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                        }
                    });
                }, { threshold: 0.1 });

                document.querySelectorAll('.animate-on-scroll').forEach(el => {
                    observer.observe(el);
                });
            }

            // Load content when page loads
            document.addEventListener('DOMContentLoaded', loadContent);
        </script>
    </div>
</body>
</html>
</file>

<file path="public/variants/lovable/index.html">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Austin Wallace - Data Engineer</title>
    <meta name="description" content="Data Engineer with 9+ years building Databricks/Snowflake/dbt platforms. Expert in AI enablement and data infrastructure.">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        #app-resume {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #1a202c;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 4rem 0;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
            opacity: 0.3;
        }

        .hero-content {
            position: relative;
            z-index: 1;
        }

        .hero h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            background: linear-gradient(45deg, #fff, #f0f8ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .hero .label {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: 1rem;
            opacity: 0.9;
        }

        .hero .summary {
            font-size: 1.1rem;
            max-width: 800px;
            margin: 0 auto 2rem;
            opacity: 0.9;
            line-height: 1.7;
        }

        .contact-info {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
            margin-top: 1.5rem;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: white;
            text-decoration: none;
            opacity: 0.9;
            transition: opacity 0.3s ease;
        }

        .contact-item:hover {
            opacity: 1;
        }

        .main-content {
            background: white;
            margin-top: -2rem;
            border-radius: 2rem 2rem 0 0;
            position: relative;
            z-index: 1;
            box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.1);
        }

        .content-grid {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 3rem;
            padding: 3rem 0;
        }

        .sidebar {
            padding-right: 2rem;
        }

        .main {
            padding-left: 2rem;
            border-left: 1px solid #e2e8f0;
        }

        .section {
            margin-bottom: 3rem;
        }

        .section h2 {
            font-size: 1.8rem;
            font-weight: 700;
            color: #2d3748;
            margin-bottom: 1.5rem;
            position: relative;
            padding-bottom: 0.5rem;
        }

        .section h2::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 3rem;
            height: 3px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            border-radius: 2px;
        }

        .skills-grid {
            display: grid;
            gap: 1.5rem;
        }

        .skill-category {
            background: #f7fafc;
            padding: 1.5rem;
            border-radius: 1rem;
            border-left: 4px solid #667eea;
        }

        .skill-category h3 {
            font-size: 1.1rem;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 0.8rem;
        }

        .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .skill-tag {
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            padding: 0.3rem 0.8rem;
            border-radius: 1rem;
            font-size: 0.85rem;
            font-weight: 500;
        }

        .work-item, .project-item {
            background: #f8fafc;
            border-radius: 1rem;
            padding: 2rem;
            margin-bottom: 2rem;
            border-left: 4px solid #667eea;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .work-item:hover, .project-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .work-header {
            display: flex;
            justify-content: space-between;
            align-items: start;
            margin-bottom: 1rem;
        }

        .work-title {
            flex: 1;
        }

        .work-title h3 {
            font-size: 1.3rem;
            font-weight: 700;
            color: #2d3748;
            margin-bottom: 0.3rem;
        }

        .company {
            font-size: 1.1rem;
            color: #667eea;
            font-weight: 600;
        }

        .work-meta {
            text-align: right;
            color: #718096;
            font-size: 0.9rem;
        }

        .work-summary {
            color: #4a5568;
            margin-bottom: 1rem;
            font-style: italic;
        }

        .highlights {
            list-style: none;
        }

        .highlights li {
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 0.8rem;
            color: #4a5568;
        }

        .highlights li::before {
            content: '▶';
            position: absolute;
            left: 0;
            color: #667eea;
            font-size: 0.8rem;
        }

        .project-header h3 {
            font-size: 1.2rem;
            font-weight: 700;
            color: #2d3748;
            margin-bottom: 0.5rem;
        }

        .project-url {
            color: #667eea;
            text-decoration: none;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            gap: 0.3rem;
            margin-bottom: 1rem;
        }

        .project-url:hover {
            text-decoration: underline;
        }

        .project-keywords {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 1rem;
        }

        .keyword-tag {
            background: #e2e8f0;
            color: #4a5568;
            padding: 0.2rem 0.6rem;
            border-radius: 0.5rem;
            font-size: 0.8rem;
        }

        .education-item {
            background: #f8fafc;
            border-radius: 1rem;
            padding: 1.5rem;
            border-left: 4px solid #764ba2;
        }

        .education-header {
            display: flex;
            justify-content: space-between;
            align-items: start;
            margin-bottom: 0.5rem;
        }

        .education-title h3 {
            font-size: 1.2rem;
            font-weight: 700;
            color: #2d3748;
        }

        .institution {
            color: #764ba2;
            font-weight: 600;
        }

        .accomplishments-grid {
            display: grid;
            gap: 1rem;
        }

        .accomplishment-item {
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            padding: 1.5rem;
            border-radius: 1rem;
            border-left: 4px solid #38b2ac;
        }

        .accomplishment-item h3 {
            font-size: 1.1rem;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 0.5rem;
        }

        .loading {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 50vh;
            color: white;
        }

        .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero .label {
                font-size: 1.2rem;
            }
            
            .contact-info {
                gap: 1rem;
            }
            
            .content-grid {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
            
            .sidebar {
                padding-right: 0;
            }
            
            .main {
                padding-left: 0;
                border-left: none;
                border-top: 1px solid #e2e8f0;
                padding-top: 2rem;
            }
            
            .work-header {
                flex-direction: column;
                gap: 0.5rem;
            }
            
            .work-meta {
                text-align: left;
            }
        }
    </style>
</head>
<body>
    <div id="app-resume">
        <div class="loading" id="loading">
            <div class="spinner"></div>
        </div>
        
        <div id="content" style="display: none;">
            <!-- Content will be populated by JavaScript -->
        </div>
    </div>

    <script>
        async function loadResume() {
            try {
                const response = await fetch('https://www.austinwallace.ca/data/resume.json');
                const resume = await response.json();
                renderResume(resume);
            } catch (error) {
                console.error('Error loading resume:', error);
                document.getElementById('loading').innerHTML = '<p>Error loading resume data</p>';
            }
        }

        function renderResume(resume) {
            const { basics, work, projects, education, skills, accomplishments } = resume;
            
            const content = `
                <section class="hero">
                    <div class="container">
                        <div class="hero-content">
                            <h1>${basics.name}</h1>
                            <div class="label">${basics.label}</div>
                            <p class="summary">${basics.summary}</p>
                            <div class="contact-info">
                                <div class="contact-item">
                                    <span>📍</span>
                                    <span>${basics.location.city}</span>
                                </div>
                                <a href="mailto:${basics.email}" class="contact-item">
                                    <span>✉️</span>
                                    <span>${basics.email}</span>
                                </a>
                                <div class="contact-item">
                                    <span>📱</span>
                                    <span>${basics.phone}</span>
                                </div>
                                ${basics.profiles.map(profile => `
                                    <a href="${profile.url}" class="contact-item" target="_blank" rel="noopener">
                                        <span>${profile.network === 'GitHub' ? '⚡' : '💼'}</span>
                                        <span>${profile.network}</span>
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </section>

                <div class="main-content">
                    <div class="container">
                        <div class="content-grid">
                            <aside class="sidebar">
                                <section class="section">
                                    <h2>Technical Skills</h2>
                                    <div class="skills-grid">
                                        ${skills.map(skillCategory => `
                                            <div class="skill-category">
                                                <h3>${skillCategory.name}</h3>
                                                <div class="skill-tags">
                                                    ${skillCategory.keywords.map(skill => `
                                                        <span class="skill-tag">${skill}</span>
                                                    `).join('')}
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </section>

                                <section class="section">
                                    <h2>Education</h2>
                                    ${education.map(edu => `
                                        <div class="education-item">
                                            <div class="education-header">
                                                <div class="education-title">
                                                    <h3>${edu.studyType} ${edu.area}</h3>
                                                    <div class="institution">${edu.institution}</div>
                                                </div>
                                                <div class="education-meta">
                                                    <div>${edu.startDate} - ${edu.endDate}</div>
                                                    <div>${edu.location}</div>
                                                </div>
                                            </div>
                                            <p>${edu.description}</p>
                                        </div>
                                    `).join('')}
                                </section>

                                <section class="section">
                                    <h2>Key Accomplishments</h2>
                                    <div class="accomplishments-grid">
                                        ${accomplishments.map(acc => `
                                            <div class="accomplishment-item">
                                                <h3>${acc.title}</h3>
                                                <p>${acc.summary}</p>
                                            </div>
                                        `).join('')}
                                    </div>
                                </section>
                            </aside>

                            <main class="main">
                                <section class="section">
                                    <h2>Professional Experience</h2>
                                    ${work.map(job => `
                                        <div class="work-item">
                                            <div class="work-header">
                                                <div class="work-title">
                                                    <h3>${job.position}</h3>
                                                    <div class="company">${job.name}</div>
                                                </div>
                                                <div class="work-meta">
                                                    <div>${job.startDate} - ${job.endDate || 'Present'}</div>
                                                    <div>${job.location}</div>
                                                </div>
                                            </div>
                                            <p class="work-summary">${job.summary}</p>
                                            <ul class="highlights">
                                                ${job.highlights.map(highlight => `
                                                    <li>${highlight}</li>
                                                `).join('')}
                                            </ul>
                                        </div>
                                    `).join('')}
                                </section>

                                <section class="section">
                                    <h2>Notable Projects</h2>
                                    ${projects.map(project => `
                                        <div class="project-item">
                                            <div class="project-header">
                                                <h3>${project.name}</h3>
                                                ${project.url ? `<a href="${project.url}" class="project-url" target="_blank" rel="noopener">Visit Project →</a>` : ''}
                                            </div>
                                            <p>${project.description}</p>
                                            ${project.highlights ? `
                                                <ul class="highlights">
                                                    ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                                                </ul>
                                            ` : ''}
                                            <div class="project-keywords">
                                                ${project.keywords.map(keyword => `
                                                    <span class="keyword-tag">${keyword}</span>
                                                `).join('')}
                                            </div>
                                        </div>
                                    `).join('')}
                                </section>
                            </main>
                        </div>
                    </div>
                </div>
            `;

            document.getElementById('content').innerHTML = content;
            document.getElementById('loading').style.display = 'none';
            document.getElementById('content').style.display = 'block';
            
            // Update height after content is rendered
            setTimeout(updateHeight, 100);
        }

        // Height update function for iframe resizing
        function updateHeight() {
            const height = document.documentElement.scrollHeight;
            parent?.postMessage({ type: 'variant:height', value: height }, '*');
        }

        // Load resume when page loads
        loadResume();

        // Update height after rendering and on resize
        setTimeout(updateHeight, 100);
        window.addEventListener('resize', updateHeight);
        document.fonts?.ready?.then(updateHeight);
    </script>
</body>
</html>
</file>

<file path="public/variants/template/enablement/index.html">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Template Variant - AI Enablement</title>
    <style>
        /* Basic reset and typography */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: system-ui, -apple-system, sans-serif;
            line-height: 1.6;
            color: #333;
            padding: 2rem;
            max-width: 900px;
            margin: 0 auto;
        }
        
        /* Basic styling - replace with your own design */
        h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
        
        h2 {
            font-size: 1.5rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            border-bottom: 2px solid #eee;
            padding-bottom: 0.5rem;
        }
        
        h3 {
            font-size: 1.2rem;
            margin-top: 1.5rem;
            margin-bottom: 0.5rem;
        }
        
        .section {
            margin-bottom: 2rem;
        }
        
        ul {
            padding-left: 1.5rem;
        }
        
        li {
            margin-bottom: 0.5rem;
        }
        
        .metric {
            display: inline-block;
            margin-right: 2rem;
            margin-bottom: 1rem;
        }
        
        .metric-value {
            font-size: 1.5rem;
            font-weight: bold;
        }
        
        .metric-label {
            font-size: 0.9rem;
            color: #666;
        }
        
        /* Loading state */
        .loading {
            text-align: center;
            padding: 4rem;
            color: #666;
        }
        
        /* Error state */
        .error {
            text-align: center;
            padding: 4rem;
            color: #d00;
        }
    </style>
</head>
<body>
    <div id="app" class="loading">Loading enablement data...</div>

    <script>
        // IMPORTANT: Post height updates to parent for iframe resizing
        function updateHeight() {
            const height = document.documentElement.scrollHeight;
            parent?.postMessage({ type: 'variant:height', value: height }, '*');
        }

        // Fetch enablement data from the centralized JSON endpoint
        async function loadEnablement() {
            try {
                const response = await fetch("https://www.austinwallace.ca/data/enablement.json")
                if (!response.ok) throw new Error('Failed to load enablement data');
                
                const data = await response.json();
                renderEnablement(data);
            } catch (error) {
                document.getElementById('app').innerHTML = `
                    <div class="error">Error loading enablement data: ${error.message}</div>
                `;
            }
        }

        // Render the enablement data into HTML
        function renderEnablement(data) {
            const app = document.getElementById('app');
            app.className = ''; // Remove loading class
            
            // Build HTML from enablement data
            let html = `
                <header>
                    <h1>${data.title}</h1>
                    <p>${data.subtitle}</p>
                </header>

                <section class="section">
                    <h2>Overview</h2>
                    <p>${data.overview}</p>
                    
                    <div class="metrics">
                        ${data.metrics.map(metric => `
                            <div class="metric">
                                <div class="metric-value">${metric.value}</div>
                                <div class="metric-label">${metric.label}</div>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <section class="section">
                    <h2>Key Initiatives</h2>
                    ${data.initiatives.map(initiative => `
                        <div class="initiative">
                            <h3>${initiative.title}</h3>
                            <p>${initiative.description}</p>
                            <ul>
                                ${initiative.outcomes.map(outcome => `
                                    <li>${outcome}</li>
                                `).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </section>

                <section class="section">
                    <h2>Implementation Approach</h2>
                    ${data.approach.map(phase => `
                        <div class="phase">
                            <h3>${phase.phase}</h3>
                            <p>${phase.description}</p>
                            <ul>
                                ${phase.activities.map(activity => `
                                    <li>${activity}</li>
                                `).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </section>

                <section class="section">
                    <h2>Success Stories</h2>
                    ${data.successStories.map(story => `
                        <div class="story">
                            <h3>${story.title}</h3>
                            <p>${story.description}</p>
                            <p><strong>Impact:</strong> ${story.impact}</p>
                        </div>
                    `).join('')}
                </section>
            `;
            
            app.innerHTML = html;
            
            // Update height after rendering
            setTimeout(updateHeight, 100);
        }

        // Initialize
        loadEnablement();

        // Update height on window resize
        window.addEventListener('resize', updateHeight);
        
        // Also update height when fonts load
        document.fonts?.ready?.then(updateHeight);
    </script>
</body>
</html>
</file>

<file path="public/variants/template/index.html">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Template Variant - Resume</title>
    <style>
        /* Basic reset and typography */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: system-ui, -apple-system, sans-serif;
            line-height: 1.6;
            color: #333;
            padding: 2rem;
            max-width: 900px;
            margin: 0 auto;
        }
        
        /* Basic styling - replace with your own design */
        h1 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }
        
        h2 {
            font-size: 1.5rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            border-bottom: 2px solid #eee;
            padding-bottom: 0.5rem;
        }
        
        h3 {
            font-size: 1.2rem;
            margin-top: 1.5rem;
            margin-bottom: 0.5rem;
        }
        
        .contact-info {
            margin-bottom: 2rem;
        }
        
        .section {
            margin-bottom: 2rem;
        }
        
        ul {
            padding-left: 1.5rem;
        }
        
        li {
            margin-bottom: 0.5rem;
        }
        
        /* Loading state */
        .loading {
            text-align: center;
            padding: 4rem;
            color: #666;
        }
        
        /* Error state */
        .error {
            text-align: center;
            padding: 4rem;
            color: #d00;
        }
    </style>
</head>
<body>
    <div id="app" class="loading">Loading resume data...</div>

    <script>
        // IMPORTANT: Post height updates to parent for iframe resizing
        function updateHeight() {
            const height = document.documentElement.scrollHeight;
            parent?.postMessage({ type: 'variant:height', value: height }, '*');
        }

        // Fetch resume data from the centralized JSON endpoint
        async function loadResume() {
            try {
                const response = await fetch('https://www.austinwallace.ca/data/resume.json');
                if (!response.ok) throw new Error('Failed to load resume data');
                
                const data = await response.json();
                renderResume(data);
            } catch (error) {
                document.getElementById('app').innerHTML = `
                    <div class="error">Error loading resume: ${error.message}</div>
                `;
            }
        }

        // Render the resume data into HTML
        function renderResume(data) {
            const app = document.getElementById('app');
            app.className = ''; // Remove loading class
            
            // Build HTML from resume data
            let html = `
                <header>
                    <h1>${data.name}</h1>
                    <div class="contact-info">
                        <div>${data.title}</div>
                        <div>${data.email} | ${data.phone}</div>
                        <div>${data.location}</div>
                    </div>
                </header>

                <section class="section">
                    <h2>Summary</h2>
                    <p>${data.summary}</p>
                </section>

                <section class="section">
                    <h2>Experience</h2>
                    ${data.experience.map(job => `
                        <div class="job">
                            <h3>${job.title} at ${job.company}</h3>
                            <div>${job.duration} | ${job.location}</div>
                            <p>${job.description}</p>
                            <ul>
                                ${job.achievements.map(achievement => `
                                    <li>${achievement}</li>
                                `).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </section>

                <section class="section">
                    <h2>Skills</h2>
                    ${Object.entries(data.skills).map(([category, skills]) => `
                        <div>
                            <strong>${category}:</strong> ${skills.join(', ')}
                        </div>
                    `).join('')}
                </section>

                <section class="section">
                    <h2>Education</h2>
                    ${data.education.map(edu => `
                        <div>
                            <h3>${edu.degree}</h3>
                            <div>${edu.school} | ${edu.year}</div>
                        </div>
                    `).join('')}
                </section>
            `;
            
            app.innerHTML = html;
            
            // Update height after rendering
            setTimeout(updateHeight, 100);
        }

        // Initialize
        loadResume();

        // Update height on window resize
        window.addEventListener('resize', updateHeight);
        
        // Also update height when fonts load
        document.fonts?.ready?.then(updateHeight);
    </script>
</body>
</html>
</file>

<file path="public/variants/template/README.md">
# Template Variant

This is a basic template showing the required structure for AI tool variants.

## Key Requirements

### 1. Data Fetching
- Fetch resume data from `/data/resume.json`
- Fetch enablement data from `/data/enablement.json`
- These endpoints are CORS-enabled and return centralized JSON data

### 2. Height & iframe behavior
- Default is fixed-height iframes managed by the parent. You do not need to send height messages.
- Optional autosize: if enabled by the parent, you may post height updates:
  ```javascript
  parent?.postMessage({ type: 'variant:height', value: document.body.scrollHeight }, '*');
  ```

### 3. File Structure
```
/static/variants/[tool-name]/
├── index.html           # Resume variant
└── enablement/
    └── index.html       # AI Enablement variant
```

### 4. Self-Contained
- Include all CSS and JavaScript inline or from CDNs
- Don't reference external local files
- Each variant should be completely independent
- Open external links with `target="_blank"` and `rel="noopener noreferrer"`.

### 5. Cross-deployment deep links (CloudFront)
Behind CloudFront, variants are also served within external apps under:
- `/<prefix>/variants/<tool>/index.html`
- `/<prefix>/variants/<tool>/enablement/index.html`
Where `<prefix>` is one of: `/azure/next`, `/azure/react`, `/gcp/tanstack`.

## Creating Your Variant

1. Copy this template to `/static/variants/[your-tool-name]/`
2. Customize the styling and layout to match your AI tool's design
3. Ensure data fetching works correctly (height messaging optional)
4. Add your provider to `src/lib/providers.ts`:
```typescript
{
    id: 'your-tool-name',
    name: 'Your Tool Name',
    path: '/variants/your-tool-name/index.html',
    icon: '🤖',
    color: '#yourcolor'
}
```

## Testing
1. Run `npm run dev` to test locally
2. Navigate to `/with/your-tool-name` to see your resume variant
3. Navigate to `/with/your-tool-name/enablement` to see your enablement variant
4. Run `npm run validate:variants` to validate your implementation
5. After deploy, spot-check CloudFront deep links: `/<prefix>/variants/<tool>/…`
</file>

<file path="src/components/Layout.tsx">
'use client';
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type Provider = {
  id: string;
  name: string;
  icon?: string;
  logo?: string;
  color?: string;
  comingSoon?: boolean;
  isDeployment?: boolean;
  externalUrl?: string;
};

const AI_PROVIDERS: Provider[] = [
  { id: 'minimal', name: 'Minimal', icon: '◐', color: '#000' },
  { id: 'claude-code', name: 'Claude Code', icon: '◈', logo: `${BASE}/logos/claude.svg`, color: '#d97706' },
  { id: 'gpt-5-pro', name: 'GPT-5 Pro', icon: '⚡', logo: `${BASE}/logos/chatgpt.svg`, color: '#10a37f' },
  { id: 'gpt-5-thinking', name: 'GPT-5 Thinking', icon: '🧠', logo: `${BASE}/logos/chatgpt.svg`, color: '#10a37f' },
  { id: 'lovable', name: 'Lovable', icon: '♥', logo: `${BASE}/logos/lovable.png`, color: '#ff006e' },
  { id: 'bolt', name: 'Bolt', icon: '⚡', logo: `${BASE}/logos/bolt.jpg`, color: '#f59e0b' },
  { id: 'firebase', name: 'Firebase Studio', icon: '🔥', logo: `${BASE}/logos/firebase.svg`, color: '#039BE5' },
];

const DEPLOYMENT_VARIANTS: Provider[] = [
  { 
    id: 'sveltekit-aws', 
    name: 'SvelteKit (AWS)', 
    isDeployment: true,
    externalUrl: 'https://d2li8p8xclq49l.cloudfront.net',
    icon: '🚀', 
    color: '#ff3e00'
  },
  { 
    id: 'nextjs-vercel', 
    name: 'Next.js (Vercel)', 
    isDeployment: true,
    externalUrl: 'https://d2li8p8xclq49l.cloudfront.net/azure/next',
    icon: '▲', 
    color: '#000'
  },
  { 
    id: 'react-azure', 
    name: 'React (Azure)', 
    isDeployment: true,
    externalUrl: 'https://d2li8p8xclq49l.cloudfront.net/azure/react',
    icon: '⚛️', 
    color: '#0078d4'
  },
  { 
    id: 'tanstack-netlify', 
    name: 'TanStack (Netlify)', 
    isDeployment: true,
    externalUrl: 'https://d2li8p8xclq49l.cloudfront.net/gcp/tanstack',
    icon: '🔷', 
    color: '#00C7B7'
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const currentPath = (router.asPath || '/').split('?')[0];
  const [showDeploymentVariants, setShowDeploymentVariants] = useState(false);
  const [userToggled, setUserToggled] = useState(false);

  const pathNoBase = BASE && currentPath.startsWith(BASE) ? currentPath.slice(BASE.length) : currentPath;
  const isWithRoute = pathNoBase.startsWith('/with/');
  const isEnablement = pathNoBase.includes('/enablement');
  const currentProviderId = isWithRoute ? pathNoBase.split('/')[2] : 'minimal';

  // Default the sidebar to Deploy Variants on /with/<tool> routes
  useEffect(() => {
    if (!userToggled) {
      setShowDeploymentVariants(isWithRoute);
    }
  }, [isWithRoute, userToggled]);

  const activeProviders = showDeploymentVariants ? DEPLOYMENT_VARIANTS : AI_PROVIDERS;
  const currentProvider = [...AI_PROVIDERS, ...DEPLOYMENT_VARIANTS].find(p => p.id === currentProviderId) || AI_PROVIDERS[0];

  const toggleVariantType = () => {
    setUserToggled(true);
    setShowDeploymentVariants(!showDeploymentVariants);
  };

  const getProviderPath = (targetPage: 'resume' | 'enablement') => {
    return targetPage === 'resume'
      ? (currentProviderId === 'minimal' ? '/' : `/with/${currentProviderId}`)
      : (currentProviderId === 'minimal' ? '/enablement' : `/with/${currentProviderId}/enablement`);
  };

  const handleProviderClick = (e: React.MouseEvent, provider: Provider) => {
    if (provider.comingSoon) {
      e.preventDefault();
      return;
    }
  };

  return (
    <div className="layout-container">
      <nav className="sidebar" aria-label="Variants">
        <button 
          className="variant-toggle" 
          onClick={toggleVariantType}
          aria-pressed={showDeploymentVariants}
          aria-label={showDeploymentVariants ? 'Show AI variants' : 'Show deployment variants'}
          title="Switch between AI-styled and deployment variants"
        >
          <span className="variant-toggle-icon" aria-hidden="true">
            {showDeploymentVariants ? '🚀' : '🤖'}
          </span>
          <span className="variant-toggle-label">
            {showDeploymentVariants ? 'Deploy\nVariants' : 'AI\nVariants'}
          </span>
        </button>
        
        <div className="sidebar-divider"></div>
        
        {activeProviders.map((provider) => {
          const providerHref = provider.isDeployment
            ? (
                currentProviderId === 'minimal'
                  ? provider.externalUrl
                  // All deployment variants now use their app routes, not static HTML
                  : `${provider.externalUrl}/with/${currentProviderId}${isEnablement ? '/enablement' : ''}`
              )
            : provider.comingSoon 
              ? '#' 
              : provider.id === 'minimal' 
                ? (isEnablement ? '/enablement' : '/')
                : (isEnablement ? `/with/${provider.id}/enablement` : `/with/${provider.id}`);

          const isActive = currentProvider?.id === provider.id;

          if (provider.isDeployment) {
            return (
              <a
                key={provider.id}
                href={providerHref}
                className={`sidebar-item ${isActive ? 'active' : ''} ${provider.comingSoon ? 'coming-soon' : ''}`}
                aria-label={`${provider.name}${provider.comingSoon ? ' (coming soon)' : ''}${provider.isDeployment ? ' - opens in new tab' : ''}`}
                style={{ '--accent-color': provider.color || '#000' } as React.CSSProperties}
                title={`${provider.name}${provider.comingSoon ? ' (coming soon)' : ''}${provider.isDeployment ? ' (external deployment)' : ''}`}
                onClick={(e) => handleProviderClick(e, provider)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {provider.logo ? (
                  <img src={provider.logo} alt={provider.name} className="sidebar-logo" />
                ) : (
                  <span className="sidebar-icon" style={{ color: provider.color || 'inherit' }}>
                    {provider.icon}
                  </span>
                )}
                <span className="sidebar-label">{provider.name}</span>
                {provider.comingSoon && (
                  <span className="coming-soon-tooltip">Coming Soon</span>
                )}
              </a>
            );
          }

          return (
            <Link
              key={provider.id}
              href={providerHref || '#'}
              className={`sidebar-item ${isActive ? 'active' : ''} ${provider.comingSoon ? 'coming-soon' : ''}`}
              aria-label={`${provider.name}${provider.comingSoon ? ' (coming soon)' : ''}`}
              style={{ '--accent-color': provider.color || '#000' } as React.CSSProperties}
              title={`${provider.name}${provider.comingSoon ? ' (coming soon)' : ''}`}
              onClick={(e) => handleProviderClick(e, provider)}
            >
              {provider.logo ? (
                <img src={provider.logo} alt={provider.name} className="sidebar-logo" />
              ) : (
                <span className="sidebar-icon" style={{ color: provider.color || 'inherit' }}>
                  {provider.icon}
                </span>
              )}
              <span className="sidebar-label">{provider.name}</span>
              {provider.comingSoon && (
                <span className="coming-soon-tooltip">Coming Soon</span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="main-content">
        <header>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 700 }}>
              Austin Wallace — Data Engineer
            </Link>
            <nav style={{ display: 'flex', gap: '1rem' }}>
              <Link 
                href={getProviderPath('resume')} 
                className={!isEnablement ? 'active-page' : ''}
              >
                Resume
              </Link>
              <Link 
                href={getProviderPath('enablement')} 
                className={isEnablement ? 'active-page' : ''}
              >
                AI Enablement
              </Link>
            </nav>
            {currentProvider && (
              <span className="provider-badge">
                <span style={{ color: currentProvider.color }}>{currentProvider.icon}</span>
                {currentProvider.name} Version
              </span>
            )}
          </div>
        </header>

        <div className="content-area" id="content" suppressHydrationWarning>
          {children}
        </div>

        <footer>
          <p>Base text written by Austin, enhanced by various AI tooling providers, and deployed with SST.</p>
        </footer>
      </div>

      <style jsx>{`
        .layout-container {
          display: flex;
          height: 100vh;
          overflow: hidden;
        }
        
        .sidebar {
          width: 80px;
          background: #fafafa;
          border-right: 1px solid #e5e7eb;
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
          border: 1px solid #e5e7eb;
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
          white-space: pre-line;
        }

        .sidebar-divider {
          height: 1px;
          background: #e5e7eb;
          margin: 0.5rem 1rem;
        }
        
        :global(.sidebar-item) {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0.75rem;
          text-decoration: none;
          color: #111827;
          border-radius: 8px;
          margin: 0 0.5rem;
          transition: all 0.2s ease;
          min-height: 60px;
          position: relative;
        }
        
        :global(.sidebar-item:hover) {
          background: #f0f0f0;
          transform: translateX(2px);
        }
        
        :global(.sidebar-item.active) {
          background: #fff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        :global(.sidebar-item.active::before) {
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
        
        :global(.sidebar-item.coming-soon) {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        :global(.sidebar-item.coming-soon:hover) {
          opacity: 0.8;
          transform: none;
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
          border-bottom: 1px solid #e5e7eb;
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
          border-top: 1px solid #e5e7eb;
          background: #fafafa;
          text-align: center;
          color: #6b7280;
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
        
        :global(.active-page) {
          font-weight: 600;
          color: #111827;
          text-decoration: underline;
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
        
        :global(.sidebar-item.coming-soon:hover .coming-soon-tooltip) {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 60px;
          }
          
          .sidebar-label {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
</file>

<file path="src/data/resume.json">
{
  "basics": {
    "name": "Austin Wallace",
    "label": "Data Engineer",
    "phone": "604.603.8668",
    "email": "austeane@gmail.com",
    "location": { "city": "Victoria, BC" },
    "summary": "Data Engineer with 9+ years building Databricks/Snowflake/dbt platforms that move billions of rows. Known for improving team practices and collaboration, and establishing best practices for AI use in security-critical settings.",
    "profiles": [
      { "network": "GitHub", "username": "austeane", "url": "https://github.com/austeane" },
      { "network": "LinkedIn", "username": "austintwallace", "url": "https://www.linkedin.com/in/austintwallace/" }
    ]
  },
  "work": [
    {
      "name": "Clio",
      "position": "Data Engineer",
      "location": "Vancouver, British Columbia",
      "startDate": "2024-08",
      "endDate": "",
      "summary": "Own 10+ Databricks pipelines and Terraform infrastructure.",
      "highlights": [
        "Unlocked $1 million+ worth of value by enabling analysis of our AI assistant's conversations",
        "Automated token rotation for Looker/dbt→Databricks, eliminating an average of an incident every month from expired tokens",
        "Built a schema/table diff tool (Python) used during Redshift→Databricks migration; caught 20+ data defects pre-launch and enabled final cutoff of infra costing 100k+ a year",
        "Wrote the company AI best-practices guide; directly responsible for new model usage by 500+ engineers",
        "Coached or onboarded 20+ engineers on their specific AI workflow; helped increase AI usage by 20x while remaining responsible"
      ]
    },
    {
      "name": "New Jersey Devils",
      "position": "Data Developer",
      "location": "Vancouver, British Columbia",
      "startDate": "2022-05",
      "endDate": "2024-08",
      "summary": "Sole Data Developer architecting end-to-end data platform.",
      "highlights": [
        "Architected, built, and operated end-to-end data platform supporting 10 analysts/managers responsible for allocating millions of dollars of player salary",
        "Ingested NHL tracking at 10 million rows a game; increasing available data by 10,000x",
        "Built/maintained 40+ dbt models across Postgres/Snowflake; enabled both detailed analysis and summaries that directly powered live dashboards"
      ]
    },
    {
      "name": "Teck Resources – RACE21",
      "position": "Data Developer",
      "location": "Vancouver, British Columbia",
      "startDate": "2020-10",
      "endDate": "2022-05",
      "summary": "Transformed legacy alert system into modern service.",
      "highlights": [
        "As part of a cross-functional team of three, transformed an untestable, unextendible, esoteric alert system based in PostgreSQL Stored Procedures",
        "Built unit and integration tested, modularized, configurable, well-documented alert service written in Python",
        "Deployed with Terraform to Microsoft Azure"
      ]
    }
  ],
  "projects": [
    {
      "name": "Qdrill",
      "description": "Real-world quadball coaching app featuring real-time drag-and-drop practice planning and polished practice viewer. Built for real users including Team Canada.",
      "url": "https://qdrill.app",
      "keywords": ["SvelteKit", "Postgres", "Vercel", "87k+ LOC"],
      "highlights": [
        "Enforced testing and code quality while leveraging AI pair-programming to accelerate delivery"
      ]
    },
    {
      "name": "Solstice",
      "description": "Developing a modern alternative to Topscore for Quadball Canada (target 2026). 20k+ lines of end-to-end-tested TypeScript with emphasis on professional quality and best practices.",
      "url": "https://github.com/soleilheaney/solstice",
      "keywords": ["TypeScript", "React", "TanStack Start"]
    }
  ],
  "education": [{
    "institution": "University of British Columbia (UBC)",
    "location": "Vancouver",
    "area": "Analytical Sports Management",
    "studyType": "B.Sc.",
    "startDate": "2012",
    "endDate": "2018",
    "description": "Machine Learning (Major) / Commerce (Minor). Designed and got approved an entirely unique degree combining business, statistics, and machine learning, which included graduate-level coursework."
  }],
  "skills": [
    { "name": "Data Platforms", "keywords": ["Databricks", "Unity Catalog", "Snowflake", "dbt", "PostgreSQL", "Delta Lake"] },
    { "name": "Programming", "keywords": ["Python", "SQL", "Go", "pandas", "PySpark"] },
    { "name": "Cloud & Infrastructure", "keywords": ["AWS S3/IAM", "Azure",  "Terraform", "CI/CD"] },
    { "name": "Data Engineering", "keywords": ["Data Modeling", "Data Warehousing", "Batch & Near-Real-Time Pipelines", "Observability"] },
    { "name": "AI & Collaboration", "keywords": ["Responsible AI Enablement", "Stakeholder Collaboration", "Best Practices Guide"] }
  ],
  "accomplishments": [
    {
      "title": "NHL Data Integration",
      "summary": "Successfully integrated real-time NHL tracking data, enhancing analytical capabilities and building a competitive advantage"
    },
    {
      "title": "Data Visualization Patent",
      "summary": "Developed a patented technique for data visualization"
    },
    {
      "title": "International Quidditch Association",
      "summary": "Served as Chair of Board of Directors, leading 30+ national governing bodies of one of the fastest growing sports worldwide"
    },
    {
      "title": "Media Startup CEO",
      "summary": "As CEO of a volunteer-based media startup, propelled growth to 70 staff and 30 countries"
    }
  ]
}
</file>

<file path="src/pages/api/resume.ts">
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch('https://www.austinwallace.ca/data/resume.json', {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (compatible; NextProxy; +https://www.austinwallace.ca)'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    const data = await response.json();
    
    // Cache for 1 hour
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');
    res.status(200).json(data);
  } catch (error) {
    console.error('API route error:', error);
    res.status(500).json({ error: 'Failed to fetch resume data' });
  }
}
</file>

<file path="src/pages/api/test-fetch.ts">
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const url = 'https://www.austinwallace.ca/data/resume.json';
  
  try {
    console.log('[test-fetch] Attempting to fetch:', url);
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        // Use a friendly UA to avoid WAF blocks
        'User-Agent': 'Mozilla/5.0 (compatible; NextSSR; +https://www.austinwallace.ca)'
      }
    });
    
    console.log('[test-fetch] Response status:', response.status);
    console.log('[test-fetch] Response headers:', Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      const text = await response.text();
      console.log('[test-fetch] Error response body:', text);
      return res.status(response.status).json({ 
        error: `HTTP ${response.status}`,
        body: text.substring(0, 500)
      });
    }
    
    const data = await response.json();
    res.status(200).json({ success: true, name: data.basics?.name });
  } catch (error) {
    console.error('[test-fetch] Error:', error);
    res.status(500).json({ error: (error as Error).message });
  }
}
</file>

<file path="src/pages/with/[tool]/enablement.tsx">
import { useRouter } from 'next/router';

export default function VariantEnablement() {
  const router = useRouter();
  const { tool } = router.query as { tool?: string };
  const src = tool ? `/azure/next/variants/${tool}/enablement/index.html` : undefined;
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
</file>

<file path="src/pages/with/[tool].tsx">
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
</file>

<file path="src/pages/with/index.tsx">
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
</file>

<file path="src/pages/_app.tsx">
import React from 'react';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import '@/styles/globals.css';

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error?: any }>{
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  componentDidCatch(error: any, info: any) {
    // Log detailed error to console to aid debugging
    // eslint-disable-next-line no-console
    console.error('App ErrorBoundary caught:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem' }}>
          <h2>Client error</h2>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{String(this.state.error)}</pre>
        </div>
      );
    }
    return this.props.children as any;
  }
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
}
</file>

<file path="src/pages/_document.tsx">
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logos/claude.svg`}
            type="image/svg+xml"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
</file>

<file path="src/pages/enablement.tsx">
export default function EnablementPage() {
  return (
    <div style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>AI Enablement</h1>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        This deployment focuses on variant hosting. View the canonical enablement content on AWS/SST:
        {' '}<a href="https://d2li8p8xclq49l.cloudfront.net/enablement" target="_blank" rel="noopener noreferrer">Enablement on AWS</a>.
      </p>
    </div>
  );
}
</file>

<file path="src/pages/probe.tsx">
import { useEffect } from 'react';
import type { GetServerSideProps } from 'next';

type FP = Record<string, any>;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const req: any = ctx.req;
  (ctx.res as any)?.setHeader?.('X-Robots-Tag', 'noindex');
  const fp: FP = {
    server_host: req.headers['host'],
    server_proto: (req.headers['x-forwarded-proto'] as string) || 'https',
    server_url: req.url,
    resolved_url: ctx.resolvedUrl,
    node_env: process.env.NODE_ENV,
    base_path: process.env.NEXT_PUBLIC_BASE_PATH || '',
    data_origin: process.env.NEXT_DATA_ORIGIN || '',
  };
  return { props: { __server: fp } };
};

export default function Probe({ __server }: { __server: FP }) {
  useEffect(() => {
    const client: FP = {
      client_host: window.location.host,
      client_proto: window.location.protocol.replace(':',''),
      client_pathname: window.location.pathname,
      client_href: window.location.href,
      base_path: process.env.NEXT_PUBLIC_BASE_PATH || '',
    };
    const diffs: Array<[string, any, any]> = [];
    const keys = new Set([...Object.keys(__server||{}), ...Object.keys(client)]);
    for (const k of keys) {
      const s = (__server as any)[k];
      const c = (client as any)[k];
      if (s !== undefined && c !== undefined && String(s) !== String(c)) {
        diffs.push([k, s, c]);
      }
    }
    if (diffs.length) {
      // eslint-disable-next-line no-console
      console.group('%cHydration fingerprint diffs','color:#e11d48;font-weight:bold');
      diffs.forEach(([k,s,c]) => console.warn(k, { server: s, client: c }));
      console.groupEnd();
    } else {
      // eslint-disable-next-line no-console
      console.info('%cHydration fingerprint: no diffs','color:#10b981');
    }
  }, [__server]);

  return (
    <main style={{ padding: 16 }}>
      <h1>Probe</h1>
      <p>Open console to see server vs client fingerprint.</p>
      <pre style={{ display: 'none' }} id="__server_fp" dangerouslySetInnerHTML={{ __html: JSON.stringify(__server) }} />
    </main>
  );
}
</file>

<file path="src/pages/resume_ssr.tsx">
import { useEffect, useMemo, useState } from 'react';

type Resume = {
  basics: {
    name: string;
    label: string;
    website?: string;
    email?: string;
    location?: { city?: string };
    profiles?: { network: string; url: string }[];
    summary?: string;
  };
  work: { name: string; position: string; startDate?: string; endDate?: string; summary?: string; highlights?: string[] }[];
  projects?: { name: string; description?: string; url?: string; keywords?: string[] }[];
  skills?: { name: string; keywords?: string[] }[];
};

export async function getServerSideProps() {
  // Fetch through local API route to avoid WAF blocking
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const host = process.env.VERCEL_URL || 'localhost:3000';
  const url = `${protocol}://${host}/azure/next/api/resume`;
  
  try {
    const res = await fetch(url, { 
      headers: { 
        Accept: 'application/json'
      } 
    });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const data = await res.json();
    
    return { 
      props: { data }
    };
  } catch (e) {
    console.error('[resume_ssr] Error fetching data:', e);
    // Return empty props to allow client-side fallback
    return { 
      props: { error: `Server fetch failed: ${(e as Error).message}` }
    };
  }
}

export default function ResumeSSR({ data, error }: { data?: Resume; error?: string }) {
  const [clientData, setClientData] = useState<Resume | undefined>(data);
  const [clientError, setClientError] = useState<string | undefined>(error);

  useEffect(() => {
    // Fallback: if SSR failed, fetch through our API proxy
    if (!clientData) {
      const tryFetch = async () => {
        // Use local API route that proxies to avoid WAF
        const r = await fetch('/azure/next/api/resume', { headers: { Accept: 'application/json' } });
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const json = (await r.json()) as Resume;
        setClientData(json);
        setClientError(undefined);
      };
      tryFetch().catch((e) => setClientError(e.message || 'Fetch failed'));
    }
  }, [clientData]);
  const effective = clientData || data;
  // Always call hooks at the top level, before any conditional returns
  const contacts = useMemo(() => {
    if (!effective?.basics) return [];
    const items: { label: string; url: string | null }[] = [];
    const { basics } = effective;
    if (basics?.website) items.push({ label: 'Website', url: basics.website });
    if (basics?.email) items.push({ label: basics.email, url: `mailto:${basics.email}` });
    if (basics?.location?.city) items.push({ label: basics.location.city, url: null });
    const gh = basics?.profiles?.find((p) => p.network?.toLowerCase() === 'github');
    const li = basics?.profiles?.find((p) => p.network?.toLowerCase() === 'linkedin');
    if (gh) items.push({ label: 'GitHub', url: gh.url });
    if (li) items.push({ label: 'LinkedIn', url: li.url });
    return items;
  }, [effective?.basics]);
  if (clientError && !clientData) return <div style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}><p>Failed to load resume: {clientError}</p></div>;
  if (!effective) return <div style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}><p>Loading</p></div>;

  const { basics, work = [], projects = [], skills = [] } = effective;

  return (
    <div style={{ padding: '1.25rem', maxWidth: 2000, margin: '0 auto' }}>
      <section aria-labelledby="title">
        <h1 id="title" style={{ fontSize: '2rem', lineHeight: 1.1, margin: '.25rem 0 .5rem 0' }}>
          {basics?.name || 'Your Name'}
        </h1>
        <p style={{ margin: 0, color: '#666' }}>{basics?.label || 'AI Engineer · AI Enablement Specialist'}</p>
        {!!contacts.length && (
          <ul style={{ listStyle: 'none', padding: 0, margin: '.75rem 0 0 0', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {contacts.map((c, i) => (
              <li key={i}>
                {c.url ? (
                  <a href={c.url} target="_blank" rel="noopener noreferrer">{c.label}</a>
                ) : (
                  <span>{c.label}</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      <hr style={{ margin: '1.25rem 0', border: 0, borderTop: '1px solid #eee' }} />

      {basics?.summary && (
        <section aria-labelledby="summary">
          <h2 id="summary" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.5rem' }}>Summary</h2>
          <p style={{ margin: 0, maxWidth: '70ch' }}>{basics.summary}</p>
        </section>
      )}

      {basics?.summary && (<hr style={{ margin: '1.25rem 0', border: 0, borderTop: '1px solid #eee' }} />)}

      {!!work.length && (
        <section aria-labelledby="work">
          <h2 id="work" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.5rem' }}>Experience</h2>
          {work.map((job, i) => (
            <article key={i} style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                <div>
                  <strong>{job.position}</strong>{' @ '}{job.name}
                </div>
                <div style={{ color: '#666' }}>
                  {job.startDate}{job.endDate ? ` – ${job.endDate}` : ' – Present'}
                </div>
              </div>
              {job.summary && <p style={{ margin: '.25rem 0 0 0', maxWidth: '70ch' }}>{job.summary}</p>}
              {!!job.highlights?.length && (
                <ul style={{ margin: '.25rem 0 0 1rem' }}>
                  {job.highlights.map((h, j) => (<li key={j}>{h}</li>))}
                </ul>
              )}
            </article>
          ))}
        </section>
      )}

      {!!work.length && (<hr style={{ margin: '1.25rem 0', border: 0, borderTop: '1px solid #eee' }} />)}

      {!!projects.length && (
        <section aria-labelledby="projects">
          <h2 id="projects" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.5rem' }}>Projects</h2>
          <ul style={{ listStyle: 'disc', margin: '.25rem 0 0 1rem' }}>
            {projects.map((p, i) => (
              <li key={i}>
                <strong>{p.name}</strong>
                {p.url && (
                  <>
                    {' '}— <a href={p.url} target="_blank" rel="noopener noreferrer">{p.url}</a>
                  </>
                )}
                {p.description && (<div style={{ margin: '.25rem 0 0 0', maxWidth: '70ch' }}>{p.description}</div>)}
                {!!p.keywords?.length && (
                  <div style={{ color: '#666', fontSize: '.9rem', marginTop: '.25rem' }}>{p.keywords.join(' · ')}</div>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {!!projects.length && (<hr style={{ margin: '1.25rem 0', border: 0, borderTop: '1px solid #eee' }} />)}

      {!!skills.length && (
        <section aria-labelledby="skills">
          <h2 id="skills" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.5rem' }}>Skills</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
            {skills.map((s, i) => (
              <li key={i} style={{ border: '1px solid #eee', padding: '.25rem .5rem', borderRadius: '999px' }}>
                {s.name}{s.keywords?.length ? ` — ${s.keywords.join(', ')}` : ''}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
</file>

<file path="src/pages/resume.tsx">
// Use SSR page that fetches through API proxy to avoid WAF issues
export { default } from './resume_ssr';
</file>

<file path="src/pages/test.tsx">
import Head from 'next/head';

export async function getServerSideProps({ res }: any) {
  res.setHeader('X-Robots-Tag', 'noindex');
  return { props: {} };
}

export default function TestPage() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div style={{ padding: 16 }}>
        <h1>Hydration Test</h1>
        <p>If you see this without an error, hydration is fine.</p>
      </div>
    </>
  );
}
</file>

<file path="src/styles/globals.css">
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --azure-primary: #0078d4;
  --azure-dark: #005a9e;
  --azure-light: #40a9ff;
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</file>

<file path=".dockerignore">
node_modules
.next
.git
.gitignore
README.md
.env*
.cache
coverage
.vscode
.DS_Store
*.log
</file>

<file path=".env.azure">
AZURE_SWA_DEPLOYMENT_TOKEN=57087f25f979984f0bc6c18e471786f6b7356c876f4c858749b71be0952f10dd01-ea80ba0a-7874-4db3-bbac-f1406df0006601e0317049c9b91e
</file>

<file path=".env.production.local">
# Created by Vercel CLI
VERCEL_OIDC_TOKEN="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im1yay00MzAyZWMxYjY3MGY0OGE5OGFkNjFkYWRlNGEyM2JlNyJ9.eyJpc3MiOiJodHRwczovL29pZGMudmVyY2VsLmNvbS9hdXN0ZWFuZXMtcHJvamVjdHMiLCJzdWIiOiJvd25lcjphdXN0ZWFuZXMtcHJvamVjdHM6cHJvamVjdDpuZXh0anMtYXp1cmU6ZW52aXJvbm1lbnQ6ZGV2ZWxvcG1lbnQiLCJzY29wZSI6Im93bmVyOmF1c3RlYW5lcy1wcm9qZWN0czpwcm9qZWN0Om5leHRqcy1henVyZTplbnZpcm9ubWVudDpkZXZlbG9wbWVudCIsImF1ZCI6Imh0dHBzOi8vdmVyY2VsLmNvbS9hdXN0ZWFuZXMtcHJvamVjdHMiLCJvd25lciI6ImF1c3RlYW5lcy1wcm9qZWN0cyIsIm93bmVyX2lkIjoidGVhbV9XbTFrTk1XNmhtVFZJQzZvWWpETmNQcTMiLCJwcm9qZWN0IjoibmV4dGpzLWF6dXJlIiwicHJvamVjdF9pZCI6InByal91UHNWSnM1ZFZrSXFKd3VCTkdiUXdnRTBsYmp3IiwiZW52aXJvbm1lbnQiOiJkZXZlbG9wbWVudCIsInVzZXJfaWQiOiJTS3FPRlM1cEU3aUxyQWpYSndKcXg2YlciLCJuYmYiOjE3NTc0MDM4NTQsImlhdCI6MTc1NzQwMzg1NCwiZXhwIjoxNzU3NDQ3MDU0fQ.RkAXjuAziAR7rTPTJ-fhLL5h5k2Hcr9YJtClGnJRUkHYK4Z9b9zzzLWc0krePxZyMTT1s_s8OVrQTadLHUL3N0Ylr8--0vP3sVop-bR2C60OkgjzV2RLVn_MFzMKnSQx3wd8sHePZs8HwFkVPa7jakTuznVGbKaTvmuHk-h0F67b6OIgvxM2tYHWA3TFmnXJAwcKaCU3oKE99bA2VPU7xWfAdlN6g849NyRlk8UPmmwR-fr3uEMJNs9HBDkFKjFRvtTN8B-oF0KjzMQQmRvLjfU25tkRNbXRmjqZTA3KP0JBkfkaQ_QdOXkYUiU_iPMndimgaEpqyABtkp4yKgkaqA"
</file>

<file path=".gitignore">
.vercel
</file>

<file path="azure-deploy.yml">
name: Deploy Next.js to Azure App Service

on:
  push:
    branches: [main]
    paths:
      - 'variants/nextjs-azure/**'
  workflow_dispatch:

env:
  AZURE_WEBAPP_NAME: austin-resume-next
  NODE_VERSION: '20.x'

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
          cache-dependency-path: variants/nextjs-azure/package-lock.json
      
      - name: Install dependencies
        run: npm ci
        working-directory: ./variants/nextjs-azure
      
      - name: Build Next.js app
        run: npm run build
        working-directory: ./variants/nextjs-azure
      
      - name: Deploy to Azure Web App
        uses: azure/webapps-deploy@v3
        with:
          app-name: ${{ env.AZURE_WEBAPP_NAME }}
          publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
          package: ./variants/nextjs-azure
</file>

<file path="Dockerfile">
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Azure App Service expects port 8080 by default
EXPOSE 8080

# Start the application
CMD ["node", "server.js"]
</file>

<file path="next-env.d.ts">
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
</file>

<file path="next.config.mjs">
/** @type {import('next').NextConfig} */
const isVercel = !!process.env.VERCEL;
const basePath = "/azure/next";

const nextConfig = {
  basePath,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_DATA_ORIGIN: process.env.NEXT_DATA_ORIGIN || "https://d2li8p8xclq49l.cloudfront.net",
  },
  async rewrites() {
    const origin = process.env.NEXT_DATA_ORIGIN || "https://www.austinwallace.ca";
    // Ensure data requests under basePath are forwarded to the router origin
    return origin ? [{ source: `${basePath}/data/:path*`, destination: `${origin}/data/:path*` }] : [];
  },
  async redirects() {
    return [
      { source: '/', destination: '/resume', permanent: false },
    ];
  },
  ...(isVercel ? {} : { output: "standalone" }),
};

export default nextConfig;
</file>

<file path="package.json">
{
  "name": "austin-resume-nextjs",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@tailwindcss/postcss": "^4.1.12",
    "autoprefixer": "^10.4.21",
    "next": "14.2.5",
    "postcss": "^8.5.6",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwindcss": "^4.1.12"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.2.5",
    "typescript": "^5"
  }
}
</file>

<file path="postcss.config.js">
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
</file>

<file path="repomix-sst-router-complete.xml">
This file is a merged representation of a subset of the codebase, containing specifically included files and files not matching ignore patterns, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: sst.config.ts, DEPLOYMENT.md, SETUP_GUIDE.md, scripts/*.sh, variants/*/package.json, variants/*/src/**, variants/*/next.config.mjs, variants/*/vite.config.ts, variants/*/tsconfig.json, variants/*/tailwind.config.js, variants/*/postcss.config.js, variants/*/netlify.toml, variants/*/staticwebapp.config.json, src/routes/data/**, static/data/*.json, CLAUDE.md
- Files matching these patterns are excluded: node_modules, dist, build, .next, .svelte-kit, *.gen.ts
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
</notes>

</file_summary>

<directory_structure>

</directory_structure>

<files>
This section contains the contents of the repository's files.

</files>
</file>

<file path="sst-env.d.ts">
/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
/* deno-fmt-ignore-file */

/// <reference path="../../sst-env.d.ts" />

import "sst"
export {}
</file>

<file path="tailwind.config.ts">
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
</file>

<file path="tsconfig.json">
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
</file>

</files>
