
import { USER } from '../interfaces/user';
import { Injectable   } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

@Injectable()


export class UserService {
    headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'})
    options = new RequestOptions({ headers : this.headers })
    url = 'http://localhost/xbase/index.php';
    
    
    constructor(private http : Http){

    }


    search_users( successCallBack : (response : any) => any){
        let body = {
            'mc': 'user.fetch'
            
        }

       
        this.http.post(this.url, this.http_build_query(body), this.options)
            .subscribe(res => {
               let users =  JSON.parse(res['_body']).data;  
               console.log(users);
               successCallBack(users);
            })
    }


    

http_build_query (formdata : any, numericPrefix='', argSeparator='') { 
        var urlencode = this.urlencode;
        var value : any
        var key : any
        var tmp : any = []
        var _httpBuildQueryHelper = function (key : any, val : any, argSeparator : any) {
            var k : any
            var tmp : any = []
            if (val === true) {
            val = '1'
            } else if (val === false) {
            val = '0'
            }
            if (val !== null) {
            if (typeof val === 'object') {
                for (k in val) {
                if (val[k] !== null) {
                    tmp.push(_httpBuildQueryHelper(key + '[' + k + ']', val[k], argSeparator))
                }
                }
                return tmp.join(argSeparator)
            } else if (typeof val !== 'function') {
                return urlencode(key) + '=' + urlencode(val)
            } else {
                throw new Error('There was an error processing for http_build_query().')
            }
            } else {
            return ''
            }
        }

        if (!argSeparator) {
            argSeparator = '&'
        }
        for (key in formdata) {
            value = formdata[key]
            if (numericPrefix && !isNaN(key)) {
            key = String(numericPrefix) + key
            }
            var query = _httpBuildQueryHelper(key, value, argSeparator)
            if (query !== '') {
            tmp.push(query)
            }
        }

        return tmp.join(argSeparator)
    }


    urlencode (str : any) {
        str = (str + '')
        return encodeURIComponent(str)
            .replace(/!/g, '%21')
            .replace(/'/g, '%27')
            .replace(/\(/g, '%28')
            .replace(/\)/g, '%29')
            .replace(/\*/g, '%2A')
            .replace(/%20/g, '+')
    }









}