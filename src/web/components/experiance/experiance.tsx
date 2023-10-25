import React, { FC } from 'react';
import moment from 'moment';
import Richtext from '@components/richtext/richtext'

import { IExperiancePayload } from '../../../models/experiance';
import { ICommonFields } from '../../../models/common';

type Props = {
  experianceList: ICommonFields<IExperiancePayload>[];
}

export const Experiance: FC<Props> = ({ experianceList }) => (
  <div className='mb-2'>
    <h1 className='text-2xl py-3.5 my-2 text-center'>Experience</h1>
    {experianceList.map(
      (item: ICommonFields<IExperiancePayload>, index: number) => (
        <div key={index} className='rounded-2xl ring-1 ring-inset ring-gray-900/10 p-5 mb-2'>
          <h3 className='font-bold mr-1.5 mb-1.5 text-lg'>{item.fields.company}</h3>
          <h3 className='italic mr-1.5 mb-1.5 text-lg'>{item.fields.jobTitle}</h3>
          <h3 className='mr-1.5 mb-1.5 text-lg font-grey-500'>
            <span>{moment(item.fields.startDate).format('MMM')} {moment(item.fields.startDate).format('YYYY')}</span>
            <span> - </span>
            <span>{moment(item.fields.endDate).format('MMM')} {moment(item.fields.endDate).format('YYYY')}</span>
          </h3>
          {item.fields.summary && <Richtext assets={[]} payload={item.fields.summary}/>}
        </div>
      )
    )}
  </div>
)

export default Experiance;
