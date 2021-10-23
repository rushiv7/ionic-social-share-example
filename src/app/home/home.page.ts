import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SocialShareComponent } from '../components/social-share/social-share.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalCtrl: ModalController) { }

  async showShareOptions() {
    const modal = await this.modalCtrl.create({
      component: SocialShareComponent,
      cssClass: 'backTransparent',
      backdropDismiss: true
    });
    return modal.present();
  }

}
