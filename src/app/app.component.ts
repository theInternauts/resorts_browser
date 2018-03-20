import { Component, OnInit }          from '@angular/core';
import { Resort }                     from './resort';
import { SECTIONS }                   from './sections';
import { RESORTS_SHORT }              from './mock-resorts-short';
import { ResortService }              from './resort.service';
import { MessageService }             from './message.service';

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

  contructor(private resortService: ResortService){ }

  ngOnInit() {
    this.activeSection = "HOME";
    this.data = [
      ["ID","name","url","trail_map_url","logo_url","address","phone","hours_of_operation","lifts","trails","acres","terrain_park"],
      [8, 'Soda Springs', 'http://www.skisodasprings.com', 'http://www.skicentral.com/assets/images/trailmaps/916010-1200.jpg', 'https://pbs.twimg.com/profile_images/910242716549660672/SoiO-_9Y_400x400.jpg', '10244 Soda Springs Rd. Soda Springs, CA 95728', '(530) 426-3666', '9:00am - 4:00pm', 2, 5, 300, false],
      [9, 'Sugar Bowl', 'http://www.sugarbowl.com', 'http://www.skicentral.com/assets/images/trailmaps/916012-1200.jpg', 'https://pbs.twimg.com/profile_images/938280426879070208/xHK4xZ4Z_400x400.jpg', '629 Sugar Bowl Rd. Norden, CA 95724', '(530) 426-9000', '9:00am - 4:00pm', 12, 98, 1650, false]
    ];
    this.resorts = RESORTS_SHORT;
    // this.data = this.resortService.getResorts();
  }

  setActiveSection(sectionName: string): void {
    if(SECTIONS.indexOf(sectionName) >= 0){
      this.activeSection = sectionName);
    }
  }
}
