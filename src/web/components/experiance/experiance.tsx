import React, { FC } from 'react';
import classnames from 'classnames';
import moment from 'moment';
import Richtext from '@components/richtext/richtext'

import commonStyles from '../../style/common.css';
import { IExperiancePayload } from '../../../models/experiance';
import { ICommonFields } from '../../../models/common';

import styles from './experiance.css';

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
          <div className={styles['Experiance--Description']}>
            <h3 className={styles['Experiance--Heading']}>{item.fields.company}</h3>
            <h3 className={styles['Experiance--Heading']}><i>{item.fields.jobTitle}</i></h3>
            <h3 className={classnames(styles['Experiance--Heading'], styles['Experiance--Date'])}>
              <span>{moment(item.fields.startDate).format('MMM')} {moment(item.fields.startDate).format('YYYY')}</span>
              <span> - </span>
              <span>{moment(item.fields.endDate).format('MMM')} {moment(item.fields.endDate).format('YYYY')}</span>
            </h3>
            {item.fields.summary && <p><Richtext assets={[]} payload={item.fields.summary}/></p>}
            
          </div>
        </section>
      )
    )}
  </div>
  )


export default Experiance;
