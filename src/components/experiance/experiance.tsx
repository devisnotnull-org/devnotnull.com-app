import * as React from 'react';
import classnames from 'classnames';

import * as commonStyles from '../../style/common.css'
import * as styles from './experiance.css'
import { IExperiancePayload } from '../../models/experiance';
import { ICommonFields } from '../../models/common';

interface IStateProps {
    experianceList: ICommonFields<IExperiancePayload>[]
}

type Props = IStateProps

export const Experiance: React.SFC<Props> = ({ experianceList }) => (
    <div className={classnames(commonStyles['Block'])}>
        <h2>EXPERIENCE</h2>
        {experianceList.map((item:  ICommonFields<IExperiancePayload>, index: number) => (
            <section key={index} className={styles['Experiance']}>
                <aside className={styles['Experiance--Year']}>
                    <div>{item.fields.startDate}</div>
                    <div>{item.fields.endDate}</div>
                </aside>
                <div className={styles['Experiance--Description']}>
                    <h3>{item.fields.company}</h3>
                    <div>{item.fields.description}</div>
                </div>
            </section>
        ))}
    </div>
);

export default Experiance;
