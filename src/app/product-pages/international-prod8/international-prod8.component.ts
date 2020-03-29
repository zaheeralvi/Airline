import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-international-prod8',
  templateUrl: './international-prod8.component.html',
  styleUrls: ['./international-prod8.component.css']
})
export class InternationalProd8Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/internationalproduct']);
  }

}
