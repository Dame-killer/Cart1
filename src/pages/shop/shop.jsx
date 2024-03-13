import React, {useState} from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  const [showProduct, setShowProduct] = useState(false);
  const handleShowHide = () => {
    setShowProduct(!showProduct); // Thay đổi trạng thái của sản phẩm khi click vào nút Show/Hide
  }
  return (
    <>
    { showProduct  === false ?
      <div><button onClick={handleShowHide}>Show</button></div>
    :
      <>
    <div className="shop">
      <div className="shopTitle">
        <h1>PedroTech Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
    <div><button onClick={handleShowHide}>Hide</button></div> 
        </>
      }
    </>
  );
};
