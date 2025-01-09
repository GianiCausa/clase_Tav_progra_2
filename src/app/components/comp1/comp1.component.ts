import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
  standalone: false,
})
export class Comp1Component  implements OnInit {
  @Input() titulo: string = ""; //esto para interpolar que el titulo que pusimos en el comp1.component.html se vea en la pagina
  @Input() nick: string = "";
  constructor() { }

  ngOnInit() {}

}
