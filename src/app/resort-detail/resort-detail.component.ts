import { Component, Input }   from '@angular/core';
import { Resort }             from '../resort';

@Component({
  selector: 'app-resort-detail',
  templateUrl: './resort-detail.component.html',
  styleUrls: ['./resort-detail.component.css']
})
export class ResortDetailComponent {
  @Input() resort: Resort;
}
