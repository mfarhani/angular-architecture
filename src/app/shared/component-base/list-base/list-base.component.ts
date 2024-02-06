import {IBaseModel} from '../../../core/models/base/base-model.interface';
import {ListBaseService} from '../../../core/services/base/list-base.service';
import {Type} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs';

export abstract class ListBaseComponent<T extends IBaseModel> {
  datasource: T[] = [];
  filteredDatasource: T[] = [];
  allowedPageSizes: number[] = [5, 10, 15, 20, 50];
  displayMode: 'adaptive' | 'compact' | 'full' = 'compact';
  showPageSizeSelector = true;
  showInfo = true;
  showNavButtons = true;
  columns: string[] = [];
  addButtonTitle = 'New';
  searchInput: FormControl = new FormControl<string>('');
  searchCallback = (value: string) => {
  };
  newCallback = () => {
  };


  protected constructor(
    protected modelClass: Type<T>,
    protected listService: ListBaseService<T>
  ) {
    this.searchInput.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(value => {
      this.searchCallback(value);
    });
  }
}
