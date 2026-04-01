import { Component } from 'react'
import MarkdownEditor from './components/MarkdownEditor'
import MarkdownPreview from './components/MarkdownPreview'
import './index.css'

const INITIAL_MARKDOWN = `# Welcome to Markdown Preview

This is a **real-time Markdown** editor.

## Features

- Edit the text on the left
- See the updated preview on the right
- Support for [GFM](https://github.github.com/gfm/) (GitHub Flavored Markdown)

## Examples

### Code

\`\`\`typescript
function greet(name: string): string {
  return \`Hello, \${name}!\`
}
\`\`\`

### Table

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Value A  | Value B  | Value C  |
| Value D  | Value E  | Value F  |

### Blockquote

> "Simplicity is the ultimate sophistication."
> — Leonardo da Vinci

---

*Start editing above to see changes in real time!*
`

interface State {
  markdown: string
  isDark: boolean
}

class App extends Component<object, State> {
  state: State = {
    markdown: INITIAL_MARKDOWN,
    isDark: this.getInitialTheme(),
  }

  getInitialTheme(): boolean {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  componentDidMount() {
    this.applyTheme(this.state.isDark)
  }

  applyTheme(isDark: boolean) {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  handleChange = (value: string) => {
    this.setState({ markdown: value })
  }

  handleThemeToggle = () => {
    this.setState(
      (prev) => ({ isDark: !prev.isDark }),
      () => this.applyTheme(this.state.isDark),
    )
  }

  render() {
    const { markdown, isDark } = this.state

    return (
      <div className="flex h-full flex-col bg-zinc-100 dark:bg-zinc-950">
        <header className="flex items-center justify-between border-b border-zinc-200 bg-white px-6 py-3 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-violet-600 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h1 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              Markdown Preview
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full bg-violet-100 px-3 py-0.5 text-xs font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
              Live Preview
            </span>

            <button
              onClick={this.handleThemeToggle}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
            >
              {isDark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>
          </div>
        </header>

        <main className="flex min-h-0 flex-1 gap-px bg-zinc-200 dark:bg-zinc-700">
          <section className="flex min-h-0 w-1/2 flex-col overflow-hidden rounded-none bg-white dark:bg-zinc-900">
            <MarkdownEditor value={markdown} onChange={this.handleChange} />
          </section>

          <section className="flex min-h-0 w-1/2 flex-col overflow-hidden rounded-none bg-white dark:bg-zinc-900">
            <MarkdownPreview source={markdown} />
          </section>
        </main>
      </div>
    )
  }
}

export default App
