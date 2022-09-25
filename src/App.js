import "./App.css";
import React, { useState } from "react";
// import { Todoapp } from "./components/todos/Todoapp";
// import { Userform } from "./components/Userform";
// // import { Getuser } from "./components/Getuser";
import { Route, Routes } from "react-router-dom";
// import { Allusers } from "./components/Allusers";
import { Newproducts } from "./components/products/Newproducts";
import { Listofproducts } from "./components/products/Listofproducts";
function App() {
  const [resdata, setresdata] = useState([]);
  const getproduct = (product) => {
    setresdata((prevdata) => {
      return [...prevdata, product];
    });
  };
  const deleteHanduler = (itemID) => {
    setresdata((prevdata) => prevdata.filter((item) => item.id !== itemID));
  };
  return (
    <div className="App">
      {/* <Userform /> */}
      <Routes>
        {/* <Route path="/getuser" element={<Getuser />} />
        <Route path="/Allusers" element={<Allusers />} /> */}
        <Route path="/" element={<Newproducts ongetproduct={getproduct} />} />
        <Route
          path="/listofproducts"
          element={
            <Listofproducts item={resdata} onDeleteHanduler={deleteHanduler} />
          }
        />
      </Routes>

      {/* <Newproducts ongetproduct={getproduct} />
      <Listofproducts item={resdata} onDeleteHanduler={deleteHanduler} /> */}
    </div>
  );
}

export default App;
