import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domestic-prod6',
  templateUrl: './domestic-prod6.component.html',
  styleUrls: ['./domestic-prod6.component.css']
})
export class DomesticProd6Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/domesticproduct']);
  }


}
