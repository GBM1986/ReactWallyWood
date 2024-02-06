import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const PosterDetails = () => {
  const [apiData, setApiData] = useState([]);
  const [quantity, setQuantity] = useState(1); // State for quantity input
  const { poster } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const url = `http://localhost:3000/posters/${poster}`;
        const result = await axios.get(url);
        setApiData([result.data]);
      } catch (error) {
        console.error("Error fetching poster details:", error);
      }
    };

    getData();
  }, [poster]);

  const handleIncrement = () => {
    // Increment the quantity if it's less than the available stock
    setQuantity((prevQuantity) =>
      prevQuantity < apiData[0].stock ? prevQuantity + 1 : prevQuantity
    );
  };

  const handleDecrement = () => {
    // Decrement the quantity if it's greater than 1
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
  };

  const addToCart = async (id) => {
    try {
      const endpoint = `http://localhost:3000/cart/${id}`;
      const data = {
        posterId: apiData[0].id,
        quantity: quantity
      };
      const response = await axios.post(endpoint, data);
      console.log("Item added to cart:", response.data);
      // You can add further logic here if needed, such as displaying a success message
    } catch (error) {
      console.error("Error adding item to cart:", error);
      // You can add error handling logic here, such as displaying an error message
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-white items-center border-l-2 border-lightbrown mb-12 min-h-screen ">
      {apiData.map((item) => (
        <div key={item.id} className="flex flex-col md:flex-row gap-4 px-6 py-4 md:py-0 w-full md:w-auto">
          <img src={item.image} alt="" className="h-96 md:h-auto w-full md:w-96 object-scale-down" />
          <div className="flex flex-col justify-between w-full">
            <div className="space-y-6">
              <span className="text-xl font-bold text-darkGray">{item.name}</span>
              <p className="" dangerouslySetInnerHTML={{ __html: item.description }}></p>
              <div className="flex flex-col space-y-2 md:space-y-6">
                <p className="text-darkGray"><span className="font-semibold">Størrelse:</span> {item.height} x {item.width} cm</p>
                <p className="text-darkGray"><span className="font-semibold">Varenummer (SKU):</span> {item.id}</p>
                <span className="text-lg font-bold text-darkGray">Kr. {item.price},00</span>
              </div>
            </div>
            <div className="flex justify-between items-center w-full mt-4">
              <div className="flex gap-2 items-center">
                <button onClick={handleDecrement} className="px-2 py-1 bg-lightbrown text-white rounded-[3px] w-10">-</button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-16 px-2 py-1 text-center border border-gray-400 rounded-md"
                />
                <button onClick={handleIncrement} className="px-2 py-1 w-10 bg-lightbrown text-white rounded-[3px]">+</button>
              </div>
              <button onClick={addToCart} className="px-4 py-2 bg-lightbrown text-white rounded-[3px] border-2 border-darkGray ml-2">Læg i kurv</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
