import * as React from 'react';
import classnames from 'classnames';

import * as commonStyles from '../../style/common.css'
import * as styles from './education.css'

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps

interface EducationPayload {
    year: string
    institute: string
    subject: string
    description: string[]
}

const educationPayload: EducationPayload[] = [
    {
        'year': '2007 - 1010',
        'institute': 'Brighton University',
        'subject': 'FDSC Software engineering & networked system’s',
        'description': [
        ]
    },
    {
        'year': '2000 - 2007',
        'institute': 'The Howard Secondary',
        'subject': 'GCSE\'s & A-levels',
        'description': [
            '3 A-C A-Level',
            '17 A-C GCSE',
        ]
    },
];

export const Education: React.SFC<Props> = () => (
    <div className={classnames(commonStyles['Block'])}>
        <h2>Education</h2>
        {educationPayload.map((item: EducationPayload) => (
            <div className={styles['Education']}>
                <div className={styles['Education--Year']}>{item.year}</div>
                <div className={styles['Education--Description']}>
                    <h3>{item.institute}</h3>
                    <h4>{item.subject}</h4>
                    {item.description.map((descriptiveItem) => (
                        <p>{descriptiveItem}</p>
                    ))}
                </div>
            </div>
        ))}
    </div>
);

export default Education;
