import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domestic-prod7',
  templateUrl: './domestic-prod7.component.html',
  styleUrls: ['./domestic-prod7.component.css']
})
export class DomesticProd7Component implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/domesticproduct']);
  }


}
