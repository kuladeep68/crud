import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobilesService {

  constructor(private _http:HttpClient) { }

  private db="http://localhost:3000/mobiles";

  fetechMobiles(){
    return this._http.get(this.db)
  }

  deleteMob1(id:any){
    return this._http.delete(this.db+"/"+id)
  }

  postMobile(body:any){
    return this._http.post(this.db,body)
  }

  putMobile(body:any){
    return this._http.put(this.db,body)
  }
}
