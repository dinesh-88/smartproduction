import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from './user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      loginName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const user = new User();
    user.reqType = 1;
    user.loginName = this.loginForm.get('loginName').value;
    user.password = this.loginForm.get('password').value;
    this.authService.login(user);
  }

}
