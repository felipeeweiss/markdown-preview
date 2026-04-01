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
}

class App extends Component<object, State> {
  state: State = {
    markdown: INITIAL_MARKDOWN,
  }

  handleChange = (value: string) => {
    this.setState({ markdown: value })
  }

  render() {
    const { markdown } = this.state

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
          <span className="rounded-full bg-violet-100 px-3 py-0.5 text-xs font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
            Live Preview
          </span>
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
