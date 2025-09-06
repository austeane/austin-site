import { useState, useEffect } from 'react';
import './App.css';

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

// Transform the shared schema (basics/work/education/skills[]) to the shape this UI expects
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

function App() {
  const [resume, setResume] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('experience');

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
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!resume) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>Failed to load resume data</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Glass-morphism card */}
        <div className="backdrop-blur-lg bg-white/90 rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Header */}
          <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
            <h1 className="text-5xl font-bold mb-2">{resume.name}</h1>
            <h2 className="text-2xl mb-4 opacity-90">{resume.title}</h2>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-1">
                📍 {resume.location}
              </span>
              <a href={`mailto:${resume.email}`} className="flex items-center gap-1 hover:underline">
                ✉️ {resume.email}
              </a>
              <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                💼 LinkedIn
              </a>
              <a href={resume.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                🔗 GitHub
              </a>
            </div>
          </header>

          {/* Summary */}
          <div className="p-8 border-b">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Professional Summary</h3>
            <p className="text-gray-600 leading-relaxed">{resume.summary}</p>
          </div>

          {/* Tabs */}
          <div className="flex border-b">
            {['experience', 'education', 'skills'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 px-6 text-lg font-semibold capitalize transition-colors ${
                  activeTab === tab 
                    ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <div className="space-y-6">
                {resume.experience.map((job, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6 hover:border-purple-500 transition-colors">
                    <h4 className="text-xl font-bold text-gray-800">{job.title}</h4>
                    <div className="text-lg text-blue-600 font-medium">{job.company}</div>
                    <div className="text-sm text-gray-500 mb-3">
                      {job.period} | {job.location}
                    </div>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i} className="text-gray-600 flex">
                          <span className="text-blue-500 mr-2">▸</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Education Tab */}
            {activeTab === 'education' && (
              <div className="space-y-6">
                {resume.education.map((edu, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-800">{edu.degree}</h4>
                    <div className="text-lg text-blue-600 font-medium">{edu.school}</div>
                    <div className="text-sm text-gray-500">
                      {edu.year} | {edu.location}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div className="space-y-6">
                {Object.entries(resume.skills).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="text-lg font-bold text-gray-800 mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <footer className="bg-gray-50 px-8 py-4 text-center text-sm text-gray-500">
            <p>React (Vite) on Azure Static Web Apps | Multi-Framework Resume Platform</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
