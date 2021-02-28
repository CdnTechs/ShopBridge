import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Shared/Product';
import { ShopService } from '../shop.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
product: Product;
  constructor(private shopService:ShopService,
     private activatedRoute: ActivatedRoute,
     private route:Router) { }

  ngOnInit() {
    this.loadProduct();
  }
  onUpdate(form:NgForm){
    this.shopService.updateProductDetail(+this.activatedRoute.snapshot.paramMap.get('id'),form.value)
    .subscribe(
      res => {
        this.route.navigate(['/shop']);
      },
      err => {
        console.log(err);
      }
    )
  }

  loadProduct() {
    this.shopService.getProduct(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(product =>{
      this.product = product;
      console.log(this.product);
    },err =>{
      console.log(err);
    });
  }
}
