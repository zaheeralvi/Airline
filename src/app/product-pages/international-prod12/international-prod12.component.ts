import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-international-prod12',
  templateUrl: './international-prod12.component.html',
  styleUrls: ['./international-prod12.component.css']
})
export class InternationalProd12Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/internationalproduct']);
  }

}
