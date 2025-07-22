#!/usr/bin/env node

import chalk from 'chalk'
import { execa } from 'execa'
import inquirer from 'inquirer'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const projects = [
  {
    name: 'website',
    value: 'website',
    description: 'GDG Website',
  },
  {
    name: 'mac-a-thon',
    value: 'mac-a-thon',
    description: 'MacAThon Website',
  },
]

const actions = [
  {
    name: 'dev - Start development server',
    value: 'dev',
  },
  {
    name: 'install packages - Install/update dependencies',
    value: 'install',
  },
  {
    name: 'sync secrets - Sync project secrets',
    value: 'secrets',
  },
]

async function runAction(project, action) {
  const projectPath = join(__dirname, '..', 'apps', project)

  try {
    switch (action) {
      case 'dev':
        console.log(chalk.blue(`Starting development server for ${project}...`))
        await execa('pnpm', ['dev'], {
          cwd: projectPath,
          stdio: 'inherit',
        })
        break

      case 'install':
        console.log(chalk.blue(`Installing packages for ${project}...`))
        await execa('pnpm', ['install'], {
          cwd: projectPath,
          stdio: 'inherit',
        })
        break

      case 'secrets':
        console.log(chalk.blue(`Syncing secrets for ${project}...`))
        // Add your secrets sync logic here
        break
    }
  } catch (error) {
    console.error(chalk.red(`Error: ${error.message}`))
    process.exit(1)
  }
}

async function main() {
  console.log(chalk.green.bold('🐸 Welcome to Frog Script!\n'))

  const { project } = await inquirer.prompt([
    {
      type: 'list',
      name: 'project',
      message: 'Select a project:',
      choices: projects.map((p) => ({
        name: `${p.name} ${chalk.dim(`- ${p.description}`)}`,
        value: p.value,
      })),
    },
  ])

  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: `Select an action for ${chalk.cyan(project)}:`,
      choices: actions,
    },
  ])

  await runAction(project, action)
}

main().catch((error) => {
  console.error(chalk.red(`Error: ${error.message}`))
  process.exit(1)
})
