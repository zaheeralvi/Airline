import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-international-products',
  templateUrl: './international-products.component.html',
  styleUrls: ['./international-products.component.css']
})
export class InternationalProductsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/']);
  }

  international1() {
    this.router.navigate(['/international1']);
  }
  international2() {
    this.router.navigate(['/international2']);
  }
  international3() {
    this.router.navigate(['/international3']);
  }
  international4() {
    this.router.navigate(['/international4']);
  }
  international5() {
    this.router.navigate(['/international5']);
  }
  international6() {
    this.router.navigate(['/international6']);
  }
  international7() {
    this.router.navigate(['/international7']);
  }
  international8() {
    this.router.navigate(['/international8']);
  }
  international9() {
    this.router.navigate(['/international9']);
  }
  international10() {
    this.router.navigate(['/international10']);
  }
  international11() {
    this.router.navigate(['/international11']);
  }
  international12() {
    this.router.navigate(['/international12']);
  }
  international13() {
    this.router.navigate(['/international13']);
  }

}
