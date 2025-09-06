import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect } from 'react';

interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  experience: Array<{
    title: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
  }>;
  education: Array<{
    degree: string;
    school: string;
    location: string;
    year: string;
  }>;
  skills: {
    [category: string]: string[];
  };
}

function transformSharedResume(shared: any): ResumeData {
  const basics = shared?.basics ?? {};
  const profiles: Array<any> = basics?.profiles ?? [];
  const findProfile = (name: string) =>
    profiles.find((p) => (p.network || '').toLowerCase().includes(name))?.url || '';

  const experience = (shared?.work ?? []).map((w: any) => ({
    title: w?.position || '',
    company: w?.name || '',
    location: w?.location || '',
    period: [w?.startDate, w?.endDate || 'Present'].filter(Boolean).join(' - '),
    responsibilities: Array.isArray(w?.highlights) ? w.highlights : [],
  }));

  const education = (shared?.education ?? []).map((e: any) => ({
    degree: e?.studyType ? `${e.studyType}${e?.area ? ` in ${e.area}` : ''}` : (e?.area || ''),
    school: e?.institution || '',
    location: e?.location || '',
    year: e?.endDate || '',
  }));

  const skills: Record<string, string[]> = {};
  for (const s of shared?.skills ?? []) {
    if (s?.name) skills[s.name] = Array.isArray(s?.keywords) ? s.keywords : [];
  }

  return {
    name: basics?.name || '',
    title: basics?.label || '',
    location: basics?.location?.city || '',
    email: basics?.email || '',
    linkedin: findProfile('linkedin'),
    github: findProfile('github'),
    summary: basics?.summary || '',
    experience,
    education,
    skills,
  };
}
export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const [resume, setResume] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch from shared /data endpoint
    // Set VITE_DATA_URL in production to your router domain
    const dataUrl = import.meta.env.VITE_DATA_URL || '/data/resume.json';
    
    fetch(dataUrl)
      .then(res => res.json())
      .then(shared => {
        setResume(transformSharedResume(shared));
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load resume:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-600">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  if (!resume) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-600">
        <div className="text-white text-xl">Failed to load resume data</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600">
      <div className="container mx-auto px-4 py-8">
        {/* Modern card design */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Header with GCP-inspired colors */}
          <header className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold mb-2">{resume.name}</h1>
              <h2 className="text-2xl mb-4 opacity-95">{resume.title}</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <span>📍 {resume.location}</span>
                <a href={`mailto:${resume.email}`} className="hover:underline">
                  ✉️ {resume.email}
                </a>
                <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  💼 LinkedIn
                </a>
                <a href={resume.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  🔗 GitHub
                </a>
              </div>
            </div>
          </header>

          <div className="max-w-4xl mx-auto p-8">
            {/* Summary */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">About</h3>
              <p className="text-gray-600 leading-relaxed">{resume.summary}</p>
            </section>

            {/* Experience with timeline design */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Experience</h3>
              <div className="space-y-6">
                {resume.experience.map((job, index) => (
                  <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-green-500 before:rounded-full before:z-10">
                    <div className="absolute left-1.5 top-6 bottom-0 w-px bg-gray-300"></div>
                    <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-bold text-gray-800">{job.title}</h4>
                      <div className="text-lg text-blue-600 font-medium">{job.company}</div>
                      <div className="text-sm text-gray-500 mb-3">
                        {job.period} | {job.location}
                      </div>
                      <ul className="space-y-1">
                        {job.responsibilities.map((resp, i) => (
                          <li key={i} className="text-gray-600 flex">
                            <span className="text-green-500 mr-2">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Education</h3>
              <div className="grid gap-4">
                {resume.education.map((edu, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-gray-800">{edu.degree}</h4>
                    <div className="text-lg text-blue-600">{edu.school}</div>
                    <div className="text-sm text-gray-500">
                      {edu.year} | {edu.location}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills with modern chips */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Skills</h3>
              <div className="space-y-4">
                {Object.entries(resume.skills).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-gray-700 mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Footer */}
          <footer className="bg-gray-100 px-8 py-4 text-center text-sm text-gray-600">
            <p>TanStack Start on Google Cloud Run | Multi-Framework Resume Platform</p>
            <p className="text-xs mt-1">Powered by TanStack Router with SSR</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
