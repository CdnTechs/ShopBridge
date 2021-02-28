import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products;
  constructor(private shopService: ShopService, private route: Router) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.shopService.getProducts().subscribe( res => {
      this.products = res;
      console.log(res);
    });
  }
  onDelete(id:number) {
      this.shopService.deleteProduct(id).subscribe(res =>{
          this.getProducts();
      },err =>{
        console.log(err);
      });
  }

}
