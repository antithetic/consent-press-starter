# Consent Press Starter

A modern, opinionated starter template for building consent management applications with Astro.

## 🚀 Features

- ⚡️ Built with [Astro](https://astro.build)
- 🎨 Styled with [Tailwind CSS](https://tailwindcss.com)
- 📝 TypeScript support
- 🧩 Component-based architecture
- 📦 Package management with pnpm
- 🛠️ Development tools (ESLint, Prettier)

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

For detailed information about the project structure, see [Project Structure Documentation](./docs/project-structure.md).

## 🧞 Commands

All commands are run from the root of the project:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm format`          | Format code with Prettier                        |
| `pnpm lint`            | Lint code with ESLint                           |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📚 Documentation

- [Project Structure](./docs/project-structure.md)
- [Git Branch Management](./docs/git-branch-management.md)

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

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```sh
pnpm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
