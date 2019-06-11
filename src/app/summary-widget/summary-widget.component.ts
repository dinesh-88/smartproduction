import { Component, Input, OnInit } from '@angular/core';
import { MessageEvents } from '../message-parser/parser.service';


@Component({
  selector: 'app-summary-widget',
  templateUrl: './summary-widget.component.html',
  styleUrls: ['./summary-widget.component.css']
})
export class SummaryWidgetComponent implements OnInit {
  public summary: any = {};

  constructor(private messageEvents: MessageEvents) {
    this.messageEvents.summaryUpdate.subscribe(data => {
      this.summary = data;
    });
  }

  ngOnInit() {
  }

}
