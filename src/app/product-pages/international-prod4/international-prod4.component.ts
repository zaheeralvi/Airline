import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-international-prod4',
  templateUrl: './international-prod4.component.html',
  styleUrls: ['./international-prod4.component.css']
})
export class InternationalProd4Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/internationalproduct']);
  }

}
