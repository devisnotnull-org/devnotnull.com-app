import React, { FC } from 'react';
import classnames from 'classnames';
import moment from 'moment';

import commonStyles from '../../style/common.css';
import styles from './experiance.css';
import { IExperiancePayload } from '../../../models/experiance';
import { ICommonFields } from '../../../models/common';

interface IStateProps {
  experianceList: ICommonFields<IExperiancePayload>[];
}

type Props = IStateProps;

export const Experiance: FC<Props> = ({ experianceList }) => (
  <div className={classnames(commonStyles['Block'])}>
    <h2>EXPERIENCE</h2>
    {experianceList.map(
      (item: ICommonFields<IExperiancePayload>, index: number) => (
        <section key={index} className={styles['Experiance']}>
          <aside className={styles['Experiance--Year']}>
            <div>{moment(item.fields.endDate).format('MMM')} {moment(item.fields.endDate).format('YYYY')}</div>
            <div>{moment(item.fields.startDate).format('MMM')} {moment(item.fields.startDate).format('YYYY')}</div>
          </aside>
          <div className={styles['Experiance--Description']}>
            <h3>{item.fields.company}</h3>
            <h3><i>{item.fields.jobTitle}</i></h3>
            <p>{item.fields.description}</p>
          </div>
        </section>
      )
    )}
  </div>
);

export default Experiance;
