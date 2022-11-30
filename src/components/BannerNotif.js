import React from "react";
import { Modal, Result, Button } from "antd";

export const BannerNotif = ({
  visible,
  onCancel,
  message,
  messageTittle,
  status,
}) => {
  return (
    <Modal
      centered
      title=""
      visible={visible}
      onCancel={onCancel}
      width={"50%"}
      okText={null}
      maskClosable={false}
      footer={null}
    >
      <Result
        status={status}
        title={messageTittle}
        subTitle={message}
        extra={[
          <Button type="primary" key="console" onClick={() => onCancel()}>
            Kembali
          </Button>,
        ]}
      />
    </Modal>
  );
};
