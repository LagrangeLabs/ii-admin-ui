import React, { FC } from 'react';
import { Modal } from 'antd';
import classNames from 'classnames';
import { ModalProps } from 'antd/lib/modal';

const IModal: FC<ModalProps> = (props) => {
  const { title, className, children, ...restProps } = props;

  const modalCls = classNames('ii-modal', className);

  return (
    <Modal
      data-testid="test-modal"
      title={<div style={{ textAlign: 'center' }}>{title}</div>}
      className={modalCls}
      {...restProps}
    >
      {children}
    </Modal>
  );
};

export default IModal;
