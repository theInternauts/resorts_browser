import { Injectable } from '@angular/core';
import { Resort } from './resort';
import { RESORTS_SHORT } from './mock-resorts-short';
import { MessageService } from './message.service';

type AOA = any[][];

@Injectable()
export class ResortService {
  resorts = RESORTS_SHORT;

  constructor(private messageService: MessageService) { }

  getResorts(): Resort[] {
    this.messageService.add('ResortService: fetched resorts');
    return this.resorts;
  }

  getResort(id: number): Resort {
    this.messageService.add(`ResortService: fetched resort id=${id}`);
    return this.resorts.find(resort => resort.id === id);
  }

  setResorts(data: AOA): void {
    console.log("CHECK: ", this.resorts);
    console.log("incoming: ", data);
    console.log("cast?: ", this.convertToResorts(data));
    this.resorts = this.convertToResorts(data);
    // this.resorts = this.data;
  }

  convertToResorts(data: any): Resort[] {
    return data.map(function(r, index){
      if(r[0] !== "ID" && r[1] !== "NAME") {
        // console.log("convert: ", r, index);
        return new Resort(r);
      } else {
        // first row is the header
        return r;
      }
    });
  }
}
