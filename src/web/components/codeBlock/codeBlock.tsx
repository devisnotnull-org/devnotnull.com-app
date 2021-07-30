import React, { Fragment } from 'react';

import * as codeBlockStyles from './codeBlock.css';

export type IBlockMarks = {
  type: string;
};

export type IProps = {
  content?: any;
  marks?: IBlockMarks[];
};

export const CodeBlock: React.FC<IProps> = ({ marks, content }) => {
  const codeMark =
    marks && marks.find((dd: IBlockMarks) => dd?.type === 'code');
  const codeBold =
    marks && marks.find((dd: IBlockMarks) => dd?.type === 'bold');
  if (!content) return <Fragment></Fragment>;
  if (codeMark)
    return <pre className={codeBlockStyles['Block--Code']}>{content}</pre>;
  if (codeBold) return <b>{content}</b>;
  return <span>{content}</span>;
};

export default CodeBlock;
