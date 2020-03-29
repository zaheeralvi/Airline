import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { LeadService } from '../lead/lead.service';
import { Post } from '../lead/lead.module';

@Component({
  selector: 'app-view-pdf',
  templateUrl: './view-pdf.component.html',
  styleUrls: ['./view-pdf.component.css']
})
export class ViewPDFComponent implements OnInit {

  selectedOption;
  posts: Post[] = [];
  panelOpenState = false;
  totalPost = 0;
  postsPerPage = 20;
  pageSizeOptions = [30, 40, 50, 60, 70, 80, 100];
  currentPage = 1;
  postCount = this.posts;
  private postsSub: Subscription;
  searchText;
  noRecords: boolean = false;



  constructor(public postsService: LeadService) { }

  ngOnInit() {
    this.postsService.getUsersPost(this.postsPerPage, this.currentPage);
    this.postsSub = this.postsService.getPostUpdatedListener()
      .subscribe((pageData: { posts: Post[], postCount: number }) => {
        this.totalPost = pageData.postCount;
        this.posts = pageData.posts;
      });
  }

  onChangedPage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize;
    this.postsService.getUsersPost(this.postsPerPage, this.currentPage);
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId).subscribe(() => {
      this.postsService.getUsersPost(this.postsPerPage, this.currentPage);
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
