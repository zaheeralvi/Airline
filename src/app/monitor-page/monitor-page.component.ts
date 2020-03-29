import { Component, OnInit } from '@angular/core';
import { LeadService } from '../lead/lead.service';

@Component({
  selector: 'app-monitor-page',
  templateUrl: './monitor-page.component.html',
  styleUrls: ['./monitor-page.component.css']
})
export class MonitorPageComponent implements OnInit {

  constructor(public postsService: LeadService) { }

  ngOnInit() {
  }

}
