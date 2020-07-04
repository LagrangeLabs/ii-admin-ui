import React, { FC } from 'react';
import { Modal } from 'antd';
import classNames from 'classnames';
import { ModalProps } from 'antd/lib/modal';

export interface IModalProps extends ModalProps {
  /** 对话框标题 */
  title?: React.ReactNode | string;
}

export const IModal: FC<IModalProps> = (props) => {
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
