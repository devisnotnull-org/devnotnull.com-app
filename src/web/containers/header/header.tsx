import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from "classnames";

import { Link } from "../../common/link/link"
import { Favicon } from '../../common/favicon/favicon'

import * as styles from "./header.css";
import { IHeaderProps } from './header.state';

import { mapDispatchToProps, mapStateToProps } from './header.state';

export class HeaderView extends Component<IHeaderProps, {}> {

    render() {
        return(
            <div className={classnames(styles["Header"])}>
                <span className={classnames(styles['Link'], styles['Link--left'])}><Favicon name={'folio'} className={styles['Header--LinkIcon']}/> <Link to={'/'}>Profile</Link></span>
                <span className={classnames(styles['Link'], styles['Link--left'])}><Favicon name={'folio'} className={styles['Header--LinkIcon']}/> <Link to={'/portfolio'}>Portfolio</Link></span>
                <span className={classnames(styles['Link'], styles['Link--left'])}><Favicon name={'blog'} className={styles['Header--LinkIcon']}/> <Link to={'/blog'}>Blog</Link></span>
                <span className={classnames(styles['Link'], styles['Link--left'])}><Favicon name={'github'} className={styles['Header--LinkIcon']}/> <Link to={'https://github.com/devisnotnull/'}>Github</Link></span>
                <span className={classnames(styles['Link'], styles['Link--left'])}><Favicon name={'linked'} className={styles['Header--LinkIcon']}/> <Link to={'https://uk.linkedin.com/in/alexbrown201'}>Linkedin</Link></span>
                <div className={styles['Clear']} />
        </div>)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HeaderView);
