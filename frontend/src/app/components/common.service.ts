import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment';

 interface Response {
    status: boolean,
    msg: string
  }

  interface getResponse { 
    status: boolean,
    msg: string,
    data: any
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


  postCallMethod(obj:any, url:string){
    const headers = this.getAuthToken()
    return this.api.post<Response>(`${environment.apiBaseUrl}${url}`, obj , {headers})
  }

  getCallMethod(url:string){
    const headers = this.getAuthToken()
    return this.api.get<getResponse>(`${environment.apiBaseUrl}${url}`, {headers})
  }
 
}
