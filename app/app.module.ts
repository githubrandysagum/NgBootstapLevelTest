import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { UserService } from './services/user-service';

import { UserListComponent } from './pages/user-list/user-list.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component'


@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [ 
    AppComponent,
    UserListComponent,
    UserRegisterComponent
  ],
  providers: [
    UserService
  ],

  bootstrap:    [ AppComponent ]
})


export class AppModule { }