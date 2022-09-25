import React, { useRef } from "react";
import "./Newproducts.css";
import { Link } from "react-router-dom";
let count = 0;
export const Newproducts = (props) => {
  const item = useRef("");
  const price = useRef("");
  const date = useRef("");
  const submitHanduler = (e) => {
    e.preventDefault();
    let itemdetails = {
      id: count++,
      item: item.current.value,
      price: price.current.value,
      date: date.current.value,
    };
    props.ongetproduct(itemdetails);
  };
  return (
    <div className="continer">
      <div className="form-box">
        <form onSubmit={submitHanduler} className="submit-form">
          <input
            ref={item}
            className="input-type"
            type="text"
            placeholder="Enter item"
          />
          <input
            ref={price}
            className="input-type"
            type="number"
            placeholder="Enter price"
          />
          <input ref={date} className="input-type" type="date" />
          <input className="input-type bnt-size" type="submit" />
        </form>
      </div>
      <Link to="/listofproducts" className="list-of-products">
        See products
      </Link>
    </div>
  );
};
