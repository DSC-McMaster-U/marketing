# GDG on Campus McMaster University Marketing Monorepo

Welcome to the GDG on Campus McMaster University Marketing monorepo! This repository contains all the web applications and shared packages for GDG on Campus McMaster University's online presence. 👋

## Table of Contents

- [Overview](#overview)
- [Monorepo Structure](#monorepo-structure)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Development Tools](#development-tools)
- [Apps Overview](#apps-overview)
- [Contributing](#contributing)

## Overview

This monorepo houses multiple web applications and shared packages for GDG on Campus McMaster University's online presence, built using modern web technologies and following best practices for maintainability and scalability.

## Monorepo Structure

The repository is organized into the following main directories:

```
gdg-marketing/
├── apps/              # Main applications
│   ├── mac-a-thon/    # Mac-a-thon Hackathon website
│   └── website/       # Main GDSC McMaster website
├── packages/          # Shared packages
│   ├── eslint-config/ # Shared ESLint configurations
│   ├── typescript-config/ # Shared TypeScript configs
│   └── ui/           # Shared UI components
└── scripts/          # Development scripts
    └── frog.mjs      # Custom development utilities
```

## Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content Management**: [Sanity CMS](https://www.sanity.io/)
- **Package Management**: [pnpm](https://pnpm.io/)
- **Monorepo Tools**: [Turborepo](https://turbo.build/)
- **Testing**: [Jest](https://jestjs.io/) with React Testing Library
- **CI/CD**: GitHub Actions
- **Code Quality**: ESLint, Prettier

## Getting Started

1. **Prerequisites**
   - Node.js (v18 or later)
   - pnpm (v8 or later)
   - Git

2. **Installation**

   ```bash
   # Clone the repository
   git clone https://github.com/DSC-McMaster-U/marketing.git
   cd marketing

   # Install dependencies
   pnpm install

   # Setup development environment
   pnpm run setup
   ```

3. **Development**

   ```bash
   # Run all apps in development mode
   pnpm run dev

   # Run a specific app
   pnpm run dev --filter=website
   # or
   pnpm run dev --filter=mac-a-thon
   ```

## Development Tools

### Frog Scripts

The repository includes custom development scripts (`frog.mjs`) to streamline common tasks:

```bash
# Create a new component
pnpm frog component MyComponent

# Create a new page
pnpm frog page my-page

# Generate types from Sanity schema
pnpm frog sanity-types
```

### Build Commands

```bash
# Build all apps and packages
pnpm run build

# Build specific app
pnpm run build --filter=website
```

## Apps Overview

### Main Website (`/apps/website`)

The primary GDG on Campus McMaster University website featuring:

- Event listings and registration
- Newsletter archives
- Team information
- Resources for students
- Integration with Sanity CMS
- Firebase hosting

### Mac-a-thon (`/apps/mac-a-thon`)

The annual hackathon website including:

- Event details and registration
- FAQ section
- Sponsor information
- Schedule and updates
- Dynamic content management via Sanity

## Contributing

1. Branch naming convention:

   ```
   feature/YOUR_TICKET_NAME
   ```

2. Development workflow:
   - Create a branch from `main`
   - Make your changes
   - Write tests
   - Create a pull request
   - Get review and approval
   - Merge to `main`

3. Testing:

   ```bash
   # Run all tests
   pnpm test

   # Run tests for specific app
   pnpm test --filter=website
   ```

For more detailed information about each application, please refer to their respective README files in the `apps` directory.
