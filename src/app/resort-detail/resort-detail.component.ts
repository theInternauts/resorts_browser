import { Component, OnInit, Input } from '@angular/core';
import { Resort } from '../resort';

@Component({
  selector: 'app-resort-detail',
  templateUrl: './resort-detail.component.html',
  styleUrls: ['./resort-detail.component.css']
})
export class ResortDetailComponent implements OnInit {
  @Input() resort: Resort;

  constructor() { }

  ngOnInit() {
  }

}
