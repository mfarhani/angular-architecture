import {ISample} from './sample.interface';

export class Sample implements ISample {
  constructor(
    public id?: number,
    public socialMediaLink?: string,
    public socialMediaName?: string,
    public description?: string
  ) {
  }

  public toString(): string {
    return this.socialMediaLink || '';
  }
}
