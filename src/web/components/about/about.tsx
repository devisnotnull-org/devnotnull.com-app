import React, { FC } from 'react';
import classnames from 'classnames';

import { IMetadataPayload } from '../../../models/metadata';

import styles from './about.css';

import commonStyles from '../../style/common.css';

interface StateProps {
  metadata: IMetadataPayload;
}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps;

export const Profile: FC<Props> = ({ metadata }) => (
  <>
    <div className={classnames(styles['Header'])}>
      <div className={classnames(styles['Header--Photo'])}>
        <img
          src="//s3.eu-west-2.amazonaws.com/devnotnull-ui-production/media/avatar.png"
          alt="avatar"
        />
      </div>
      <div className={classnames(styles['Text--Header'])}>
        <h1>
          {metadata.title}
        </h1>
        <p>
          {metadata.blurb}
        </p>
      </div>
    </div>
    <div className={classnames(commonStyles['Block'])}>
      <h2>About me</h2>
      <p>{metadata.summary}</p>
    </div>
  </>
);

export default Profile;
