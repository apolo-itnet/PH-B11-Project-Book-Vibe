import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/addToDB";
import Book from "../Book/Book";
import { CiLocationOn } from "react-icons/ci";
import { RiGroupLine } from "react-icons/ri";
import { FcNook } from "react-icons/fc";
import { MdOutlineExpandMore } from "react-icons/md";

const ListedBooks = () => {
  const [sort, setSort] = useState("");
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();
  // console.log(data);

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type)
    if (type === "pages") {
      const sortedPage = [...readList].sort((a,b) => a.totalPages - b.totalPages);
      setReadList(sortedPage)
    }
    if (type === "rating") {
      const sortedRating = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortedRating)
    }
    if (type === "publish") {
      const sortedPublishYear = [...readList].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      setReadList(sortedPublishYear)
    }
  }

  return (
    <div className="py-10">
      <div className="bg-gray-200 rounded-xl py-4 mb-6">
        <h1 className="text-4xl font-bold text-center">Books</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
        {/* For TSX uncomment the commented types below */}
        <button
          className="btn items-center flex bg-green-600 text-white"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
        >
          Sort By {sort ? sort : ""} <MdOutlineExpandMore className="text-white text-xl font-bold" />
        </button>

        <ul
          className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}
        >
          <li>
            <a onClick={() => handleSort("rating")}>Rating</a>
          </li>
          <li>
            <a onClick={() => handleSort("pages")}>Number of Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("publish")}>Publisher year</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {/* <h2>Book Read : {readList.length}</h2> */}

          {/* readList.map(b => <Book key={b.bookId} singleBook={b} ></Book>) */}

          {readList.map((book) => (
            <div
              key={book.bookId}
              className="border border-gray-200 py-6 my-6 p-6 mb-4 rounded-xl bg-white shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-6">
                <div className="bg-gray-200/60 w-[20%] flex items-center py-6 justify-center rounded-xl">
                  <img
                    src={book.image}
                    alt={book.bookName}
                    className="h-48 object-cover rounded"
                  />
                </div>

                <div className="flex-1">
                  <div className="pb-2">
                    <h2 className="text-2xl font-bold pb-2">{book.bookName}</h2>
                    <p className="text-gray-600">By: {book.author}</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex justify-start items-center gap-4">
                      <div className="mt-2 flex flex-wrap items-center">
                        <p className="font-bold">Tag</p>
                        {book.tags.map((tag, index) => (
                          <span
                            key={tag + index}
                            className=" text-green-600 px-2 py-1 rounded text-md font-semibold"
                          >
                            {" "}
                            #{tag}{" "}
                          </span>
                        ))}
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <span>
                          <CiLocationOn />
                        </span>
                        <p>Year of Publishing: {book.yearOfPublishing}</p>
                      </div>
                    </div>

                    <div className="flex justify-start items-center gap-4 pb-2 border-b border-gray-200">
                      <p className="flex items-center gap-2">
                        <RiGroupLine /> Publisher: {book.publisher}
                      </p>
                      <p className="flex items-center gap-2">
                        <FcNook /> Page: {book.totalPages}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-start items-center gap-4 pt-2">
                    <button className="text-sm mt-2 btn rounded-full bg-blue-200 border-none text-blue-600">
                      Category:{" "}
                      <span className="font-semibold">{book.category}</span>
                    </button>
                    <button className="text-sm mt-1 btn rounded-full bg-orange-200 border-none text-orange-600">
                      Rating:{" "}
                      <span className="font-semibold">{book.rating}</span>
                    </button>
                    <button className="text-sm mt-1 btn rounded-full bg-green-600 border-none text-white">
                      {" "}
                      View Details{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>My Wishlist : </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
