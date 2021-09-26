import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  valor1: number = 0;
  valor2: number = 0;
  resp: number = 0;

  constructor() {}

  ngOnInit(): void {}

  operar() {
    this.resp = this.valor1 + this.valor2;
  }
}
