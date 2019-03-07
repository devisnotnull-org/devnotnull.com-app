import React from 'react';
import { connect } from 'react-redux';

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps | ActionProps | SelectorProps

export class NotFoundView extends React.Component<Props> {

    render() {
        return(
            <div>
                <h1>Not found view</h1>
            </div> 
        )
    }
}

const mapStateToProps = (state: {}) => ({});

export default connect(mapStateToProps,{})(NotFoundView);
