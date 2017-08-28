import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent implements OnInit, OnChanges {

  public isLoggedIn : boolean;

  constructor(
    private router : Router,
    public snackBar: MdSnackBar    
  ) { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
    if(localStorage.getItem("loggedIn") == "true") {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  ngOnChanges(changes) {
    
  }

  gotoLogin() {
    this.router.navigate(["login"]);
  }

  gotoHome() {
    this.router.navigate(["/"]);
  }

  gotoGrab() {
    if(this.isLoggedIn == true) {
      this.router.navigate(["grab"]);
    } else {
      this.openSnackBar("Login to continue","Okay");
      this.gotoLogin();
    }
  }

  givemefalse() {
    return false;
  }

  logout() {
    localStorage.removeItem("token");  
    localStorage.setItem("loggedIn","false");
    this.isLoggedIn = false;
    this.openSnackBar("User Logged out","Okay");
    this.router.navigate(["/"]);
  }

}
