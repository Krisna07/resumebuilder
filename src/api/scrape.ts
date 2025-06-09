import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios'; // For making HTTP requests to the target URL
import * as cheerio from 'cheerio'; // For parsing HTML

// Helper function to fetch and parse HTML (basic example)
async function fetchAndParseUrl(url: string): Promise<string | null> {
    try {
        const { data } = await axios.get(url, {
            headers: {
                // Some sites block requests without a common user-agent
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        console.log(`Fetched data from ${url}`);
        console.log(data)
        const $ = cheerio.load(data);

        // Example: Extract the job description text.
        // This selector is highly dependent on the target website's structure and will need adjustment.
        // You'll need to inspect the job posting page to find the correct selector.
        let jobDescriptionText = '';

        // Common selectors for job descriptions (these are examples, inspect the target site)
        const selectors = [
            'div.job-description',
            'section#job-description',
            'article.job-details-description',
            'div[class*="description"]',
            'body' // Fallback to extract all text if specific selectors fail
        ];

        for (const selector of selectors) {
            if ($(selector).length) {
                // Prioritize more specific selectors if found
                jobDescriptionText = $(selector).text(); // .text() gets all descendant text
                // Basic cleanup
                jobDescriptionText = jobDescriptionText.replace(/\s\s+/g, ' ').trim();
                if (jobDescriptionText.length > 100) { // Arbitrary length to consider it valid
                    break;
                }
            }
        }

        if (!jobDescriptionText && $('body').length) {
            // Fallback if no specific selector worked well
            jobDescriptionText = $('body').text().replace(/\s\s+/g, ' ').trim();
        }


        return jobDescriptionText || "Could not extract a meaningful description.";

    } catch (error: any) {
        console.error(`Error fetching or parsing URL ${url}:`, error.message);
        if (axios.isAxiosError(error) && error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
            throw new Error(`Failed to fetch from target URL: ${error.response.status}`);
        }
        throw new Error(`Error processing URL: ${error.message}`);
    }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    console.log("API /api/scrape hit with query:", req.query);
    const targetUrl = req.query.url as string;

    if (!targetUrl) {
        return res.status(400).json({ error: 'URL query parameter is required.' });
    }

    // Test response
    return res.status(200).json({ description: `Test successful for URL: ${targetUrl}`, receivedParams: req.query });
}