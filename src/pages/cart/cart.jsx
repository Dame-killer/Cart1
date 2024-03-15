import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useCheckFrom } from "../shop/check";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const { formData, handleChange, handleSubmit } = useCheckFrom();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
          return null; // Thêm return null để tránh lỗi warning khi sử dụng map
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>

          {/* Khi người dùng click vào nút "Thanh toán", hiển thị form */}
          <button onClick={handleSubmit}> Thanh toán </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
      {/* Hiển thị form khi được kích hoạt */}
      {formData && (
        <div className="checkout-form">
          <h2>Checkout Form</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="paymentMethod"
              placeholder="Payment Method"
              value={formData.paymentMethod}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};
