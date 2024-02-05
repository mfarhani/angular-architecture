export interface IBaseModel {
  id?: ID;

  toString(): string;
}

export type ID = number | string;
