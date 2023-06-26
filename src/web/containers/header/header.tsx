import React, { FC, useState } from 'react';
import classnames from 'classnames';
import { PopupButton } from '@typeform/embed-react'


import { Link } from '@components/link/link';
import styles from './header.css';

export const HeaderView: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={classnames(styles['Header'])}>
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className={classnames(
          styles['MenuToggle'],
          menuOpen ? styles['MenuToggle--Open'] : styles['MenuToggle--Closed']
        )}
      >
        <span className={classnames(styles['MenuToggle--Line'], styles['MenuToggle--Line-top'])}></span>
        <span className={classnames(styles['MenuToggle--Line'])}></span>
        <span className={classnames(styles['MenuToggle--Line'], styles['MenuToggle--Line-bottom'])}></span>
      </div>

      <ul
        className={classnames(
          styles['Menu'],
          menuOpen ? styles['Menu--Open'] : styles['Menu--Closed']
        )}
      >
        <li className={classnames(styles['Link'], styles['Link--left'])}>
          <Link to={'/'} onClick={() => setMenuOpen(false)}>
            Profile
          </Link>
        </li>
        <li className={classnames(styles['Link'], styles['Link--left'])}>
          <Link to={'/blog'} onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
        </li>
        <li className={classnames(styles['Link'], styles['Link--left'])}>
          <Link
            to={'https://github.com/devisnotnull/'}
            onClick={() => setMenuOpen(false)}
          >
            Github
          </Link>
        </li>
        <li className={classnames(styles['Link'], styles['Link--left'])}>
          <Link
            to={'https://uk.linkedin.com/in/alexbrown201'}
            onClick={() => setMenuOpen(false)}
          >
            Linkedin
          </Link>
        </li>
        <li className={classnames(styles['Link'], styles['Link--left'])}>
          <Link
            to={'https://medium.devnotnull.com/'}
            onClick={() => setMenuOpen(false)}
          >
            Medium
          </Link>
        </li>
        <li className={classnames(styles['Link'], styles['Link--left'])}>

          <PopupButton id="HTs3mlXH" style={{ fontSize: 20, margin: 0, padding:0, border: 0, width: '100%' }}>
          <Link to=''>Contact me</Link>
          </PopupButton>

          </li>
      </ul>
    </div>
  );
};

export default HeaderView;
