import { EventEmitter, Injectable } from '@angular/core';
import { Summary } from './message-object/summary';
export class MessageEvents {
  summaryUpdate: EventEmitter<Summary> = new EventEmitter();
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
    }
  }
}


