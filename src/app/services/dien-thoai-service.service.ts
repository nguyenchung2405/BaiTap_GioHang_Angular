import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Phone } from '../models/Phone';

@Injectable({
  providedIn: 'root'
})
export class DienThoaiServiceService {

  smartPhones: Phone[] = [
    {
      id: 1,
      name: 'Oppo R1',
      image: 'https://cdn.tgdd.vn/Products/Images/42/182153/oppo-f9-red-1.jpg',
      description: 'Sản phẩm của china',
      price: 450,
      invetory: 10,
      rating: 3
    },
    {
      id: 2,
      name: 'Samsung Galaxy Note 9',
      image: 'https://viostore.vn/wp-content/uploads/2018/08/samsung-galaxy-note-9-black-400x460-400x460.png',
      description: 'Sản phẩm của Hàn Quốc',
      price: 200,
      invetory: 15,
      rating: 5
    }, {
      id: 3,
      name: 'Iphone XS',
      image: 'https://didongmoi.com.vn/site/pictures/products/1576746408_iphone-xs-256gb-cu%20(3)_gqi.jpg',
      description: 'Sản phẩm của US',
      price: 600,
      invetory: 20,
      rating: 4
    }
  ];
  selectedPhones =
    [
      {
        Product: {
          id: 1,
          name: 'Oppo R1',
          image: 'https://cdn.tgdd.vn/Products/Images/42/182153/oppo-f9-red-1.jpg',
          description: 'Sản phẩm của china',
          price: 450,
          invetory: 10,
          rating: 3
        },
        quantity: 1
      }
    ];

  constructor() { }
  @Output() selectedProductsEmitter = new EventEmitter();

  addCart = (product: Phone) => {
    let index = this.selectedPhones.findIndex(Product => Product.Product.id === product.id);
    if (index === -1) {
      this.selectedPhones.push({ Product: product, quantity: 1 });
    } else {
      this.selectedPhones[index].quantity += 1;
    }
    this.selectedProductsEmitter.emit(this.selectedPhones);
  }

  increaseDecrease(id: number, quanInDe) {
    let SP = this.selectedPhones.find(PD => PD.Product.id === id);
    if (SP) {
      SP.quantity += quanInDe;
    }
    if (SP.quantity === 0) {
      return SP.quantity = 1;
    }
  }

  deleteProduct(id: number) {
    let index = this.selectedPhones.findIndex(SP => SP.Product.id === id);
    if (index !== -1) {
      this.selectedPhones.splice(index, 1);
    };
  }

  clearCart() {
    this.selectedPhones = [];
    this.selectedProductsEmitter.emit(this.selectedPhones);
  }
}
