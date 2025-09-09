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