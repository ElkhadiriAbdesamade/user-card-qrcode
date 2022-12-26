import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { User } from 'src/app/models/user';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})



export class CarteComponent {


  constructor(private api: ApiService, private route: ActivatedRoute, private captureService: NgxCaptureService,private http:HttpClient) { }

  user!: User;
  cin !: string;
  userInfo!: string;
  img=""
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.cin = params['cin']);
    this.getUser(this.cin);
    this.userInfo = 'First Name :' + this.user.first_name + ' Last Name :' + this.user.last_name + ' CIN :' + this.user.cin + ' Birth Date :' + this.user.date_birth
   
  }



  getUser(cin: string) {
    //console.log(this.user);
    this.api.getuser(cin).subscribe({
      next: (res) => {
        //alert("card created Successfully");
        this.user = res[0]
        console.log(this.user.first_name);
        
      },
      error: () => {
        alert("Error While creating the card")
      }
    })
  }






}
