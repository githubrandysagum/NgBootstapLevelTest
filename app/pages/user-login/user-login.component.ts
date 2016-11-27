import { Component , OnInit} from '@angular/core';
import { UserFormValid } from '../../interfaces/user-form-valid';
import { UserService } from '../../services/user-service';


@Component({
    moduleId : module.id,
    selector : 'user-login',
    templateUrl : 'user-login.html'

})


export class UserLoginComponent  implements OnInit{
    form : UserFormValid = new UserFormValid();
    alertMessage = "";
    alertClass = "";

     constructor(private userService : UserService){
          
    }


    ngOnInit(){
        this.validate_required();
    }


    onClickLogin(){
         if(!this.form.isValid()){ 
            this.alertMessage = "*Please fill the form correctly"; 
            this.alertClass = "alert-warning";
             return;
            }
        
        this.userService.user_login(this.form.user, response=>{
            this.alertMessage = "*Login success"; 
            this.alertClass = "alert-success";
            console.log(response);
        }, error=>{
            this.alertMessage = "Server says: "+  error; 
            this.alertClass = "alert-success";
            console.log(error);
        })
         
    }


    validate_required(){
        this.form.setRequired('id', 'Username is Required');
        this.form.setRequired('password','Password is Required');
    }

}