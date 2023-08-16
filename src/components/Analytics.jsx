import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00fd9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            nostrum nesciunt repellat eligendi quia minima natus ex molestias,
            voluptates commodi. Praesentium, explicabo dolorum. Dolore nobis
            nemo itaque magnam veritatis dolor!
          </p>
          <button className="text-[#00fd9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-0 bg-black hover:bg-gray-900">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
