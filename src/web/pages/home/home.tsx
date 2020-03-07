import React, { Component } from 'react';
import { connect } from 'react-redux';

import About from '../../components/about/about';
import Contact from '../../components/contact/contact';
import Skillz from '../../components/skillz/skillz';
import Experiance from '../../components/experiance/experiance';
import Education from '../../components/education/education';
import Profile from '../../components/profile/profile';
import Folio from '../../components/folio/folio';

import { Favicon } from '../../common/favicon/favicon'

import { IHomeComponentProps } from './home.state';

import { mapDispatchToProps, mapStateToProps } from './home.state';

import * as styles from "../../../style/common.css";
import * as homeStyles from "./home.css"

export class HomeView extends Component<IHomeComponentProps, {}> {

    render() {
        const { abilityItems, educationItems, experianceItems, metadata, contactItems } = this.props
        return(
            <div className={homeStyles['Content']}>
                <aside className={homeStyles['Description']}>
                    <About metadata={metadata}/>
                    <Experiance experianceList={experianceItems} />
                    <Education educationList={educationItems} />
                </aside>
                <aside className={homeStyles['Breakdown']}>
                    <Contact contactList={contactItems}/>
                    <Skillz abilitiesList={abilityItems} />
                </aside>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeView);
