import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Allusers } from "./Allusers";

export const Getuser = () => {
  const [data, setdata] = useState("");
  const [dataList, setdataList] = useState("");
  const getData = (event) => {
    setdata(event.target.value);
  };
  const addDataHanduler = (event) => {
    event.preventDefault();
    let dataLists = [data];
    setdataList((prevuser) => {
      return [...prevuser, dataLists];
    });
    console.log(dataList);
  };
  return (
    <div>
      <input type="text" placeholder="addtext" onChange={getData} />
      <Link to="/Allusers" onClick={addDataHanduler}>
        Adduser
      </Link>
      {/* <Allusers item={dataList} /> */}
    </div>
  );
};
