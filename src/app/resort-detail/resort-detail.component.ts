import { Component, Input }   from '@angular/core';
import { Resort }             from '../resort';

@Component({
  selector: 'app-resort-detail',
  templateUrl: './resort-detail.component.html',
  styleUrls: ['./resort-detail.component.css']
})
export class ResortDetailComponent {
  @Input() resort: Resort;
  @Input() has3Dintitialized: boolean;

  ngAfterViewChecked() {
    // I really hate this mechanism
    if(!this.has3Dintitialized) {
      this.start3DScroller();
      this.has3Dintitialized = true;
    }
  }

  start3DScroller(): void {
    // Call the foldscroll plugin
    $( '.resorts.container-3d-panel-block' ).foldscroll({
      perspective: 900,
      margin: '220px'
    });
    console.log("here");
  }
}
