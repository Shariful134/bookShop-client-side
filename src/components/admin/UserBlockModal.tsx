import { Button, Modal } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { useBlockUserMutation } from "../../redux/user/userApi";

const UserBlockModal = ({ userId }: { userId: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blockUser] = useBlockUserMutation();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    blockUser(userId);
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
          Block
        </Button>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Title level={3}> Block!- are you Sure ?</Title>
        </Modal>
      </>
    </div>
  );
};

export default UserBlockModal;
