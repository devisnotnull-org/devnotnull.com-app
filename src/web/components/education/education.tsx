import * as React from 'react';
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

export const Education: React.FC<Props> = ({ educationList }) => (
  <div className={classnames(commonStyles['Block'])}>
    <h2>EXPERIENCE</h2>
    {educationList.map(
      (item: ICommonFields<IEducationPayload>, index: number) => (
        <section key={index} className={styles['Education']}>
          <aside className={styles['Education--Year']}>
            <div>
              {moment(item.fields.startDate).format('YYYY')} -{' '}
              {moment(item.fields.endDate).format('YYYY')}
            </div>
          </aside>
          <div className={styles['Education--Description']}>
            <h3>{item.fields.institute}</h3>
            <p>{item.fields.subject}</p>
          </div>
          <div>
            {item.fields.qualifications.map(qualification => {
              <p>{qualification}</p>;
            })}
          </div>
        </section>
      )
    )}
  </div>
);

export default Education;
