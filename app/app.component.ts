import { Component } from '@angular/core';


@Component({
  
  selector: 'my-app',
 template: `
  <div class='container'>
    <nav>
      <a>Home</a>
    </nav>
    <user-register></user-register>
    <template ngbModalContainer></template>
    
  </div>
 
  `

})
export class AppComponent  {
    
 }
