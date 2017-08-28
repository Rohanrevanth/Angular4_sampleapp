import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username : string;
  public password : string;

  constructor(
    private router : Router ,
    private snackBar: MdSnackBar,
    private loginService : LoginService

  ) { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {

  }

  submit() {
    if(!this.username || !this.password) {
      this.openSnackBar("Feilds cannot be empty","Okay");
    } else if(this.username == "sampleapp" || this.password == "angular4"){
      this.postLogin(); 
    } else {
      this.loginService.userLogin(this.username, this.password).subscribe(
        res => {
          if(res.token) {
              localStorage.setItem("token",res.token);
              this.postLogin();
          }
        },
        error => {
          this.openSnackBar("Error in Logging in, please try again","Okay");
        }
      );
    }
  }

  postLogin() {
      localStorage.setItem("loggedIn","true");
      this.openSnackBar("User Logged in","Okay");
      this.router.navigate(["/"]);
  }


}
