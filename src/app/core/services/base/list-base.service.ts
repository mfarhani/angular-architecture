import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';
import {IBaseModel} from '../../models/base/base-model.interface';
import {BaseService} from './base.service';
import {IModelMapper} from '../../models/base/model-mapper.interface';
import {IQueryModel} from '../../models/base/query-model.interface';
import {Page} from '../../models/base/page.interface';
import {Optional} from '../../type-guards/optional';
import {IResponse} from '../../models/base/response.interface';
import {createRequestOption} from '../../utils/request-util';
// Implement all methods related to a list of objects
// All list services inherit ListBaseService
export abstract class ListBaseService<
  T extends IBaseModel
> extends BaseService<T> {
  private totalCount: any;

  protected constructor(
    baseUrl: string,
    http: HttpClient,
    mapper: IModelMapper<T>
  ) {
    super(baseUrl, http, mapper);
  }

  public read(query: IQueryModel): Observable<Page<T>> {
    return this.query(query).pipe(
      map((data: Optional<any>) => {
        return {
          data: this.mapResponseToArrayModel(data),
          totalRecords: this.totalCount
        } as Page<T>;
      })
    );
  }

  public query(req: IQueryModel): Observable<HttpResponse<IResponse<T>>> {
    const options: HttpParams = createRequestOption(req);
    return this.http.get<IResponse<T>>(this.baseUrl, {params: options, observe: 'response'});
  }

}
