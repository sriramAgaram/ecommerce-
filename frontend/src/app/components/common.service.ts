import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

 interface Response {
    status: boolean,
    msg: string
  }

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  constructor(private api: HttpClient) { }


  getAuthToken (){
    const token = localStorage.getItem('token')
    if(token){
      return new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }else {
      return new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }


  postCallMethod(obj:any){
    const headers = this.getAuthToken()
    return this.api.post<Response>('http://localhost:5000/api/v1/subcategories/add', obj , {headers})
  }
 
}
