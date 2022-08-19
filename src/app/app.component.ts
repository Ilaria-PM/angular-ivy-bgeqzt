import { Component, VERSION } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products: Product[] = [
    {
      id: 1,
      label: 'Nutella',
      cost: 5,
    },
    {
      id: 2,
      label: 'Latte',
      cost: 2,
    },
    {
      id: 3,
      label: 'pane',
      cost: 1,
    },
  ];

  deleteProduct(product: Product) {
    this.products = this.products.filter((p) => {
      return p.id !== product.id;
    });
  }

  // getTotal():number{
  //   let total = 0;
  //   this.products.forEach(p => {
  //     total+= p.cost;
  //   })
  //   return total;
  // }

  getTotal(): number {
    return this.products.reduce((acc, p) => acc + p.cost, 0);
  }

  priceColor() {
    if (this.getTotal() >= 3) {
      return 'black';
    } else {
      return 'red';
    }
  }
}
