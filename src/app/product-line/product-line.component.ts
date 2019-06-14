import { Component, OnInit } from '@angular/core';
import { MessageEvents } from '../message-parser/parser.service';
import { ProductLine } from '../message-parser/message-object/product-line';
import _ from 'lodash';

// @ts-ignore
@Component({
  selector: 'app-product-line',
  templateUrl: './product-line.component.html',
  styleUrls: ['./product-line.component.css']
})
export class ProductLineComponent implements OnInit {
  productLines: ProductLine[] = [];
  color = 'primary';
  mode = 'determinate';
  constructor(private messageEvents: MessageEvents) {
    this.messageEvents.productLineUpdate.subscribe(data => {
      const index = _.findIndex(this.productLines, {lineCode: data.lineCode});
      if (index > -1) {
        data.currentProduct = data.currentProduct || {};
        this.productLines.splice(index, 1, data);

      } else {
        data.currentProduct = data.currentProduct || {};
        this.productLines.push(data);
      }

    });
  }

  ngOnInit() {
  }
  trackBy(index, item) {
    return item.lineCode; // or item.id
  }

}
