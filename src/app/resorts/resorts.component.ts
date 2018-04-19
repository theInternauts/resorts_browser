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
  has3Dintitialized: boolean;

  constructor(
    private resortService: ResortService,
    private messageService: MessageService
  ) {
    this.has3Dintitialized = true;
  }

  ngOnInit() {
    console.log("ngOnInit");
    this.getResorts();
    this.selectedResort = this.resorts[0];
  }

  ngOnChanges(): void {
    console.log("ngOnChanges");
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

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

}
