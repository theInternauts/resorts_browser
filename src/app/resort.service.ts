import { Injectable }     from '@angular/core';
import { Resort }         from './resort';
import { RESORTS_SHORT }  from './mock-resorts-short';
import { MessageService } from './message.service';

type AOA = any[][];

@Injectable()
export class ResortService {
  resorts: Resort[] = RESORTS_SHORT;
  data: AOA = [
    ["ID","name","url","trail_map_url","logo_url","address","phone","hours_of_operation","lifts","trails","acres","terrain_park"],
    [8, 'Soda Springs', 'http://www.skisodasprings.com', 'http://www.skicentral.com/assets/images/trailmaps/916010-1200.jpg', 'https://pbs.twimg.com/profile_images/910242716549660672/SoiO-_9Y_400x400.jpg', '10244 Soda Springs Rd. Soda Springs, CA 95728', '(530) 426-3666', '9:00am - 4:00pm', 2, 5, 300, false],
    [9, 'Sugar Bowl', 'http://www.sugarbowl.com', 'http://www.skicentral.com/assets/images/trailmaps/916012-1200.jpg', 'https://pbs.twimg.com/profile_images/938280426879070208/xHK4xZ4Z_400x400.jpg', '629 Sugar Bowl Rd. Norden, CA 95724', '(530) 426-9000', '9:00am - 4:00pm', 12, 98, 1650, false]
  ];

  constructor(private messageService: MessageService) { }

  getResorts(): Resort[] {
    this.messageService.add('ResortService: fetched resorts');
    return this.resorts;
  }

  getData(): AOA {
    this.messageService.add('ResortService: fetched data');
    return this.data;
  }

  setResorts(data: AOA): void {
    // assumes headers are present
    let data_no_header = data.slice(1);
    this.resorts = this.castToResorts(data_no_header);
    // console.log("post-listing: ", this.resorts);
    this.messageService.add(`ResortService: casted and set resorts`);
  }

  setData(data: AOA): void {
    this.data = data;
    this.messageService.add(`ResortService: set data`);
  }

  castToResorts(data: any): Resort[] {
    this.messageService.add(`ResortService: converting`);
    return data.map(function(r, index){
      if(r[0] !== "ID" && r[1] !== "NAME") {
        // console.log("convert: ", r, index);
        return new Resort(r);
      } else {
        // first row is the header
        // this is probably bad to return becasue the header is NOT a Resort object
        // need to deal with this. Seperate variable maybe?
        return r;
      }
    });
  }
}
