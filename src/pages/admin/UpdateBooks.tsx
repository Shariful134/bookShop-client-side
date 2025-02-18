import { FaBook } from "react-icons/fa";
import Details from "../books/Details";

const UpdateBooks = () => {
  return (
    <div className="pt-10">
      <div className=" text-center font-serif pt-8 ">
        <h2 className="text-3xl mb-2 text-cyan-500">
          -- <FaBook className="inline" /> Book Update{" "}
          <FaBook className="inline" /> --{" "}
        </h2>
        <p className="max-w-3/6 mx-auto">
          Discover in-depth details about this book, including its author,
          category, price, and availability. Get insights into the story and why
          readers love it!
        </p>
      </div>
      <div className="flex justify-center">
        <h2 className="text-4xl">Here is your Update input</h2>
      </div>
      <Details></Details>
    </div>
  );
};

export default UpdateBooks;
