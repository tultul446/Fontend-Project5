
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/Navbar'




import DrinkPage from './components/Drink/DrinkPage.jsx';
import HomePage from './components/HomePage/Index.jsx';
import ClubPage from './components/ClubPage/Club.jsx'
import Payment from './components/PayModel/Payment.jsx';
import Contact from './components/ContactPage/Contact.jsx';
import { Warper } from './components/common/Warper.jsx';

const App =() => {
 

  return (
    <>
   
    <Router> 

 
 

 <Routes>
   <Route path='/' element= {<Warper> <HomePage/> </Warper>  }></Route> 
  
   <Route path='/Drink' element={<Warper> <DrinkPage/> </Warper> } />
   <Route path='/ClubPage' element={<Warper isDark>  <ClubPage/> </Warper> } />
   <Route path='/PayModel' element={ <Warper>  < Payment/> </Warper> } ></Route>
   <Route path='/Contact' element={<Warper>  <Contact/> </Warper> }></Route>
</Routes>

 </Router>

  
 
    </>
  )
}

export default App;
