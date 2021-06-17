import React, { FC, useEffect } from 'react';
import { Pagination, ConfigProvider } from 'antd';
import classNames from 'classnames';
import zhCN from 'antd/lib/locale/zh_CN';
import type { PaginationProps } from 'antd/lib/pagination';

import './index.less';

export interface IPaginationProps extends Omit<PaginationProps, 'size'> {
  /** 设置按钮的样式名 */
  className?: string;
  /** 设置按钮的大小 */
  size?: 'compact' | 'round' | PaginationProps['size'];
}
export const IPagination: FC<IPaginationProps> = (props) => {
  const { className, size, ...restProps } = props;

  useEffect(() => {
    document.getElementsByClassName(
      'ant-pagination-options-quick-jumper',
    )[0].childNodes[0].nodeValue = '前往';
  }, []);

  const paginationCls = classNames('ii-pagination', className);

  return (
    <ConfigProvider locale={zhCN}>
      <Pagination
        data-testid="test-pagination"
        className={
          size ? `${paginationCls} ii-pagination-${size}` : paginationCls
        }
        size={size === 'small' ? 'small' : 'default'}
        showTotal={(total) => size !== 'small' && `共 ${total} 条`}
        {...restProps}
      />
    </ConfigProvider>
  );
};

export default IPagination;
