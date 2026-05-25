import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, '../dist');

const forbiddenPhrases = ['Content to be written', 'Draft for:'];

function collectHtmlFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectHtmlFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

function verifyBuildOutput() {
  if (!fs.existsSync(distDir)) {
    console.error(`verify-build-output: missing ${distDir}. Run the build first.`);
    process.exit(1);
  }

  const htmlFiles = collectHtmlFiles(distDir);
  const violations = [];

  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    for (const phrase of forbiddenPhrases) {
      if (content.includes(phrase)) {
        violations.push({ file: path.relative(distDir, file), phrase });
      }
    }
  }

  if (violations.length > 0) {
    console.error('verify-build-output: draft placeholder text found in build output:');
    for (const { file, phrase } of violations) {
      console.error(`  - "${phrase}" in dist/${file}`);
    }
    console.error('Fix the source content before deploying.');
    process.exit(1);
  }

  console.log(`verify-build-output: OK (${htmlFiles.length} HTML files checked)`);
}

verifyBuildOutput();
