# Markdown Preview

A real-time Markdown editor and preview built with React (Class Components), TypeScript, TailwindCSS, and Vite.

The interface is split into two panels: a **Markdown editor** on the left and a **live preview** on the right, updated as you type.

## Tech Stack

- [React 19](https://react.dev/) — Class Components
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS v4](https://tailwindcss.com/)
- [Vite](https://vite.dev/)
- [react-markdown](https://github.com/remarkjs/react-markdown) + [remark-gfm](https://github.com/remarkjs/remark-gfm) — Markdown parsing with GFM support
- [Prettier](https://prettier.io/) + [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) — code formatting

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm 9 or later (comes with Node.js)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/markdown-preview.git
cd markdown-preview
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Starts the local development server with HMR |
| `npm run build` | Type-checks and builds the app for production into `dist/` |
| `npm run preview` | Serves the production build locally for inspection |
| `npm run lint` | Runs ESLint across the project |
| `npm run format` | Formats all files with Prettier |
| `npm run format:check` | Checks if all files are properly formatted |

## Project Structure

```
src/
├── components/
│   ├── MarkdownEditor.tsx   # Textarea panel (left side)
│   └── MarkdownPreview.tsx  # Rendered HTML panel (right side)
├── App.tsx                  # Root Class Component — holds editor state
├── index.css                # Tailwind imports and base styles
└── main.tsx                 # React DOM entry point
```
