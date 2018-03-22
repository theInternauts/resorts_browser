import { Component, OnInit, Input }   from '@angular/core';
import { Resort }                     from '../resort';
import { ResortService }              from '../resort.service';
import { MessageService }             from '../message.service';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.css']
})
export class ResortsComponent implements OnInit {
  @Input() resorts: Resort[];
  @Input() activeSection: string;
  selectedResort: Resort;

  constructor(
    private resortService: ResortService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    // this.getResorts();
  }

  ngOnChanges(): void {
    this.resorts = this.resortService.getResorts();
  }

  onSelect(resort: Resort): void {
    this.selectedResort = resort;
  }

  isSelected(resort): boolean {
    return (resort === this.selectedResort);
  }

  getResorts(): void {
    if(this.resorts === undefined){
      this.resorts = this.resortService.getResorts();
    }
  }

  isActiveSection(sectionName: string): boolean {
    return (this.activeSection == sectionName);
  }

  start3DScroller(): void {
    // Call the foldscroll plugin
    $( '.resorts.container-3d-panel-block' ).foldscroll({
      perspective: 900,
      margin: '220px'
    });
    console.log("here");
  }
}
