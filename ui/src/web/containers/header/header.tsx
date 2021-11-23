import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { Link } from '../../common/link/link';
import * as styles from './header.css';
import { IHeaderProps } from './header.state';

import { mapDispatchToProps, mapStateToProps } from './header.state';

type IComponentProps = {
  menuOpen: boolean;
};

export class HeaderView extends Component<IHeaderProps, IComponentProps> {
  constructor(props: IHeaderProps) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  toggleMenu(state?: boolean) {
    this.setState({ menuOpen: state ?? !this.state.menuOpen });
  }

  render() {
    return (
      <div className={classnames(styles['Header'])}>
        <div
          onClick={() => this.toggleMenu()}
          className={classnames(
            styles['MenuToggle'],
            this.state.menuOpen
              ? styles['MenuToggle--Open']
              : styles['MenuToggle--Closed']
          )}
        >
          <span className={classnames(styles['MenuToggle--Line'])}></span>
          <span className={classnames(styles['MenuToggle--Line'])}></span>
          <span className={classnames(styles['MenuToggle--Line'])}></span>
        </div>

        <ul
          className={classnames(
            styles['Menu'],
            this.state.menuOpen ? styles['Menu--Open'] : styles['Menu--Closed']
          )}
        >
          <li className={classnames(styles['Link'], styles['Link--left'])}>
            <Link to={'/'} onClick={() => this.toggleMenu(false)}>
              Profile
            </Link>
          </li>
          <li className={classnames(styles['Link'], styles['Link--left'])}>
            <Link to={'/blog'} onClick={() => this.toggleMenu(false)}>
              Blog
            </Link>
          </li>
          <li className={classnames(styles['Link'], styles['Link--left'])}>
            <Link
              to={'https://github.com/devisnotnull/'}
              onClick={() => this.toggleMenu(false)}
            >
              Github
            </Link>
          </li>
          <li className={classnames(styles['Link'], styles['Link--left'])}>
            <Link
              to={'https://uk.linkedin.com/in/alexbrown201'}
              onClick={() => this.toggleMenu(false)}
            >
              Linkedin
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderView);
