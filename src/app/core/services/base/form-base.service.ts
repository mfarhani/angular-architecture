import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IBaseModel} from '../../models/base/base-model.interface';
import {BaseService} from './base.service';
import {IModelMapper} from '../../models/base/model-mapper.interface';
import {Optional} from '../../type-guards/optional';

export abstract class CrudBaseService<
  T extends IBaseModel
> extends BaseService<T> {
  protected constructor(
    baseUrl: string,
    http: HttpClient,
    mapper: IModelMapper<T>
  ) {
    super(baseUrl, http, mapper);
  }

  public create(model: T): Observable<Optional<T>> {
    return this.http
      .post<T>(`${this.baseUrl}/add`, model, {
        observe: 'response'
      })
      .pipe(map((resp) => this.mapResponseToModel(resp)));
  }

  public read(id: string): Observable<Optional<T>> {
    return this.http
      .get<T>(`${this.baseUrl + '/' + id}`, {
        observe: 'response'
      }).pipe(map((resp: any) => {
          return this.mapResponseToModel(resp);
        })
      );
  }

  public update(model: Optional<T>): Observable<Optional<T>> {
    return this.http.put<T>(`${this.baseUrl}/edit`, model, {
      observe: 'response'
    }).pipe(map((resp) => this.mapResponseToModel(resp)));
  }

  public delete(id: number): Observable<Optional<T>> {
    return this.http
      .delete<T>(`${this.baseUrl}/${id}`, {observe: 'response'})
      .pipe(map((resp) => this.mapResponseToModel(resp)));
  }
}
