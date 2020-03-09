import React, { Component, Fragment } from 'react';
import { path } from 'ramda';
import { connect } from 'react-redux';
import { Profile } from '../../../components/profile/profile';

import { INotFoundComponentProps } from './notFound.state';

import { mapDispatchToProps, mapStateToProps } from './notFound.state';

import * as styles from "../../../style/common.css";

export class NotFoundView extends Component<INotFoundComponentProps, {}> {

    render() {
        const { metadata } = this.props
        return(
            <div>
                <h2>:( Page not found</h2>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NotFoundView);
