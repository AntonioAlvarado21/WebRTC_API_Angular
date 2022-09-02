import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GetUserMediaBasicComponent } from './AccessMediaDevices/get-user-media-basic/get-user-media-basic.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { BasicPeerConnectionStabComponent } from './RTCPeerConnection/basic-peer-connection-stab/basic-peer-connection-stab.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GetUserMediaBasicComponent,
    BasicPeerConnectionStabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule, MatFormFieldModule, MatInputModule,
    MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule, MatListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
