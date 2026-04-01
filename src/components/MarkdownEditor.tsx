import { Component } from 'react'

interface Props {
  value: string
  onChange: (value: string) => void
}

class MarkdownEditor extends Component<Props> {
  render() {
    const { value, onChange } = this.props

    return (
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-2 border-b border-zinc-200 bg-zinc-50 px-4 py-2 dark:border-zinc-700 dark:bg-zinc-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-zinc-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
          <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
            Editor
          </span>
        </div>
        <textarea
          className="flex-1 resize-none bg-white p-4 font-mono text-sm leading-relaxed text-zinc-800 outline-none placeholder:text-zinc-400 dark:bg-zinc-900 dark:text-zinc-200 dark:placeholder:text-zinc-600"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type your Markdown here..."
          spellCheck={false}
        />
      </div>
    )
  }
}

export default MarkdownEditor
