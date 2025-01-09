import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: false,
})
export class PrincipalPage implements OnInit {

  nickname: string = "";
  edad : number = 0;

  constructor(private router: Router, private activedroute: ActivatedRoute) {//siempre deben ir estas si traemos datos de una pagina a otra con navigationextras
    //no necesariamente deben ir los datos como los pusimos en la configuracion
    this.activedroute.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.edad = this.router.getCurrentNavigation()?.extras?.state?.['ed'];
        this.nickname = this.router.getCurrentNavigation()?.extras?.state?.['nick'];
      }
    })

   } 

  ngOnInit() {
  }

}
