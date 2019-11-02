import * as React from 'react';
import classnames from 'classnames';
import Favicon from 'react-favicon';

import * as commonStyles from '../../style/common.css'
import * as styles from './contact.css'

import { contactDetails } from '../../common/data';
import { IContactDetails } from '../../models/contact';

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps

export const Contact: React.SFC<Props> = () => (
    <div className={classnames(commonStyles['Block'])}>
        <h2>Contact</h2>
        {contactDetails.map((item: IContactDetails, index: number)  => (
            <div key={index} className={classnames(styles['ContactItem'])}>
                <div className={classnames(styles['ContactItem--Title'])}>
                    {item.isLink && 
                    <a href={item.link}>{item.text}</a>
                    }
                    {!item.isLink && <span>{item.text}</span> }
                </div>
            </div>
        ))}

    </div>    
);

export default Contact;
