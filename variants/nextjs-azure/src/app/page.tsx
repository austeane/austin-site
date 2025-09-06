'use client';

import { useEffect, useState } from 'react';

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
  skills: Record<string, string[]>;
}

// Transform the shared resume schema (src/lib/data/resume.json)
// into the simplified structure this page expects
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

export default function Home() {
  const [resume, setResume] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use CloudFront URL for data to work across all environments
    const dataUrl = process.env.NEXT_PUBLIC_DATA_URL || 'https://d2li8p8xclq49l.cloudfront.net/data/resume.json';
    fetch(dataUrl)
      .then((res) => res.json())
      .then((shared) => {
        const transformed = transformSharedResume(shared);
        setResume(transformed);
      })
      .catch((err) => {
        console.error('Failed to load resume:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  if (!resume) return <div className="flex justify-center items-center min-h-screen">Failed to load resume</div>;

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header */}
        <header className="mb-8 text-center border-b-2 border-blue-500 pb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{resume.name}</h1>
          <h2 className="text-2xl text-blue-600 mb-4">{resume.title}</h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span>{resume.location}</span>
            <a href={`mailto:${resume.email}`} className="hover:text-blue-600">{resume.email}</a>
            <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn</a>
            <a href={resume.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">GitHub</a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <span className="mr-2">📋</span> Summary
          </h3>
          <p className="text-gray-700 leading-relaxed">{resume.summary}</p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="mr-2">💼</span> Experience
          </h3>
          {resume.experience.map((job, index) => (
            <div key={index} className="mb-6 bg-white rounded-lg shadow-sm p-6">
              <h4 className="font-bold text-lg text-gray-900">{job.title}</h4>
              <div className="text-blue-600 font-medium">{job.company}</div>
              <div className="text-sm text-gray-500 mb-3">{job.period} | {job.location}</div>
              <ul className="list-disc list-inside space-y-1">
                {job.responsibilities.map((resp, i) => (
                  <li key={i} className="text-gray-700">{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="mr-2">🎓</span> Education
          </h3>
          {resume.education.map((edu, index) => (
            <div key={index} className="mb-4 bg-white rounded-lg shadow-sm p-4">
              <h4 className="font-bold text-gray-900">{edu.degree}</h4>
              <div className="text-blue-600">{edu.school}</div>
              <div className="text-sm text-gray-500">{edu.year} | {edu.location}</div>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="mr-2">🛠️</span> Skills
          </h3>
          <div className="bg-white rounded-lg shadow-sm p-6">
            {Object.entries(resume.skills).map(([category, skills]) => (
              <div key={category} className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{category}:</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 pt-6 border-t">
          <p>Next.js on Azure App Service | Part of Multi-Framework Resume</p>
        </footer>
      </div>
    </main>
  );
}
