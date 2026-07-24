import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = join(process.cwd(), 'dist', 'portfolio', 'browser');
const indexPath = join(outputDir, 'index.html');
const notFoundPath = join(outputDir, '404.html');

if (!existsSync(indexPath)) {
  throw new Error(`Could not find ${indexPath}. Run the production build first.`);
}

copyFileSync(indexPath, notFoundPath);
console.log('Created dist/portfolio/browser/404.html for GitHub Pages route fallback.');
