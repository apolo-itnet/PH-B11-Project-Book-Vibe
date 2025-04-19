import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../../Utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBookData = data.find((book) => book.bookId === bookId);

  const {
    image, bookName, author, category, review, tags, totalPages, publisher,
    yearOfPublishing, rating } = singleBookData || {};

  const handleMarkAsRead = id => {

    addToStoreDB(id)
  }

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm px-10 py-10 items-center">
        <div className="w-[50%]">
          <figure className="h-[564px] bg-gray-200/60 rounded-2xl">
            <img className="w-fit p-10" src={image} alt="Movie" />
          </figure>
        </div>
        <div className="card-body w-[50%]">
          <h2 className="card-title text-3xl font-bold">{bookName}</h2>
          <p>By: {author} </p>
          <p className="border-y border-gray-200 py-2 font-bold">{category}</p>
          <p className="text-justify">
            <span className="font-bold">Review:</span> {review}
          </p>
          <div className="flex justify-start items-center gap-4 py-4 border-b border-gray-200">
            {" "}
            <span className="font-bold">Tag</span>
            {tags.map((tag) => (
              <div className="text-green-600 font-bold">#{tag}</div>
            ))}
          </div>
          <div className="flex gap-10 py-6">
            <div className="flex flex-col gap-3 ">
              <p>Number of Pages:</p>
              <p>Publisher:</p>
              <p>Year of Publishing:</p>
              <p>Rating:</p>
            </div>
            <div className="flex flex-col gap-3 font-bold">
              <p>{totalPages}</p>
              <p>{publisher}</p>
              <p>{yearOfPublishing}</p>
              <p>{rating}</p>
            </div>
          </div>

          <div className="card-actions justify-start">
            <button onClick={() => handleMarkAsRead(id)} className="btn ">Mark as Read</button>
            <button className="btn btn-primary bg-cyan-500 border-none shadow-none text-white">
              Add to Whishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
