import { Component } from '@angular/core';
import { USER } from '../../interfaces/user';

@Component({
    moduleId : module.id,
    selector : 'user-register',
    templateUrl:'user-register.component.html'
})


export class UserRegisterComponent{
   
    user : USER = <USER>{};
   
    onClickRegister(){
        
        
        console.log(this.user);
    }



}