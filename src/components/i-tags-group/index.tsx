import React, { useState, useRef, useEffect, FC } from 'react';
import { Tag, Input, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import type { TagProps } from 'antd/lib/tag/index';

import './index.less';

export type IDefaultTags = { closable?: boolean; text?: string } | string;
export interface ITagGroupsProps extends TagProps {
  /** 标签组默认值 */
  defaultValues?: IDefaultTags[];
  /** 添加标签文字， 默认值增加关键词 */
  addText?: string;
  /** 标签长度，超出显示tooltip 默认值20 */
  maxLength?: number;
  /** 标签组值更新回调 */
  onValuesChange?: (tags: string[]) => void;
}

const EditableTagGroup: FC<ITagGroupsProps> = (props) => {
  const {
    defaultValues = [],
    addText = '增加关键词',
    maxLength = 20,
    className = '',
    style = {},
    onValuesChange,
    ...restTag
  } = props;

  const [tags, setTags] = useState<string[]>([]);
  const [disabled, setDisbaleIndex] = useState<number[]>([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState('');

  const inputRef = useRef<Input>(null);
  const editInputRef = useRef<Input>(null);

  // defaultValues 数据初始化
  useEffect(() => {
    const disabledIndex: number[] = [];
    const defaultTags: string[] = [];
    defaultValues.forEach((item, index) => {
      const tag = typeof item === 'string' ? item : item.text || '';
      defaultTags.push(tag);
      if (typeof item === 'object' && item.closable === false) {
        disabledIndex.push(index);
      }
    });
    defaultTags.length > 0 && setTags(defaultTags);
    disabledIndex.length > 0 && setDisbaleIndex(disabledIndex);
  }, []);

  useEffect(() => {
    if (inputVisible) {
      inputRef?.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    editInputRef?.current?.focus();
  }, [editInputIndex]);

  // 通知调用组件值已经更新
  useEffect(() => {
    onValuesChange?.(tags);
  }, [tags]);

  const handleClose = (removedTag: string) => {
    const tagsR = tags.filter((tag) => tag !== removedTag);
    setTags(tagsR);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    let tagR = tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tagR = [...tags, inputValue];
    }
    setTags(tagR);
    setInputVisible(false);
    setInputValue('');
  };

  const handleEditInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setEditInputValue(e.target.value);
  };

  const handleEditInputConfirm = () => {
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    setTags(newTags);
    setEditInputValue('');
    setEditInputIndex(-1);
  };

  return (
    <div className={`ii-tags-group-container ${className}`} style={style}>
      {tags.map((tag, index) => {
        if (editInputIndex === index) {
          return (
            <Input
              ref={editInputRef}
              key={tag}
              size="small"
              className="ii-tags-group-input"
              value={editInputValue}
              onChange={handleEditInputChange}
              onBlur={handleEditInputConfirm}
              onPressEnter={handleEditInputConfirm}
            />
          );
        }

        const isLongTag = tag.length > maxLength;
        const editFlag = disabled.indexOf(index) === -1;

        const tagElem = (
          <Tag
            className="ii-tags-group-edit"
            {...restTag}
            key={tag}
            closable={editFlag}
            onClose={() => handleClose(tag)}
          >
            <span
              onDoubleClick={(e) => {
                if (editFlag) {
                  setEditInputIndex(index);
                  setEditInputValue(tag);
                  e.preventDefault();
                }
              }}
            >
              {isLongTag ? `${tag.slice(0, maxLength)}...` : tag}
            </span>
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}
      {inputVisible ? (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          className="ii-tags-group-input"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      ) : (
        <Tag className="ii-tags-group-plus" onClick={showInput}>
          <PlusOutlined /> {addText}
        </Tag>
      )}
    </div>
  );
};

export default EditableTagGroup;
