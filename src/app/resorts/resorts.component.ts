import { Component, OnInit } from '@angular/core';
import { Resort } from '../resort';
import { RESORTS } from '../mock-resorts';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.css']
})
export class ResortsComponent implements OnInit {
  selectedResort: Resort;
  resorts = RESORTS;

  constructor() { }

  ngOnInit() {
  }

  onSelect(resort: Resort): void {
    this.selectedResort = resort;
  }

  isSelected(resort): boolean {
    return resort === this.selectedResort;
  }

}
