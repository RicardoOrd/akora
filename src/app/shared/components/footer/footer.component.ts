import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { icon: 'instagram', url: 'https://instagram.com/akora.reposteria', label: 'Instagram' },
    { icon: 'facebook', url: 'https://facebook.com/akorareposteria', label: 'Facebook' },
    { icon: 'tiktok', url: 'https://tiktok.com/@akora.reposteria', label: 'TikTok' },
  ];
}
