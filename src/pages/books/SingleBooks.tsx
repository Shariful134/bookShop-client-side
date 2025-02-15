import { Link, useParams } from "react-router";
import { useGetSingleBookQuery } from "../../redux/book/bookApi";
import { Button, Col, Divider, Flex, Image, Row } from "antd";

import { Typography } from "antd";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/auth/authSlice";
import { TUser } from "../../types/type";
import { verifyToken } from "../../utils/verifyToken";
import DeleteModal from "../../components/admin/DeleteModal";

const { Title, Text } = Typography;

const SingleBooks = () => {
  const token = useAppSelector(useCurrentToken);

  let user;
  if (token) {
    user = verifyToken(token) as TUser;
  }
  const admin = user?.role;
  const { bookId } = useParams();

  const { data: singleBook } = useGetSingleBookQuery(bookId);
  console.log(singleBook?.data);
  const book = singleBook?.data;

  return (
    <>
      <Divider>
        <Title style={{ color: "#23A8E2" }}>Book Details</Title>
      </Divider>
      <Row
        justify="center"
        align="middle"
        gutter={[16, 16]}
        style={{
          padding: "10px",
          backgroundColor: "white",
          borderRadius: "5px",
          boxShadow: "3px 3px 9px #b8b9be,-3px -3px 9px #b8b9be",
          width: "fit-content",
          margin: "0 auto",
        }}
      >
        <Row
          justify="center"
          align="middle"
          gutter={[16, 16]}
          style={{
            padding: "10px",
            backgroundColor: "white",
            borderRadius: "5px",
            marginLeft: "1px",
            marginRight: "1px",
            boxShadow: "3px 5px 9px #b8b9be,-3px -3px 9px #b8b9be",
          }}
        >
          <Col key={"1"}>
            <Image width={200} src={book?.imageURL} />
          </Col>
          <Col key={"2"}>
            <Title style={{ color: "#25ABE1" }} level={3}>
              {book?.title}
            </Title>
            <Title level={4}>
              {" "}
              Category :{" "}
              <Text style={{ color: "#23A9E2" }}>{book?.category} </Text>
            </Title>

            <p>
              Price : <Text style={{ color: "#23A9E2" }}>{book?.price} $</Text>
            </p>
            <p>
              Author : <Text style={{ color: "#23A9E2" }}>{book?.author}</Text>
            </p>
            <p>
              Category :{" "}
              <Text style={{ color: "#23A9E2" }}>{book?.category} </Text>
            </p>
            <p>
              Quantity :{" "}
              <Text style={{ color: "#23A9E2" }} type="success">
                {book?.quantity}
              </Text>
            </p>
            <p style={{ width: "100%", maxWidth: 700 }}>
              Descriptoin:
              <Text style={{ color: "#23A9E2" }}> {book?.description} </Text>
            </p>
          </Col>
          <Col>
            <Flex
              justify="space-between"
              align="middle"
              style={{ marginTop: "2px" }}
              gap={5}
            >
              {admin === "admin" ? (
                <Flex wrap justify="center" align="middle" gap={5}>
                  <Link to={`/admin/updated-book/${bookId}`}>
                    <Button
                      style={{
                        boxShadow: "1px 1px 1px #b8b9be,-1px -1px 1px #fff",

                        backgroundColor: "#f8f8f8",
                      }}
                    >
                      Update
                    </Button>
                  </Link>

                  <DeleteModal bookId={bookId as string}></DeleteModal>
                </Flex>
              ) : (
                <>
                  <Button
                    style={{
                      boxShadow: "1px 1px 1px #b8b9be,-1px -1px 1px #fff",
                      backgroundColor: "#f8f8f8",
                    }}
                  >
                    Add To Cart
                  </Button>

                  <Button
                    style={{
                      boxShadow: "1px 1px 1px #b8b9be,-1px -1px 1px #fff",
                      marginRight: "8px",
                      backgroundColor: "#f8f8f8",
                    }}
                  >
                    Order
                  </Button>
                </>
              )}
              <Link to="/home">
                <Button
                  style={{
                    boxShadow: "1px 1px 1px #b8b9be,-1px -1px 1px #fff",
                    backgroundColor: "#f8f8f8",
                  }}
                >
                  All Books
                </Button>
              </Link>
            </Flex>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default SingleBooks;
