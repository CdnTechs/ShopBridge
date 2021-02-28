import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Shared/Product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product;
  constructor(private service: ShopService,
     private route: Router,
     private activatedRoute: ActivatedRoute
     ) { }

  ngOnInit() {
    this.loadProduct();
    this.reset();
  }
  onSubmit(form: NgForm) {
      this.service.postProductDetail(form.value).subscribe(
        res => {
          this.reset(form);
          this.route.navigate(['/shop']);
        },
        err => {
          console.log(err);
        }
      )
  }
  reset(form?: NgForm) {
    if(form != null)
    form.resetForm();
    this.service.formData = {
      ProductId: 0,
      ProductName: '',
      Price: 0,
      Description: '',
      PictureUrl : ''
    };
  }
  loadProduct() {
    this.service.getProduct(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(product =>{
      this.product = product;
    },err =>{
      console.log(err);
    });
  }
}
