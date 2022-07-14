import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private  authService:  AuthService,
    private  router:  Router,
    private toastController: ToastController
    ) { }

  ngOnInit() {
  }

  register(form) {
    this.authService.createUser(form.value).then((res) => {
      this.router.navigateByUrl('home');
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      header: 'Sucesso!',
      message: 'Cadastrado com sucesso',
      color: 'success',
      icon: 'checkmark-done-circle-outline',
      position: 'middle',
      duration: 2000
    });
    toast.present();
  }

}
