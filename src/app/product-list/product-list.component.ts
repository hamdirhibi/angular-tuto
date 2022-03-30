import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../models/product';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList:Product[] ; 

  constructor(private toastr: ToastrService,public service:ProductListService) {
    this.productList = service.productList ; 
   }

  ngOnInit(): void {

  }
  alertToastr(product:Product) {
    this.toastr.success(product.name+' Added to favorite')
  }
}
