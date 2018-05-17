import { Component, OnInit }   from '@angular/core';
import { ResortService }              from '../resort.service';
import { MessageService }             from '../message.service';

type AOA = any[][];

@Component({
  selector: 'app-sheet-view',
  templateUrl: './sheet-view.component.html',
  styleUrls: ['./sheet-view.component.css']
})
export class SheetViewComponent implements OnInit {
  data: AOA;

  constructor(
    private resortService: ResortService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.messageService.add("<-- Sheet view Init -->");
    this.data = this.resortService.getData();
  }

  ngOnChanges(): void {
    this.data = this.resortService.getData();
  }

  ngAfterViewInit() {
    this.start3DScroller();
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
