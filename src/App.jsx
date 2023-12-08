import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error from './components/Error/Error'
import  "./services/firebase"
import CartContextProvider from './components/context/CartContext'
import CartList from './components/CartWidget/CartList'
import Chekin from './components/Chekin/Chekin'

function App() {
  return (
    <div>
    <BrowserRouter>
     <CartContextProvider>
       <NavBar/>
       <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenidos a TechnoHouse'/>}/>
          <Route path='/cart' element={<CartList />} />
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/chekin' element={<Chekin/>}/>
          <Route path='*' element={<Error/>}/>
       </Routes>
     </CartContextProvider>
    </BrowserRouter>
    </div>
  )
}

export default App