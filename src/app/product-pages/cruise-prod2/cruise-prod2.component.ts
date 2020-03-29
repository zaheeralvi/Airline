import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cruise-prod2',
  templateUrl: './cruise-prod2.component.html',
  styleUrls: ['./cruise-prod2.component.css']
})
export class CruiseProd2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/cruiseproducts']);
  }

}
