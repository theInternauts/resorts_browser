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

  loupe: Loupe;

  ngOnChanges() {
    this.cycleLoupe();
  }

  ngAfterViewChecked() {
    this.cycleLoupe();
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
