import React, { Component } from 'react';
import { connect } from 'react-redux';

import About from '../../components/about/about';
import Contact from '../../components/contact/contact';
import Skillz from '../../components/skillz/skillz';
import Experiance from '../../components/experiance/experiance';
import Education from '../../components/education/education';
import Profile from '../../components/profile/profile';
import Folio from '../../components/folio/folio';

import { IHomeComponentProps } from './home.state';

import { mapDispatchToProps, mapStateToProps } from './home.state';

import * as styles from "../../style/common.css";
import * as homeStyles from "./home.css"

export class HomeView extends Component<IHomeComponentProps, {}> {

    render() {
        console.log(JSON.stringify(this.props, undefined, 2));
        const { blogItems, abilityItems, educationItems, experianceItems } = this.props
        return(
            <div className={styles['Container']}>
            
                <Profile />

                <div> blogItems:  {JSON.stringify(blogItems, undefined, 2)} </div>
                <div> abilityItems:  {JSON.stringify(abilityItems, undefined, 2)} </div>
                <div> educationItems:  {JSON.stringify(educationItems, undefined, 2)} </div>
                <div> experianceItems:  {JSON.stringify(experianceItems, undefined, 2)} </div>
                
                <div className={homeStyles['Content']}>
                
                    <aside className={homeStyles['Description']}>
                        <About/>
                        <Experiance />
                        <Education />
                        <Folio />
                    </aside>

                    <aside className={homeStyles['Breakdown']}>
                        <Contact/>
                        <Skillz abilitiesList={abilityItems} />
                    </aside>

                </div>
            </div> 
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeView);
