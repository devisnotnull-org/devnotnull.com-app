import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';
import { PopupButton } from '@typeform/embed-react';

import { IMetadataPayload } from '@models/metadata';
import RichText from '../richtext/richtext';
import Link from '../link/link';
import { GitHubIcon, LinkedInIcon, MailIcon } from '../icons/icons';

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        to={href}
        classNames="group flex text-sm font-medium text-zinc-800 transition hover:text-orange-500 p-2 "
      >
        <Icon className="h-10 w-10 flex-none fill-zinc-500 transition group-hover:fill-orange-500" />
        <span className="md:ml-4 hidden">{children}</span>
      </Link>
    </li>
  );
}

type Props = {
  metadata: { fields: IMetadataPayload };
};

export const Profile = ({ metadata }: Props): JSX.Element => {
  const [viewed, setViewed] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  if (inView === true && viewed === false) setViewed(true);

  return (
    <div className="flex flex-wrap bg-white">
      <div className="md:basis-4/12">
        <div ref={ref}>
          <div className="md:m-5">
            <img
              src={
                '//s3.eu-west-2.amazonaws.com/devnotnull-ui-production/media/avatar.png'
              }
              alt="avatar"
              className="rounded-lg shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur w-96 md:w-full"
            />
          </div>
          <div className="md:pl-5 my-3 md:my-0">
            <ul role="list" className="flex flex-row">
              <SocialLink
                href="https://github.com/devisnotnull"
                icon={GitHubIcon}
              ></SocialLink>
              <SocialLink
                href="https://github.com/devisnotnull"
                icon={LinkedInIcon}
              ></SocialLink>
              <PopupButton
                id="HTs3mlXH"
                aria-label="Contact Me"
                style={{
                  fontSize: 20,
                  margin: 0,
                  padding: 0,
                  border: 0,
                  width: '100%',
                }}
              >
                <SocialLink
                  href="#"
                  icon={MailIcon}
                ></SocialLink>
              </PopupButton>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:basis-8/12">
        <div className="md:pl-3">
          <div className="flex basis-full">
            <h1 className="font-bold text-2xl md:py-3.5 font-harman">
              {metadata?.fields?.title}
            </h1>
          </div>
          <div>
            <div className="text-base py-3.5">
              <RichText payload={metadata?.fields?.summary} assets={[]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
