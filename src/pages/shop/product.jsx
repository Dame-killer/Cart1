import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import Toast from "./toast";
import "./shop.css";
import { toast } from "react-toastify";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart } = useContext(ShopContext);
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    addToCart(id);
    toast.success("Thêm sản phẩm thành công !", {
      theme: "dark",
    });
    setShowMessage(true); // Show message when item is added to cart
  };

  return (
    <>
      <div className="product">
        <img src={productImage} alt={productName} />
        <div className="description">
          <p>
            <b>{productName}</b>
          </p>
          <p> ${price}</p>
        </div>
        <button
          id="success"
          className="addToCartBttn"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
        {showMessage && (
          <div className="notifications">
            <Toast
              key={id}
              type="success"
              title="Success"
              message="Product added to cart!"
            />
          </div>
        )}
      </div>
    </>
  );
};
