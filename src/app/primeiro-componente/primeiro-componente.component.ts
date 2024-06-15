import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  standalone: true,
  imports: [],
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.css',
})
export class PrimeiroComponenteComponent {
  actionBtn1() {
    this.lastName = 'Silva';
    alert(this.lastName);
  }
  actionBtn2() {
    alert('Botão 2 clicado');
  }

  lastName: string = '';
}
