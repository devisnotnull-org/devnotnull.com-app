import React from 'react';

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps | ActionProps | SelectorProps

export const BlogViewComponent: React.SFC<Props> = () => (
    <div>
        <h1>Blog view</h1>
    </div> 
);

export default BlogViewComponent;
