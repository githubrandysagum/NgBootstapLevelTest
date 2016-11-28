import { USER } from './user';


export class Regex {
    key : string;
    regex : RegExp;
    message : string;
    
    constructor(key : string, regex : RegExp, message : string ){
        this.key = key;
        this.regex = regex;
        this.message = message;
    }
}

export class Required {
    key : string;
    message : string;
    valid : boolean;
    
    constructor(key : string,message : string , valid : boolean){
        this.key = key;
        this.message = message;
        this.valid = valid;
    }
}


export class UserFormValid {
    
    private regex  = Array<Regex>();
    private required  =  Array<Required>();
    private valid = true;
            user : USER = new USER();
            ValidMessage : USER = new USER();  // use for message validation of property
       
 //********* Regular Expressions validator***************/
    setRegex(key:string, regex : RegExp, message : string) {

        this.regex.push({
            key : key,
            regex : regex,
            message : message
        });
    }  

    //method to use to set property as required
     setRequired(key : string, message : string) {    
            this.required.push( new Required( key,  message, true));
            
     }   

    private validateRegex( key : string , regex : RegExp) : boolean{
        if(regex.test(this.user[key])) return true
        else return false;
    }

    private validateEachRegex(){
        let valid = true;
        console.log('regex validation' , this.regex)
         this.regex.forEach((value, index, array)=> {
            if( ! this.validateRegex( value.key, value.regex )) {
                 this.ValidMessage[value.key] = value.message;
                 valid = false;
            }else{  
                 this.ValidMessage[value.key] = '';         
            }
         });

         this.valid = valid;
     }


/****   Required validator **************/


        
   
     //method that validate property if required
    private validateRequired( key : string ) : boolean{
            
            if( this.user[key] == '', this.user[key] == ""|| typeof( this.user[key]) === 'undefined' || this.user[key] === null ) return false;
            else return true;
     }

     //method that loop all property of this class  that required to be validate
     private validateEachRequired(){
        let valid = true;
        
         this.required.forEach((value, index, array)=> {
            if( ! this.validateRequired( value.key )) {
                 this.ValidMessage[value.key] = value.message;
                 valid = false;
            }else{  
                 this.ValidMessage[value.key] = '';
            }
         });
         this.valid = valid;
     }



     isValid() : any {
         this.valid = true;
         this.validateEachRequired();
         if(this.valid)  this.validateEachRegex(); 
         return this.valid;
     }



}
