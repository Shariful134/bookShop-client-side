import { Button, Card, Col, Flex, Row } from "antd";
import { useGetAllBooksQuery } from "../../redux/book/bookApi";
import { TBook } from "../../types/type";
import { useState } from "react";
import { Link } from "react-router";

const { Meta } = Card;

const AllBooks = () => {
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

  return (
    <>
      <Row justify="center" align="middle" gutter={[16, 16]}>
        {allBooks?.map((item: TBook) => (
          <Col key={item._id}>
            <Card
              hoverable
              style={{
                width: 210,
                height: 350,
              }}
              cover={<img alt="example" src={item.imageURL} />}
            >
              <Meta title={item?.title} />

              <p>
                Price: <span style={{ color: "#23A9E2" }}> {item.price} $</span>
              </p>
              <Flex justify="space-between" style={{ marginTop: "2px" }}>
                <Button style={{ marginRight: "4px" }}>Add To Cart</Button>
                <Link to={`/single-book/${item._id}`}>
                  <Button onClick={() => setbookId(item._id as string)}>
                    Detals
                  </Button>
                </Link>
              </Flex>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllBooks;
