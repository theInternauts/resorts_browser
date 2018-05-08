import { Component, OnInit }  from '@angular/core';
import { ResortService }      from './resort.service';
import { MessageService }     from './message.service';
import { Resort }             from './resort';
import { RESORTS_SHORT }      from './mock-resorts-short';

type AOA = any[][];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: AOA;
  resorts: Resort[];

  constructor(
    private resortService: ResortService,
    public messageService: MessageService
  ){ }

  ngOnChanges(): void {
    this.data = this.resortService.getData();
    this.resorts = this.resortService.getResorts();
  }

  ngOnInit() {

  }
}
