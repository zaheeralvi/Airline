import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cruise-prod4',
  templateUrl: './cruise-prod4.component.html',
  styleUrls: ['./cruise-prod4.component.css']
})
export class CruiseProd4Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/cruiseproducts']);
  }

}
