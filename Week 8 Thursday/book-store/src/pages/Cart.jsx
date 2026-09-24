function Cart({ cart, onRemove }) {
  const total = cart.reduce(
    (sum, book) => sum + book.price,
    0
  );

  return (
    <div className="page">
      <span className="hero-badge">YOUR CART</span>

      <h1>Shopping Cart 🛒</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div>🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some books to get started.</p>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((book, index) => (
              <div className="cart-item" key={index}>
                <div>
                  <h3>{book.title}</h3>
                  <p>By {book.author}</p>
                </div>

                <strong>₹{book.price}</strong>

                <button onClick={() => onRemove(index)}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <span>Total</span>
            <strong>₹{total}</strong>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;