import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="w-full bg-background text-title py-6 px-6 border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-center w-full">
          Library App using React + Vite + Tailwind CSS
        </h1>
        <div className="absolute right-6">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
