import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domestic-prod4',
  templateUrl: './domestic-prod4.component.html',
  styleUrls: ['./domestic-prod4.component.css']
})
export class DomesticProd4Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/domesticproduct']);
  }

}
