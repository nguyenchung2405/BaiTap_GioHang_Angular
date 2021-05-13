import { Component, OnInit } from '@angular/core';
import { Phone } from '../models/Phone';
import { DienThoaiServiceService } from '../services/dien-thoai-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  smartPhones: Phone[];
  selectedPhones: { Product: Phone, quantity: number }[];
  Sum: number;

  constructor(private DienThoaiSv: DienThoaiServiceService) { }

  onAddCart = (product: Phone) => {
    this.DienThoaiSv.addCart(product);
  }

  onIncreaseDecrease = (id: number, tangGiam: number) => {
    this.DienThoaiSv.increaseDecrease(id, tangGiam);
  }

  onDeleteProduct = (id: number) => {
    this.DienThoaiSv.deleteProduct(id);
  }

  onThanhToan() {
    this.DienThoaiSv.clearCart();
  }

  tongTien() {
    this.Sum = this.selectedPhones.reduce((tongTien: number, SP, index) => {
      tongTien += (SP.Product.price * SP.quantity);
      return tongTien;
    }, 0);
    return this.Sum;
  }

  ngOnInit(): void {

    this.smartPhones = this.DienThoaiSv.smartPhones;
    this.selectedPhones = this.DienThoaiSv.selectedPhones;
    this.DienThoaiSv.selectedProductsEmitter.subscribe((val) => {
      this.selectedPhones = val;
    })
  }

}
