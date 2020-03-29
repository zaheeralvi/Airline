import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-international-prod11',
  templateUrl: './international-prod11.component.html',
  styleUrls: ['./international-prod11.component.css']
})
export class InternationalProd11Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/internationalproduct']);
  }

}
