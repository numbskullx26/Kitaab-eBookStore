import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import { HiLink, HiMail } from "react-icons/hi";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Science Fiction",
    "Romance",
    "History",
    "Biography",
    "Fantasy",
    "Horror",
    "Mystery",
    "Romance",
    "Religion",
    "Thriller",
    "War",
    "Western",
    "Travel",
  ];

  const [selectedBookCategory, setSeletedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSeletedBookCategory(event.target.value);
  };

  //handle form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };

    console.log(bookObj);

    //Send data to DB
    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book Uploaded successfully!");
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload a Book</h2>
      <form
        onSubmit={handleFormSubmit}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/* First Row */}
        <div className="flex gap-8">
          {/* Bookname */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              type="text"
              placeholder="Book Name"
              required
            />
          </div>
          {/* Authorname */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="auhtorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              type="text"
              placeholder="Author Name"
              required
            />
          </div>
        </div>
        {/* Second Row */}
        <div className="flex gap-8">
          {/* imageURL */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              icon={HiLink}
              rightIcon={HiLink}
              type="text"
              placeholder="Book Image URL"
              required
            />
          </div>
          {/* Categories */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="categoryName" value="Book Category" />
            </div>
            <Select
              id="categoryName"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>
        {/* Book Description */}

        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            placeholder="Write your Book Description here"
            required
            rows={5}
          />
        </div>

        {/* book PDF link*/}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF Link" />
          </div>
          <TextInput
            id="bookPDFURL"
            type="text"
            icon={HiLink}
            rightIcon={HiLink}
            placeholder="Book PDF URL"
            required
          />
        </div>
        {/* Button */}
        <Button
          className="mt-4 hover:scale-110 max-w-md transition-all duration-300"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
