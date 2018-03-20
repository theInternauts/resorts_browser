import { Component, OnInit, Input }   from '@angular/core';
import { ResortService }  from '../resort.service';

type AOA = any[][];

@Component({
  selector: 'app-sheet-view',
  templateUrl: './sheet-view.component.html',
  styleUrls: ['./sheet-view.component.css']
})
export class SheetViewComponent implements OnInit {
  @Input() data: AOA;
  @Input() activeSection: string;

  constructor(private resortService: ResortService) { }

  ngOnChanges(): void {
    this.data = this.resortService.getData();
  }

  isActiveSection(sectionName: string): boolean {
    return (this.activeSection == sectionName);
  }
}
