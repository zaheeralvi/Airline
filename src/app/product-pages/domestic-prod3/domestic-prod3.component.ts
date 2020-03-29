import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domestic-prod3',
  templateUrl: './domestic-prod3.component.html',
  styleUrls: ['./domestic-prod3.component.css']
})
export class DomesticProd3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/domesticproduct']);
  }


}
