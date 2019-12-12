export interface ICommonFields<T>  {
  fields: T
}

export interface ICommonContentListPayload<T> {
  total: number;
  skip: number;
  limit: number;
  items: Array<ICommonFields<T>>
}