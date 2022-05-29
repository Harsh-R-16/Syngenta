import React from "react";
import "./Styles/FoodOrder.css";
let c = 0;
export default function FoodOrder() {
  React.useEffect(() => {
    setTimeout(setClc, 1000);
    setTimeout(setClc, 3000);
    setTimeout(setClc, 5000);
    setTimeout(setClc, 7000);
    setTimeout(setClc, 9000);
    localStorage.setItem("foodCart", JSON.stringify([]));
  }, []);

  function setClc() {
    let h2 = document.querySelectorAll("h2");
    h2[c].classList.add("h2");
    c++;
  }
  return (
    <main id="food-order">
      <h1>Order Page</h1>
      <h2>Order Accepted</h2>
      <h2>Cooking in Progress</h2>
      <h2>Out for Delivery</h2>
      <h2>Order Complete</h2>
      <h2>Thank You for Shopping!!!</h2>
    </main>
  );
}
