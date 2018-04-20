import { Component, Input }   from '@angular/core';
import { Resort }             from '../resort';
import * as Loupe             from 'assets/js/loupe.js';

@Component({
  selector: 'app-resort-detail',
  templateUrl: './resort-detail.component.html',
  styleUrls: ['./resort-detail.component.css']
})
export class ResortDetailComponent {
  @Input() resort: Resort;
  @Input() has3Dintitialized: boolean;

  loupe: Loupe;

  ngAfterViewChecked() {
    // I really hate this mechanism
    if(!this.has3Dintitialized) {
      this.start3DScroller();
      this.has3Dintitialized = true;
      this.cycleLoupe();
    }
  }

  ngOnChanges() {
    this.cycleLoupe();
  }

  start3DScroller(): void {
    // Call the foldscroll plugin
    $( '.resorts.container-3d-panel-block' ).foldscroll({
      perspective: 900,
      margin: '220px'
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
