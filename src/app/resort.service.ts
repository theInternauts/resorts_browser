import { Injectable }     from '@angular/core';
import { Resort }         from './resort';
import { MessageService } from './message.service';

type AOA = any[][];

@Injectable()

export class ResortService {
  resorts: Resort[];
  data: AOA = [];

  constructor(private messageService: MessageService) {
    this.resorts = []
    this.data = [];
  }

  getResorts(): Resort[] {
    if(this.resorts.length > 0){
      this.messageService.add('ResortService: fetched resorts');
    } else {
      this.messageService.add('ResortService: RESORTS DATA NOT FOUND');
    }
    return this.resorts;
  }

  getData(): AOA {
    if(this.data.length > 0){
      this.messageService.add('ResortService: fetched data');
    } else {
      this.messageService.add('ResortService: AOA DATA NOT FOUND');
    }
    return this.data;
  }

  setResorts(data: AOA): void {
    // assumes headers are present
    let data_no_header = data.slice(1);
    this.resorts = this.castToResorts(data_no_header);
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
        // need to deal with this. Seperate variable maybe? Or an instance of a new class
        return r;
      }
    });
  }
}
