import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cruise-prod3',
  templateUrl: './cruise-prod3.component.html',
  styleUrls: ['./cruise-prod3.component.css']
})
export class CruiseProd3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/cruiseproducts']);
  }

}
