import { Button } from "antd";

const CreateCart = ({ bookId }: { bookId: string }) => {
  console.log(bookId);
  return (
    <>
      <Button style={{ marginRight: "4px" }}>Add To Cart</Button>
    </>
  );
};

export default CreateCart;
