import React from 'react';
import { Table } from 'antd';
import classNames from 'classnames';
import { TableProps, TablePaginationConfig, ColumnProps } from 'antd/lib/table';

export interface IITableProps<T> extends TableProps<T> {
  /** 数据总数 */
  total?: number;
}

export interface IIColumnProps<T> extends ColumnProps<T> {}

export const ITable = <T extends object = any>(props: IITableProps<T>) => {
  const { className, bordered, total, pagination, ...restProps } = props;
  let paginationCfg: TablePaginationConfig | false;
  const tableCls = classNames('ii-table', className);

  // 默认分页配置项
  const defaultPagination: TablePaginationConfig = {
    total,
    showQuickJumper: true,
    showSizeChanger: true,
    size: 'small',
    showTotal: (total: number) => (
      <div>
        共有<span className="ii-table-total">{total}</span>条数据满足条件
      </div>
    ),
    pageSize: 10,
    defaultCurrent: 1,
  };

  // 用户可能将 total 值放置在 pagination 中
  if (total || pagination) {
    if (pagination) {
      paginationCfg = { ...defaultPagination, ...pagination };
    } else {
      paginationCfg = defaultPagination;
    }
  } else {
    paginationCfg = false;
  }

  return <Table data-testid="test-table" bordered className={tableCls} {...restProps} pagination={paginationCfg} />;
};

ITable.defaultProps = {
  total: 0,
  borderd: true,
};

export default ITable;
