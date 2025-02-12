"use client";
import { axiosInstance } from "@/services/axios";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/product");
        console.log(response, "This is response");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it
  console.log(data, "This is data");

  return (
    <div>
      <h1>This is cart</h1>
    </div>
  );
};

export default Cart;
