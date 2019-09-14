import React from 'react';
import { connect } from 'react-redux';

import About from '../../components/about/about';
import Contact from '../../components/contact/contact';
import Skillz from '../../components/skillz/skillz';
import Experiance from '../../components/experiance/experiance';
import Education from '../../components/education/education';
import Profile from '../../components/profile/profile';
import Folio from '../../components/folio/folio';

import * as styles from "../../style/common.css";
import * as homeStyles from "./home.css"

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps

export class HomeView extends React.Component<Props> {

    render() {
        return(
            <div className={styles['Container']}>
            
                <Profile />
                
                <div className={homeStyles['Content']}>
                
                    <aside className={homeStyles['Description']}>
                        <About/>
                        <Experiance />
                        <Education />
                        <Folio />
                    </aside>

                    <aside className={homeStyles['Breakdown']}>
                        <Contact/>
                        <Skillz />
                    </aside>

                </div>
            </div> 
        )
    }
}

const mapStateToProps = (state: {}) => ({});

export default connect(mapStateToProps,{})(HomeView);
