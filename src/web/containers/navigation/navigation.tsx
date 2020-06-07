import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { Link } from '../../common/link/link'

import { IHeaderProps } from './navigation.state';

import { mapDispatchToProps, mapStateToProps } from './navigation.state';

import * as styles from "./navigation.css"

export class HeaderView extends Component<IHeaderProps, {}> {
    render() {
        return(
            <Fragment>
                <div className={styles['Navigation']}>
                    <span className={classnames(styles['Link'], styles['Link--left'])}><Link to={'/'}>Home</Link></span>
                    <span className={classnames(styles['Link'], styles['Link--left'])}><Link to={'/blog'}>Blog</Link></span>
                </div>
            </Fragment>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HeaderView);
