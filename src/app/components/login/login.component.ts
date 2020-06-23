import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  
  password: string;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  signUp() {
    this.authService.signUp(this.emailFormControl.value, this.passwordFormControl.value);
  }

  signIn() {
    this.authService.signIn(this.emailFormControl.value, this.passwordFormControl.value);
  }

  signOut() {
    this.authService.signOut();
  }

}
