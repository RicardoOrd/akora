# Akora Repostería 🎂

Landing Page + E-commerce escalable para Akora, repostería artesanal en Navojoa, Sonora.

## Stack

| Capa       | Tecnología                          |
|------------|-------------------------------------|
| Frontend   | Angular 17+ (Standalone Components) |
| Estilos    | SCSS + CSS Custom Properties        |
| Backend*   | NestJS + TypeORM                    |
| Base de datos* | PostgreSQL                      |
| Caché*     | Redis                               |

> *Fases 2 y 3

---

## Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar servidor de desarrollo
npm start
# → http://localhost:4200
```

---

## Estructura del proyecto

```
src/
├── app/
│   ├── core/          # Guards, interceptors, servicios singleton
│   ├── shared/        # Componentes y modelos reutilizables
│   └── features/
│       ├── home/      # Fase 1 – Landing Page
│       ├── auth/      # Fase 2 – Login / Registro
│       ├── cart/      # Fase 3 – Carrito
│       └── checkout/  # Fase 3 – Pasarela de pago
├── assets/
│   ├── fonts/         # Neon80s.woff2, Salted.woff2
│   ├── images/        # hero-bg.jpg, logo.png, productos/
│   └── icons/         # instagram.svg, facebook.svg, whatsapp.svg
└── environments/
    ├── environment.ts
    └── environment.prod.ts
```

---

## Assets necesarios

Coloca los siguientes archivos antes de servir:

| Archivo                         | Descripción              |
|---------------------------------|--------------------------|
| `src/assets/fonts/Neon80s.woff2` | Tipografía display       |
| `src/assets/fonts/Salted.woff2`  | Tipografía decorativa    |
| `src/assets/images/logo.png`     | Logo (fondo transparente)|
| `src/assets/images/hero-bg.jpg`  | Imagen principal del hero|
| `src/assets/images/about-us.jpg` | Foto del equipo/cocina   |
| `src/assets/images/products/`    | Fotos de cada producto   |
| `src/assets/icons/instagram.svg` | Ícono Instagram          |
| `src/assets/icons/facebook.svg`  | Ícono Facebook           |
| `src/assets/icons/tiktok.svg`    | Ícono TikTok             |
| `src/assets/icons/whatsapp.svg`  | Ícono WhatsApp           |

---

## Variables de entorno

```ts
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api/v1',
};
```

---

## Roadmap

- [x] **Fase 1** — Landing Page
- [ ] **Fase 2** — Auth (JWT), perfil de usuario
- [ ] **Fase 3** — Carrito, checkout, pasarela de pago (Stripe / Conekta)
