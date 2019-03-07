import React from 'react';
import { connect } from 'react-redux';

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps | ActionProps | SelectorProps

export class HomeView extends React.Component<Props> {

    render() {
        return(
            <div>
                <h1>Home view</h1>
            </div> 
        )
    }
}

const mapStateToProps = (state: {}) => ({});

export default connect(mapStateToProps,{})(HomeView);
