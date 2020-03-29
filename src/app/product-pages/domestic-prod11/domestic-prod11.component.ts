import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domestic-prod11',
  templateUrl: './domestic-prod11.component.html',
  styleUrls: ['./domestic-prod11.component.css']
})
export class DomesticProd11Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/domesticproduct']);
  }


}
