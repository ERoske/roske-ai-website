/**
 * Fetch latest videos from Edward Roske's YouTube channel RSS feed
 * and write them to a JSON file for the site to consume.
 *
 * Usage: npx tsx scripts/fetch-youtube-videos.ts
 */

const CHANNEL_ID = 'UCOygNSOFfyHIRFvC6hbRpkQ';
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const OUTPUT_PATH = 'src/data/youtube-videos.json';

interface YouTubeVideo {
  title: string;
  videoId: string;
  published: string;
  description: string;
  thumbnail: string;
  category: string;
}

async function fetchYouTubeVideos(): Promise<YouTubeVideo[]> {
  console.log(`Fetching YouTube RSS feed from ${RSS_URL}...`);
  const response = await fetch(RSS_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch RSS: ${response.status} ${response.statusText}`);
  }

  const xml = await response.text();
  const videos: YouTubeVideo[] = [];

  // Parse <entry> blocks from Atom feed
  const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
  let match;

  while ((match = entryRegex.exec(xml)) !== null) {
    const entry = match[1];
    const title = extractTag(entry, 'title');
    const videoId = extractTag(entry, 'yt:videoId');
    const published = extractTag(entry, 'published');
    const description = extractMediaDescription(entry);
    const thumbnail = extractThumbnail(entry);

    if (title && videoId && published) {
      videos.push({
        title,
        videoId,
        published,
        description: description?.substring(0, 300) || '',
        thumbnail: thumbnail || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        category: 'youtube',
      });
    }
  }

  console.log(`Found ${videos.length} videos.`);
  return videos;
}

function extractTag(xml: string, tag: string): string | undefined {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`);
  const match = xml.match(regex);
  return match ? match[1].trim() : undefined;
}

function extractMediaDescription(xml: string): string | undefined {
  const regex = /<media:description>([\s\S]*?)<\/media:description>/;
  const match = xml.match(regex);
  return match ? match[1].trim() : undefined;
}

function extractThumbnail(xml: string): string | undefined {
  const regex = /<media:thumbnail\s+url="([^"]+)"/;
  const match = xml.match(regex);
  return match ? match[1] : undefined;
}

async function main() {
  try {
    const videos = await fetchYouTubeVideos();

    const { mkdir, writeFile } = await import('fs/promises');
    const { dirname } = await import('path');
    await mkdir(dirname(OUTPUT_PATH), { recursive: true });

    await writeFile(OUTPUT_PATH, JSON.stringify(videos, null, 2));
    console.log(`Wrote ${videos.length} videos to ${OUTPUT_PATH}`);
  } catch (error) {
    console.error('Failed to fetch YouTube videos:', error);
    process.exit(1);
  }
}

main();
