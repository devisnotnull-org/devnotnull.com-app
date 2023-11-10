import React from "react";
import { Link as RouterLink } from "react-router-dom";

const isExternalLink = (path: string) => {
  return path?.includes("http");
};

export type IProps = {
  to: string;
  classNames?: string;
  children?: React.ReactNode;
};

export const Link = ({ to, children, classNames }: IProps): JSX.Element =>
  isExternalLink(to) ? (
    <a href={to} className={classNames} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <RouterLink to={to} className={classNames}>
      {children}
    </RouterLink>
  );

export default Link;
