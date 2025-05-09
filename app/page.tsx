import Image from "next/image";
import Body from "./components/body";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-8 py-3 bg-white bg-opacity-50 ">
          {/* Logo and site name */}
          <div className="flex items-center">
            <span className="text-yellow-500 font-bold text-xl">Rajendra ©</span>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-black cursor-pointer hover:text-yellow-400 transition-colors">Home</a>
            <a href="#" className="text-black cursor-pointer hover:text-yellow-400 transition-colors">Portfolio</a>
            <a href="#" className="text-black cursor-pointer hover:text-yellow-400 transition-colors">About</a>
            <a href="#" className="text-black cursor-pointer hover:text-yellow-400 transition-colors">Contact</a>
          </nav>
          
          {/* Mobile menu button - could be expanded with actual mobile menu functionality */}
          <div className="md:hidden">
            <button className="text-black cursor-pointer">Menu</button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main>
        <Body />
      </main>
    </>
  );
}