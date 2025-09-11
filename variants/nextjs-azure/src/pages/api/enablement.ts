import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch('https://www.austinwallace.ca/data/enablement.json', {
      headers: {
        'User-Agent': 'austin-resume-nextjs/1.0 (Next.js API Route)'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    
    // Set cache headers to match the origin
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400');
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching enablement data:', error);
    res.status(500).json({ error: 'Failed to fetch enablement data' });
  }
}