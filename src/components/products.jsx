import React from "react";
import product1 from "../assets/images/products/product1.jpg";
import product2 from "../assets/images/products/product2.jpg";
import product3 from "../assets/images/products/product3.jpg";
import product4 from "../assets/images/products/product4.jpg";
import product5 from "../assets/images/products/product5.jpg";
import product6 from "../assets/images/products/product6.jpg";
import product7 from "../assets/images/products/product7.jpg";
import product8 from "../assets/images/products/product8.jpg";
import product9 from "../assets/images/products/product9.jpg";
import product10 from "../assets/images/products/product10.jpg";
import { MoveRight } from "lucide-react";
import { ShoppingCart } from 'lucide-react';
function Products() {
  const products = [
    {
      id: 1,
      image: product1,
      name: "product1",
      price: 120,
    },
    {
      id: 2,
      image: product2,
      name: "product2",
      price: 90,
    },
    {
      id: 3,
      image: product3,
      name: "product3",
      price: 70,
    },
    {
      id: 4,
      image: product4,
      name: "product4",
      price: 89,
    },
    {
      id: 5,
      image: product5,
      name: "product5",
      price: 200,
    },
    {
      id: 6,
      image: product6,
      name: "product6",
      price: 300,
    },
    {
      id: 7,
      image: product7,
      name: "product7",
      price: 123,
    },
    {
      id: 8,
      image: product8,
      name: "product8",
      price: 210,
    },
    {
      id: 9,
      image: product9,
      name: "product9",
      price: 190,
    },
    {
      id: 10,
      image: product10,
      name: "product10",
      price: 250,
    },
  ];

  return (
    <div className="mt-20 px-20">
      <div className="flex gap-5 justify-center items-center mb-10 ">
        <h1 className="text-5xl font-semibold text-black leading-tight text-center ">
          Discover our new <br /> Products
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-5 gap-4  ">
          {products.map((product) => (
            <div key={product.id} className="relative shadow-lg rounded-lg">
              <div className="p-3  ">
                <img
                  className="object-cover rounded-md  aspect-[9/11] w-full  "
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className=" bottom-5 flex justify-between  items-end   text-start bg-white px-5 mb-3 ">
                <div>
                  <p className=" text-md ">{product.name}</p>
                  <p className="text-md font-semibold ">${product.price}</p>
                </div>
                <div className="mb-2  bg-black/40 w-8 h-8   rounded-md   ">
                  <div className=" py-1   -translate-x-2  hover:translate-x-1 bg-transparent  transition duration-300 ease-in-out   ">
                    <MoveRight size={30} className="" />
                  </div>
                </div>
              </div>
              <div className=" absolute top-7 right-7 ">
              
                <ShoppingCart  size={27} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
