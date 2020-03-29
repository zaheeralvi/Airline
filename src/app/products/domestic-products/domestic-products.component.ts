import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domestic-products',
  templateUrl: './domestic-products.component.html',
  styleUrls: ['./domestic-products.component.css']
})
export class DomesticProductsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/']);
  }

  domestic1() {
    this.router.navigate(['/domestic1']);
  }
  domestic2() {
    this.router.navigate(['/domestic2']);
  }
  domestic3() {
    this.router.navigate(['/domestic3']);
  }
  domestic4() {
    this.router.navigate(['/domestic4']);
  }
  domestic5() {
    this.router.navigate(['/domestic5']);
  }
  domestic6() {
    this.router.navigate(['/domestic6']);
  }
  domestic7() {
    this.router.navigate(['/domestic7']);
  }
  domestic8() {
    this.router.navigate(['/domestic8']);
  }
  domestic9() {
    this.router.navigate(['/domestic9']);
  }
  domestic10() {
    this.router.navigate(['/domestic10']);
  }
  domestic11() {
    this.router.navigate(['/domestic11']);
  }
  domestic12() {
    this.router.navigate(['/domestic12']);
  }
  domestic13() {
    this.router.navigate(['/domestic13']);
  }

}
