import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domestic-prod9',
  templateUrl: './domestic-prod9.component.html',
  styleUrls: ['./domestic-prod9.component.css']
})
export class DomesticProd9Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/domesticproduct']);
  }


}
