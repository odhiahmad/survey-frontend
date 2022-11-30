import React from "react";
import { Modal } from "antd";

const ConfirmationModal = ({
  visible,
  onCancel,
  onOk,
  message,
  tittle,
}) => {
  return (
    <Modal
      centered
      title={tittle}
      visible={visible}
      onCancel={onCancel}
      onOk={onOk}
      okText="Ya"
      cancelText="Tidak"
    >
      <p>{message}</p>
    </Modal>
  );
};

export default ConfirmationModal
