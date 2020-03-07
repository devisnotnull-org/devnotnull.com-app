import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { IBlogComponentProps, mapDispatchToProps, mapStateToProps } from './blog.state';

import * as blogStyles from "./blog.css"

export type IProps = {
    to: string
}

export const blockType = ( content: any, marks?: []) => {
    const codeMark = marks && marks.find((dd: any) => dd.type === 'code');
    const codeBold = marks && marks.find((dd: any) => dd.type === 'bold');
    if(!content) return <Fragment></Fragment>;
    if(codeMark) return (<pre className={blogStyles["Block--Code"]}>{content}</pre>);
    if(codeBold) return (<b>{content}</b>);
    return (<span>{content}</span>);

}

export class BlogView extends Component<IBlogComponentProps, {}> {
    componentWillMount() {
        const { onFetchAction } = this.props
        onFetchAction();
    }
    render() {
        const { blogItems } = this.props;
        return(
            <div className={blogStyles.InnerContainer}>
                <h2>Blog posts</h2>
                <div>
                    {blogItems.map(item => {
                        return (
                            <div className={blogStyles['Entry--Container']}>
                                <h1 className={blogStyles["Entry--Header"]}>{item.fields.title}</h1>
                                <div>
                                    {item.fields.blogContent.content && 
                                        item.fields.blogContent.content.map(payload => 
                                            (<p>
                                            {payload.content && payload.content.map(subItem => blockType(subItem.value, subItem.marks))}
                                            </p>)
                                        )}
                                    </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BlogView);
