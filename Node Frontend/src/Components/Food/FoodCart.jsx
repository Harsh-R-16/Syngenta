import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/FoodCart.css";

export default function FoodCart() {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();

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
        let newFoods = res.data.filter((i) => foodCart.includes(i._id));
        setFoods(newFoods);
      });
  }, [foodCart]);
  return (
    <main id="food-cart">
      <h1>Your Cart ({foodCart.length})</h1>
      <section>
        {foods.map((food, index) => (
          <Div {...food} key={index} />
        ))}
      </section>

      <button id="place-order" onClick={() => navigate("/food/order")}>
        Place Order
      </button>
    </main>
  );
}

function Div({ img, name, restaurant, category, location }) {
  const [c, setC] = useState(1);
  return (
    <div>
      <img src={img} alt="" />
      <p>
        <span>Name:</span> {name}
      </p>
      <p>
        <span>Restaurant:</span> {restaurant || "Anonymous"}
      </p>
      <p>
        <span>Category:</span> {category}
      </p>
      <p>
        <span>Location:</span> {location}
      </p>
      <p>
        <span>Quantity:</span>
        <button className="quantity" onClick={() => c > 1 && setC(c - 1)}>
          -
        </button>
        <span>{c}</span>
        <button className="quantity" onClick={() => setC(c + 1)}>
          +
        </button>
        <button onClick={(e) => e.target.parentElement.parentElement.remove()}>
          Remove
        </button>
      </p>
    </div>
  );
}
