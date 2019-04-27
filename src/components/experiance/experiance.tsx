import * as React from 'react';
import classnames from 'classnames';

import * as commonStyles from '../../style/common.css'
import * as styles from './experiance.css'
import { experiancePayload } from '../../common/data';

//

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps

export const Experiance: React.SFC<Props> = () => (
    <div className={classnames(commonStyles['Block'])}>
        <h2>EXPERIENCE</h2>
        {experiancePayload.map((item) => (
            <section className={styles['Experiance']}>
                <aside className={styles['Experiance--Year']}>{item.year}</aside>
                <div className={styles['Experiance--Description']}>
                    <h3>{item.company}</h3>
                    <h4>{item.title}</h4>
                    {item.description.map((descriptiveItem) => <p>{descriptiveItem}</p>)}
                </div>
            </section>
        ))}
    </div>
);

export default Experiance;
