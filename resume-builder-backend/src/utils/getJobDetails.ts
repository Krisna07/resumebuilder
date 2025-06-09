import axios from 'axios';
import * as cheerio from 'cheerio';

async function scrapeWebsite(url: string) {
    try {
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'X-Requested-With': 'XMLHttpRequest' // Important for CORS Anywhere
            }
        });
        const html = response.data;
        const $ = cheerio.load(html);

        // Extract content from elements with data-automation="jobAdDetails"
        const extractedContent: any = [];
        const targetDataAutomations = ['job-detail-title', 'advertiser-name', 'job-detail-work-type', "jobAdDetails"];
        targetDataAutomations.forEach(dataAutomationValue => {
            $(`[data-automation="${dataAutomationValue}"]`).each((_, el) => {
                const text = $(el).text().trim();
                if (text) {
                    extractedContent.push({
                        dataAutomation: dataAutomationValue, // Store the dataAutomation value
                        text: text // Store the extracted text
                    });
                }
            });
        });

        return {
            content: extractedContent,
        };
    } catch (err: any) {
        console.error(' Error fetching the page:', err.message);
        return null;
    }
}

export default async function getJobDetails(url: string) {
    const data = await scrapeWebsite(url);
    if (data) {
        const jobDetails: { [key: string]: string } = {};
        data.content.forEach((item: { dataAutomation: string; text: string }) => {
            jobDetails[item.dataAutomation] = item.text;
        });
        return jobDetails;
    } else {
        return null;
    }
}