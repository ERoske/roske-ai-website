/**
 * Fetch latest podcast episodes from the "Asking Good Questions" RSS feed
 * and write them to a JSON file for the site to consume.
 *
 * Usage: npx tsx scripts/fetch-podcast-episodes.ts
 */

const RSS_URL = 'https://rss.buzzsprout.com/2430929.rss';
const OUTPUT_PATH = 'src/data/podcast-episodes.json';

interface PodcastEpisode {
  title: string;
  description: string;
  pubDate: string;
  link: string;
  duration: string;
  episodeNumber?: number;
}

async function fetchPodcastEpisodes(): Promise<PodcastEpisode[]> {
  console.log(`Fetching RSS feed from ${RSS_URL}...`);
  const response = await fetch(RSS_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch RSS: ${response.status} ${response.statusText}`);
  }

  const xml = await response.text();
  const episodes: PodcastEpisode[] = [];

  // Simple XML parsing — extract <item> blocks
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const item = match[1];
    const title = extractTag(item, 'title');
    const description = extractTag(item, 'description')
      ?.replace(/<[^>]*>/g, '') // Strip HTML tags
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim();
    const pubDate = extractTag(item, 'pubDate');
    const link = extractTag(item, 'link');
    const duration = extractTag(item, 'itunes:duration') || '';
    const episodeNum = extractTag(item, 'itunes:episode');

    if (title && pubDate) {
      episodes.push({
        title,
        description: description?.substring(0, 300) || '',
        pubDate,
        link: link || '',
        duration,
        ...(episodeNum ? { episodeNumber: parseInt(episodeNum) } : {}),
      });
    }
  }

  console.log(`Found ${episodes.length} episodes.`);
  return episodes;
}

function extractTag(xml: string, tag: string): string | undefined {
  // Handle CDATA
  const cdataRegex = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`);
  const cdataMatch = xml.match(cdataRegex);
  if (cdataMatch) return cdataMatch[1].trim();

  // Handle regular content
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`);
  const match = xml.match(regex);
  return match ? match[1].trim() : undefined;
}

async function main() {
  try {
    const episodes = await fetchPodcastEpisodes();

    // Take the latest 10 episodes
    const latest = episodes.slice(0, 10);

    // Ensure data directory exists
    const { mkdir, writeFile } = await import('fs/promises');
    const { dirname } = await import('path');
    await mkdir(dirname(OUTPUT_PATH), { recursive: true });

    await writeFile(OUTPUT_PATH, JSON.stringify(latest, null, 2));
    console.log(`Wrote ${latest.length} episodes to ${OUTPUT_PATH}`);
  } catch (error) {
    console.error('Failed to fetch podcast episodes:', error);
    process.exit(1);
  }
}

main();
