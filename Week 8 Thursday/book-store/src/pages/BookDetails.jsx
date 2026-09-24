import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BookDetails({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);

  const books = [
    {
      id: 101,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 299,
      description:
        "A classic story of ambition, love and the American Dream.",
    },
    {
      id: 102,
      title: "1984",
      author: "George Orwell",
      price: 399,
      description:
        "A powerful dystopian story about surveillance and freedom.",
    },
    {
      id: 103,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 349,
      description:
        "A timeless story exploring justice, morality and childhood.",
    },
  ];

  useEffect(() => {
    console.log(`Loading book details for ID: ${id}`);

    setBook(null);

    const timer = setTimeout(() => {
      const selectedBook = books.find(
        (book) => book.id === Number(id)
      );

      setBook(selectedBook || null);
    }, 500);

    return () => {
      clearTimeout(timer);
      console.log(`Cleanup for book ID: ${id}`);
    };
  }, [id]);

  if (!book) {
    return (
      <div className="page">
        <div className="details-card">
          <h1>Book Not Found</h1>
          <p>
            We couldn't find a book with ID <strong>{id}</strong>.
          </p>

          <button onClick={() => navigate("/books")}>
            ← Back to Books
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="details-card">
        <div className="details-icon">📖</div>

        <span className="hero-badge">BOOK DETAILS</span>

        <h1>{book.title}</h1>

        <h3>By {book.author}</h3>

        <div className="details-price">
          ₹{book.price}
        </div>

        <p>{book.description}</p>

        <div className="details-actions">
          <button onClick={() => navigate(-1)}>
            ← Go Back
          </button>

          <button
            onClick={() => {
              onAddToCart(book);
              alert("Book added to cart!");
            }}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;