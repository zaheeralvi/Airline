import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-international-prod9',
  templateUrl: './international-prod9.component.html',
  styleUrls: ['./international-prod9.component.css']
})
export class InternationalProd9Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/internationalproduct']);
  }

}
