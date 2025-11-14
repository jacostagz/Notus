export default function Navbar() {
  return (
    <header className="w-full bg-black fixed top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center py-5 px-6">

        {/* Logo */}
        <div className="flex-1 flex items-center">
          <a href="/">
            <img src="/Logo.png" alt="Logo Notus" className="h-10 ml-26 mb-1" />
          </a>
        </div>

        {/* Menú */}
        <div className="hidden md:flex gap-12 text-white text-xs font-black">
          <a href="#" className="hover:text-gray-300 transition">Chevrolet</a>
          <a href="#" className="hover:text-gray-300 transition">Renault</a>
          <a href="#" className="hover:text-gray-300 transition">Toyota</a>
          <a href="#" className="hover:text-gray-300 transition">Mazda</a>
          <a href="#" className="hover:text-gray-300 transition">Kia</a>
          <a href="#" className="hover:text-gray-300 transition">Ford</a>
          <a href="#" className="hover:text-gray-300 transition">Hyundai</a>
          <a href="#" className="hover:text-gray-300 transition">Suzuki</a>
          <a href="#" className="hover:text-gray-300 transition">Volkswagen</a>
        </div>

        {/* Íconos */}
        <div className="flex-1 flex items-center justify-start gap-9 text-white ml-11">

          {/* Home */}
          <button aria-label="Home" className="hover:text-gray-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[1.125rem] h-[1.125rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4.5 9.75v10.5h15v-10.5" />
            </svg>
          </button>

          {/* Usuario */}
          <button aria-label="Usuario" className="hover:text-gray-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 21v-1.5a6 6 0 016-6h3a6 6 0 016 6V21" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
