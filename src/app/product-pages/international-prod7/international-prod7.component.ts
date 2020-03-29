import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-international-prod7',
  templateUrl: './international-prod7.component.html',
  styleUrls: ['./international-prod7.component.css']
})
export class InternationalProd7Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/internationalproduct']);
  }

}
