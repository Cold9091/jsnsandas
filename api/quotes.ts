import { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import { insertQuoteSchema } from '../shared/schema';

// In-memory storage for quotes (for demo purposes)
// In production, you would use a proper database
let quotes: any[] = [];
let currentId = 1;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).json({});
  }

  // Set CORS headers
  Object.entries(corsHeaders).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  try {
    if (req.method === 'GET') {
      return res.status(200).json({ quotes });
    }

    if (req.method === 'POST') {
      const validation = insertQuoteSchema.safeParse(req.body);
      
      if (!validation.success) {
        return res.status(400).json({ 
          error: 'Invalid request data',
          details: validation.error.errors 
        });
      }

      const quote = {
        id: currentId++,
        ...validation.data,
        createdAt: new Date().toISOString(),
      };

      quotes.push(quote);

      return res.status(201).json({ 
        success: true, 
        quote 
      });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
}