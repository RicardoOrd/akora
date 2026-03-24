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
    { key: 'all', label: 'Todos' },
    { key: 'galleta', label: 'Galletas Crumbl' },
    { key: 'rol', label: 'Roles de Canela' },
    { key: 'cheesecake', label: 'Cheesecake' },
    { key: 'bollito', label: 'Bollitos' },
  ];

  // Productos del menú real de Akora
  private readonly mockProducts: Product[] = [
    // ── Galletas Estilo Crumbl ──
    {
      id: 'g1',
      name: 'Galleta Original',
      description: 'Nuestra galleta clásica estilo Crumbl. Suave por dentro, ligeramente crujiente por fuera.',
      price: 0,
      imageUrl: 'assets/images/products/galleta-original.jpg',
      category: 'galleta',
      isAvailable: true,
      isFeatured: true,
    },
    {
      id: 'g2',
      name: 'Galleta de Zanahoria rellena de Cheesecake',
      description: 'Galleta de zanahoria especiada con un corazón cremoso de cheesecake. Irresistible.',
      price: 0,
      imageUrl: 'assets/images/products/galleta-zanahoria.jpg',
      category: 'galleta',
      isAvailable: true,
      isFeatured: true,
    },
    {
      id: 'g3',
      name: 'Galleta Red Velvet rellena de Cheesecake',
      description: 'Red velvet con relleno de cheesecake cremoso. Un clásico reinventado.',
      price: 0,
      imageUrl: 'assets/images/products/galleta-redvelvet.jpg',
      category: 'galleta',
      isAvailable: true,
      isFeatured: true,
    },
    {
      id: 'g4',
      name: 'Galleta de Cheesecake con Frutos Rojos',
      description: 'Galleta de cheesecake cubierta con frutos rojos frescos. Cremosa y frutal.',
      price: 0,
      imageUrl: 'assets/images/products/galleta-cheesecake-frutosrojos.jpg',
      category: 'galleta',
      isAvailable: true,
    },
    {
      id: 'g5',
      name: 'Especial Oreo de Selena Gomez',
      description: 'Edición especial inspirada en Selena Gomez. Galleta de Oreo con un twist único.',
      price: 0,
      imageUrl: 'assets/images/products/galleta-selena-oreo.jpg',
      category: 'galleta',
      isAvailable: true,
    },
    {
      id: 'g6',
      name: 'Galleta Ferrero',
      description: 'Galleta con chocolate y avellana estilo Ferrero Rocher. Crujiente y decadente.',
      price: 0,
      imageUrl: 'assets/images/products/galleta-ferrero.jpg',
      category: 'galleta',
      isAvailable: true,
    },
    {
      id: 'g7',
      name: 'Galleta Matcha/Fresa',
      description: 'Fusión de matcha japonés con fresa. Un balance perfecto entre lo dulce y lo herbal.',
      price: 0,
      imageUrl: 'assets/images/products/galleta-matcha-fresa.jpg',
      category: 'galleta',
      isAvailable: true,
    },
    {
      id: 'g8',
      name: 'Galleta Lotus',
      description: 'Galleta con crema de Lotus Biscoff y trozos de galleta caramelizada.',
      price: 0,
      imageUrl: 'assets/images/products/galleta-lotus.jpg',
      category: 'galleta',
      isAvailable: true,
    },
    {
      id: 'g9',
      name: "Galleta Reese's",
      description: "Galleta con mantequilla de maní y chocolate estilo Reese's. Dulce y salada.",
      price: 0,
      imageUrl: 'assets/images/products/galleta-reeses.jpg',
      category: 'galleta',
      isAvailable: true,
    },
    {
      id: 'g10',
      name: 'Galleta Oreo Rellena',
      description: 'Galleta de chocolate rellena de crema de Oreo. Doble la galleta, doble el sabor.',
      price: 0,
      imageUrl: 'assets/images/products/galleta-oreo-rellena.jpg',
      category: 'galleta',
      isAvailable: true,
    },

    // ── Roles de Canela ──
    {
      id: 'r1',
      name: 'Rol Tradicional',
      description: 'Nuestro clásico rol de canela con glaseado de vainilla. Suave, esponjoso y recién horneado.',
      price: 0,
      imageUrl: 'assets/images/products/rol-tradicional.jpg',
      category: 'rol',
      isAvailable: true,
      isFeatured: true,
    },
    {
      id: 'r2',
      name: 'Rol de Fresas',
      description: 'Rol de canela cubierto con fresas frescas y un toque de crema. Dulce y frutal.',
      price: 0,
      imageUrl: 'assets/images/products/rol-fresas.jpg',
      category: 'rol',
      isAvailable: true,
      isFeatured: true,
    },
    {
      id: 'r3',
      name: 'Rol Fresas con Nutella',
      description: 'La combinación perfecta: fresas frescas con Nutella derretida sobre nuestro rol artesanal.',
      price: 0,
      imageUrl: 'assets/images/products/rol-fresas-nutella.jpg',
      category: 'rol',
      isAvailable: true,
      isFeatured: true,
    },
    {
      id: 'r4',
      name: 'Rol Guayaba con Dulce de Leche',
      description: 'Rol relleno de guayaba natural con un generoso toque de dulce de leche casero.',
      price: 0,
      imageUrl: 'assets/images/products/rol-guayaba.jpg',
      category: 'rol',
      isAvailable: true,
    },
    {
      id: 'r5',
      name: 'Rol de Nutella',
      description: 'Rol de canela bañado en Nutella cremosa. Para los verdaderos amantes del chocolate avellana.',
      price: 0,
      imageUrl: 'assets/images/products/rol-nutella.jpg',
      category: 'rol',
      isAvailable: true,
    },
    {
      id: 'r6',
      name: 'Rol Ferrero',
      description: 'Inspirado en el famoso bombón. Rol con chocolate, avellana y un acabado crujiente.',
      price: 0,
      imageUrl: 'assets/images/products/rol-ferrero.jpg',
      category: 'rol',
      isAvailable: true,
    },
    {
      id: 'r7',
      name: 'Rol Dulce de Leche',
      description: 'Rol bañado en dulce de leche artesanal. Un clásico irresistible.',
      price: 0,
      imageUrl: 'assets/images/products/rol-dulcedeleche.jpg',
      category: 'rol',
      isAvailable: true,
    },
    {
      id: 'r8',
      name: 'Rol Lotus',
      description: 'Rol cubierto con crema de galleta Lotus Biscoff. Sabor único y adictivo.',
      price: 0,
      imageUrl: 'assets/images/products/rol-lotus.jpg',
      category: 'rol',
      isAvailable: true,
    },
    {
      id: 'r9',
      name: 'Rol de Oreo',
      description: 'Rol con trozos de galleta Oreo y crema de cookies & cream.',
      price: 0,
      imageUrl: 'assets/images/products/rol-oreo.jpg',
      category: 'rol',
      isAvailable: true,
    },
    {
      id: 'r10',
      name: 'Rol de Pistacho',
      description: 'Rol premium con crema de pistacho natural. Elegante y sofisticado.',
      price: 0,
      imageUrl: 'assets/images/products/rol-pistacho.jpg',
      category: 'rol',
      isAvailable: true,
    },
    {
      id: 'r11',
      name: 'Rol Tres Leches',
      description: 'Rol bañado en la clásica mezcla de tres leches. Húmedo y lleno de sabor.',
      price: 0,
      imageUrl: 'assets/images/products/rol-tresleches.jpg',
      category: 'rol',
      isAvailable: true,
    },
    {
      id: 'r12',
      name: 'Rol de Almendras',
      description: 'Rol con crema de almendras y toppings crocantes. Delicado y aromático.',
      price: 0,
      imageUrl: 'assets/images/products/rol-almendras.jpg',
      category: 'rol',
      isAvailable: true,
    },
    {
      id: 'r13',
      name: 'Rol Brownie',
      description: 'Rol con cobertura de brownie fudgy. Doble dosis de chocolate para los golosos.',
      price: 0,
      imageUrl: 'assets/images/products/rol-brownie.jpg',
      category: 'rol',
      isAvailable: true,
    },
    {
      id: 'r14',
      name: 'Rol Frutos Rojos',
      description: 'Rol coronado con mezcla de frutos rojos frescos y un glaseado suave.',
      price: 0,
      imageUrl: 'assets/images/products/rol-frutosrojos.jpg',
      category: 'rol',
      isAvailable: true,
    },
    {
      id: 'r15',
      name: 'Rol de Mango',
      description: 'Edición de temporada. Rol con crema de mango fresco. Tropical y refrescante.',
      price: 0,
      imageUrl: 'assets/images/products/rol-mango.jpg',
      category: 'rol',
      isAvailable: true,
      tags: ['temporada'],
    },

    // ── Cheesecake ──
    {
      id: 'c1',
      name: 'Cheesecake de Frutos Rojos',
      description: 'Cheesecake cremoso con coulis de frutos rojos sobre base de galleta. Un clásico elegante.',
      price: 0,
      imageUrl: 'assets/images/products/cheesecake-frutosrojos.jpg',
      category: 'cheesecake',
      isAvailable: true,
      isFeatured: true,
    },
    {
      id: 'c2',
      name: 'Cheesecake Lotus',
      description: 'Cheesecake con crema de Lotus Biscoff y base de galleta caramelizada. Adictivo.',
      price: 0,
      imageUrl: 'assets/images/products/cheesecake-lotus.jpg',
      category: 'cheesecake',
      isAvailable: true,
    },
    {
      id: 'c3',
      name: 'Cheesecake Tortuga',
      description: 'Cheesecake con caramelo, chocolate y nuez pecana. Indulgente y premium.',
      price: 0,
      imageUrl: 'assets/images/products/cheesecake-tortuga.jpg',
      category: 'cheesecake',
      isAvailable: true,
    },

    // ── Bollitos ──
    {
      id: 'b1',
      name: 'Bollito de Elote 100%',
      description: 'Bollito artesanal hecho con elote fresco al 100%. Suave, dulce y con todo el sabor del maíz.',
      price: 0,
      imageUrl: 'assets/images/products/bollito-elote.jpg',
      category: 'bollito',
      isAvailable: true,
      isFeatured: true,
    },
    {
      id: 'b2',
      name: 'Bollito de Zanahoria',
      description: 'Bollito especiado de zanahoria con un toque de canela. Esponjoso y reconfortante.',
      price: 0,
      imageUrl: 'assets/images/products/bollito-zanahoria.jpg',
      category: 'bollito',
      isAvailable: true,
    },
  ];

  get filteredProducts(): Product[] {
    const cat = this.activeCategory();
    return cat === 'all'
      ? this.mockProducts
      : this.mockProducts.filter(p => p.category === cat);
  }

  ngOnInit(): void {
    this.products.set(this.mockProducts);
  }

  setCategory(key: string): void {
    this.activeCategory.set(key);
  }

  orderProduct(product: Product): void {
    const message = `Hola, me gustaría ordenar: ${product.name} 🫢💖☀️`;
    const url = `https://wa.me/526421177322?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
