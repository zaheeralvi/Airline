import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-international-prod13',
  templateUrl: './international-prod13.component.html',
  styleUrls: ['./international-prod13.component.css']
})
export class InternationalProd13Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/internationalproduct']);
  }

}
