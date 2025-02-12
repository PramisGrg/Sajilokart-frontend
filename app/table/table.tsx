import { axiosInstance } from "@/services/axios";
import React from "react";

const table = async () => {
  const response = await axiosInstance.get("/product");
  console.log(response, "This isresponse");
  return (
    <div>
      <h1>I am table</h1>
    </div>
  );
};

export default table;
