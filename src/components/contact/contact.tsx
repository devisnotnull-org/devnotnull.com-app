import * as React from 'react';
import classnames from 'classnames';

import * as commonStyles from '../../style/common.css'
import * as styles from './contact.css'

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps

interface IContactDetails {
    icon: string;
    isLink: boolean;
    text: string;
    link?: string;
}

const contactDetails: IContactDetails[] = [
    {
        'icon': 'ICON',
        'isLink': false,
        'text': 'hi@fandanzle.co.uk'
    },
    {
        'icon': 'ICON',
        'link': 'https://github.com/stump201',
        'isLink': true,
        'text': 'Github'
    },
    {
        'icon': 'ICON',
        'isLink': true,
        'link': 'https://github.com/stump201',
        'text': 'Docker Hub'
    }
]

export const Contact: React.SFC<Props> = () => (
    <div className={classnames(commonStyles['Block'])}>
        <h2>Contact</h2>
        {contactDetails.map(item => (
            <div className={classnames(styles['ContactItem'])}>
                <div className={classnames(styles['ContactItem--Icon'])}>{item.icon}</div>
                <div className={classnames(styles['ContactItem--Title'])}>
                    {item.isLink && <a href={item.link}>{item.text}</a>}
                    {!item.isLink && <span>{item.text}</span> }
                </div>
            </div>
        ))}

    </div>    
);

export default Contact;
