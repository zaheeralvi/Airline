import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLoading = false;

  constructor(public authService: AuthService, private router: Router) { }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
   // form.value.password = CryptoJS.AES.encrypt("my secreate key 369", form.value.password.trim()).toString();
    this.authService.createUser(form.value);
    // this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
