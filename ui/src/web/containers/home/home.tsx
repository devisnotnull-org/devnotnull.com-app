import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { getAbilityItems } from '@core/ability/selectors';
import { getExperianceItems } from '@core/experiance/selectors';
import { getEducationItems } from '@core/education/selectors';
import { getMetadata } from '@core/metadata/selectors';

import About from '@components/about/about';
import Skillz from '@components/skillz/skillz';
import Experiance from '@components/experiance/experiance';
import Education from '@components/education/education';

import { IHomeComponentProps } from './home.state';

import homeStyles from './home.css';

export const HomeView: FC<IHomeComponentProps> = () => {
  const abilityItems = useSelector(getAbilityItems);
  const educationItems = useSelector(getEducationItems);
  const experianceItems = useSelector(getExperianceItems);
  const metadata = useSelector(getMetadata);

  return (
    <>
      <About metadata={metadata} />
      <div className={homeStyles['Content']}>
        <aside className={homeStyles['Description']}>
          <Experiance experianceList={experianceItems} />
          <Education educationList={educationItems} />
        </aside>
        <aside className={homeStyles['Breakdown']}>
          <Skillz abilitiesList={abilityItems} />
        </aside>
      </div>
    </>
  );
}


export default HomeView
