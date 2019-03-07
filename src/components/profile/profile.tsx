import * as React from 'react';

import * as styles from './profile.css'

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps | ActionProps | SelectorProps

export const Profile: React.SFC<Props> = () => (
    <div
        className={styles.HeaderClass}>
    </div>    
);

export default Profile;
