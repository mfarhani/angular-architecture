import { IBaseModel } from '../../../../../../../rast-mobile/rast-mobile/src/app/core/models/base/base-model.interface';

export interface ISample extends IBaseModel {
  title?: string;
  firstName?: string;
  lastName?: string;
  nationalCode?: string;
  phoneNumber?: string;
  cellPhoneNumber?: string;
  email?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  description?: string;
}
