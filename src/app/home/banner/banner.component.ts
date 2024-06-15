import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  @Input() image: string = '';

  // passando func do componente filho para o componente pai
  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();
}
