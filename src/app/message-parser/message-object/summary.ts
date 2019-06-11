export class Summary {
  totalProductLine: number;
  totalProductLineInOperation: number;
  dailyTotalExpectedOutput: number;
  currentTotalOutput: number;

  constructor(m) {
    this.parserData(m);
  }

  parserData(msg) {
    this.totalProductLine = msg.totalProductLine;
    this.totalProductLineInOperation = msg.totalProductLine_in_Operation;
    this.dailyTotalExpectedOutput = msg.dailyTotalExpectedOutput;
    this.currentTotalOutput = msg.currentTotalOutput;
  }
}
