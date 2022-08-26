import React, { FC } from 'react';

type Props = {
    link: string;
}

export const Button: FC<Props> = ({ link, children }) => <button>{children}</button>;

export default Button;
