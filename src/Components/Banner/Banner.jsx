import React from "react";
import bookImage from "../../assets/books.png";

const Banner = () => {
  return (
    <div className="mt-4">
      <div className="hero bg-base-200 rounded-2xl">
        <div className="hero-content flex justify-between items-center flex-col lg:flex-row-reverse px-30 py-14">
          <div>
          <img
            src={bookImage}
            className="max-w-sm rounded-lg"
          />
          </div>
          <div className="w-[50%]">
            <h1 className="text-5xl font-bold py-6 tracking-wide leading-16 ">Books to freshen up your bookshelf</h1>
            <button className="btn btn-primary bg-green-600 text-white border-none shadow-none">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
