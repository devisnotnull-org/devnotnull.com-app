import * as React from 'react';
import classnames from 'classnames';

import * as styles from './skillz.css';
import * as commonStyles from '../../style/common.css';

//

interface SkillzValueProps {
    values: string[]
}

export const SkillzValue: React.SFC<SkillzValueProps> = ({ values }) => (
    <div>
        {values.map((item) => {
            return <span className={styles['Skill--Badge']}>{item}</span>
        })}
    </div>
);

//

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps

interface SkillzPayload {
    key: string
    values: string[]
}

const skillzPayload: SkillzPayload[] = [
    {
        "key": "Javascript",
        "values": ['ES6', 'Node.js','Typescript', 'React', 'Angular', 'Microservices', 'Webpack', 'ExtJs', 'JQuery']
    },
    {
        "key": "Java",
        "values": ['Spring', 'Vert.X', "Microservices", "Custom Frameworks"]
    },
    {
        "key": "Misc",
        "values": ['Security', 'OAuth 1/2', "SAML", "Docker", "General design Principles"]
    },
    {
        "key": "Python",
        "values": ['Flask', 'TurboGears', 'System Intergration', 'Python 2 & 3']
    },
    {
        "key": "Devops/System",
        "values": ['Unix', 'Bash', 'AWS', 'GCloud', 'Azure', 'Kubernetes']
    },
    {
        "key": "PHP",
        "values": ['Custom Frameworks', 'Zend', 'Laravel']
    }
];

export const Skillz: React.SFC<Props> = () => (
    <div className={classnames(commonStyles['Block'])}>
        <h2>Skills</h2>
        { skillzPayload.map( (item, i)=> {
            return (
                <div className={styles['Item--Skills']}>
                    <div className={styles['Skill']}>{item.key}</div>
                    <SkillzValue values={item.values} />
                </div>
            )
        })} 
    </div>
);

export default Skillz;
