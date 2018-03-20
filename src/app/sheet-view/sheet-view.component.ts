import { Component, OnInit, Input } from '@angular/core';

type AOA = any[][];

@Component({
  selector: 'app-sheet-view',
  templateUrl: './sheet-view.component.html',
  styleUrls: ['./sheet-view.component.css']
})
export class SheetViewComponent implements OnInit {
  @Input() data: AOA;
  @Input() activeSection: string;

  constructor() { }

  ngOnInit() {
  }

  isActiveSection(sectionName: string): boolean {
    return (this.activeSection == sectionName);
  }
}
