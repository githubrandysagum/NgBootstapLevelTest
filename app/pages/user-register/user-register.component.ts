import { Component } from '@angular/core';
import { USER } from '../../interfaces/user';
import { UserService } from '../../services/user-service';

export class validState{
    message : string;
    valid : boolean;
    

    constructor(_message: string, _valid : boolean){
        this.message = _message;
        this.valid = _valid;
    }
}

@Component({
    moduleId : module.id,
    selector : 'user-register',
    templateUrl:'user-register.component.html'
})



export class UserRegisterComponent{
    user : USER = <USER>{};
    validationMessage : string;

    constructor(private userService : UserService){

    }
    onClickRegister(){
        
        let validState = this.validateUSER(this.user);
        if(!validState.valid) { this.validationMessage = validState.message; return; }

      //  this.userService.register_user(this.user);
       
    }


    validateUSER(user : USER){

        if(user.id == void 0) return new validState('Username is Required', false); 

        return new validState('', true); 
    }

    



}