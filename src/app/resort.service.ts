import { Injectable } from '@angular/core';
import { Resort } from './resort';
import { RESORTS } from './mock-resorts';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class ResortService {

  constructor(private messageService: MessageService) { }

  getResorts(): Observable<Resort[]> {
    this.messageService.add('ResortService: fetched resorts');
    return of(RESORTS);
  }

  getResort(id: number): Observable<Resort> {
    this.messageService.add(`ResortService: fetched resort id=${id}`);
    return of(RESORTS.find(resort => resort.id === id));
  }
}
