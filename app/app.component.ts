import { Component } from '@angular/core';


@Component({
  
  selector: 'my-app',
 template: `
  <div class='container'>
    <nav>
      <a>Home</a>
    </nav>
    <modal></modal>
    <template ngbModalContainer></template>
    
  </div>
 
  `

})
export class AppComponent  {
    
 }
