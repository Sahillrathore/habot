
// import { IoIosArrowDown } from "react-icons/io";

// const Navbar = () => {
//   return (
//     <div className='flex justify-between items-center p-3'>
//         <div>
//             <img src="/logo.png"  alt="Logo" />
//         </div>
//       <ul className="flex items-center justify-center gap-4">
//         <li><a href="">Find Suppliers</a></li>
//         <li ><a href="" className="flex items-center justify-center">Find Service Tags <span><IoIosArrowDown/></span></a></li>
//         <li><button type="button" class="btn btn-outline-success">Login/Signup</button></li>
//       </ul>
//     </div>
//   )
// }

// export default Navbar
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-white">
      <div className="w-full mx-auto sm:px-16 px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Find Suppliers
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1"
            >
              Find Service Tags 
              <IoIosArrowDown className="text-lg" />
            </a>
            <button 
              type="button" 
              className="px-4 py-2 border-2 border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition-colors"
            >
              Login/Signup
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <HiX className="block h-6 w-6" />
              ) : (
                <HiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
          <a
            href=""
            className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
          >
            Find Suppliers
          </a>
          <a
            href=""
            className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
          >
            <div className="flex items-center justify-between">
              <span>Find Service Tags</span>
              <IoIosArrowDown className="text-lg" />
            </div>
          </a>
          <div className="px-3 py-2">
            <button
              type="button"
              className="w-full px-4 py-2 border-2 border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition-colors"
            >
              Login/Signup
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;