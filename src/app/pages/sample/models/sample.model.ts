import {ISample} from './sample.interface';

export class Sample implements ISample {
  constructor(
    public id?: number,
    public title?: string
  ) {
  }

  public toString(): string {
    return this.title || '';
  }
}
