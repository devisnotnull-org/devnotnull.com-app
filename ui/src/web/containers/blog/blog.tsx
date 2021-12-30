import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';
import { getBlogItems } from '../../../core/blog/selectors';

import { IBlogComponentProps } from './blog.state';

import blogStyles from './blog.css';
import { ICommonDataNode } from 'models/common';

export type IProps = {
  to: string;
};

const getType = (marks: { type: string }[] | undefined): string => {
  if (!marks) return 'text';
  if (marks.find(item => item.type === 'bold')) return 'bold';
  if (marks.find(item => item.type === 'code')) return 'code';
  return 'text';
};

const renderCommonContentType = (
  content: ICommonDataNode[]
): (JSX.Element[] | undefined)[] => {
  return content?.map(payload =>
    payload.content?.map(inner => {
      if (inner.nodeType === 'list-item')
        return <p>{JSON.stringify(inner.content)}</p>;
      if (getType(inner.marks) === 'code')
        return (
          <pre className={classnames(blogStyles['Code'])}>{inner.value}</pre>
        );
      if (getType(inner.marks) === 'bold')
        return (
          <p>
            <b>{inner.value}</b>
          </p>
        );
      return <p>{inner.value}</p>;
    })
  );
};

export const BlogView: FC<IBlogComponentProps> = () => {
  const blogItems = useSelector(getBlogItems);
  return (
    <div className={blogStyles.InnerContainer}>
      {blogItems.map(item => {
        return (
          <div className={blogStyles['Entry--Container']}>
            <h1 className={blogStyles['Entry--Header']}>
              {item?.fields?.title ?? ''}
            </h1>
            <div>
              {item?.fields?.blogContent?.content &&
                renderCommonContentType(item?.fields?.blogContent?.content)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogView;
