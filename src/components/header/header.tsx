import React from 'react';

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps | ActionProps | SelectorProps

export const Header: React.SFC<Props> = () => (

    <div>
        <div>
            <b>
                <a href="/">About Me</a>
            </b>
        </div>
        <div>
            <b>
            <a href="/blog">Blog</a>
            </b>
        </div>   
    </div>    

);

export default Header;
