function Cart({ cart, increaseQuantity, decreaseQuantity }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="cart">
      <h2>🛒 Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <strong>{item.name}</strong>
                <p>₹{item.price} each</p>
              </div>

              <div className="quantity">
                <button onClick={() => decreaseQuantity(item.id)}>
                  −
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQuantity(item.id)}>
                  +
                </button>
              </div>

              <strong>
                ₹{item.price * item.quantity}
              </strong>
            </div>
          ))}

          <h3 className="total">
            Total: ₹{total}
          </h3>

          <button
            className="checkout-button"
            onClick={() => alert("Order placed successfully!")}
          >
            Checkout
          </button>
        </div>
      )}
    </section>
  );
}

export default Cart;