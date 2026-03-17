import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';
import { Product } from '../../../../shared/models/product.model';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent implements OnInit {
  products = signal<Product[]>([]);
  activeCategory = signal<string>('all');

  categories = [
    { key: 'all',      label: 'Todos' },
    { key: 'cake',     label: 'Pasteles' },
    { key: 'cupcake',  label: 'Cupcakes' },
    { key: 'cookie',   label: 'Galletas' },
    { key: 'macaron',  label: 'Macarons' },
  ];

  // Mock data — replace with API call in Phase 2
  private readonly mockProducts: Product[] = [
    {
      id: '1',
      name: 'Pastel de Fresas',
      description: 'Esponjoso bizcocho de vainilla con crema chantilly y fresas frescas de temporada.',
      price: 450,
      imageUrl: 'assets/images/products/pastel-fresas.jpg',
      category: 'cake',
      isAvailable: true,
      isFeatured: true,
    },
    {
      id: '2',
      name: 'Cupcake Red Velvet',
      description: 'Clásico red velvet con frosting de queso crema y decoración artesanal.',
      price: 75,
      imageUrl: 'assets/images/products/cupcake-redvelvet.jpg',
      category: 'cupcake',
      isAvailable: true,
      isFeatured: true,
    },
    {
      id: '3',
      name: 'Macarons Surtidos',
      description: 'Caja de 6 macarons franceses en sabores de temporada.',
      price: 180,
      imageUrl: 'assets/images/products/macarons.jpg',
      category: 'macaron',
      isAvailable: true,
      isFeatured: true,
    },
    {
      id: '4',
      name: 'Galleta Nutella',
      description: 'Galleta artesanal rellena de Nutella con chispas de chocolate belga.',
      price: 65,
      imageUrl: 'assets/images/products/galleta-nutella.jpg',
      category: 'cookie',
      isAvailable: true,
      isFeatured: true,
    },
    {
      id: '5',
      name: 'Pastel Tres Leches',
      description: 'Tradicional pastel tres leches con crema de coco y canelaˡ.',
      price: 380,
      imageUrl: 'assets/images/products/tres-leches.jpg',
      category: 'cake',
      isAvailable: true,
      isFeatured: false,
    },
    {
      id: '6',
      name: 'Cupcake Limón',
      description: 'Suave bizcocho de limón con buttercream de merengue y zeste fresco.',
      price: 70,
      imageUrl: 'assets/images/products/cupcake-limon.jpg',
      category: 'cupcake',
      isAvailable: false,
      isFeatured: false,
    },
  ];

  get filteredProducts(): Product[] {
    const cat = this.activeCategory();
    return cat === 'all'
      ? this.mockProducts
      : this.mockProducts.filter(p => p.category === cat);
  }

  ngOnInit(): void {
    // Phase 2: replace with this.productService.getFeatured()
    this.products.set(this.mockProducts);
  }

  setCategory(key: string): void {
    this.activeCategory.set(key);
  }
}
