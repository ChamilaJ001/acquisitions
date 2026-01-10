#!/usr/bin/env node

import { execSync } from 'child_process';
import { platform } from 'os';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isWindows = platform() === 'win32';

if (isWindows) {
  // Run PowerShell script on Windows
  execSync('powershell -ExecutionPolicy Bypass -File ./scripts/dev.ps1', {
    stdio: 'inherit',
    cwd: process.cwd(),
  });
} else {
  // Run bash script on Unix-like systems
  execSync('sh ./scripts/dev.sh', {
    stdio: 'inherit',
    cwd: process.cwd(),
  });
}
