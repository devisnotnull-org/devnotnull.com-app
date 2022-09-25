import React, { FC } from 'react';
import classnames from 'classnames';
import moment from 'moment';

import { IEducationPayload } from '../../../models/education';
import { ICommonFields } from '../../../models/common';

import commonStyles from '../../style/common.css';
import styles from './education.css';

interface IStateProps {
  educationList: ICommonFields<IEducationPayload>[];
}

type Props = IStateProps;

export const Education: FC<Props> = ({ educationList }) => (
  <div className={classnames(commonStyles['Block'])}>
    <h2>EDUCATION</h2>
    {educationList.map(
      (item: ICommonFields<IEducationPayload>, index: number) => (
        <section key={index} className={styles['Education']}>
          <div className={styles['Education--Description']}>
            <h3>{item.fields.institute}</h3>
            <h3>{item.fields.subject}</h3>

            <h3 className={classnames(styles['Education--Heading'], styles['Education--Date'])}>
              <span>{moment(item.fields.startDate).format('MMM')} {moment(item.fields.startDate).format('YYYY')}</span>
              <span> - </span>
              <span>{moment(item.fields.endDate).format('MMM')} {moment(item.fields.endDate).format('YYYY')}</span>
            </h3>


          </div>
          <div>
            {item.fields.qualifications.map(qualification => (
              <p>{qualification}</p>
            ))}
          </div>
        </section>
      )
    )}
  </div>
);

export default Education;

/**
 * 
 */