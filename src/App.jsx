import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Login from "./Pages/Login"
import Header from "./Components/Header"
import HeaderColor from "./Components/HeaderColor"
import Lessons from "./Pages/Lessons"
import Videos from "./Pages/Videos"
import Vocab from "./Pages/Vocab"
import Footer from "./Components/Footer"
import QuizStart from "./Pages/QuizStart"
import General from "./Pages/General"
import Ielts from "./Pages/Ielts"
import Kid from './Pages/Kid'

function App() {
  
  return (
    <>
    
      <Routes>
           <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
             <Route path="/contact" element={<Contact/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/lessons" element={<Lessons/>}>
                   <Route path="general" element={<General/>}/>
                    <Route path="ielts" element={<Ielts/>}/>
                      <Route path="kid" element={<Kid/>}/>
              </Route>
              <Route path="/vocab" element={<Vocab/>}/>
              <Route path="/videos" element={<Videos/>}/>
              <Route path="/quiz" element={<QuizStart/>}/>
      </Routes>
   <Footer/>
    </>
  )
}

export default App
