import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domestic-prod12',
  templateUrl: './domestic-prod12.component.html',
  styleUrls: ['./domestic-prod12.component.css']
})
export class DomesticProd12Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/domesticproduct']);
  }


}
