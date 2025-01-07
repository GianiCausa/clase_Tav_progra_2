import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage implements OnInit {

  correo: string = "";
  nickname: string = "";
  edad: number = 0; // podemos poner edad!: number; sin darle un valor inicial

  constructor() { }

  ngOnInit() {
  }

}
