export interface ICommonFields<T>  {
  fields: T
}

export interface ICommonContentPayload<T> {
  total: number;
  skip: number;
  limit: number;
  items: Array<ICommonFields<T>>
}