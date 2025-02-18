import { Link, useLocation, useParams } from "react-router";
import {
  useGetAllBooksQuery,
  useGetSingleBookQuery,
} from "../../redux/book/bookApi";
import { FaBook } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { TBook, TUser } from "../../types/type";
import { useEffect } from "react";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentToken } from "@/redux/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";

const Details = () => {
  const location = useLocation();
  const { id } = useParams();
  const { data: Book } = useGetSingleBookQuery(id);
  const { data: allBooks } = useGetAllBooksQuery(undefined);

  const token = useAppSelector(useCurrentToken);
  let user;
  if (token) {
    user = verifyToken(token) as TUser;
  }
  // console.log(user);
  const admin = user?.role;

  const book = Book?.data;

  const sameCategory = allBooks?.data?.filter(
    (item: TBook) => item?.category === book?.category
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <div className="pt-16 px-10">
      <div className=" text-center font-serif pt-8 ">
        <h2 className="text-3xl mb-2 text-cyan-500">
          -- <FaBook className="inline" /> Book Details{" "}
          <FaBook className="inline" /> --{" "}
        </h2>
        <p className="max-w-3/6 mx-auto">
          Discover in-depth details about this book, including its author,
          category, price, and availability. Get insights into the story and why
          readers love it!
        </p>
      </div>
      <div className="card flex sm:flex-col md:flex-row lg:flex-row  mx-auto max-w-9/12 bg-base-100 shadow-sm mt-5 p-5  border-1 border-slate-200">
        <figure>
          <img src={book?.imageURL} alt="Movie" />
        </figure>
        <div className="card-body font-serif">
          <h2 className="card-title">{book?.title}</h2>
          <p>
            <span className="text-cyan-600">Category</span>: {book?.category}
          </p>
          <p>
            <span className="text-cyan-600">Author</span>: {book?.author}
          </p>

          <p>
            <span className="text-cyan-600">Price</span>: {book?.price} $
          </p>
          <p>
            <span className="text-cyan-600">Quantity</span>: {book?.quantity}
          </p>
          <p>
            <span className="text-cyan-600">Publisher</span>: {book?.publishert}
          </p>
          <p>
            <span className="text-cyan-600">PublicationDate</span>:{" "}
            {book?.publicationDate}
          </p>
          <p>
            <span className="text-cyan-600">Description</span>:{" "}
            {book?.description}
          </p>
          <div className="card-actions justify-start">
            <button className="btn  bg-cyan-300 hover:bg-cyan-400 border-1 hover:border-cyan-900 border-cyan-500">
              Add To Cart <IoMdCart className="text-xl" />
            </button>
            <Link to="/">
              <button className="btn  bg-cyan-300 hover:bg-cyan-400 border-1 hover:border-cyan-900 border-cyan-500">
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" text-center font-serif pt-8 ">
        <h2 className="text-3xl mb-2 text-cyan-500">
          -- <FaBook className="inline" /> Releted Book{" "}
          <FaBook className="inline" /> --{" "}
        </h2>
        <p className="max-w-3/6 mx-auto">
          More books from the{" "}
          <span className="font-bold text-cyan-400">{book?.category}</span>{" "}
          category that you may love!
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-4 mb-5 font-serif">
        {sameCategory?.map((sameBook: TBook) => {
          console.log(sameBook?._id);
          const inStock = sameBook.inStock;
          return (
            <div className="card bg-base-100 w-75 relative group   border-1 border-slate-200 shadow-lg">
              <figure className="px-5 pt-5">
                <img
                  src={sameBook.imageURL}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{sameBook?.title}</h2>
                <p className="text-cyan-600 font-bold">{sameBook?.price} $</p>
                <p className="text-cyan-600 font-bold">
                  Category: {sameBook?.category}
                </p>
                {inStock ? (
                  <p>InStock: Available</p>
                ) : (
                  <p>InStock: Unavailable</p>
                )}

                <div className="flex gap-2 flex-wrap justify-center">
                  {admin ? (
                    <div className="flex  flex-wrap justify-center gap-2">
                      <Link to={`/book-details/${sameBook?._id}`}>
                        <button className="btn px-5  bg-cyan-300 hover:bg-cyan-400 border-1 border-cyan-500 hover:border-cyan-800">
                          Details
                        </button>
                      </Link>
                      <Link to={`/book-update/${sameBook?._id}`}>
                        <button className="btn px-5  bg-cyan-300 hover:bg-cyan-400 border-1 border-cyan-500 hover:border-cyan-800">
                          Update
                        </button>
                      </Link>
                    </div>
                  ) : (
                    <Link to={`/book-details/${sameBook?._id}`}>
                      <button className="btn px-5  bg-cyan-300 hover:bg-cyan-400 border-1 border-cyan-500 hover:border-cyan-800">
                        Details
                      </button>
                    </Link>
                  )}
                  <Link to="/">
                    <button className="btn px-5  bg-cyan-300 hover:bg-cyan-400 border-1 border-cyan-500 hover:border-cyan-800">
                      Home
                    </button>
                  </Link>
                </div>
              </div>

              <div className="absolute top-[50%] invisible group-hover:visible  left-0 w-full">
                <button className="btn w-full hover:bg-cyan-400 bg-cyan-300 border-1 hover:border-cyan-500">
                  Add To Cart <IoMdCart className="text-xl" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
