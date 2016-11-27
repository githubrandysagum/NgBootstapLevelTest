import { Component } from '@angular/core';


@Component({
  
  selector: 'my-app',
 template: `
  <div class='container'>
    <nav>
      <a>Home</a>
    </nav>
    <user-login></user-login>
    <user-register></user-register>
  </div>
 
  `

})
export class AppComponent  {
    
 }
