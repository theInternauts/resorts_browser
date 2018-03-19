import { Component, OnInit, Input }   from '@angular/core';
import { Resort }                     from '../resort';
import { ResortService }              from '../resort.service';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.css']
})
export class ResortsComponent implements OnInit {
  @Input() resorts: Resort[];
  selectedResort: Resort;
  // resorts: Resort[];

  constructor(private resortService: ResortService) {
  }

  ngOnInit() {
    // this.getResorts();
  }

  onSelect(resort: Resort): void {
    this.selectedResort = resort;
  }

  isSelected(resort): boolean {
    return (resort === this.selectedResort);
  }

  getResorts(): void {
    this.resorts = this.resortService.getResorts();
  }
}
