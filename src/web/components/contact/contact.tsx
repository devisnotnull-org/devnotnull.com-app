import * as React from 'react';
import classnames from 'classnames';
import Favicon from 'react-favicon';

import * as commonStyles from '../../../style/common.css'
import * as styles from './contact.css'

import { IContactPayload } from '../../../models/contact';
import { ICommonFields } from '../../../models/common';

interface IStateProps {
    contactList: ICommonFields<IContactPayload>[]
}
  
type Props = IStateProps
  
export const Contact: React.SFC<Props> = ({ contactList }) => (
    <div className={classnames(commonStyles['Block'])}>
        <h2>Contact</h2>
        {contactList && contactList.map((item: ICommonFields<IContactPayload>, index: number)  => (
            <div key={index} className={classnames(styles['ContactItem'])}>
                <div className={classnames(styles['ContactItem--Title'])}>
                    <a href={item.fields.link}>{item.fields.text}</a>
                </div>
            </div>
        ))}

    </div>    
);

export default Contact;
