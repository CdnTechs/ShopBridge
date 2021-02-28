import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Shared/Product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
product: Product;
  constructor(private shopService:ShopService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loadProduct();
  }
  loadProduct() {
    this.shopService.getProduct(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(product =>{
      this.product = product;
    },err =>{
      console.log(err);
    });
  }

}
