import { Component } from '@angular/core';
import { USER } from '../../interfaces/user';
import { UserService } from '../../services/user-service';


@Component({
    moduleId : module.id,
    selector : 'user-register',
    templateUrl:'user-register.component.html'
})



export class UserRegisterComponent{
    user : USER = <USER>{};
   
    constructor(private userService : UserService){

    }
    onClickRegister(){
        

        
        this.userService.user_register(this.user,  response => {
            
            console.log("Login success!")

        },error =>{
            alert ('Error: Please report this to admin!'+ error);
        });
       
    }


   

    



}