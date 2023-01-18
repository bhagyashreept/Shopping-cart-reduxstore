import React from "react";
import { addProducts, addToCart, removeToCart, changeqty } from "../redux/cart";
import { useDispatch, useSelector, connect } from "react-redux";
const Products = () => {
  const { products } = useSelector((state) => state.cart);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "80%"
      }}
    >
      {products.map((prod) => (
        <div
          key={prod.id}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            border: "1px solid grey",
            width: "30%",
            marginTop: 10,
            gap: 10
          }}
        >
          <img
            src={prod.thumbnail}
            alt={prod.title}
            style={{ height: 200, objectFit: "cover" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{prod.title}</span>
            <b>$ {prod.price}</b>
          </div>
          {cart.some((p) => p.id === prod.id) ? (
            <button
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor: "#e53935",
                color: "white"
              }}
              onClick={() => dispatch(removeToCart(prod))}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor: "green",
                color: "white"
              }}
              onClick={() => dispatch(addToCart(prod))}
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
