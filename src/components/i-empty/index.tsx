import React from 'react';
import { Empty } from 'antd';

import { EmptyProps } from 'antd/lib/empty/index';

import NoDataPng from '../../assets/noData.png';
import DataLosePng from '../../assets/dataLose.png';
import NoFilePng from '../../assets/noFile.png';
import NoFormPng from '../../assets/noForm.png';
import NoMailPng from '../../assets/noMail.png';
import NoOrderPng from '../../assets/noOrder.png';
import NoSourcePng from '../../assets/noSource.png';

import './index.less';

export interface IEmptyProps extends EmptyProps {
  /** 空状态类型 */
  type?: 'data' | 'dataLose' | 'file' | 'form' | 'mail' | 'order' | 'source';
  /** 自定义描述内容 */
  description?: React.ReactNode;
  /** 设置显示图片，为 string 时表示自定义图片地址。	ReactNode	Empty.PRESENTED_IMAGE_DEFAULT */
  image?: React.ReactNode;
  /** 图片样式 { width: 220, height: 220 } */
  imageStyle: React.CSSProperties;
}

const TYPE = {
  data: {
    description: '数据丢失',
    image: NoDataPng,
  },
  dataLose: {
    description: '数据丢失',
    image: DataLosePng,
  },
  file: {
    description: '暂无文件',
    image: NoFilePng,
  },
  form: {
    description: '暂无表单',
    image: NoFormPng,
  },
  mail: {
    description: '暂无邮件',
    image: NoMailPng,
  },
  order: {
    description: '暂无订单',
    image: NoOrderPng,
  },
  source: {
    description: '暂无资料',
    image: NoSourcePng,
  },
};
function IEmpty(props: IEmptyProps) {
  const {
    type,
    image,
    description,
    imageStyle = { width: 220, height: 220 },
    ...restProps
  } = props;

  const typeInfo = type && TYPE[type];
  const result = {
    image: image || typeInfo?.image,
    description:
      typeof description === 'undefined' ? typeInfo?.description : description,
    imageStyle,
  };

  return <Empty {...result} {...restProps}></Empty>;
}

export default IEmpty;
