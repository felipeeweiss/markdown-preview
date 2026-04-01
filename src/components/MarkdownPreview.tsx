import { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface Props {
  source: string
}

class MarkdownPreview extends Component<Props> {
  render() {
    const { source } = this.props

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
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
            Preview
          </span>
        </div>
        <div className="flex-1 overflow-y-auto bg-white p-6 dark:bg-zinc-900">
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{source}</ReactMarkdown>
          </div>
        </div>
      </div>
    )
  }
}

export default MarkdownPreview
