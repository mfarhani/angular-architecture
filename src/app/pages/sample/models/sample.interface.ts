import {IBaseModel} from '../../../core/models/base/base-model.interface';

export interface ISample extends IBaseModel {
  socialMediaLink?: string;
  socialMediaName?: string;
  description?: string;
}
