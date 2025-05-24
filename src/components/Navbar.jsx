// Navbar.jsx
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import BasicModal from "./HomePage/Model";
import { NavLink } from "react-router";
import { themeColor } from "../lib/db";
 const Navbar = ({ isDark }) => {
 ;
 
 

  const [thingsToDoOpen, setThingsToDoOpen] = useState(false);
 

  return (
    <nav  className="bg-white shadow-md">
      <div  className={ themeColor(isDark) } >
      <div className="w-[200px] md:w-[680px]  lg:w-[1240px] xl:max-w-7xl md:mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold ">
          <NavLink to="/">
          <img src="./Group1.png" alt="" />
          </NavLink>
          </div>
     
      
         <div className="md:w-[600px] lg:w-[769px] lg:ml-9">
        {/* Menu  */}
        <ul className="hidden lg:flex ml-25 md:space-x-3.5 lg:space-x-9 items-center font-semibold">
          <li className="cursor-pointer text-[#606a7d] hover:text-blue-500">
            <NavLink to="/Drink"   style={({ isActive }) => ({
    color: isActive ? "blue" : "",
  })}>
            Eat & Drink
            </NavLink>
            
            </li>
          <li className="cursor-pointer hover:text-blue-500 text-[#26395C]">
            <img src="./Frame.png" alt="" className="w-[19px] ml-6 -mb-2"/>
          <NavLink to="/ClubPage"  style={({ isActive }) => ({
    color: isActive ? "blue" : "black",
  })} >

            Club
            
            </NavLink>
            
            
            </li>

          {/* Dropdown: Things to do */}
          <li
            className="relative"
            onMouseEnter={() => setThingsToDoOpen(true)}
             onMouseLeave={() => setThingsToDoOpen(false)}
          >
            <span className="cursor-pointer text-[20px]hover:text-blue-500 text-[#26395C] text-semibold">Things to do</span>
             {thingsToDoOpen && (
              <ul className="absolute bg-gray-50 shadow-lg mt-2 py-2 w-40 z-10 text-[#97a3b8]" >
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Water Sports</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Day Parties</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Outdoors</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Retreat</li>
              </ul>
            )} 
          </li>

          {/* Cart Icon */}
          <li className="text-xl cursor-pointer text-[#26395C] ">
              <NavLink to="/PayModel"  style={({ isActive }) => ({
    color: isActive ? "blue" : "black",
  })} >
            🛒
           </NavLink> 
            </li>

          {/* Dropdown: Account */}
         <li >
           <BasicModal/>
         </li>
          {/* Contact Button */}
          
      </ul>
        </div>
             <NavLink to="/Contact"  style={({ isActive }) => ({
    color: isActive ? "blue" : "black",
  })} >
        <button className="bg-blue-500 md:block hidden text-white px-4 py-2 rounded hover:bg-blue-600">
              Contact Now
            </button>

     
</NavLink>


      </div>
      

      <div>
        <MobileMenu/>
      </div>



</div>

    </nav>
  );
}
export default Navbar;