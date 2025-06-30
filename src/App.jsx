import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Login from "./Pages/Login"
import Header from "./assets/Components/Header"
import HeaderColor from "./assets/Components/HeaderColor"
import Lessons from "./Pages/Lessons"
import Videos from "./Pages/Videos"

import Footer from "./assets/Components/Footer"
import QuizStart from "./Pages/QuizStart"
import Game from "./Pages/Game"
import General from "./Pages/General"
import Ielts from "./Pages/Ielts"
import Kid from './Pages/Kid'
import LessonBooking from "./Pages/LessonBooking"
import Altheader from "./assets/Components/Altheader"
function App() {
  
  return (
    <>
    <HeaderColor/>
    <Altheader/>
      <Routes>
           <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
             <Route path="/contact" element={<Contact/>}/>
             
              <Route path="/lessons" element={<Lessons/>}>
                   <Route path="general" element={<General/>}/>
                    <Route path="ielts" element={<Ielts/>}/>
                      <Route path="kid" element={<Kid/>}/>
                      
              </Route>
              
              <Route path="/videos" element={<Videos/>}/>
              <Route path="/quiz" element={<QuizStart/>}/>
               <Route path="/game" element={<Game/>}/>
                <Route path="/lessonbooking" element={<LessonBooking/>}/>
      </Routes>
   <Footer/>
    </>
  )
}

export default App
