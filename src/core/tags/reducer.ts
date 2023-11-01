import { IBlogPostPayload } from '../../models/blog';

export interface ITagItemState extends IBlogPostPayload {
  readonly name?: string
}
