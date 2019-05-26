import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})


export class InputButtonUnitComponent implements OnInit {

  title = 'Hello World';

  @Output() submit: EventEmitter<HTMLInputElement> = new EventEmitter();

  constructor() {  }

  ngOnInit() {

  }

  submitValue(newTitle: HTMLInputElement) {
    this.submit.emit(newTitle);
  }


}
