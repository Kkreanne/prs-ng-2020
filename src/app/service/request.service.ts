import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
import { Request } from '../model/request.class'

const url = 'http://localhost:8080/requests/';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  requestId: Request = null;
  
  constructor(private http: HttpClient) { }

  list(): Observable<JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  create(request: Request): Observable<JsonResponse> {
    return this.http.post(url, request) as Observable<JsonResponse>;
  }

  get(id: number): Observable<JsonResponse> {
    return this.http.get(url+id) as Observable<JsonResponse>;
  }

  edit(request: Request): Observable<JsonResponse> {
    return this.http.put(url, request) as Observable<JsonResponse>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url+id) as Observable<JsonResponse>;
  }

  review(request: Request): Observable<JsonResponse> {
    return this.http.put(`${url}submit-review`, request) as Observable<JsonResponse>;
  }

  requestWithStatusOfReview(id: number): Observable<JsonResponse> {
    console.log("a");
    return this.http.get(url+"/list-review/"+id) as Observable<JsonResponse>;
  }

  approve(request: Request): Observable<JsonResponse> {
    return this.http.put(`${url}approve`, request) as Observable<JsonResponse>;
  }

  reject(request: Request): Observable<JsonResponse> {
    return this.http.put(`${url}reject`, request) as Observable<JsonResponse>;
  }
}
