import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product; 
  @Output() displayToastr = new EventEmitter(); 

  constructor() { }
  ngOnInit(): void {
  }

}
