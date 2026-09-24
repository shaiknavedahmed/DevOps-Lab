import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Cart from "./pages/Cart";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart((currentCart) => [...currentCart, book]);
  };

  const removeFromCart = (index) => {
    setCart((currentCart) =>
      currentCart.filter((_, i) => i !== index)
    );
  };

  return (
    <BrowserRouter>
      <nav>
        <h2>📚 Online Book Store</h2>

        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/books">Books</NavLink>

          <NavLink to="/cart">
            Cart
            {cart.length > 0 && (
              <span className="cart-badge">{cart.length}</span>
            )}
          </NavLink>

          <NavLink to="/about">About</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/books"
          element={<Books />}
        />

        <Route
          path="/books/:id"
          element={<BookDetails onAddToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onRemove={removeFromCart}
            />
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;