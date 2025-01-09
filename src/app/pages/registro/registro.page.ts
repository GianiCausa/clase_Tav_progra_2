import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

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
  //ngFor para recorrer datos
  listaNombres: any = [{
    nombre: "Jose"
  },
  {
    nombre: "Maria"
  },
  {
    nombre: "Juan"
  }];

  constructor(private alertController: AlertController, private toastController: ToastController, private router: Router) { } //al router lo agregamos manual poniendo private router: Router
  //alerta intrusiva alert
  async presentAlert(titulo:string, mensaje:string) { //agrega parametros para que no haya que hacer cada una de las alertas y solo tengamos una para todas
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }
  //alerta no intrusiva toast
  async presentToast(position: 'top' | 'middle' | 'bottom', mensaje:string) { //podemos borrar la position de aca y poner en la position dentro del mensaje con un bottom para que quede abajo
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000, //esto equivale a 3 segundos, si pongo 5500 serian 5 segundos y medio
      position: position,
    });

    await toast.present();
  }

  //funcion para validar los campos de registro
  validarCampos(){
    let correcto = true;

    //validaciones para el nickname
    //validacion de longitud entre 3 y 25 del nickname
    if(this.nickname.length < 3 || this.nickname.length > 25){
      //mostrar un mensaje en html (investigar)

      //mostrar mensaje mediante una alerta
      this.presentAlert("Error","El nickname debe tener entre 3 y 25 caracteres");
      //cambiar bandera
      correcto = false;
    }

    //validacion de edad
    //validacion de la edad para mayores de edad
    if(this.edad < 18){
      //mostrar un mensaje en html (investigar)

      //mostrar mensaje mediante una alerta
      this.presentToast('bottom', 'Debe ser mayor de edad')
      //cambiar bandera
      correcto = false;
    }

    //al final de todas las validaciones se pregunta por el estado de la bandera
    if(correcto){
      //el formulario es correcto y puedo realizar acciones
      this.presentAlert("Registro","Registro Completado")
      //redireccionar en caso de que se necesite
      //creando un diccionario de datos para enviar a la otra pagina
      //luego de hacer esto debemos ir a la pagina donde mandamos todos estos datos y configurarla ahi
      let navigationextras: NavigationExtras = {
        state: {
          nick: this.nickname,
          ed: this.edad
        }
      }
      this.router.navigate(['/principal'], navigationextras); //poner todo esto igual a como sale aqui, el navigationextras es opcional solo lo pondremos aqui si queremos mandar datos de una pagina a otra
    }else{
      // solo incluirlo en caso de que se necesite hacer algo diferente cuando el formulario no esta correcto 
    }
  }

  ngOnInit() {
  }

}
