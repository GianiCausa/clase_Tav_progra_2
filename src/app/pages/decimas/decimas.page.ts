import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-decimas',
  templateUrl: './decimas.page.html',
  styleUrls: ['./decimas.page.scss'],
  standalone: false,
})
export class DecimasPage implements OnInit {

  nombre: string = "";
  clave: string = "";

  constructor(private toastController: ToastController, private router: Router, private alertController: AlertController) { }

  async presentToast(position: 'top' | 'middle' | 'bottom', mensaje:string) { //podemos borrar la position de aca y poner en la position dentro del mensaje con un bottom para que quede abajo
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000, //esto equivale a 3 segundos, si pongo 5500 serian 5 segundos y medio
      position: position,
    });

    await toast.present();
  }

  async presentAlert(titulo:string, mensaje:string) { //agrega parametros para que no haya que hacer cada una de las alertas y solo tengamos una para todas
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }

  entrar(){
    let correcto = true

    if(this.nombre != "Jose" && this.clave !="123"){
      this.presentToast('bottom', 'Datos incorrectos')
      //cambiar bandera
      correcto = false;
    }
    if(this.nombre === 'Jose' && this.clave === '123'){
      this.presentAlert("Bienvenido","Jose");
    }
    if(correcto){
      this.router.navigate(['/principal']);
    }
  }

  limpiarCampos(){ //con esto podemos limpiar los datos del formulario
    this.nombre = "";
    this.clave = "";
  }

  ngOnInit() {
  }

}
