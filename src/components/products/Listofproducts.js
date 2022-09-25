import React from "react";
import "./Listofproducts.css";
import { Link } from "react-router-dom";
export const Listofproducts = (props) => {
  // console.log(props.item);
  return (
    <div className="product-container">
      {props.item.map((product) => (
        <div
          className="product"
          onClick={() => {
            props.onDeleteHanduler(product.id);
          }}
        >
          <p>id:{product.id}</p>
          <p>date:{product.date}</p>
          <p>item:{product.item}</p>
          <p>₹{product.price}</p>
        </div>
      ))}
      <Link to="/" className="add-new-products">
        Add more
      </Link>
    </div>
  );
};
