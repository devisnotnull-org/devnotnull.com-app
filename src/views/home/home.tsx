import React from 'react';

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps | ActionProps | SelectorProps

export const HomeViewComponent: React.SFC<Props> = () => (
    <div>
        <h1>Home view</h1>
    </div> 
);

export default HomeViewComponent;
