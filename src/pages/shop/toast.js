import React from 'react';
import "./shop.css";
const Toast = ({ type, title, message, key }) => {
  return (
    <div className={`toast ${type}`} key={key} >
      <i className="fa-solid fa-circle-check"></i>
      <div className="content">
        <div className="title">{title}</div>
        <span>{message}</span>
      </div>
      <i className="fa-solid fa-xmark"></i>
    </div>
  );
}

export default Toast;