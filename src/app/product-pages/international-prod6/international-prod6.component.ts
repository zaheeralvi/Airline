import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-international-prod6',
  templateUrl: './international-prod6.component.html',
  styleUrls: ['./international-prod6.component.css']
})
export class InternationalProd6Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/internationalproduct']);
  }

}
