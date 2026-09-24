import { Link } from "react-router-dom";

function Books() {
  const books = [
    {
      id: 101,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 299,
      description: "A classic story of ambition, love and the American Dream.",
    },
    {
      id: 102,
      title: "1984",
      author: "George Orwell",
      price: 399,
      description: "A powerful dystopian story about surveillance and freedom.",
    },
    {
      id: 103,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 349,
      description: "A timeless story exploring justice, morality and childhood.",
    },
  ];

  return (
    <div className="page">
      <span className="hero-badge">OUR COLLECTION</span>

      <h1>Explore Books</h1>

      <p>
        Discover timeless classics and unforgettable stories.
      </p>

      <div className="book-list">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <div className="book-icon">📖</div>

            <h2>{book.title}</h2>

            <p className="author">
              By {book.author}
            </p>

            <p className="description">
              {book.description}
            </p>

            <div className="book-bottom">
              <strong>₹{book.price}</strong>

              <Link to={`/books/${book.id}`}>
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;