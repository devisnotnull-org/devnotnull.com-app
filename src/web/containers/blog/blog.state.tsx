import { fetchRequest } from '../../../core/actions'

import { ICommonFields } from '../../../models/common'
import { IBlogPostPayload } from '../../../models/blog'
import { getBlogItems } from '../../../core/blog/selectors';


import { IStateProps } from './blog.state'

export type IStateProps = {
    title?: string,
    blogItems: ICommonFields<IBlogPostPayload>[];
}

export type IActionProps = {
    onFetchAction(): void,
}

export type IBlogComponentProps = IStateProps & IActionProps;

export const mapStateToProps = (state: any): IStateProps => ({
    title: "This is a title",
    blogItems: getBlogItems(state),
});

export const mapDispatchToProps = (dispatch: any): IActionProps => ({
    onFetchAction: () => dispatch(fetchRequest()),
});
