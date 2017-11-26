import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filtermodal',
  templateUrl: './filtermodal.component.html',
  styleUrls: ['./filtermodal.component.css']
})

export class FiltermodalComponent implements OnInit {

  fromDate = '';
  toDate = '';
  @Output() onFromChosen = new EventEmitter();
  @Output() onToChosen = new EventEmitter();
  @Output() onFilterClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  filter(): void {
    this.onFromChosen.emit(this.fromDate);
    this.onToChosen.emit(this.toDate);
    this.fromDate = '';
    this.toDate = '';
    this.onFilterClick.emit();
  }
}
