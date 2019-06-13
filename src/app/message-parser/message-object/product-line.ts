export class ProductLine {
  lineCode: string;
  startTime: Date;
  numberOfMachines: number;
  totalTIme: number;
  avgTroughPut: number;
  expectedHourlyRate: number;
  expectedMinuteRate: number;
  itemRate: number;
  actualHourlyRate: number;
  actualMinuteRate: number;
  currentitemProcessingTime: number;
  status: number;
  responseType: number;
  lastItemEndTime: Date;
  currentProduct: any;

  constructor(m) {
    this.parserData(m);
  }

  parserData(msg) {
    this.lineCode = msg.lineCode;
    this.startTime = msg.startTime;
    this.numberOfMachines = msg.numberOfMachines;
    this.totalTIme = msg.totalTIme;
    this.avgTroughPut = msg.avgavgTroughPut;
    this.expectedHourlyRate = msg.expectedHourlyRate;
    this.expectedMinuteRate = msg.expectedHourlyRate;
    this.itemRate = msg.itemRate;
    this.actualHourlyRate = msg.actualHourlyRate;
    this.actualMinuteRate = msg.actualMinuteRate;
    this.currentitemProcessingTime = msg.currentitemProcessingTime;
    this.status = msg.status;
    this.responseType = msg.responseType;
    this.lastItemEndTime = msg.lastItemEndTime;
    this.currentProduct = msg.currentProduct;
  }
}
