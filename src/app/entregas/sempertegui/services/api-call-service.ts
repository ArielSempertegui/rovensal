import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../model/productsInterface';
import { Observable } from 'rxjs'; 

@Injectable({
    providedIn: 'root'
})
export class ApiCallService {

    constructor(private httpClient: HttpClient) { }

    getProducts(): Observable<Products>{
        return this.httpClient.get<Products>('https://dummyjson.com/products');
    }
}