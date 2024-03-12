import React ,{ createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 1; i < PRODUCTS.length + 1; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    // Lấy trạng thái giỏ hàng từ sessionStorage khi component được mount lần đầu tiên
    const storedCart = sessionStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : getDefaultCart();
  });

  useEffect(() => {
    // Lưu trạng thái giỏ hàng vào sessionStorage mỗi khi cartItems thay đổi
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };


  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

function getDefaultCart() {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}
