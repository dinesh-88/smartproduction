import { EventEmitter, Injectable } from '@angular/core';
import { Summary } from './message-object/summary';
import { ProductLine } from './message-object/product-line';
export class MessageEvents {
  summaryUpdate: EventEmitter<Summary> = new EventEmitter();
  productLineUpdate: EventEmitter<ProductLine> = new EventEmitter();
}
@Injectable({
  providedIn: 'root'
})
export class ParserService {


  constructor(private messageEvents: MessageEvents) {
  }

  parserMessage(message: any) {

    switch (message.responseType) {
      case 103:
        this.messageEvents.summaryUpdate.emit(new Summary(message));
        break;
      case 105:
        this.messageEvents.productLineUpdate.emit(new ProductLine(message));
        break;
    }
  }
}


