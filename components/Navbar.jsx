import {useTheme} from 'next-themes'
import Link from 'next/link'

function Moon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  )
}

function Sun() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  )
}

export default function Navbar() {
  const {theme, setTheme} = useTheme()

  return (
    <header className="bg-teal-500">
      <div className="flex justify-between items-center md:w-11/12 mx-auto">
        <div className="px-3 py-2">
          <Link href="/">
            <a className="text-lg font-bold text-white">FiZipcode</a>
          </Link>
        </div>
        <div className="text-right px-3 py-2">
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-1 border hover:bg-teal-600 dark:hover:bg-teal-900 duration-300 rounded-lg text-white"
          >
            {theme === 'light' ? <Moon /> : <Sun />}
          </button>
        </div>
      </div>
    </header>
  )
}
