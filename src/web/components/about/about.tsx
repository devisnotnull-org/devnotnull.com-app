import React, { FC, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx'
import { PopupButton } from '@typeform/embed-react'

import { IMetadataPayload } from '../../../models/metadata';
import RichText from '../richtext/richtext';
import Link from '../link/link';
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from '../icons/icons';

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        to={href}
        classNames="group flex text-sm font-medium text-zinc-800 transition hover:text-orange-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-orange-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

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
          <div className="md:basis-4/12">
            <div ref={ref}>
              <div className='md:m-5 animate-fade animate-once animate-ease-out'>
                <img
                  src="//s3.eu-west-2.amazonaws.com/devnotnull-ui-production/media/avatar.png"
                  alt="avatar"
                  className='rounded-lg shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur'
                />
              </div>
              <div className="md:pl-5 hidden md:block">
                <ul role="list">
                  <SocialLink href="#" icon={GitHubIcon} className="mt-4 animate-fade-down animate-once animate-delay-100 animate-ease-in-out animate-normal">
                    GitHub @devisnotnull
                  </SocialLink>
                  <SocialLink href="#" icon={LinkedInIcon} className="mt-4 animate-fade-down animate-once animate-delay-300 animate-ease-in-out animate-normal">
                    Follow on LinkedIn
                  </SocialLink>
                  <SocialLink href="#" icon={DownloadIcon} className="mt-4 animate-fade-down animate-once animate-delay-500 animate-ease-in-out animate-normal">
                    Download CV
                  </SocialLink>
                  <PopupButton id="HTs3mlXH" style={{ fontSize: 20, margin: 0, padding:0, border: 0, width: '100%' }}>
                    <SocialLink href="#" icon={MailIcon} className="mt-4 animate-fade-down animate-once animate-delay-700 animate-ease-in-out animate-normal">
                      Contact me
                    </SocialLink>
                  </PopupButton>
                </ul>
               </div>
              </div>
            </div>
            <div className="md:basis-8/12">
              <div className='md:pl-3'>
                <div className='flex basis-full'>
                  <h1 className='font-bold text-3xl py-3.5 animate-fade-down animate-once animate-delay-100 animate-ease-in-out animate-normal font-harman'>
                    {metadata.title}
                  </h1>
                </div>
                <div className='flex basis-full  animate-fade-down animate-once animate-delay-500 animate-ease-in-out animate-normal'>
                  <p className='text-base py-3.5'><RichText payload={metadata.summary} assets={[]} /></p>
                </div>
              </div>
            </div>

      </div>
  )
}

export default Profile;
