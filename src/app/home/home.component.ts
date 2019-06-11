import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../common/communication.service';
import { ParserService } from '../message-parser/parser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private communicationService: CommunicationService, private parser: ParserService) {
    this.communicationService.messages.subscribe(msg => {
      this.parser.parserMessage(msg);
    });
  }

  ngOnInit() {
  }

}
