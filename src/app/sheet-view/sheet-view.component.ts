import { Component, Input }   from '@angular/core';
import { ResortService }  from '../resort.service';

type AOA = any[][];

@Component({
  selector: 'app-sheet-view',
  templateUrl: './sheet-view.component.html',
  styleUrls: ['./sheet-view.component.css']
})
export class SheetViewComponent {
  @Input() data: AOA;
  @Input() activeSection: string;

  has3Dintitialized: boolean;

  constructor(private resortService: ResortService) {
    this.has3Dintitialized = false;
  }

  ngAfterViewChecked() {
    if(!this.has3Dintitialized) {
      this.start3DScroller();
      this.has3Dintitialized = true;
    }
  }

  ngOnChanges(): void {
    this.has3Dintitialized = false;
    this.data = this.resortService.getData();
  }

  isActiveSection(sectionName: string): boolean {
    return (this.activeSection == sectionName);
  }

  start3DScroller(): void {
    // Call the foldscroll plugin
    // TODO: submit pull request to public repo for update to plugin --> add an unmout/disable function to avoid memory leaks
    $( '.sheet-view.container-3d-panel-block' ).foldscroll({
      perspective: 900,
      margin: '126px'
    });
  }
}
