import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod6',
  templateUrl: './prod6.component.html',
  styleUrls: ['./prod6.component.css']
})
export class Prod6Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/']);
  }
}
