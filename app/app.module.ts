import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule }   from '@angular/forms';

import { UserService } from './services/user-service';

import { UserListComponent } from './pages/user-list/user-list.component';
import { HttpModule }    from '@angular/http';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [ 
    AppComponent,
    UserListComponent
  ],
  providers: [
    UserService
  ],

  bootstrap:    [ AppComponent ]
})


export class AppModule { }