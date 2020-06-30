import React, { FC } from 'react';
import { Modal, Button } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import classNames from 'classnames/bind';

interface IIModalProps extends ModalProps {
  /** 模态框标题 */
  title: React.ReactNode;
  /** 确定按钮文案 */
  btnOkText?: string;
  /** 加载状态 */
  loading?: boolean;
}

const IModal: FC<IIModalProps> = (props) => {
  const { title, children, onCancel, onOk, btnOkText = '确定', loading, className, ...restProps } = props;

  const modalCls = classNames('commonModal', className);

  return (
    <Modal
      data-testid="test-modal"
      title={<div style={{ textAlign: 'center' }}>{title}</div>}
      className={modalCls}
      onCancel={onCancel}
      onOk={onOk}
      footer={[
        <Button key="cancel" onClick={onCancel} className=".cancelBtn">
          取消
        </Button>,
        <Button type="primary" key="create" onClick={onOk} className="btn" loading={loading}>
          {btnOkText}
        </Button>,
      ]}
      {...restProps}
    >
      {children}
    </Modal>
  );
};

IModal.defaultProps = {
  btnOkText: '确定',
  loading: false,
};

export default IModal;
