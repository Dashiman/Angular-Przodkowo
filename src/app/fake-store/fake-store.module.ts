import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsListComponent } from './products-list/products-list.component';



@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
      path: 'products',
     component:ProductsListComponent
      }
    ]),

  ]
})
export class FakeStoreModule { }
