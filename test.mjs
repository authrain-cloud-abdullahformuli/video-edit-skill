import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ Assertion failed: ${message}`);
    process.exit(1);
  }
}

console.log('🧪 Starting Video Edit Skill Test Suite...');

// 1. Verify prohibited governance files do NOT exist
const prohibitedFiles = ['CONTRIBUTING.md', 'CODE_OF_CONDUCT.md'];
for (const file of prohibitedFiles) {
  const filePath = path.join(__dirname, file);
  assert(!fs.existsSync(filePath), `Prohibited file ${file} must NOT exist`);
}
console.log('✓ No prohibited governance files exist');

// 2. Verify LICENSE
const licensePath = path.join(__dirname, 'LICENSE');
assert(fs.existsSync(licensePath), 'LICENSE file must exist');
const licenseContent = fs.readFileSync(licensePath, 'utf8');
assert(licenseContent.includes('Copyright (c) 2026 Abdullah Formuli'), 'LICENSE must attribute Abdullah Formuli (2026)');
console.log('✓ LICENSE is valid and attributed to Abdullah Formuli');

// 3. Verify MAINTAINERS.md
const maintainersPath = path.join(__dirname, 'MAINTAINERS.md');
assert(fs.existsSync(maintainersPath), 'MAINTAINERS.md must exist');
const maintainersContent = fs.readFileSync(maintainersPath, 'utf8');
assert(maintainersContent.includes('Maintained solely by Abdullah Formuli. No external contributions accepted.'), 'MAINTAINERS.md must specify sole maintainer status');
assert(maintainersContent.includes('authrainmedia@gmail.com'), 'MAINTAINERS.md must contain contact email');
console.log('✓ MAINTAINERS.md is valid with sole maintainer policy');

// 4. Verify CITATION.cff
const citationPath = path.join(__dirname, 'CITATION.cff');
assert(fs.existsSync(citationPath), 'CITATION.cff must exist');
const citationContent = fs.readFileSync(citationPath, 'utf8');
assert(citationContent.includes('Abdullah'), 'CITATION.cff must list Abdullah Formuli');
assert(citationContent.includes('https://github.com/authrain-cloud-abdullahformuli/video-edit-skill'), 'CITATION.cff must point to destination repository');
console.log('✓ CITATION.cff is valid');

// 5. Verify package.json
const packageJsonPath = path.join(__dirname, 'package.json');
assert(fs.existsSync(packageJsonPath), 'package.json must exist');
const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
assert(pkg.author === 'Abdullah Formuli <authrainmedia@gmail.com>', 'package.json author must be Abdullah Formuli');
assert(pkg.repository.url.includes('authrain-cloud-abdullahformuli/video-edit-skill'), 'package.json repo must match destination');
assert(pkg.license === 'MIT', 'package.json license must be MIT');
console.log('✓ Root package.json is valid');

// 6. Verify SKILL.md
const skillMdPath = path.join(__dirname, 'SKILL.md');
assert(fs.existsSync(skillMdPath), 'SKILL.md must exist');
const skillContent = fs.readFileSync(skillMdPath, 'utf8');
assert(skillContent.startsWith('---'), 'SKILL.md must start with YAML frontmatter');
assert(skillContent.includes('name: video-edit'), 'SKILL.md must specify name: video-edit');
assert(skillContent.includes('description:'), 'SKILL.md must specify description in frontmatter');
console.log('✓ SKILL.md frontmatter is valid');

// 7. Verify Python scripts syntax
const pythonScripts = [
  'scripts/setup.py',
  'scripts/skillenv.py',
  'scripts/ingest.py',
  'scripts/transcribe_cut.py',
  'scripts/headpos.py',
  'scripts/cutout.py',
  'scripts/assemble.py',
  'scripts/check_cuts.py',
  'scripts/hf.py',
  'tests/test_platform.py',
  'assets/template/build.py',
  'assets/overlay-examples/claude-desktop/build.py',
  'assets/overlay-examples/skill-md/build.py'
];
for (const script of pythonScripts) {
  const fullPath = path.join(__dirname, script);
  assert(fs.existsSync(fullPath), `Script ${script} must exist`);
  execSync(`python3 -m py_compile "${fullPath}"`);
}
// Clean pycache
execSync('find . -name "__pycache__" -exec rm -rf {} +');
console.log(`✓ All ${pythonScripts.length} Python scripts compile cleanly`);

// 8. Verify README.md
const readmePath = path.join(__dirname, 'README.md');
assert(fs.existsSync(readmePath), 'README.md must exist');
const readmeContent = fs.readFileSync(readmePath, 'utf8');
assert(readmeContent.includes('Maintained solely by Abdullah Formuli. No external contributions accepted.'), 'README.md must specify sole maintainer notice');
assert(readmeContent.includes('authrain-cloud-abdullahformuli/video-edit-skill'), 'README.md must point to target repository');
console.log('✓ README.md is valid');

// 9. Verify no upstream strings
const filesToCheck = [
  'README.md',
  'SKILL.md',
  'WINDOWS_TEST.md',
  'LICENSE',
  'MAINTAINERS.md',
  'CITATION.cff',
  'package.json'
];
for (const file of filesToCheck) {
  const text = fs.readFileSync(path.join(__dirname, file), 'utf8');
  assert(!text.includes('tenfoldmarc'), `${file} should not contain 'tenfoldmarc'`);
}
console.log('✓ Upstream attribution strings scrubbed cleanly');

console.log('🎉 All video-edit-skill tests passed successfully!');
