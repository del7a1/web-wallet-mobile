import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent {

  @Input() transactions: Array<any>;

  constructor() { }

}
