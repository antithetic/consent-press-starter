# Consent Press Starter

A modern, opinionated starter template for building consent press websites and applications with Astro.

## 🚀 Features

- ⚡️ Built with [Astro](https://astro.build)
- 🎨 Styled with [Tailwind CSS](https://tailwindcss.com)
- 📝 TypeScript support
- 🧩 Component-based architecture
- 📦 Package management with pnpm
- 🛠️ Development tools (ESLint, Prettier)
- 🔍 SEO optimized with sitemap generation
- 📱 Responsive design
- 🎯 Icon system with multiple providers
- 📄 MDX support for enhanced content

## 📁 Project Structure

```text
/
├── public/         # Static files served as-is
├── src/            # Source code
│   ├── assets/     # Static assets (images, fonts, etc.)
│   ├── components/ # Reusable UI components
│   ├── content/    # Content files (markdown, JSON, etc.)
│   ├── layouts/    # Page layout components
│   ├── pages/      # Page components
│   ├── styles/     # Global styles and CSS
│   └── utils/      # Utility functions and helpers
├── docs/           # Project documentation
├── .astro/         # Astro configuration
└── .vscode/        # VS Code settings
```

For detailed information about the project structure, see [Project Structure Documentation](./src/content/docs/project-structure.md).

## 🧞 Commands

All commands are run from the root of the project:

| Command          | Action                                           |
| :--------------- | :----------------------------------------------- |
| `pnpm install`   | Installs dependencies                            |
| `pnpm dev`       | Starts local dev server at `localhost:4321`      |
| `pnpm build`     | Build your production site to `./dist/`          |
| `pnpm preview`   | Preview your build locally, before deploying     |
| `pnpm format`    | Format code with Prettier                        |
| `pnpm lint`      | Lint code with ESLint                            |
| `pnpm astro ...` | Run CLI commands like `astro add`, `astro check` |

## 🔌 Integrations

This project includes several powerful integrations:

- **@astrojs/mdx**: Enhanced markdown support with MDX
- **@astrojs/sitemap**: Automatic sitemap generation
- **@astrojs/vercel**: Vercel deployment adapter
- **astro-icon**: Flexible icon system
- **lucide-astro**: Lucide icon set integration
- **@tailwindcss/typography**: Enhanced typography with Tailwind

## 📚 Documentation

Our documentation is organized by use case and category. See the [Documentation Index](./src/content/docs/index.md) for a complete overview.

Key documentation sections:

- [Core Documentation](./src/content/docs/index.md#core-documentation)
- [Development Workflow](./src/content/docs/index.md#development-workflow)
- [Astro Integrations](./src/content/docs/index.md#astro-integrations)
- [Reference Guides](./src/content/docs/index.md#reference-guides)

## 🛠️ Development

### Prerequisites

- Node.js (v18 or later)
- pnpm (v8 or later)

### Getting Started

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Start the development server: `pnpm dev`
4. Open [http://localhost:4321](http://localhost:4321)

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

We welcome contributions! Please see our [Git Workflow](./src/content/docs/git-workflow.md) documentation for guidelines on how to contribute to this project.
