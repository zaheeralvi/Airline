import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-international-prod2',
  templateUrl: './international-prod2.component.html',
  styleUrls: ['./international-prod2.component.css']
})
export class InternationalProd2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/internationalproduct']);
  }
}
