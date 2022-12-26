import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QRCodeModule } from 'angularx-qrcode';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { UserComponent } from './component/user/user.component';
import { MatKeyboardModule } from 'angular-onscreen-material-keyboard';
import { CarteComponent } from './component/carte/carte.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgxPrintElementModule } from 'ngx-print-element';
import { NgxPrintModule } from 'ngx-print';
import { NgxCaptureModule } from 'ngx-capture';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CarteComponent
  ],
  imports: [
    BrowserModule,
    QRCodeModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatKeyboardModule,
    BrowserModule,
    MatSnackBarModule,
    NgxPrintElementModule,
    NgxCaptureModule,
    NgxPrintModule,
    RouterModule.forRoot([
      {path: '', component: UserComponent},
      {path: 'cart/:cin', component: CarteComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
