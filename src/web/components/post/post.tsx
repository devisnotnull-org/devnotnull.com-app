import React, { FC } from 'react';
import classnames from 'classnames';

import commonStyles from '../../style/common.css';
import { IMetadataPayload } from '../../../models/metadata';

type Props = {
  metadata: IMetadataPayload;
}

export const BlobBlurb: FC<Props> = ({ metadata }) => (
  <div className={classnames(commonStyles['Block'])}>
    <h2>Blog post</h2>
    <p>{metadata.summary}</p>
  </div>
);

export default BlobBlurb;
