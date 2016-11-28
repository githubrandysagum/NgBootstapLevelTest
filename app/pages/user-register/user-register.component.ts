import { Component, OnInit } from '@angular/core';
import { UserFormValid } from '../../interfaces/user-form-valid';
import { UserService } from '../../services/user-service';


@Component({
    moduleId : module.id,
    selector : 'user-register',
    templateUrl:'user-register.component.html'
})



export class UserRegisterComponent implements OnInit{
    alertMessage = "";
    alertClass = "";
    form : UserFormValid = new UserFormValid();
    birthdate = {
            "year": 2016,
            "month": 11,
            "day": 18
        }

    constructor(private userService : UserService){
          this.form.user.gender = "M";
    }


   ngOnInit(){
        this.validate_setsRequired();
        this.validate_setRegex();    
   }

     onClickRegister(){    
         
        if(!this.form.isValid()){ 
            this.alertMessage = "*Please fill the form correctly"; 
            this.alertClass = "alert-warning";
             return;
            }
           
        this.userService.user_register(this.form.user,  response => {          
            this.alertMessage = "Login success!";
            this.alertClass = "alert-success";
        },error =>{
            this.alertMessage =  ' Server says : '+ error;
            this.alertClass = "alert-danger";
        });
       
    }

    onChangeFile(event : any) {
        let file = event.target.files[0];
        if ( file === void 0 ) return;
        console.log('onChangeFile(): file: ', file);
       // this.file_upload_begin = true;
                  //this.position = 50;
                  //this.urlPhoto = file.name;
      //  let ref = this.getReferenceOfPrimaryPhoto( file.name );
     //   this.firebaseStorage.upload( { file: file, ref: ref }, uploaded => {
        //    this.onFileUploaded( uploaded.url, uploaded.ref );
      //  },
        // e => {
        //     this.file_upload_begin = false;
        //     alert(e);
        // },
        // percent => {
        //     this.file_upload_position = percent;
        //     console.log('percent: ' + this.file_upload_position);
        //     this.renderPage();
        // });
    }


    validate_setRegex(){
        this.form.setRegex('email',
             new RegExp(/(.+)@(.+){2,}\.(.+){2,}/) ,
             "Email is malformed");
        this.form.setRegex('password',
             new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) ,
            "Password must contain minimum 8 characters at least 1 Alphabet and 1 Number"
        )     
    }

    validate_setsRequired(){

        this.form.setRequired('id', "Username is Required");
        this.form.setRequired('name', "Name is Required");
        this.form.setRequired('password', "Password is Required");
        this.form.setRequired('email', "Email is Required");
        this.form.setRequired('address', "Address is Required");

    }

}