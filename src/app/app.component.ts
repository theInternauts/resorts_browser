import { Component, OnInit }  from '@angular/core';
import { ResortService }      from './resort.service';
import { MessageService }     from './message.service';
import { Resort }             from './resort';
import { SECTIONS }           from './sections';
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
  title = 'The Resort Browser';
  activeSection: string;

  constructor(
    private resortService: ResortService,
    public messageService: MessageService
  ){ }

  ngOnChanges(): void {
    this.data = this.resortService.getData();
    this.resorts = this.resortService.getResorts();
  }

  ngOnInit() {
    this.activeSection = "HOME";
  }

  setActiveSection(sectionName: string): void {
    if(SECTIONS.indexOf(sectionName) >= 0){
      this.activeSection = sectionName;
      this.messageService.add(`App: set activeSection to ${sectionName}`);
    }
  }

  isActiveSection(sectionName: string): boolean {
    return (this.activeSection == sectionName);
  }
}
