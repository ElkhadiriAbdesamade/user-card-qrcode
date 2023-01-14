import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { ApiService } from '../../services/api.service';
import { Router, UrlTree } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private api: ApiService, private router: Router, private _snackBar: MatSnackBar) { }

  user: User = {

    first_name: "",
    first_name_arabs: "",
    last_name: "",
    last_name_arabs: "",
    cin: "",
    date_birth: "",
    profession: "",
    type_cart: "",
    image: "https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  }
cin="";
  userc!:User;

  ngOnInit(): void {
  }



  generate_user_info() {
    console.log(this.user);

  }

  
  getUser(cin: string) {
    //console.log(this.user);
    this.api.getuser(cin).subscribe({
      next: (res) => {
        //alert("card created Successfully");
        this.userc = res[0] 
      },
      error: () => {
        alert("Error While creating the card")
      }
    })
  }


  addUser() {
   
    this.getUser(this.user.cin)

    if (this.validate() || this.userc!==undefined) {
      this.api.adduser(this.user).subscribe({
        next: (res) => {

          alert("Info Added Successfully");
          this.router.navigateByUrl('cart/' + this.user.cin);
          this.restuser();
        },
        error: () => {
          alert("Error While adding the Info")
        }
      })
    }
    else {
      this.openSnackBar()
    }
  }

  openSnackBar() {
    if (this.user) {
      this._snackBar.open('CIN already exist !!', 'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 5000,
      });
    }else{
      this._snackBar.open('Pleas Fill All Your Info !!', 'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 5000,
      });
    }
   
  }

  restuser() {
    this.user.first_name = "";
    this.user.first_name_arabs = "";
    this.user.last_name = "";
    this.user.last_name_arabs = "";
    this.user.cin = "";
    this.user.profession = "";
    this.user.date_birth = "";
    this.user.type_cart = "";
    this.user.image = "";
  }
  validate() {
    if (this.user.first_name === "" || this.user.first_name_arabs === "" ||
      this.user.last_name === "" ||
      this.user.last_name_arabs === "" ||
      this.user.cin === "" ||
      this.user.profession === "" ||
      this.user.date_birth === "" ||
      this.user.type_cart === "") {
      return false
    }
    return true
  }

  search(){
    this.getUser(this.user.cin)

    if (this.userc.first_name!==""){
      alert('exist')
      this.router.navigateByUrl('cart/' + this.cin);

    } 
  }
}
