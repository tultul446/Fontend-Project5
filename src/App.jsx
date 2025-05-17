
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/Navbar'




import DrinkPage from './components/Drink/DrinkPage.jsx';
import HomePage from './components/HomePage/Index.jsx';
import ClubPage from './components/ClubPage/Club.jsx'


import Footer from './components/Footer'
function App() {
 

  return (
    <>
   
    <Router> 
 <Navbar/> 
 
 

 <Routes>
   <Route path='/' element= {  <HomePage/> }></Route> 
  
   <Route path='/Drink' element={ <DrinkPage/> } />
   <Route path='/ClubPage' element={ <ClubPage/> } />
</Routes>
 <Footer/> 
 </Router>

  
 
    </>
  )
}

export default App
