import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false;

  constructor(public authService: AuthService, private router: Router) { }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    // form.value.password = CryptoJS.AES.encrypt("my secreate key 369", form.value.password.trim()).toString();
    // const bytes= CryptoJS.AES.decrypt(form.value.password, "my secreate key 369");
    // console.log(bytes, "*****");
    this.authService.login(form.value);
    // this.router.navigate(['/dashboard']);
  }

  onSignUp() {
    this.router.navigate(['/signup']);
  }

  ngOnInit() {
  }

}
