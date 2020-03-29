import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-international-prod5',
  templateUrl: './international-prod5.component.html',
  styleUrls: ['./international-prod5.component.css']
})
export class InternationalProd5Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/internationalproduct']);
  }

}
