import { Component, OnInit } from '@angular/core';
import { Resort } from '../resort';
import { ResortService } from '../resort.service';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.css']
})
export class ResortsComponent implements OnInit {
  resorts: Resort[];

  constructor(private resortService: ResortService) {
  }

  ngOnInit() {
    this.getResorts();
  }

  getResorts(): void {
    this.resortService.getResorts().subscribe(resorts => this.resorts = resorts);
  }
}
