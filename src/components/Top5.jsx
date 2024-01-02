import axios from "axios";
import { Progress } from "flowbite-react";
import React, { useEffect, useMemo, useState } from "react";

const Top5 = () => {
  const [products, setProducts] = useState([]);
  const [maxPrice, setMaxPrice] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      const updatedProducts = response?.data
        .map((product) => {
          const total = product.price * product.sold;
          return { ...product, total };
        })
        .sort((a, b) => b.total - a.total);
      setMaxPrice(updatedProducts[0].total);
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const colors = useMemo(
    () => ["#0084F7", "#F7A500", "#F77300", "#F70031", "#9410A5"],
    []
  );

  return (
    <div className="text-white shadow-special rounded-2xl p-5">
      <h1 className="font-medium">Top 5 Selling Products</h1>
      <div className="flex flex-col mt-2">
        {products.map((product, i) => {
          return (
            <div
              className="grid grid-cols-8 items-center ml-[10%] mt-2"
              key={product.id}
            >
              <div className="text-base col-span-2">{product.item}</div>
              <div className="col-span-6 flex items-center max-w-full">
                <div
                  className={`h-3 mx-5 rounded-r-lg rounded-sm `}
                  style={{ width: `${(product?.total / maxPrice) * 70}%`,
                backgroundColor:colors[i] }}
                ></div>

                <p className="font-extralight">
                  {product.price}/{product.sold}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Top5;
