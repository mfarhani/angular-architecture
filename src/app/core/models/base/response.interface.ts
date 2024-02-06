export interface StringIndexer<T> {
  [key: string]: T[];
}

// Type of whole json object which is coming from server
export type IResponse<T> = StringIndexer<T> & {
  status?: string;
  message?: string;
  totalCount?: string | number;
  list?: T[];
  children?: IResponse<T>[];
};
