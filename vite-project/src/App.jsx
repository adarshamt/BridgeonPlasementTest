
import './App.css'
import Products from './Products'
import { Routes,Route } from "react-router-dom"
import { ViewProduct } from './ViewProduct'
import Search from './Search'



function App() {
 

  return (
    <>
    <Routes>

   <Route path='/' element={<Products/>} />
   <Route path='/viewproduct/:id' element={<ViewProduct/>} />
   <Route path='/search/:id' element={<Search/>} />


    </Routes>
    
    

     

     
    </>
  )
}

export default App
