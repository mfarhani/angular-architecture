import {HttpClient, HttpResponse} from '@angular/common/http';
import {IBaseModel} from '../../models/base/base-model.interface';
import {IModelMapper} from '../../models/base/model-mapper.interface';
import {Optional, toOptional} from '../../type-guards/optional';
import {IResponse} from '../../models/base/response.interface';


// All http services inherit BaseService
// Implement general configuration here
export abstract class BaseService<T extends IBaseModel> {
  protected constructor(
    protected baseUrl: string,
    protected http: HttpClient,
    protected mapper: IModelMapper<T>
  ) {
    // this.baseUrl = 'https://someurl.com' + this.baseUrl;
  }

  protected mapResponseToModel(resp: HttpResponse<T>): Optional<T> {
    if (resp && resp.body) {
      return this.mapper.toModel(resp.body);
    } else {
      return undefined;
    }
  }

  public mapResponseToArrayModel(
    resp: HttpResponse<IResponse<T> | T[]>
  ): Optional<T[]> {
    const result: T[] = [];
    if (resp.body) {
      const body = resp?.body as T[];
      body?.map((d: any) => {
        result.push(this.mapper.toModel(d));
      });
    }
    return toOptional(result);
  }
}
