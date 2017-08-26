import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GrabService } from '../services/grab.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-grabpage',
  templateUrl: './grabpage.component.html',
  styleUrls: ['./grabpage.component.css']
})
export class GrabpageComponent implements OnInit {

  private url : string;
  private text: string;
  private isTextAvailable : boolean = false;

  constructor(
    private router : Router,
    private snackBar: MdSnackBar,
    private grabService : GrabService
  ) { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
    if(localStorage.getItem("loggedIn") != "true") {
      this.router.navigate(["/"]);
    }    
  }

  grab() {
      this.grabService.grab(this.url).subscribe(
        res => {
          console.log(res);
          if(res) {
            if(res.message == "successfully fetch") {
              this.isTextAvailable = true;
              this.text = res.text;
            } else {
              this.openSnackBar("Grabbing content unsucessful","Okay");
            }
          }
        },
        error => {
          this.openSnackBar("Grabbing content unsucessful","Okay");
        }
      );
  }

}
