import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { About } from "./pages/About/about";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import {Footer } from "./pages/Footer/footer"

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop/>} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </Router>
      </ShopContextProvider>
      
      <Footer/>
    </div>
  );
}

export default App;
