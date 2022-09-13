import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { categories, locations, restaurants } from "./data";
import "./Styles/Food.css";
let allFoods;

export default function Food() {
  const [foods, setFoods] = useState([]);

  let foodCart;
  if (localStorage.getItem("foodCart")) {
    foodCart = JSON.parse(localStorage.getItem("foodCart"));
  } else {
    foodCart = [];
  }

  useEffect(() => {
    fetch("https://harsh-gajera.herokuapp.com/foodApi/foods")
      .then((res) => res.json())
      .then((res) => {
        allFoods = res.data;
        setFoods(res.data);
      });
  }, []);

  const filterFood = (e) => {
    const { id, value } = e.target;
    let newFoods = allFoods.filter((i) => i[id] === value);
    if (newFoods.length) setFoods(newFoods);
  };

  const cartHandler = (e) => {
    if (!foodCart.includes(e.target.id)) {
      e.target.innerHTML = "Already in Cart";
      foodCart.push(e.target.id);
      localStorage.setItem("foodCart", JSON.stringify(foodCart));
    }
  };

  return (
    <main id="main-food">
      <h1 className="h1">
        Food Api
        <Link to="/food/cart">Your Cart</Link>
      </h1>
      <div id="filter-food">
        <div>
          <label htmlFor="restaurant">Select by Restaurant:</label>
          <select name="restaurant" id="restaurant" onChange={filterFood}>
            <option value="">Restaurant</option>
            {restaurants.map((i, index) => (
              <option value={i} key={index}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="category">Select by Category:</label>
          <select name="category" id="category" onChange={filterFood}>
            <option value="">Category</option>
            {categories.map((i, index) => (
              <option value={i} key={index}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="location">Select by Location:</label>
          <select name="location" id="location" onChange={filterFood}>
            <option value="">Location</option>
            {locations.map((i, index) => (
              <option value={i} key={index}>
                {i}
              </option>
            ))}
          </select>
        </div>
      </div>
      <section>
        {foods.map((food) => (
          <div key={food._id}>
            <img src={food.img} alt="" />
            <p>
              <span>Name:</span>{" "}
              {food.name.length < 25
                ? food.name
                : `${food.name.slice(0, 24)}...`}
            </p>
            <p>
              <span>Restaurant:</span> {food.restaurant || "Anonymous"}
            </p>
            <p>
              <span>Category:</span> {food.category}
            </p>
            <p>
              <span>Location:</span> {food.location}
            </p>
            <button id={food._id} onClick={cartHandler}>
              {foodCart.includes(food._id) ? "Already in Cart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
