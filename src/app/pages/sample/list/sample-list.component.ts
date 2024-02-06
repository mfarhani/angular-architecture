import {Component} from '@angular/core';
import {Sample} from '../models/sample.model';
import {ListBaseComponent} from '../../../shared/component-base/list-base/list-base.component';
import {SampleListService} from '../services/sample-list.service';
import {ISample} from '../models/sample.interface';
import {Page} from '../../../core/models/base/page.interface';
import {MatDialog} from '@angular/material/dialog';
import {SampleFormComponent} from '../form/sample-form.component';

@Component({
  selector: 'app-sample-list',
  templateUrl:
    '../../../shared/component-base/list-base/list-base.component.html'
})
export class SampleListComponent extends ListBaseComponent<ISample> {

  /**
   * we don't need template file here, all list component use a same html file
   * it helps us to design once use everywhere
   * ts class should extend ListBaseComponent
   * we can pass every distinct information through the constructor
   * @param listService
   * @param matDialog
   */
  constructor(
    listService: SampleListService,
    matDialog: MatDialog
  ) {
    super(Sample, listService);
    super.newCallback = () => {
      matDialog.open(SampleFormComponent).afterClosed().subscribe((sample: ISample) => {
        sample.id = this.datasource.length + 1;
        this.datasource = [...this.datasource, sample];
        this.filteredDatasource = [...this.filteredDatasource, sample];
        localStorage.setItem('item-list', JSON.stringify(this.datasource));
      });
    };
    super.searchCallback = (value: string) => {
      this.filteredDatasource = this.datasource.filter((d: ISample) => d.socialMediaLink?.includes(value));
    };
    super.addButtonTitle = 'Yeni Hesap Ekle';
    super.columns = ['socialMediaLink', 'socialMediaName', 'description'];
    this.listService.read({}).subscribe((response: Page<ISample>) => {
      const localList = localStorage.getItem('item-list');
      if (localList) {
        super.filteredDatasource = super.datasource = JSON.parse(localList);
      } else {
        super.filteredDatasource = super.datasource = response.data;
      }
    });
  }
}
