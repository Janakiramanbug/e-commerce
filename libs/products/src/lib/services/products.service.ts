import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '@env/environment'
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiUrlProduct = environment.apiURL+'product/'
  constructor(private http: HttpClient) {}

  getProducts(selectedCats?: string[]): Observable<Product[]> {
    let params = new HttpParams()
    if(selectedCats){
      params = params.append('category',selectedCats.join(','))
    }
    return this.http.get<Product[]>(this.apiUrlProduct, {params: params});
  }

  getProduct(productId: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrlProduct}${productId}`);
  }

  getFeaturedProducts(count: number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiUrlProduct}get/featured/${count}`);
  }

  createProduct(productData: FormData) {
    return this.http.post(this.apiUrlProduct, productData);
  }

  updateProduct(productData: FormData,productId: string ) {
    return this.http.put(`${this.apiUrlProduct}${productId}`, productData);
  }

  deleteProduct(productId: string) {
    return this.http.delete(
      `${this.apiUrlProduct}${productId}`
    );
  }

}
