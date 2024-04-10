import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-gray-300">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <a href="#"><Image src="/images/icon.svg" height={80} width={80} /></a>
          </div>"
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li><a href="#" className="text-black">Home</a></li>
              <li><a href="#" className="text-black">About</a></li>
              <li><a href="#" className="text-black">Services</a></li>
              <li><a href="#" className="text-black">Contact</a></li>
            </ul>
          </div>
          <div className="md:hidden">
            <button className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-white" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="mobile-menu hidden md:hidden">
          <ul className="mt-4 space-y-4">
            <li><a href="#" className="block px-4 py-2 text-black rounded">Home</a></li>
            <li><a href="#" className="block px-4 py-2 text-black rounded">About</a></li>
            <li><a href="#" className="block px-4 py-2 text-black rounded">Services</a></li>
            <li><a href="#" className="block px-4 py-2 text-black rounded">Contact</a></li>

          </ul>
        </div>

      </nav>
    </header>
  )
}