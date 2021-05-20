import React, { FC, useEffect, useMemo, useState } from 'react';
import { Button } from 'antd';
import classNames from 'classnames';
import type { ButtonProps } from 'antd/lib/button';

import './index.less';
export interface IButtonProps extends Omit<ButtonProps, 'size'> {
  /** 设置按钮的样式名 */
  className?: string;
  /** 设置按钮的大小 */
  size?:
    | 'xl'
    | 'default'
    | 'lg'
    | 'md'
    | 'sm'
    | 'xs'
    | 'xss'
    | ButtonProps['size'];
}

export const IButton: FC<IButtonProps> = (props) => {
  const { size, className, children, ...restProps } = props;

  const buttonCls = classNames('ii-button', className);

  const mapSize = new Map();
  mapSize.set('xl', [20, 40]);
  mapSize.set('default', [20, 36]);
  mapSize.set('lg', [15, 32]);
  mapSize.set('md', [14, 30]);
  mapSize.set('sm', [14, 28]);
  mapSize.set('xs', [9, 26]);
  mapSize.set('xss', [9, 24]);
  mapSize.set('large', [20, 40]);
  mapSize.set('middle', [20, 36]);
  mapSize.set('small', [9, 22]);

  const style = useMemo(
    () => ({
      height:
        `${mapSize.get(size)?.[1]}px` || `${mapSize.get('default')?.[1]}px`,
      padding:
        `0 ${mapSize.get(size)?.[0]}px` || `0 ${mapSize.get('default')?.[0]}px`,
      borderRadius: mapSize.get(size)?.[1] > 30 ? '4px' : '5px',
      ...restProps.style,
    }),
    [size],
  );

  return (
    <Button
      data-testid="test-button"
      className={buttonCls}
      {...restProps}
      style={style}
    >
      {children}
    </Button>
  );
};

export default IButton;
