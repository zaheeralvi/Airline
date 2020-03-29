import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-international-prod3',
  templateUrl: './international-prod3.component.html',
  styleUrls: ['./international-prod3.component.css']
})
export class InternationalProd3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/internationalproduct']);
  }

}
