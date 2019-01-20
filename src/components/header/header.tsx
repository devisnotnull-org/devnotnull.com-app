import * as React from 'react';

import * as styles from './header.css'

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps | ActionProps | SelectorProps

export const Header: React.SFC<Props> = () => (

    <div
        className={styles.Header}>
        <div
            className={styles.Item}>
            <b>
                <a href="/">About Me</a>
            </b>
        </div>
        <div
            className={styles.Item}>
            <b>
            <a href="/blog">Blog</a>
            </b>
        </div>   
    </div>    

);

export default Header;
