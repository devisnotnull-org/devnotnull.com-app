import React, { Component } from 'react';
import { connect } from 'react-redux';

import { IBlogComponentProps } from './blog.state';

import { mapDispatchToProps, mapStateToProps } from './blog.state';

import * as styles from "../../../style/common.css";
import * as blogStyles from "./blog"

export class BlogView extends Component<IBlogComponentProps, {}> {

    render() {
        const { blogItems } = this.props
        return(
            <div className={styles['Container']}>
                <div>
                    <h1>Blog title</h1>
                </div>
            </div> 
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BlogView);
