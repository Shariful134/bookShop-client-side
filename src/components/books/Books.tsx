import { useState } from "react";
import { useGetAllBooksQuery } from "../../redux/book/bookApi";
import { TBook } from "../../types/type";
// import { useState } from "react";
// import { useAppSelector } from "../../redux/hooks";
// import { useCurrentToken } from "../../redux/auth/authSlice";
// import { verifyToken } from "../../utils/verifyToken";
import { FaArrowRight, FaBook } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";

const Books = () => {
  // const token = useAppSelector(useCurrentToken);

  // let user;
  // if (token) {
  //   user = verifyToken(token) as TUser;
  // }
  // const admin = user?.role;

  // const [bookId, setbookId] = useState<string | null>(null);

  // console.log(bookId);
  const [showCount, setShowCount] = useState(8);
  const { data: booksData } = useGetAllBooksQuery(undefined);

  const booksDatas = booksData?.data?.map((book: TBook) => ({
    _id: book._id,
    title: book.title,
    author: book.author,
    price: book.price,
    category: book.category,
    description: book.description,
    quantity: book.quantity,
    inStock: book.inStock,
    publicationDate: book.publicationDate,
    publisher: book.publisher,
    imageURL: book.imageURL,
  }));
  const allBooks = booksDatas || [];
  console.log(allBooks);

  return (
    <div>
      <div className=" text-center font-serif pt-8">
        <h2 className="text-3xl mb-2 text-cyan-500">
          -- <FaBook className="inline" /> Our Books{" "}
          <FaBook className="inline" /> --{" "}
        </h2>
        <p className="max-w-3/6 mx-auto">
          {" "}
          Explore our most popular books, loved by readers worldwide. From
          fiction to self-help, find your next favorite read today!
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-4 my-2">
        {allBooks?.slice(0, showCount).map((book: TBook) => {
          const inStock = book.inStock;
          return (
            <div
              key={book?._id}
              className="card bg-base-100 w-75 relative group   border-1 border-slate-200 shadow-lg"
            >
              <figure className="px-5 pt-5">
                <img src={book.imageURL} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{book?.title}</h2>
                <p className="text-cyan-600 font-bold">{book?.price} $</p>
                {inStock ? (
                  <p>InStock: Available</p>
                ) : (
                  <p>InStock: Unavailable</p>
                )}

                <Link to={`/book-details/${book._id}`}>
                  <button className="btn px-5  bg-cyan-300 hover:bg-cyan-400 border-1 border-cyan-500 hover:border-cyan-800">
                    Details
                  </button>
                </Link>
              </div>

              <div className="absolute top-[50%] invisible group-hover:visible  left-0 w-full">
                <button className="btn w-full border:bg-cyan-400 bg-cyan-300 border-1 hover:border-cyan-600">
                  Add To Cart <IoMdCart className="text-xl" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center flex-wrap gap-4 my-2">
        {showCount < allBooks.length ? (
          <div className=" text-center mb-2">
            <button
              onClick={() => setShowCount((prevsData) => prevsData + 10)}
              className="btn btn-xs hover:bg-cyan-400 bg-cyan-300 border-1 hover:shadow-2xl hover:border-cyan-800 border-cyan-500 sm:btn-sm md:btn-md mt-2 bg "
            >
              Show More <FaArrowRight />
            </button>
          </div>
        ) : (
          <div className=" text-center mb-2">
            <button
              onClick={() => setShowCount((prevsData) => prevsData - 10)}
              className="btn btn-xs hover:bg-cyan-400 bg-cyan-300 border-1 hover:shadow-2xl hover:border-cyan-800 border-cyan-500 sm:btn-sm md:btn-md mt-2 bg "
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
