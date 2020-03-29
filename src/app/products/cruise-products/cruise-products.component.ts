import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cruise-products',
  templateUrl: './cruise-products.component.html',
  styleUrls: ['./cruise-products.component.css']
})
export class CruiseProductsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/']);
  }

  cruise1() {
    this.router.navigate(['/cruiseProd1']);
  }
  cruise2() {
    this.router.navigate(['/cruiseProd2']);
  }
  cruise3() {
    this.router.navigate(['/cruiseProd3']);
  }
  cruise4() {
    this.router.navigate(['/cruiseProd4']);
  }

}
