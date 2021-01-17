import React from 'react';
import classnames from 'classnames';

import s from "./favicon.css"

const iconSelector = (name: string) => {
  switch (name) {
    case 'linked':
        return {
            path: `M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 
            15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 
            1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 
            1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z
            `,
            viewBox: '0 0 24 24',
            rotate: 0,
        };
    case 'github':
        return {
            path: `M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.438c-.321-.073-.33-.68-.33-.894l.01-2.469c0-.84-.288-1.389-.61-1.666 
            2.004-.223 4.109-.984 4.109-4.441 0-.983-.348-1.786-.925-2.415.092-.228.401-1.143-.09-2.382 0 0-.754-.242-2.473.922A8.63 
            8.63 0 0 0 12 7.352a8.62 8.62 0 0 0-2.253.303c-1.72-1.164-2.474-.922-2.474-.922-.49 1.239-.182 2.154-.089 2.381a3.479 
            3.479 0 0 0-.926 2.415c0 3.45 2.1 4.222 4.1 4.449-.258.225-.49.621-.572 1.203-.513.23-1.817.627-2.62-.748 0 
            0-.475-.864-1.378-.928 0 0-.88-.01-.062.548 0 0 .59.276 1 1.316 0 0 .528 1.75 3.031 1.207l.012 
            1.53c0 .213-.015.825-.34.894H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z
            `,
            viewBox: '0 0 24 24',
            rotate: 0,
        };
    case 'home':
      return {
          path: `M4 8l8 5l8-5l-8-5l-8 5m18 0v10a2 2 0 0 1-2 2H4a2 2 0 0 
          1-2-2V8c0-.73.39-1.36.97-1.71L12 .64l9.03 5.65c.58.35.97.98.97 1.71z
          `,
          viewBox: '0 0 24 24',
          rotate: 0,
      };
    case 'email':
        return {
            path: `M4 8l8 5l8-5l-8-5l-8 5m18 0v10a2 2 0 0 1-2 2H4a2 2 0 0 
            1-2-2V8c0-.73.39-1.36.97-1.71L12 .64l9.03 5.65c.58.35.97.98.97 1.71z
            `,
            viewBox: '0 0 24 24',
            rotate: 0,
        };
    case 'download':
      return {
          path: `M412.907,214.08C398.4,140.693,333.653,85.333,256,85.333c-61.653,0-115.093,34.987-141.867,86.08
          C50.027,178.347,0,232.64,0,298.667c0,70.72,57.28,128,128,128h277.333C464.213,426.667,512,378.88,512,320
          C512,263.68,468.16,218.027,412.907,214.08z M256,384L149.333,277.333h64V192h85.333v85.333h64L256,384z
          `,
          viewBox: '0 0 512 512',
          rotate: 0,
      };


    case 'blog':
        return {
            path: `M14 13H9.95a1 1 0 0 0-1 1a1 1 0 0 0 1 1H14a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-4.05-3h2.6a1 1 0 0 0 
            1-1a1 1 0 0 0-1-1h-2.6a1 1 0 0 0-1 1a1 1 0 0 0 1 1M16 9v1a1 1 0 0 0 1 1a1 1 0 0 1 1 1v3a3 3 0 0 1-3 
            3H9a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3m4-6H4c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h16a2 2 0 
            0 0 2-2V4a2 2 0 0 0-2-2z
            `,
            viewBox: '0 0 24 24',
            rotate: 0,
        };
        case 'folio':
            return {
                path: `M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5m3 
                1v12h4v-2H8V8h2V6H6m10 10h-2v2h4V6h-4v2h2v8z
                `,
                viewBox: '0 0 24 24',
                rotate: 0,
            };
    default:
      return {
        path: '',
        viewBox: '',
        rotate: '',
      };
  }
};

export type IProps = {
    className?: string,
    name: string,
    alt?: string,
}

export const Favicon: React.SFC<IProps> = ({ className, name, alt }) => {
  const iconMeta = iconSelector(name);
  return (
    <span className={className}>
      <div
        className={classnames(s.container, {
          [s.deg90]: iconMeta.rotate === 1,
          [s.deg180]: iconMeta.rotate === 2,
          [s.deg270]: iconMeta.rotate === 3,
        })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={iconMeta.viewBox}>
          <path d={iconMeta.path} />
        </svg>
      </div>
    </span>
  );
};

export default Favicon;