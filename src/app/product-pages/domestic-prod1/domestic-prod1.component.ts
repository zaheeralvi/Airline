import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domestic-prod1',
  templateUrl: './domestic-prod1.component.html',
  styleUrls: ['./domestic-prod1.component.css']
})
export class DomesticProd1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/domesticproduct']);
  }


}
