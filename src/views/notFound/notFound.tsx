import React from 'react';

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps | ActionProps | SelectorProps

export const NotFoundComponent: React.SFC<Props> = () => (
    <div>
        <h1>Not Found</h1>
    </div> 
);

export default NotFoundComponent;
