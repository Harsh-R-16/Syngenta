import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Navbar/Home";
import Food from "../Food/Food";
import FoodCart from "../Food/FoodCart";
import FoodOrder from "../Food/FoodOrder";
import Library from "../Library/Library";
import LibraryCart from "../Library/LibraryCart";
import Blog from "../Blog/Blog";

export default function AllRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/food/cart" element={<FoodCart />} />
        <Route path="/food/order" element={<FoodOrder />} />
        <Route path="/library" element={<Library />} />
        <Route path="/library/cart" element={<LibraryCart />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}
