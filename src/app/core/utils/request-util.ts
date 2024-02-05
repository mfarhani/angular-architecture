import {HttpParams} from '@angular/common/http';
import {IQueryModel} from '../models/base/query-model.interface';

export const createRequestOption = (req?: IQueryModel): HttpParams => {
  let options: HttpParams = new HttpParams();
  if (req) {
    Object.keys(req).forEach((key: string) => {
      // @ts-ignore
      options = options.set(key, req[key]);
    });
  }
  return options;
};
