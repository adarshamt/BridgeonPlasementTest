import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

import "./view.css";
export const ViewProduct = () => {
  const { id } = useParams();
  const [data, setdata] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        console.log(" id:", id);
        const response = await axios.get(
          `http://localhost:4743/viewproduct/${id}`
        );

        setdata(response.data.product);
        console.log("view response", response.data.product);
      } catch (error) {
        console.log("error", error);
      }
    };

    getProducts();
  }, [id]);
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="view_main_div">
      <div className="view_container">
        <div className="view_container_left">
          <img src={data?.images[0].url} alt="" />
        </div>
        <div className="view_container_right">
          <h1>{data?.productName}</h1>
          <span style={{fontSize:'25px',fontWeight:'600'}}> ₹ {data?.price}</span>
          <span style={{fontSize:'18px',fontWeight:'300',fontFamily: 'Roboto-sans-serif'}} > {data?.discription}</span>
          di

        </div>
      </div>
    </div>
  );
};
