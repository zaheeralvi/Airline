import { Component, OnInit, OnDestroy } from '@angular/core';
import { LeadService } from '../lead/lead.service';
import { Post } from '../lead/lead.module';
import { Subscription } from 'rxjs';

export interface Dashboard {
  Total: number;
  New: number;
  Pending: number;
  InProgress: number;
  Confirmed: number;
  Completed: number;
  Canceled: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  private postsSub: Subscription;

  dashboard: Dashboard[] = [];
  constructor(public postsService: LeadService) { }


  ngOnInit() {
    this.postsSub = this.postsService.getPostUpdatedListener()
      .subscribe((pageData: { posts: Post[] }) => {
        this.posts = pageData.posts;
      });

    this.postsService.getDashboard().subscribe(result => {
      this.dashboard = result.data[0];
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
