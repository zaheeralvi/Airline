import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cruise-prod1',
  templateUrl: './cruise-prod1.component.html',
  styleUrls: ['./cruise-prod1.component.css']
})
export class CruiseProd1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/cruiseproducts']);
  }
}
