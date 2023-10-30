
import './App.css'
import Products from './Products'
import { Routes,Route } from "react-router-dom"
import { ViewProduct } from './ViewProduct'



function App() {
 

  return (
    <>
    <Routes>

   <Route path='/' element={<Products/>} />
   <Route path='/viewproduct/:id' element={<ViewProduct/>} />


    </Routes>
    
    

     

     
    </>
  )
}

export default App
