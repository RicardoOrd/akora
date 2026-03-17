import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isScrolled = signal(false);
  isMenuOpen = signal(false);

  navLinks = [
    { label: 'Inicio', fragment: 'hero' },
    { label: 'Productos', fragment: 'products' },
    { label: 'Nosotros', fragment: 'about' },
    { label: 'Contacto', fragment: 'contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

  scrollTo(fragment: string): void {
    this.isMenuOpen.set(false);
    const el = document.getElementById(fragment);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
