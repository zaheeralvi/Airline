import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod5',
  templateUrl: './prod5.component.html',
  styleUrls: ['./prod5.component.css']
})
export class Prod5Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/']);
  }

}
