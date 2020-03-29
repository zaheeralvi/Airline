import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-international-prod10',
  templateUrl: './international-prod10.component.html',
  styleUrls: ['./international-prod10.component.css']
})
export class InternationalProd10Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/internationalproduct']);
  }

}
