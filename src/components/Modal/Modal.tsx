import React, { FC } from 'react';
import { Modal } from 'antd';
import classNames from 'classnames';
import { ModalProps } from 'antd/lib/modal';

export interface IModalProps extends ModalProps {
  /** 标题 */
  title: React.ReactNode | string;
}

/**
 * Modal 对话框
 *
 * ### 如何引用
 *
 * ~~~javascript
 * import { IModal } from 'ii-admin-ui'
 * ~~~
 */
export const IModal: FC<ModalProps> = (props) => {
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
