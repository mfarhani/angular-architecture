// All interfaces in entire project must implement IBaseModel

export interface IBaseModel {
  id?: ID;

  toString(): string;
}

export type ID = number | string;
