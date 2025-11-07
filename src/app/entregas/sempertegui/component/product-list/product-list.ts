import { Component, Input } from '@angular/core';
import { Product } from '../../model/productsInterface';
import { ApiCallService } from '../../services/api-call-service';
import { Products } from '../../model/productsInterface';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styles: ``,
})
export class ProductList {

  products: Product[] = [];

  constructor(private apiCall: ApiCallService){ }

  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    this.apiCall.getProducts().subscribe((products: Products) =>{
      this.products = products.products;
    })
  }


}
