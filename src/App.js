import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import "./App.module.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, addToCart, removeToCart, changeqty } from "./redux/cart";

function App() {
  const [loading, setLoading] = useState(false);
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    dispatch(addProducts(data.products));
    console.log(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Products />

      <Cart />
    </div>
  );
}

export default App;
