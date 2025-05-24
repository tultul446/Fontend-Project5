import { useState } from "react";
import { Menu, X } from "lucide-react";
import BasicModal from "./HomePage/Model";
import { NavLink } from "react-router";
import { themeColor } from "../lib/db";

 const MobileMenu = ({isDark} ) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
  <section >
    <div >

    
      <div className=" md:hidden  max-w-7xl mx-auto px-2  flex items-center  mb-5 ml-[19rem] sm:ml-[34rem]">
        {/* Logo */}
        
       
        {/* Hamburger Menu Button */}
        <div className="md:hidden -mt-25 mr-4 ">
          <button onClick={toggleMenu}  className={themeColor(isDark)}>
            {menuOpen ? <X size={35} /> : <Menu size={39} />}
          </button>
        </div>

       
       
      </div>
          
      {/* Mobile Menu */}
     
      {menuOpen && (
     <div className="md:hidden bg-gray-600 shadow-lg  space-y-4 ml-3 mr-3 px-7 py-4">
       
          <ul className='space-y-4'>
           
              <NavLink to="/Drink"  style={({ isActive }) => ({
    color: isActive ? "blue" : "#fff",
  })} >
              Eat & Drink
              </NavLink>
            


            <li className="hover:text-blue-500 text-gray-400">Events</li>
            <li className="hover:text-blue-500">
          <NavLink 
               to="/ClubPage"  style={({ isActive }) => ({
              color: isActive ? "blue" : "#fff",
           })}>
              Club
        </NavLink>
              </li>

         <li className="text-xl cursor-pointer text-gray-400 ">
              <NavLink to="/PayModel"  style={({ isActive }) => ({
           color: isActive ? "blue" : "gray",
         })} >
            🛒
           </NavLink> 
            </li>

            <li className="hover:text-blue-500 text-gray-400">Things to do</li>
            <nav className="hover:text-blue-500 text-gray-400"> <div className="ml-auto">
            <BasicModal/>
          </div></nav>
         </ul>
         <div className="w-full h-[2px] bg-gray-400"></div>
         <ul className="space-y-3">
            <li className="hover:text-blue-500 text-gray-400">My Profile</li>
            <li className="hover:text-blue-500 text-gray-400">Pay With Crypto</li>
            <li className="hover:text-blue-500 text-gray-400">Cart</li>
            
            <li className="hover:text-blue-500 text-gray-400">Contact Us</li>
            <li className="hover:text-blue-500 text-gray-400">Log Out</li>
          </ul>
          <NavLink to="/PayModel"  style={({ isActive }) => ({
           color: isActive ? "blue" : "black",
         })} >
          <button className="mt-4 bg-blue-500 text-white w-[198px] py-2 rounded hover:bg-blue-600 mb-5 ml-3">
            Get Started
          </button></NavLink>
        </div>
 
      )}







<div/>
</div>
    </section>
  );
}

export default MobileMenu;