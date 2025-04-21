import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

export interface ScrollItem {
  thumbnail: string;
  description?: string;
  url?: string;
}

@Component({
  selector: 'ng-horizontal-scroller',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horizontal-scroller.component.html',
  styleUrl: './horizontal-scroller.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HorizontalScrollerComponent {
  @Input() speed: number = 20;

  scrollSpeed: string = `${this.speed}s`;
  @Input() items: ScrollItem[] = [
    {
      thumbnail: 'https://cdn.simpleicons.org/react/61DAFB',
      description: 'React',
      url: 'https://cdn.simpleicons.org/react/61DAFB',
    },

    {
      thumbnail: 'https://cdn.simpleicons.org/angular/DD0031',
      description: 'Angular',
      url: 'https://cdn.simpleicons.org/angular/DD0031',
    },
    {
      thumbnail: 'https://cdn.simpleicons.org/svelte/FF3E00',
      description: 'Svelte',
      url: 'https://cdn.simpleicons.org/svelte/FF3E00',
    },
    {
      thumbnail: 'https://cdn.simpleicons.org/nextdotjs/000000',
      description: 'Next',
    },
    {
      thumbnail: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
      description: 'Tailwind',
    },
    {
      thumbnail: 'https://cdn.simpleicons.org/vite/646CFF',
      description: 'Vite',
    },
    {
      thumbnail: 'https://cdn.simpleicons.org/javascript/F0DB4F',
      description: 'Javascript',
    },
    {
      thumbnail: 'https://cdn.simpleicons.org/python/4B8BBE',
      description: 'Python',
    },
  ];
}
