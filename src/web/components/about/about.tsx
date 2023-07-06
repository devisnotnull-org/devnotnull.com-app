import React, { FC, useState } from 'react';
import classnames from 'classnames';
import { useInView } from 'react-intersection-observer';

import { IMetadataPayload } from '../../../models/metadata';

import styles from './about.css';
import commonStyles from '../../style/common.css';

type Props = {
  metadata: IMetadataPayload;
}

export const Profile: FC<Props> = ({ metadata }) => {

  const [viewed, setViewed] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0,
  });

  if(inView === true && viewed === false) setViewed(true)

  return (
    <div>
      <div className={classnames(styles['Header'])}>
        <div ref={ref} className={classnames(styles['Header--Photo'], styles['Logo--FadeIn'])}>
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
    </div>
  )
}

export default Profile;
