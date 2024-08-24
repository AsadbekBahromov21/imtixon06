import { BestPrices, Products } from "@/components";
import Skeleton from "@/components/skeleton/skeleton";
import React, { useState } from "react";
import { Banners, Categories, Needs, Newsletter } from "@/components";
import { useFetch } from "@/hooks/useFetch";

const Home = () => {
  const [category, setCategory] = useState("");
  const { data, loading } = useFetch(
    `/products${category ? `/category/${category}` : ""}`,
    { limit: 10 },
    [category]
  );
  const { data: categories } = useFetch("/products/category-list");

  const products = (
    <div className="container py-4 mt-10">
      <ul className="flex whitespace-nowrap overflow-x-auto scroll-none gap-4">
        <li>
          <button
            onClick={() => setCategory("")}
            className="px-4 py-1 bg-green-500 rounded-3xl text-white"
          >
            All
          </button>
        </li>
        {categories?.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => setCategory(cat)}
              className="px-4 py-1 bg-green-500 rounded-3xl text-white"
            >
              {cat.split("-").join(" ")}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <Newsletter />
      <Categories />
      <Banners />
      {products}
      {!loading ? <Products data={data?.products} /> : <Skeleton />}
      <Needs />
      <BestPrices />
    </>
  );
};

export default Home;
