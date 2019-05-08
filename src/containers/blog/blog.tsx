import React from 'react';
import { connect } from 'react-redux';
import classnames from "classnames";

import * as styles from "../../style/common.css";

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps

export class BlogView extends React.Component<Props> {

    render() {
        return(
            <div className={classnames(styles['Align--Center'], styles['Container--Large'])}>
                <h1>Blog view</h1>
            </div> 
        )
    }
}

const mapStateToProps = (state: {}) => ({});

export default connect(mapStateToProps,{})(BlogView);
