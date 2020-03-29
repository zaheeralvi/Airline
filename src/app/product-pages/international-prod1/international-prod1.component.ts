import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-international-prod1',
  templateUrl: './international-prod1.component.html',
  styleUrls: ['./international-prod1.component.css']
})
export class InternationalProd1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/internationalproduct']);
  }

}
