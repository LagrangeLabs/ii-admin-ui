import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions'; // 记录组件行为
import Modal from './Modal';

const WrappedModal = () => {
  return (
    <div style={{ width: '400px' }}>
      <Modal title="模态框" visible={true}>
        hello world
      </Modal>
    </div>
  );
};

storiesOf('模态框', module)
  // 如果要自动显示组件的注释，需将当前 Story 的名称改成和组件名称一样
  .add('Modal', WrappedModal);
