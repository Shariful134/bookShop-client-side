
import { useGetAllBooksQuery } from "../../redux/book/bookApi";
import { TBook, TUser } from "../../types/type";
import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";

const { Meta } = Card;

const GetBooks = () => {
  const token = useAppSelector(useCurrentToken);

  let user;
  if (token) {
    user = verifyToken(token) as TUser;
  }
  const admin = user?.role;

  const [bookId, setbookId] = useState<string | null>(null);

  console.log(bookId);
  const { data: booksData } = useGetAllBooksQuery(undefined);

  const allBooks = booksData?.data?.map((book: TBook) => ({
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

//   return (
//     <>
//       <Row justify="center" align="middle" gutter={[16, 16]}>
//         {allBooks?.map((item: TBook) => (
//           <Col key={item._id}>
//             <Card
//               hoverable
//               style={{
//                 width: 215,
//                 height: 360,
//               }}
//               cover={<img alt="example" src={item.imageURL} />}
//             >
//               <Meta title={item?.title} />

//               <p>
//                 Price: <span style={{ color: "#23A9E2" }}> {item.price} $</span>
//               </p>
//               <Flex justify="space-between" gap={5}>
//                 {admin === "admin" ? (
//                   <Flex wrap justify="center" align="middle" gap={5}>
//                     <Link to={`/admin/updated-book/${item._id}`}>
//                       <Button
//                         style={{ backgroundColor: "#f8f8f8" }}
//                         onClick={() => setbookId(item._id as string)}
//                       >
//                         Update
//                       </Button>
//                     </Link>
//                     <DeleteModal bookId={item._id as string}></DeleteModal>
//                   </Flex>
//                 ) : (
//                   <CreateCart bookId={item._id as string}></CreateCart>
//                 )}
//                 <Link to={`/single-book/${item._id}`}>
//                   <Button
//                     style={{ backgroundColor: "#f8f8f8" }}
//                     onClick={() => setbookId(item._id as string)}
//                   >
//                     Detals
//                   </Button>
//                 </Link>
//               </Flex>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </>
//   );
// };

// export default GetBooks;

const GetBooks = () => {
  return <div>This all Bookd</div>;
};

export default GetBooks;
