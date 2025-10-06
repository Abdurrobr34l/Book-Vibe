import React from "react";
import { Link } from "react-router-dom";

const Books = ({ booksData }) => {
  return (
    <>
      <section>
        {/* Title */}
        <div className="mt-10 mb-12 md:mt-14 md:mb-8">
          <h2 className="text-4xl font-bold text-center">Books</h2>
        </div>

        {/* Book */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Individual Book */}
          {booksData.map(
            ({ bookId, bookName, author, image, alt, category, rating, tags, yearOfPublishing }) => (
              <Link to={`/book-details/${bookId}`}>
                <div key={bookId} className="card p-6 border-2 border-[#f3f3f3] rounded-3xl">
                {/* Image */}
                <figure className="bg-[#f3f3f3] rounded-2xl">
                  <img
                    src={image}
                    alt={alt}
                    className="my-8 w-[134px] h-[166px]"
                  />
                </figure>

                {/* Card Body */}
                <div className="card-body pb-0 px-0">
                  {/* Tags */}
                  <div className="flex gap-2">
                    {tags.map((tag, index) => (
                      <div key={index} className="badge p-4 font-medium bg-[#23BE0A0D] text-[#23BE0A] border-none rounded-full">
                          {tag}
                      </div>
                    ))}
                  </div>

                  {/* Book & Author Name */}
                  <h2 className="card-title mt-4 text-2xl font-bold">
                    {bookName}
                    <span className="badge ml-3 font-medium bg-[#22be0a19] text-[#23BE0A] border-none rounded-full">{yearOfPublishing}</span>
                  </h2>
                  <h2 className="card-title text-base font-medium text-[#131313CC]">
                    By: {author}
                  </h2>

                  {/* Category & Rating */}
                  <div className="card-actions justify-between mt-5 pt-5 border-t-2 border-dotted border-[#13131326]">
                    <div className="text-base font-medium text-[#131313CC]">
                      {category}
                    </div>
                    <div className="text-base font-medium text-[#131313CC]">
                      {rating} ⭐
                    </div>
                  </div>
                </div>
                </div>
              </Link>
            )
          )}

        </div>
      </section>
    </>
  );
};

export default Books;
