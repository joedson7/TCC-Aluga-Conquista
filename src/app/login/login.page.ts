import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public credentialsForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.credentialsForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]],
    });
  }

  async register() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    await this.authService.signup(this.credentialsForm.value).then(
      (_) => {
        this.router.navigateByUrl('/folder/Inbox', { replaceUrl: true });
        loading.dismiss();
      },
      async (err) => {
        await loading.dismiss();

        const alert = await this.alertCtrl.create({
          header: 'Cadastro Falhou miseralvemente',
          message: 'Por favor tente novamente, error: ' + err,
          buttons: ['OK'],
        });

        await alert.present();
      }
    );
  }

  async login() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    await this.authService.login(this.credentialsForm.value).then(
      async (user: any) => {
        console.log(user);
        await Storage.set({ key: 'user', value: JSON.stringify(user) });
        this.router.navigateByUrl('/folder/Inbox', { replaceUrl: true });
        loading.dismiss();
      },
      async (err) => {
        await loading.dismiss();

        const alert = await this.alertCtrl.create({
          header: 'Login Falhou miseralvemente',
          message: 'Por favor tente novamente, error: ' + err.message,
          buttons: ['OK'],
        });

        await alert.present();
      }
    );
  }
}
