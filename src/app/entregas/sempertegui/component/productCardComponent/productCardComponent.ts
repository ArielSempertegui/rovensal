import { Component, Input, inject } from '@angular/core';
import { Product } from '../../model/productsInterface';
import { ProductDialogComponent } from '../productDialogComponent/productDialogComponent'
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
@Component({
  selector: 'app-product-card',
  imports: [MatButtonModule, MatDialogClose],
  templateUrl: './productCardComponent.html',
  styleUrls: ['./productCardComponent.css'],
})
export class ProductCardComponent {

  @Input() product: Product = {} as Product;
  readonly dialog = inject(MatDialog);

  verProducto(product: Product){

    this.dialog.open(ProductDialogComponent, {
      height: '400px', //300
      width: '400px',   //400
      data : product,
    })
  }

}
