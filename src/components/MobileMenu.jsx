import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
  <>
      <div className=" md:hidden  max-w-7xl mx-auto px-2  flex items-center justify-between mb-5">
        {/* Logo */}
        <img src="./Group.png" alt="" className="-ml-6 "/>

        {/* Hamburger Menu Button */}
        <div className="md:hidden -mt-25 mr-4">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={35} /> : <Menu size={39} />}
          </button>
        </div>

       
       
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg  space-y-4 ml-3">
          <ul className="space-y-3">
            <li className="hover:text-blue-500">Eat & Drink</li>
            <li className="hover:text-blue-500">Events</li>
            <li className="hover:text-blue-500">Club</li>
            <li className="hover:text-blue-500">Things to do</li>
            <li className="hover:text-blue-500">Account</li>
         </ul>
         <div className="w-full h-[2px] bg-gray-400"></div>
         <ul className="space-y-3">
            <li className="hover:text-blue-500">My Profile</li>
            <li className="hover:text-blue-500">Pay With Crypto</li>
            <li className="hover:text-blue-500">Cart</li>
            <li className="hover:text-blue-500">Contact Us</li>
            <li className="hover:text-blue-500">Log Out</li>
          </ul>
          <button className="mt-4 bg-blue-500 text-white w-[198px] py-2 rounded hover:bg-blue-600 mb-5 ml-3">
            Get Started
          </button>
        </div>
      )}
    </>
  );
}