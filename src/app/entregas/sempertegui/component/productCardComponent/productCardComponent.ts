import { Component, Input, inject } from '@angular/core';
import { Product } from '../../model/productsInterface';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../productDialogComponent/productDialogComponent'

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './productCardComponent.html',
  styleUrls: ['./productCardComponent.css'],
})
export class ProductCardComponent {

  @Input() product: Product = {} as Product;
  readonly dialog = inject(MatDialog);

  verProducto(product: Product){

    this.dialog.open(ProductDialogComponent, {
      height: '400px',
      width: '600px',
      data : product,
    })
  }

}
