---
title: Project Structure
description: Comprehensive guide to the project's directory structure and organization
---

# Project Structure

This document outlines the organization of the project's source code.

## Directory Structure

```
src/
├── assets/         # Static assets (images, fonts, etc.)
├── components/     # Reusable UI components
├── content/        # Content files (markdown, JSON, etc.)
├── layouts/        # Page layout components
├── pages/          # Page components
├── styles/         # Global styles and CSS
└── utils/          # Utility functions and helpers
```

## Directory Descriptions

### `assets/`

- Contains static assets used throughout the application
- Images, icons, fonts, and other media files
- Files that don't require processing or transformation

### `components/`

- Reusable UI components
- Each component should be self-contained
- Follow the component naming convention: `ComponentName.astro`
- Can include subdirectories for component categories

### `content/`

- Content files in various formats (markdown, JSON, etc.)
- Blog posts, documentation, or other content
- Used with Astro's content collections

### `layouts/`

- Page layout components
- Defines the structure of different page types
- Includes common elements like headers, footers, and navigation

### `pages/`

- Page components that represent routes
- Each file corresponds to a route in the application
- Follows Astro's file-based routing

### `styles/`

- Global styles and CSS
- Theme configuration
- CSS variables and utility classes

### `utils/`

- Utility functions and helpers
- Shared logic that can be used across components
- Type definitions and constants
