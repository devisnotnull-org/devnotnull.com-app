import * as React from 'react';
import classnames from 'classnames';

import * as styles from './header.css'

interface StateProps {
    classes: string
}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps

export const Header: React.SFC<Props> = ({ classes }) => (

    <div
        className={
            classnames([
                styles.Header,
                classes
            ])}>
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
