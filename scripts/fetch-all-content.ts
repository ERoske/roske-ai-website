/**
 * Orchestrator: fetch all auto-sourced content for the weekly rebuild.
 * Runs each fetcher and reports results.
 *
 * Usage: npx tsx scripts/fetch-all-content.ts
 */

async function run(name: string, script: string): Promise<boolean> {
  console.log(`\n--- ${name} ---`);
  try {
    const { execSync } = await import('child_process');
    execSync(`npx tsx ${script}`, { stdio: 'inherit', cwd: process.cwd() });
    console.log(`✓ ${name} completed.`);
    return true;
  } catch (error) {
    console.error(`✗ ${name} failed:`, error);
    return false;
  }
}

async function main() {
  console.log('=== Roske.AI Content Fetcher ===');
  console.log(`Started at ${new Date().toISOString()}\n`);

  const results: Record<string, boolean> = {};

  results['Podcast Episodes'] = await run(
    'Podcast Episodes',
    'scripts/fetch-podcast-episodes.ts'
  );

  results['YouTube Videos'] = await run(
    'YouTube Videos',
    'scripts/fetch-youtube-videos.ts'
  );

  // Future fetchers:
  // results['Social Media'] = await run('Social Media', 'scripts/fetch-social-media.ts');
  // results['News Mentions'] = await run('News Mentions', 'scripts/fetch-news-mentions.ts');

  console.log('\n=== Summary ===');
  for (const [name, success] of Object.entries(results)) {
    console.log(`  ${success ? '✓' : '✗'} ${name}`);
  }

  const failures = Object.values(results).filter(v => !v).length;
  if (failures > 0) {
    console.log(`\n${failures} fetcher(s) failed.`);
    process.exit(1);
  }

  console.log('\nAll content fetched successfully.');
}

main();
