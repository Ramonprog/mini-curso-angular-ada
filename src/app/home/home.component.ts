import { Component, OnInit } from '@angular/core';
import { ListaService } from './lista.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  listOfItems: any = [];
  result!: string;

  constructor(private listaService: ListaService) {}

  ngOnInit() {
    this.getListFromService();
  }

  getListFromService() {
    this.listaService.getList().subscribe((data) => {
      console.log(data);
      this.listOfItems = data;
    });
  }

  receberResult(value: string) {
    this.result = value;
    alert(this.result);
  }
}
