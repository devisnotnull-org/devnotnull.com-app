import * as React from 'react';
import { Link as RouterLink } from "react-router-dom";

const isExternalLink = (path: string) => {
  return path.includes('http')
}

export type IProps = {
  to: string
  classNames?: string 
}

export const Link: React.SFC<IProps> = ({ to, children, classNames }) => (
  isExternalLink(to) 
    ? <a href={to} className={classNames}>{children}</a>
    : <RouterLink to={to} className={classNames}>{children}</RouterLink>
);

export default Link;
