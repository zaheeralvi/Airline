import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { LeadService } from '../lead/lead.service';
import { Post } from '../lead/lead.module';
import { GeneratePdfService } from './generate-pdf-service';


@Component({
  selector: 'app-view-lead',
  templateUrl: './view-lead.component.html',
  styleUrls: ['./view-lead.component.css']
})
export class ViewLeadComponent implements OnInit, OnDestroy {

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



  constructor(public postsService: LeadService, public pdfService:GeneratePdfService) { }

  ngOnInit() {
    this.postsService.getUsersPost(this.postsPerPage, this.currentPage);
    this.postsSub = this.postsService.getPostUpdatedListener()
      .subscribe((pageData: { posts: Post[], postCount: number }) => {
        this.totalPost = pageData.postCount;
        this.posts = pageData.posts;
        if (pageData.posts.length == 0) {
          this.noRecords = true;
        }
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
  generatePdf(data) {
    this.pdfService.createPdf(data);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
