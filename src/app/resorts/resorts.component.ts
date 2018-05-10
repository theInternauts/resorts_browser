import { Component, OnInit }          from '@angular/core';
import { Resort }                     from '../resort';
import { ResortService }              from '../resort.service';
import { MessageService }             from '../message.service';
import * as Loupe                     from 'assets/js/loupe.js';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.css']
})
export class ResortsComponent implements OnInit {
  resorts: Resort[];
  selectedResort: Resort;
  has3Dintitialized: boolean;
  loupe: Loupe;

  constructor(
    private resortService: ResortService,
    private messageService: MessageService
  ) {
    this.has3Dintitialized = false;
    this.resorts = [];
  }

  ngOnInit() {
    this.messageService.add("<-- Resorts Init -->");
    this.getResorts();
    this.selectedResort = this.resorts[0];
  }

  ngOnChanges(): void {
    this.messageService.add("<-- RESORTS ngOnChanges -->");
    this.getResorts();
    this.has3Dintitialized = false;
  }

  ngAfterViewInit(): void {
    this.cycleLoupe();
  }

  ngAfterViewChecked(): void {
    // I really hate this mechanism but it's necessary mainly becasue the foldscroll plugin doens't have a destroy() function
    if(!this.has3Dintitialized) {
      this.start3DScroller();
      this.has3Dintitialized = true;
    }
  }

  onSelect(resort: Resort): void {
    this.selectedResort = resort;
    this.cycleLoupe();
  }

  isSelected(resort): boolean {
    return (resort === this.selectedResort);
  }

  getResorts(): void {
    this.resorts = this.resortService.getResorts();
  }

  start3DScroller(): void {
    // Call the foldscroll plugin
    // If I had more tme I'd add a destroy() function to open source plugin $.fn.foldscroll()
    $( '.resorts.container-3d-panel-block' ).foldscroll({
      perspective: 900,
      margin: '152px'
    });
  }

  cycleLoupe(): void {
    // Call the Loupe util
    if (this.loupe){
      this.loupe.destroy();
    }
    let $image = document.getElementById('resort-trail-map');
    if ($image) {
      this.loupe = new Loupe($image);
    }
  }
}
