import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';

import { map } from 'rxjs/operators';

const WS_URL = 'ws://18.188.153.242:9000/WebSocket';
// const WS_URL = 'ws://localhost:8080';

export interface Message {
  author: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  public messages: Subject<any>;

  constructor(wsService: WebsocketService) {
    this.messages = <Subject<any>> wsService.connect(WS_URL).pipe(map(
      (response: MessageEvent): any => {
        const data = JSON.parse(response.data);
        return data;
      }
    ));
  }


}
