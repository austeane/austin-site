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