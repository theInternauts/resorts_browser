import { Component, OnInit}   from '@angular/core';
import { ActivatedRoute }             from '@angular/router';
import { Location }                   from '@angular/common';
import { ResortService }              from '../resort.service';
import { Resort }                     from '../resort';

@Component({
  selector: 'app-resort-detail',
  templateUrl: './resort-detail.component.html',
  styleUrls: ['./resort-detail.component.css']
})
export class ResortDetailComponent implements OnInit {
  // @Input() resort: Resort;

  constructor(
    private route: ActivatedRoute,
    private resortService: ResortService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getResort();
  }

  getResort(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.resortService.getResort(id).subscribe(resort => this.resort = resort);
  }

  goBack(): void {
    this.location.back();
  }

}
