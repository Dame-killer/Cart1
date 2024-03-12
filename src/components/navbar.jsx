import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../context/shop-context"; 
import "./navbar.css";

export const Navbar = () => {
  const { cartItems } = useContext(ShopContext);

  // Tính tổng số lượng sản phẩm trong giỏ hàng
  const cartItemCount = Object.values(cartItems).reduce(
    (acc, curr) => acc + curr,
    0
  );
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
          {cartItemCount > 0 && <span className="cartItemCount">{cartItemCount}</span>}
        </Link>
      </div>
    </div>
  );
};
