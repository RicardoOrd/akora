import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatItem {
  value: string;
  label: string;
}

interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  stats: StatItem[] = [
    { value: '+500',  label: 'Clientes felices' },
    { value: '+80',   label: 'Recetas únicas' },
    { value: '3',     label: 'Años endulzando' },
    { value: '100%',  label: 'Hecho a mano' },
  ];

  values: ValueItem[] = [
    {
      icon: '🌾',
      title: 'Ingredientes Naturales',
      description: 'Utilizamos únicamente ingredientes frescos y de origen local. Sin saborizantes artificiales.',
    },
    {
      icon: '🎂',
      title: 'Elaboración Artesanal',
      description: 'Cada pieza es elaborada y decorada a mano. La perfección está en los detalles.',
    },
    {
      icon: '💙',
      title: 'Hecho con Amor',
      description: 'Más que repostería, creamos recuerdos. Cada pedido lleva nuestra dedicación al 100%.',
    },
  ];
}
