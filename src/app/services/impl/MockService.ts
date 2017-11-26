import {Observable} from 'rxjs/Observable';
import {Measurement} from '../../models/measurement.model';
import 'rxjs/add/observable/of';
import {Injectable} from '@angular/core';

@Injectable()
export class MockService {

  private dataPoolSize = 50;

  public getMeasurements(): Observable<any[]> {
    let measurements = [];
    for (let i = 0; i < this.dataPoolSize; i++) {
      measurements.push(new Measurement
      (
        this.generateDate(),
        this.getRandomValue(10, 18),
        this.getRandomValue(86, 100),
        this.getRandomValue(86, 100),
        this.getRandomValue(18, 23),
        this.getRandomValue(18, 23),
      ));
    }
    return Observable.of(measurements);
  }

  private getRandomValue(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private generateDate() {
    return (new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)).getTime());
  }
}
