import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod4',
  templateUrl: './prod4.component.html',
  styleUrls: ['./prod4.component.css']
})
export class Prod4Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/']);
  }

}
