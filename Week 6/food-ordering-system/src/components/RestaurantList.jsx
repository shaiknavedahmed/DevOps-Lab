function RestaurantList() {
  const restaurants = [
    {
      id: 1,
      name: "Pizza Palace",
      rating: 4.5
    },
    {
      id: 2,
      name: "Burger House",
      rating: 4.3
    },
    {
      id: 3,
      name: "Spice Kitchen",
      rating: 4.6
    }
  ];

  return (
    <section>
      <h2>Restaurants</h2>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <div className="restaurant-card" key={restaurant.id}>
            <h3>{restaurant.name}</h3>
            <p>⭐ {restaurant.rating}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RestaurantList;