import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domestic-prod8',
  templateUrl: './domestic-prod8.component.html',
  styleUrls: ['./domestic-prod8.component.css']
})
export class DomesticProd8Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/domesticproduct']);
  }


}
