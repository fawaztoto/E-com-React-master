import Nav from "./components/nav";
import Home from "./pages/home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Books from "./pages/books";
import { books } from './data'
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import React , {useState , useEffect} from "react";



function App() {
  const [cart, setCart] = useState([]);


  function addtoCart(book){

    setCart([...cart,{...book, quantity : 1}])

  }

  function changequantity(book ,quantity){

    setCart(cart.map(item => {

     if  (item.id ===book.id){

      return {
        ...item,
        quantity: +quantity,
      }
     }
     else{

      return item
     }
    }))


  }
  function numberofItems() {

    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })

    return counter
  }

  
  function removeItem(item){
    setCart(cart.filter(book => book.id !== item.id))
        
    }
 
  
  
  useEffect(() => {
    console.log(cart)
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav  numberofItems={numberofItems()}/>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/books'  element={<Books books={books} />} />
          <Route path='/books/:id' element={<BookInfo books={books} addtoCart={addtoCart}/>} /> 
          <Route path='/cart/' element={<Cart books={books} cart={cart} changequantity={changequantity} removeitem={removeItem}/>} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



