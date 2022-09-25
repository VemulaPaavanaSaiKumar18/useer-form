import React from "react";
import { Link } from "react-router-dom";

export const Allusers = (props) => {
  console.log(props.item);
  return (
    <div>
      {/* {props.item.map((data) => (
        <p>{data}</p>
      ))} */}
      <p>{props.item.data}</p>
      {/* <lu>
      </lu> */}
      <Link to="/getuser">BACK</Link>
    </div>
  );
};
