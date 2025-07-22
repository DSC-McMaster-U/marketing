#!/usr/bin/env node

import chalk from 'chalk'
import { execa } from 'execa'
import { promises as fs } from 'fs'
import { platform } from 'os'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function setupUnix() {
  const binPath = '/usr/local/bin/f'
  const scriptPath = join(__dirname, 'frog.mjs')

  try {
    // Make the script executable
    await fs.chmod(scriptPath, '755')

    // Create symlink
    await execa('sudo', ['ln', '-sf', scriptPath, binPath])
    console.log(chalk.green('✓ Created symlink in /usr/local/bin'))
  } catch (error) {
    console.error(
      chalk.red(`Error setting up Unix environment: ${error.message}`),
    )
    process.exit(1)
  }
}

async function setupWindows() {
  const scriptPath = join(__dirname, 'frog.mjs')
  const command = `
    $scriptPath = '${scriptPath.replace(/\\/g, '\\\\')}'
    $content = "function f { node '$scriptPath' $args }"
    if (!(Test-Path $PROFILE)) {
      New-Item -Path $PROFILE -Type File -Force
    }
    Add-Content -Path $PROFILE -Value $content -Force
  `

  try {
    await execa('powershell', ['-Command', command])
    console.log(chalk.green('✓ Added command to PowerShell profile'))
  } catch (error) {
    console.error(
      chalk.red(`Error setting up Windows environment: ${error.message}`),
    )
    process.exit(1)
  }
}

async function main() {
  console.log(chalk.blue('Setting up Frog Script...'))

  const os = platform()
  if (os === 'win32') {
    await setupWindows()
  } else {
    await setupUnix()
  }

  console.log(
    chalk.green.bold(
      '\n🐸 Setup complete! You can now use the "f" command in your terminal.',
    ),
  )
  console.log(
    chalk.dim(
      'Note: You may need to restart your terminal for changes to take effect.',
    ),
  )
}

main().catch((error) => {
  console.error(chalk.red(`Error: ${error.message}`))
  process.exit(1)
})
