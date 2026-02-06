import React from "react";

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-10 bg-[#222] z-50">

      
      <div className="text-white text-[22px] font-bold">
        MySite
      </div>

      
      <ul className="flex gap-6 list-none">
        <li>
          <a href="#home" className="text-white text-base hover:text-cyan-400 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-white text-base hover:text-cyan-400 transition">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="text-white text-base hover:text-cyan-400 transition">
            Services
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white text-base hover:text-cyan-400 transition">
            Contact
          </a>
          
        </li>
        <li>
          <a href="#counter" className="text-white text-base hover:text-cyan-400 transition">
            Counter
          </a>

        </li>
      </ul>

    </nav>
  );
}

export default NavBar;
