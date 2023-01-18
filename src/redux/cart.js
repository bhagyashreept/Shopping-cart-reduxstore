import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    cart: []
  },
  reducers: {
    addProducts: (state, action) => ({
      ...state,
      products: action.payload
    }),
    addToCart: (state, action) => ({
      ...state,
      cart: [{ ...action.payload, qty: 1 }, ...state.cart]
    }),
    removeToCart: (state, action) => ({
      ...state,
      cart: state.cart.filter((c) => c.id !== action.payload.id)
    }),
    changeqty: (state, action) => ({
      ...state,
      cart: state.cart.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, qty: action.payload.qty };
        }
        return product;
      })
    })
  }
});

export const {
  addProducts,
  addToCart,
  removeToCart,
  changeqty
} = cartSlice.actions;

export default cartSlice.reducer;
