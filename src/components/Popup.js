import React from 'react';
import { Popconfirm } from 'antd';

export const Popup = props => {
  return (
    <Popconfirm
      title={props.title}
      onConfirm={props.onConfirm}
      onCancel={props.onCancel}
      okText={props.okText ? props.okText : "Yes"}
      cancelText={props.cancelText ? props.cancelText : "No"}
      placement={props.placement}
    >
      {props.children}
    </Popconfirm>
  );
}
