import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from '../Shared/Product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'http://localhost:5000/api/';
  formData: Product;
  constructor(private http: HttpClient) { }

  getProducts() {
     return this.http.get(this.baseUrl + 'product');
    // return this.http.get(this.baseUrl + 'product', {observe: 'response'})
    //   .pipe(
    //     map(response => {
    //       return response.body;
    //     })
    //   );
  }
  getProduct(id:number) {
   return this.http.get<Product>(this.baseUrl+ 'product/'+id);
  }
  postProductDetail(formData:Product) {
   return this.http.post(this.baseUrl + 'product',formData);
  }
  deleteProduct(id:number) {
    return this.http.delete(this.baseUrl + 'product/'+id);
  }
  updateProductDetail(id:number,formData:Product){
    return this.http.put(this.baseUrl + 'product/'+id,formData);
  }
}
