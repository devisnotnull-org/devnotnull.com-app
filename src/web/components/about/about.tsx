import React, { FC, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { IMetadataPayload } from '../../../models/metadata';

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
      <div className="flex flex-wrap bg-white">
        <div ref={ref} className='flex basis-full justify-center'>
          <img
            src="//s3.eu-west-2.amazonaws.com/devnotnull-ui-production/media/avatar.png"
            alt="avatar"
            className='rounded-full w-40 h-40'
          />
        </div>
        <div className='flex basis-full justify-center'>
          <h1 className='font-bold text-3xl py-3.5'>
            {metadata.title}
          </h1>
        </div>
        <div className='flex basis-full justify-center'>
          <p className='text-2xl py-3.5'>
            {metadata.blurb}
          </p>
        </div>
        <div className='flex basis-full justify-center'>
          <p className='py-3.5'>{metadata.summary}</p>
        </div>
      </div>
  )
}

export default Profile;
