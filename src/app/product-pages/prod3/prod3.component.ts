import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod3',
  templateUrl: './prod3.component.html',
  styleUrls: ['./prod3.component.css']
})
export class Prod3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/']);
  }

}
