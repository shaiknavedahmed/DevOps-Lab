import { useState } from "react";

import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";
import FoodItem from "./components/FoodItem";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  const foods = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
    },
    {
      id: 2,
      name: "Cheese Burger",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },
    {
      id: 3,
      name: "Chicken Biryani",
      price: 220,
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0"
    },
    {
      id: 4,
      name: "French Fries",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877"
    }
  ];

  const addToCart = (food) => {
    const existingItem = cart.find((item) => item.id === food.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...food, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div>
      <Header />

      <main className="container">

        <RestaurantList />

        <section>
          <h2>🍽️ Food Menu</h2>

          <div className="food-list">
            {foods.map((food) => (
              <FoodItem
                key={food.id}
                food={food}
                addToCart={addToCart}
              />
            ))}
          </div>
        </section>

        <Cart
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />

      </main>

      <Footer />
    </div>
  );
}

export default App;