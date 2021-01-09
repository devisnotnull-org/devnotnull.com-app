import React, { MouseEvent, FC } from 'react';
import { Link as RouterLink } from "react-router-dom";

const isExternalLink = (path: string) => {
  return path.includes('http')
}

export type IProps = {
  to: string
  classNames?: string
  onClick?(event: MouseEvent): void
}

export const Link: FC<IProps> = ({ to, children, classNames, onClick }) => (
  isExternalLink(to) 
    ? <a href={to} className={classNames} target="_blank" onClick={(event: MouseEvent) => { if(onClick) onClick(event) }}>{children}</a>
    : <RouterLink to={to} className={classNames} onClick={(event: MouseEvent) => { if(onClick) onClick(event) }}>{children}</RouterLink>
);

export default Link;
