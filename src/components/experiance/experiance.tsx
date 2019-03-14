import * as React from 'react';
import classnames from 'classnames';

import * as commonStyles from '../../style/common.css'
import * as styles from './experiance.css'

//

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps

interface ExperiancePayload {
    year: string
    company: string
    title: string
    description: string[]
}

const experiancePayload: ExperiancePayload[] = [
    {
        "year": "2017 - 2019",
        "company": "Kingfisher Digital",
        "title": "Lead developer / Full Stack Developer",
        "description": [
            'Over the previous two years I have been 1 of 5 lead developer’s within Kingfisher Digital’s new digital Hub, managing up to 50 developer’s across a shared hierarchy.',
            'The projects have been varied; my primary focus has been towards the expanding React/Typescript & Express/Typescript oriented stack’s we have deployed across our various front and backend estates. The most interesting project was when my team was tasked with implementing Augmented reality using ARKIT within the core B&Q IOS app.',
            'I have also been involved in all levels of conversation across the digital platform; Solution design, Systems architecture, Staffing, Tooling, Vendor sign offs & System operation’s.'
        ]
    },
    {
        "year": "2012 - 2017",
        "company": "SecureData Europe",
        "title": "Software Engineer / Full Stack Developer",
        "description": [
            'This was a broad role, Initially the team was small with only three members; but over the course of 4 years it expanded to seven developers. My team was focused on software to secure customer’s estates along side internal system. Unofficially I undertook a hybrid development & Devops role.',
            'For the first year in the role I was the lead for our entire technology stack and allocation of team projects before a dedicated development manage was brought it to assist with the team’s continued expansion.'
        ]
    },
    {
        "year": "2011 - 2012",
        "company": "Gaming Media Group",
        "title": "Full Stack Developer ",
        "description": [
            "This has been a very broad role, Initially the team was very small with only three members but over the course of the last 3 years we have expanded to seven developers. Focussing on software to secure customer estates along side internal system to assist with the operations of the company. Unofficially I have undertaken a developer/devops role. But for the first year or so of the role I was in charge of our technology stack and team projects before a dedicated development manage was brought it to assist with the team’s expansion."
        ]
    },
];

export const Experiance: React.SFC<Props> = () => (
    <div className={classnames(commonStyles['Block'])}>
        <h2>EXPERIENCE</h2>
        {experiancePayload.map((item) => (
            <section className={styles['Experiance']}>
                <aside className={styles['Experiance--Year']}>{item.year}</aside>
                <div className={styles['Experiance--Description']}>
                    <h3>{item.company}</h3>
                    <h4>{item.title}</h4>
                    {item.description.map((descriptiveItem) => <p>{descriptiveItem}</p>)}
                </div>
            </section>
        ))}
    </div>
);

export default Experiance;
