import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domestic-prod13',
  templateUrl: './domestic-prod13.component.html',
  styleUrls: ['./domestic-prod13.component.css']
})
export class DomesticProd13Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/domesticproduct']);
  }


}
