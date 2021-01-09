import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from "classnames";

import { IBlogComponentProps, mapDispatchToProps, mapStateToProps } from './blog.state';

import * as blogStyles from "./blog.css"
import { ICommonDataNode } from 'models/common';
import styles from '@web/common/favicon/favicon.css';

export type IProps = {
    to: string
}

const getType = (marks: { type: string }[] | undefined): string => {
    if (!marks) return 'text'
    if(marks.find((item) => item.type === 'bold')) return 'bold';
    if(marks.find((item) => item.type === 'code')) return 'code'
    return 'text'
}

const renderCommonContentType = (content: ICommonDataNode[]): (JSX.Element[] | undefined)[] => { 
    return content?.map(payload => payload.content?.map((inner) => {    
        console.log('nodeType ,', inner.nodeType)
    if (inner.nodeType === 'list-item') { 
        console.log('_______________________________________________')
        console.log('_______________________________________________')
        return <p>{JSON.stringify(inner.content)}</p>
    }
    if(getType(inner.marks) === 'code') return <pre className={classnames(blogStyles['Code'])}>{inner.value}</pre>   
    if(getType(inner.marks) === 'bold') return <p><b>{inner.value}</b></p>                         
    return <p>{inner.value}</p>   
    }))
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
                <div>
                    {blogItems.map(item => {
                        return (
                            <div className={blogStyles['Entry--Container']}>
                                <h1 className={blogStyles["Entry--Header"]}>{item?.fields?.title ?? ""}</h1>
                                <div>
                                    {item?.fields?.blogContent?.content && renderCommonContentType(item?.fields?.blogContent?.content)}
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
