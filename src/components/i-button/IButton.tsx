import React, { FC, useEffect, useState } from 'react';
import { Button } from 'antd';
import classNames from 'classnames';
import { ButtonProps } from 'antd/lib/button';
import { PlusOutlined } from '@ant-design/icons';
import { VerticalAlignBottomOutlined } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';

import './style/index.less';

export interface IButtonProps extends ButtonProps {
  /** 设置按钮的样式名 */
  className?: string;
  /** 设置按钮的应用场景类型 */
  kind?: 'download' | 'add' | 'export' | 'edit' | 'upload';
  /** 设置按钮的大小 */
  sizeValue?: '1' | '2' | '3' | '4' | '5' | '6' | '7';
}

export const IButton: FC<IButtonProps> = props => {
  const { sizeValue, kind, className, children, ...restProps } = props;
  const [paddingValue, setPaddingValue] = useState('20px');
  const [heightValue, setHeightValue] = useState('36px');

  const buttonCls = classNames('ii-button', className);

  useEffect(() => {
    switch (sizeValue) {
      case '1':
        setPaddingValue('20px');
        setHeightValue('40px');
        break;
      case '2':
        setPaddingValue('20px');
        break;
      case '3':
        setPaddingValue('15px');
        setHeightValue('32px');
        break;
      case '4':
        setPaddingValue('14px');
        setHeightValue('30px');
        break;
      case '5':
        setPaddingValue('14px');
        setHeightValue('28px');
        break;
      case '6':
        setPaddingValue('9px');
        setHeightValue('26px');
        break;
      case '7':
        setPaddingValue('9px');
        setHeightValue('24px');
        break;
      default:
        setPaddingValue('20px');
        setHeightValue('36px');
    }
  }, []);

  return (
    <Button
      // data-testid="test-button"
      className={buttonCls}
      style={{ height: `${heightValue}`, padding: `0 ${paddingValue}` }}
      {...restProps}
    >
      {kind === 'add' && <PlusOutlined />}
      {kind === 'download' && <VerticalAlignBottomOutlined />}
      {kind === 'upload' && <UploadOutlined />}
      {kind === 'export' && <UploadOutlined />}
      {kind === 'edit' && <EditOutlined />}
      {children}
    </Button>
  );
};

export default IButton;
