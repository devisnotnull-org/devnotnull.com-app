import * as React from 'react';
import { Link as RouterLink } from "react-router-dom";

const isExternalLink = (path: string) => {
  console.log('IS THIS A MATCH ,', path,  path.includes('http'))
  return path.includes('http')
}

export type IProps = {
  to: string
}

export const Link: React.SFC<IProps> = ({ to, children }) => (
  isExternalLink(to) 
    ? <a href={to}>{children}</a>
    : <RouterLink to={to}>{children}</RouterLink>
);

export default Link;
