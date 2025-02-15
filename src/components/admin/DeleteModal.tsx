import { useState } from "react";
import { useDeletebookMutation } from "../../redux/book/bookApi";

const DeleteModal = ({ bookId }: { bookId: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteBook] = useDeletebookMutation();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    deleteBook(bookId);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <>
        <Button
          style={{
            boxShadow: "1px 1px 1px #b8b9be,-1px -1px 1px #fff",
            backgroundColor: "#f8f8f8",
          }}
          onClick={showModal}
        >
          Delete
        </Button>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Title level={3}> Delete- are you Sure ?</Title>
        </Modal>
      </>
    </div>
  );
};

export default DeleteModal;
