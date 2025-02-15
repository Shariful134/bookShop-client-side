import { Button, Modal } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { useBlockUserMutation } from "../../redux/user/userApi";

const UserUnblockedModal = ({ userId }: { userId: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [unBlockUser] = useBlockUserMutation();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    unBlockUser(userId);
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
          UnBlock
        </Button>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Title level={3}> UnBlock!- are you Sure ?</Title>
        </Modal>
      </>
    </div>
  );
};

export default UserUnblockedModal;
