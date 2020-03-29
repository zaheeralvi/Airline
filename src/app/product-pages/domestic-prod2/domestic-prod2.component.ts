import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domestic-prod2',
  templateUrl: './domestic-prod2.component.html',
  styleUrls: ['./domestic-prod2.component.css']
})
export class DomesticProd2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/domesticproduct']);
  }


}
