import React, { FC } from 'react';

import { ICommonFields } from '../../../models/common';
import { IAbillityPayload } from '../../../models/abillity';

export interface ISkillsValueProps {
  values: string[];
}

export const SkillzValue: FC<ISkillsValueProps> = ({ values }) => (
  <div>
    {values.map((item: string, index: number) => {
      return (
        <span key={index} className='inline-block p-2 bg-neutral-200 mr-1.5 mb-1.5 font-bold text-sm'>
          {item}
        </span>
      );
    })}
  </div>
);

interface ISkillzProps {
  abilitiesList: ICommonFields<IAbillityPayload>[];
}

type Props = ISkillzProps;

export const Skillz: FC<Props> = ({ abilitiesList }) => (
  <div>
    <h2><b>Skills</b></h2>
    {abilitiesList.map(
      (item: ICommonFields<IAbillityPayload>, index: number) => {
        return (
          <div key={index}>
            <div className='bg-orange-600 p-2 text-white'>{item.fields.subject}</div>
            <SkillzValue values={item.fields.skills} />
          </div>
        );
      }
    )}
  </div>
);

export default Skillz;
