import React, { FC } from 'react';

import { IMetadataPayload } from '../../../models/metadata';

type Props = {
  metadata: IMetadataPayload;
}

export const BlobBlurb: FC<Props> = ({ metadata }) => (
  <div>
    <h2>Blog post</h2>
    <p>{metadata.summary}</p>
  </div>
);

export default BlobBlurb;
