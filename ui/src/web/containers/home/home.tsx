import React, { FC } from 'react';
import { connect } from 'react-redux';

import About from '../../components/about/about';
import Contact from '../../components/contact/contact';
import Skillz from '../../components/skillz/skillz';
import Experiance from '../../components/experiance/experiance';
import Education from '../../components/education/education';

import { IHomeComponentProps } from './home.state';
import { mapDispatchToProps, mapStateToProps } from './home.state';

import * as homeStyles from './home.css';

export const HomeView: FC<IHomeComponentProps> = ({
  abilityItems,
  educationItems,
  experianceItems,
  metadata,
  contactItems
}) => {
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
          <Contact contactList={contactItems} />
        </aside>
      </div>
    </>
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
