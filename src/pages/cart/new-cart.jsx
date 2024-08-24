import { Cart, Empty } from "@/components";
import { useStateValue } from "@/components/context/Index";
import React from "react";

const NewCart = () => {
  let [data, dispatch] = useStateValue();
  console.log(data);

  return (
    <div>
      {data.cart.length ? (
        <Cart data={data.Cart} />
      ) : (
        <Empty
          url="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
          title="Savatcha bo'sh"
        />
      )}
    </div>
  );
};

export default NewCart;
