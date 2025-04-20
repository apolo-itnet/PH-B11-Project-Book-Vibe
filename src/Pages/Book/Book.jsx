import React from "react";
import { TiStarOutline } from "react-icons/ti";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const {bookId, bookName, author, image, tags, category, rating, yearOfPublishing } = singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`} >
      <div>
        <div className="card bg-base-100 w-96 shadow-sm py-8 p-4 border border-gray-100">
          <figure className="h-60 bg-gray-200/60 rounded-xl">
            <img
              className="w-40 h-60 p-4 rounded-lg"
              src={image}
              alt="Book-image"
            />
          </figure>
          <div className="card-body pb-0">
            <div className="flex justify-center gap-4 pb-2">
              {tags.map((tag, index) => ( <div key={tag + index} className="bg-gray-100 text-green-600 text-md font-semibold p-1 px-2 rounded-md border border-gray-200"> {tag} </div> ))}
            </div>
            <h2 className="card-title flex justify-between">
              {" "}
              {bookName}{" "}
              <span className="badge badge-secondary">{yearOfPublishing}</span>{" "}
            </h2>
            <p className="pb-3">By : {author}</p>
            <div className="card-actions justify-between pt-2 border-t-1 border-dashed">
              <div className="badge bg-gray-100 p-1 px-2 rounded-md border border-gray-200">
                {category}
              </div>
              <div className="badge bg-gray-100 p-1 px-2 rounded-md border border-gray-200">
                {rating} <TiStarOutline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
