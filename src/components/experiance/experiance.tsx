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
        "title": "Lead developer",
        "description": [
            "Lead developer",
        ]
    },
    {
        "year": "2013 - 2017",
        "company": "SecureData Europe",
        "title": "Software Engineer / Full Stack Developer ",
        "description": [
            "This has been a very broad role, Initially the team was very small with only three members but over the course of the last 3 years we have expanded to seven developers. Focussing on software to secure customer estates along side internal system to assist with the operations of the company. Unofficially I have undertaken a developer/devops role. But for the first year or so of the role I was in charge of our technology stack and team projects before a dedicated development manage was brought it to assist with the team’s expansion."
        ]
    },
    {
        "year": "2011 - 2013",
        "company": "Gaming Media Group",
        "title": "Full Stack Developer ",
        "description": [
            "This has been a very broad role, Initially the team was very small with only three members but over the course of the last 3 years we have expanded to seven developers. Focussing on software to secure customer estates along side internal system to assist with the operations of the company. Unofficially I have undertaken a developer/devops role. But for the first year or so of the role I was in charge of our technology stack and team projects before a dedicated development manage was brought it to assist with the team’s expansion."
        ]
    },
];

export const Experiance: React.SFC<Props> = () => (
    <div className={classnames(commonStyles['Block'])}>
        <h2>Experiance</h2>
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
