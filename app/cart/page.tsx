"use client";
import Cookies from "js-cookie";

const Cart = () => {
  Cookies.set("token", "Pramis Gurung");

  return (
    <div className="space-y-4">
      <div>This is cart</div>
    </div>
  );
};

export default Cart;
