import React from 'react';
import { Popconfirm } from 'antd';
import { PopconfirmProps } from 'antd/lib/popconfirm';

import './index.less';

function IPopconfirm(props: PopconfirmProps) {
  const { okText = '是', cancelText = '否', ...restProps } = props;

  return (
    <Popconfirm
      {...restProps}
      okText={okText}
      cancelText={cancelText}
    ></Popconfirm>
  );
}

export default IPopconfirm;
