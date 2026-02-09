import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetImagesService {
  http = inject(HttpClient)

  getImagesList():Observable<any[]>{
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos')
  }

  getImagesId(id:number):Observable<any>{
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/photos/${id}`)
  }

  delateImagesId(id:number):Observable<any>{
    return this.http.delete<any>(`https://jsonplaceholder.typicode.com/photos/${id}`)
  }

  postImagesId(date:any):Observable<any>{
    return this.http.post<any>('https://jsonplaceholder.typicode.com/photos', date)
  }
}
