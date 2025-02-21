import { useGetSingleBookQuery } from "@/redux/book/bookApi";
import { Link, useParams } from "react-router-dom";

import ModalOrder from "./ModalOrder";
import { Button } from "@/components/ui/button";

const Order = () => {
  const { id } = useParams();

  const { data: Book } = useGetSingleBookQuery(id);

  const book = Book?.data;
  console.log("order: ", id);
  return (
    <div className="pt-18">
      <div className="card flex sm:flex-col md:flex-row lg:flex-row  mx-auto max-w-9/12  shadow-2xl  mt-5 p-5  ">
        <figure>
          <img src={book?.imageURL} alt="Movie" />
        </figure>
        <div className="card-body font-serif">
          <div className="flex justify-between items-end">
            <h2 className="card-title">{book?.title}</h2>
          </div>
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
            <span className="text-cyan-600">Publisher</span>: {book?.publisher}
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
            <Link to="/">
              <Button
                className="btn border-1 font-serif rounded-full border-gray-600 bg-amber-100 hover:bg-amber-200"
                variant="outline"
              >
                Home
              </Button>
            </Link>
            <ModalOrder id={book?._id}></ModalOrder>
            {/* <Link to="#">
              <button className="btn border-1 font-serif rounded-full border-gray-600 bg-amber-100 hover:bg-amber-200">
                Order Confirm
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
