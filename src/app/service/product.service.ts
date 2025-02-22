import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private userUrl = 'http://localhost:8080/api/test/user';

  constructor(private http: HttpClient) { }

  getProductsList(): Observable<any> {
    console.log("enter");
    return this.http.get(`${this.userUrl}`+'/products');
  }
  getProduct(id: number): Observable<Object> {
    return this.http.get(`${this.userUrl}/product/${id}`);
  }
  getProductsByProductname(productname: string): Observable<any> {
    return this.http.get(`${this.userUrl}/products/name/${productname}`);
  }
}
