import * as React from 'react';
import classnames from 'classnames';
import { Favicon } from '../../common/favicon/favicon';
import { Link } from '../../common/link/link';

import * as commonStyles from '../../style/common.css';
import * as styles from './contact.css';

import { IContactPayload } from '../../../models/contact';
import { ICommonFields } from '../../../models/common';

interface IStateProps {
  contactList: ICommonFields<IContactPayload>[];
}

type Props = IStateProps;

export const Contact: React.SFC<Props> = ({ contactList }) => (
  <div className={classnames(commonStyles['Block'])}>
    <h2>Contact</h2>
    {contactList &&
      contactList.map((item: ICommonFields<IContactPayload>, index: number) => (
        <div key={index} className={classnames(styles['ContactItem'])}>
          <Favicon
            name={item.fields.icon}
            className={styles['ContactItem--Icon']}
          />
          <Link
            to={item.fields.link || ''}
            classNames={styles['ContactItem--Title']}
          >
            {item.fields.text}
          </Link>
        </div>
      ))}
  </div>
);

export default Contact;
