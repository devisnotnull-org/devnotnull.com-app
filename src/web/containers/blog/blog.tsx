import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CodeBlock } from '../../components/codeBlock/codeBlock';

import { IBlogComponentProps, mapDispatchToProps, mapStateToProps } from './blog.state';

import * as blogStyles from "./blog.css"

export type IProps = {
    to: string
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
                                    {item?.fields?.blogContent?.content && 
                                        item?.fields?.blogContent?.content?.map(payload => 
                                            (<p>
                                                {payload?.content && payload?.content.map(subItem => <CodeBlock marks={subItem?.marks} content={subItem?.content} />)}
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
