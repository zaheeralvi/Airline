import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domestic-prod5',
  templateUrl: './domestic-prod5.component.html',
  styleUrls: ['./domestic-prod5.component.css']
})
export class DomesticProd5Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/domesticproduct']);
  }


}
