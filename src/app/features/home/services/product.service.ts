import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Product } from '../../../shared/models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/products`;

  /**
   * Get all featured products.
   * Phase 1: returns mock data.
   * Phase 2: uncomment the HTTP call and remove the mock.
   */
  getFeatured(): Observable<Product[]> {
    // Phase 2: return this.http.get<Product[]>(`${this.baseUrl}?featured=true`);
    return of([]); // replaced by component mock for now
  }

  getAll(category?: string): Observable<Product[]> {
    const url = category
      ? `${this.baseUrl}?category=${category}`
      : this.baseUrl;
    // Phase 2: return this.http.get<Product[]>(url);
    return of([]);
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }
}
