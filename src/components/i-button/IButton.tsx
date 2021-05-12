import React, { FC, useEffect, useState } from 'react';
import { Button } from 'antd';
import classNames from 'classnames';
import { ButtonProps } from 'antd/lib/button';

import './style/index.less';

export interface IButtonProps extends Omit<ButtonProps, 'size'> {
  /** 设置按钮的样式名 */
  className?: string;
  /** 设置按钮的大小 */
  size?: 'xl' | 'default' | 'lg' | 'md' | 'sm' | 'xs' | 'xss';
}

export const IButton: FC<IButtonProps> = props => {
  const { size, className, children, ...restProps } = props;
  const [paddingValue, setPaddingValue] = useState<string>('20px');
  const [heightValue, setHeightValue] = useState<string>('36px');

  const buttonCls = classNames('ii-button', className);

  useEffect(() => {
    switch (size) {
      case 'xl':
        setPaddingValue('20px');
        setHeightValue('40px');
        break;
      case 'default':
        setPaddingValue('20px');
        break;
      case 'lg':
        setPaddingValue('15px');
        setHeightValue('32px');
        break;
      case 'md':
        setPaddingValue('14px');
        setHeightValue('30px');
        break;
      case 'sm':
        setPaddingValue('14px');
        setHeightValue('28px');
        break;
      case 'xs':
        setPaddingValue('9px');
        setHeightValue('26px');
        break;
      case 'xss':
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
      {children}
    </Button>
  );
};

export default IButton;
