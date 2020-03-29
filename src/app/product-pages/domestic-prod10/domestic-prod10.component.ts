import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domestic-prod10',
  templateUrl: './domestic-prod10.component.html',
  styleUrls: ['./domestic-prod10.component.css']
})
export class DomesticProd10Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/domesticproduct']);
  }


}
