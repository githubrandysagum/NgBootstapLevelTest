import { Component } from '@angular/core';
import { USER } from '../../interfaces/user';
import { UserService } from '../../services/user-service';
import { Headers, Http } from '@angular/http';


@Component({
    moduleId : module.id,
    selector : 'user-list',
    templateUrl : 'user-list.component.html',
})


export class UserListComponent{
    users : Array<USER>;

    constructor(private userService : UserService){
        this.userService.search_users(response => {
                this.users = response;
            });  
            
    }



}