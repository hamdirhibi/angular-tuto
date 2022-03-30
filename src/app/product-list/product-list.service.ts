import { Injectable } from '@angular/core';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  productList : Product[]= [
    {
      name : 'Product 1',
      hasDiscount:false, 
      price: 49.99,
      image :'https://i.ibb.co/L8Nrb7p/1.jpg',
      isNew: false
    },
    {
      name : 'Product 2',
      hasDiscount:true, 
      discount:15,
      price: 49.99,
      oldPrice:79.99,
      image :'https://i.ibb.co/L8Nrb7p/2.jpg',
      isNew: true
    },
    {
      name : 'Product 3',
      hasDiscount:false, 
      price: 49.99,
      image :'https://i.ibb.co/L8Nrb7p/3.jpg',
      isNew: false
    },
    {
      name : 'Product 4',
      hasDiscount:false, 
      price: 49.99,
      image :'https://i.ibb.co/L8Nrb7p/4.jpg',
      isNew: false
    },
    {
      name : 'Product 5',
      hasDiscount:false, 
      price: 49.99,
      image :'https://i.ibb.co/L8Nrb7p/5.jpg',
      isNew: false
    },
    {
      name : 'Product 6',
      hasDiscount:true, 
      discount:15,
      price: 49.99,
      oldPrice:79.99,
      image :'https://i.ibb.co/L8Nrb7p/6.jpg',
      isNew: false
    },
    {
      name : 'Product 7',
      hasDiscount:false, 
      price: 49.99,
      image :'https://i.ibb.co/L8Nrb7p/7.jpg',
      isNew: false
    },
    {
      name : 'Product 8',
      hasDiscount:false, 
      price: 49.99,
      isNew: true,
      image :'https://i.ibb.co/L8Nrb7p/8.jpg'
    },
    
  ]; 

  constructor() { }
}
