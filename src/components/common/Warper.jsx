import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { themeColor } from '../../lib/db'
export  const Warper = ({children, isDark}) => {
  return (
    <div className={themeColor(isDark)}>
      <Navbar isDark={isDark}/>
      {children}
      <Footer isDark={isDark}/>
    </div>
  )
}

 
