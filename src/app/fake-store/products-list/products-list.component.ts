import { Component } from '@angular/core';
import { Product } from '../../shared/models/product';
import { FakeStoreService } from '../fake-store.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  products: Product[] = [];
  isLoading = true;
  errorMsg = '';

  constructor(private productsService: FakeStoreService) {}

  ngOnInit() {
    this.productsService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMsg = 'Błąd w trakcie pobierania produktów';
        this.isLoading = false;
      }
    });
  }
}
