import React from "react";
import { useState, useEffect } from "react";

import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 8)));
  }, []);

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">
        Explore the world of <span className="text-blue-700">Kitaab</span>
      </h2>
      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:gid-cols-3 grid-cols-1">
        {books.map((book) => (
          <Card className="shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer">
            <img
              src={book.imageURL}
              alt=""
              className="h-96 w-96 rounded-md
            "
            />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <div>
              <p className="text-lg mb-3 font-medium text-gray-700 dark:text-gray-400">
                {book.authorName}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the most popular books of 2023 so far. Feel free to
                give it a look!
              </p>
            </div>

            <button className="bg-blue-700 font-semibold text-white py-2 rounded hover:bg-black transition-all duration-300">
              Explore
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
