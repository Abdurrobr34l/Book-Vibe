import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const booksData = useLoaderData();
  // console.log(id, booksData);

  const book = booksData.find((bookById) => bookById.bookId === Number(id));
  // console.log(book);
  const {
    bookById,
    bookName,
    author,
    category,
    image,
    alt,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  return (
    <div key={bookById} className="flex justify-center">
      <div className="card flex lg:card-side lg:gap-12">
        {/* Image */}
        <figure className="p-16 bg-[#f3f3f3] !rounded-2xl lg:w-full">
          <img src={image} alt={alt} className="!w-[425px]" />
        </figure>

        {/* Card Body */}
        <div className="card-body">
          {/* Book & Author Name */}
          <h2 className="card-title mt-4 text-2xl font-bold">
            {bookName}
            {/* <span className="badge ml-3 font-medium bg-[#22be0a19] text-[#23BE0A] border-none rounded-full">
              {yearOfPublishing}
            </span> */}
          </h2>
          <h2 className="card-title text-base font-medium text-[#131313CC]">
            By: {author}
          </h2>

          {/* Category */}
          <div className="py-4 text-base font-medium text-[#131313CC] border-t-2 border-b-2 border-[#13131326]">
            {category}
          </div>

          {/* Review */}
          <p className="grow-0 py-6">
            <span className="font-bold">Review:</span> {review}
          </p>

          {/* Tags */}
          <div className="flex items-center gap-2 pb-6 border-b-2 border-[#13131326]">
            <span className="mr-4 font-bold">Tag:</span>
            {tags.map((tag, index) => (
              <div
                key={index}
                className="badge p-4 font-medium bg-[#23BE0A0D] text-[#23BE0A] border-none rounded-full"
              >
                {tag}
              </div>
            ))}
          </div>

          {/* More Details */}
          <div className="flex flex-col gap-3 mt-6 mb-8 w-[300px]">
            <div className="flex items-center justify-between">
              <span className="text-base text-[#131313]/70">
                Number of Pages:
              </span>
              <span>{totalPages}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-base text-[#131313]/70">Publisher:</span>{" "}
              <span>{publisher}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-base text-[#131313]/70">
                Year of Publishing:
              </span>{" "}
              <span>{yearOfPublishing}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-base text-[#131313]/70">Rating:</span>{" "}
              <span>{rating}</span>
            </div>
          </div>

          {/* Read & Wishlist Buttons */}
          <div className="flex gap-4">
            <a className="btn !py-[18px] !px-7 text-[#131313] bg-transparent shadow-none hover:bg-[#23BE0A] hover:text-white hover:border-white">
              Read
            </a>
            <a className="btn !py-[18px] !px-7 bg-[#59C6D2] shadow-none border-none hover-blue">
              Wishlist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
