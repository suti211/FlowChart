export class Measurement {

  private date: number;
  private heat: number;
  private flow1: number;
  private flow2: number;
  private temp1: number;
  private temp2: number;

  constructor(date: number,  heat: number, flow1: number, flow2: number, temp1: number, temp2: number) {
    this.date = date;
    this.heat = heat;
    this.flow1 = flow1;
    this.flow2 = flow2;
    this.temp1 = temp1;
    this.temp2 = temp2;
  }

  public getHeatPoint() {
    const data = [];
    data.push(this.date);
    data.push(this.heat);
    return data;
  }

  public getFlow1Point() {
    const data = [];
    data.push(this.date);
    data.push(this.flow1);
    return data;
  }

  public getFlow2Point() {
    const data = [];
    data.push(this.date);
    data.push(this.flow2);
    return data;
  }

  public getTemp1Point() {
    const data = [];
    data.push(this.date);
    data.push(this.temp1);
    return data;
  }

  public getTemp2Point() {
    const data = [];
    data.push(this.date);
    data.push(this.temp2);
    return data;
  }

  public getDate(): number {
    return this.date;
  }
}
