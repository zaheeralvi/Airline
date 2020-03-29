import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  prodOne() {
    this.router.navigate(['/prodOne']);
  }
  prodTwo() {
    this.router.navigate(['/prodTwo']);
  }
  prodThree() {
    this.router.navigate(['/prodThree']);
  }
  prodFour() {
    this.router.navigate(['/prodFour']);
  }
  prodFive() {
    this.router.navigate(['/prodFive']);
  }
  prodSix() {
    this.router.navigate(['/prodSix']);
  }
}
